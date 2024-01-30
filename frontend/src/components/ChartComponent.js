import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChartComponent = () => {
  const [downsampledData, setDownsampledData] = useState([]);

  useEffect(() => {
    // Fetch downsampled data from the API endpoint
    axios.get('http://localhost:3001/api/downsample')
      .then(response => {
        console.log(response);
        setDownsampledData(response.data.downsampledData);
      })
      .catch(error => {
        console.error('Error fetching downsampled data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Downsampled Data</h1>
      <ul>
        {downsampledData.map((item, index) => (
          <li key={index}>{item.timestamp}: {item.percentage}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChartComponent;
