import React from 'react';
import { Chart } from 'react-google-charts';
import styles from '../styles/VisualizationCharts.module.css';
import GoogleChartsWrapper from '@/hoc/GoogleChartsWrapper';


const VisualizationCharts = () => {
  const data = [
    ['Repair Type', 'Number of Repairs'],
    ['Electronics', 23],
    ['Appliances', 12],
    ['Furniture', 8],
    ['Other', 5],
  ];

  const options = {
    title: 'Repair Distribution by Type',
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className={styles["visualization-charts"]}>
      <h2>Repair Distribution</h2>
      <GoogleChartsWrapper 
  
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default VisualizationCharts;
