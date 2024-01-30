const express = require('express');
const fs = require('fs');
const readline = require('readline');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 3000; // Set the port you want to use

app.get('/api/downsample', (req, res) => {
    const inputDatasetFilename = 'dataset.csv';
    const outputDownsampledFilename = 'output_downsampled.csv';
    const downsampleInterval = 7;

    processDataset(inputDatasetFilename, outputDownsampledFilename, downsampleInterval, () => {
        // Read the downsampled data from the generated CSV file
        const downsampledData = fs.readFileSync(outputDownsampledFilename, 'utf8');

        // Send the downsampled data as JSON
        res.json({ downsampledData });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// The rest of your downsampling code remains the same
// ...


// Function to downsample data using mean aggregation
function downsampleData(data, interval) {
    const downsampledData = [];
    let sum = 0;
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        sum += data[i].percentage;
        count++;

        if (count === interval || i === data.length - 1) {
            const average = sum / count;
            downsampledData.push({ timestamp: data[i].timestamp, percentage: average });
            sum = 0;
            count = 0;
        }
    }

    return downsampledData;
}

// Function to read and process the dataset
function processDataset(inputFilename, outputFilename, interval) {
    const data = [];

    const rl = readline.createInterface({
        input: fs.createReadStream(inputFilename),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        const [timestamp, percentage] = line.split(',').map(parseFloat);
        data.push({ timestamp, percentage });
    });

    rl.on('close', () => {
        // Downsample the data
        const downsampledData = downsampleData(data, interval);

        // Write downsampled data to a new CSV file
        const csvWriter = createCsvWriter({
            path: outputFilename,
            header: [
                { id: 'timestamp', title: 'Timestamp' },
                { id: 'percentage', title: 'Percentage' }
            ]
        });

        csvWriter.writeRecords(downsampledData)
            .then(() => console.log(`Downsampling complete. Output written to ${outputFilename}`));
    });
}

// Replace 'YOUR_DATASET_FILENAME', 'YOUR_OUTPUT_FILENAME', and 'YOUR_DOWNSAMPLE_INTERVAL' with actual values
const inputDatasetFilename = 'dataset.csv';
const outputDownsampledFilename = 'output_downsampled.csv';
const downsampleInterval = 7; // Adjust as needed

processDataset(inputDatasetFilename, outputDownsampledFilename, downsampleInterval);
