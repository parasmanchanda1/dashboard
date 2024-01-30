import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const ChartComponent = () => {
  const [downsampledData, setDownsampledData] = useState([]);

  useEffect(() => {
    // Fetch downsampled data from the API endpoint
    axios.get('http://localhost:3001/api/downsample')
      .then(response => {
        const data = response.data.downsampledData;
        setDownsampledData(data);
      })
      .catch(error => {
        console.error('Error fetching downsampled data:', error);
      });
  }, []);

  

  const timestamps = downsampledData.map(item => item.timestamp);
  const percentages = downsampledData.map(item => item.percentage);

  const chartData = percentages.map((value, index) => ({
    x: index,
    data1: value,
    data2: timestamps[index],
  }));

  return (
    <div>
      <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="data1" stroke="#8884d8" />
      <Line type="monotone" dataKey="data2" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default ChartComponent;
