const express = require('express');
const fs = require('fs');
const readline = require('readline');
const cors = require('cors');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 3001; // Set the port you want to use
app.use(cors());

app.get('/api/downsample', (req, res) => {
    const datasetFilename = 'dataset.csv';
    const downsampleInterval = 7;

    processDataset(datasetFilename, downsampleInterval, (downsampledData) => {
        // Send the downsampled data as JSON in the response
        res.json({ downsampledData });
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

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

function processDataset(filename, interval, callback) {
    const data = [];

    const rl = readline.createInterface({
        input: fs.createReadStream(filename),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        const [timestamp, percentage] = line.split(',').map(parseFloat);
        data.push({ timestamp, percentage });
    });

    rl.on('close', () => {
        // Downsample the data
        const downsampledData = downsampleData(data, interval);

        // Invoke the callback with downsampledData
        callback(downsampledData);
    });
}
