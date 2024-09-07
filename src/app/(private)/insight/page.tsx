'use client';
import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
} from 'chart.js';
import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import './style.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const data = {
  datasets: [
    {
      label: 'Likes by Category',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const likeData = {
  labels: ['Blog 1', 'Blog 2', 'Blog 3'],
  datasets: [
    {
      label: 'Likes',
      data: [65, 59, 80],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 0.5,
      barThickness: 50
    }
  ]
};

const countData = {
  labels: ['Blog 1', 'Blog 2', 'Blog 3'],
  datasets: [
    {
      label: 'Count',
      data: [65, 59, 80],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      tension: 0.1 // Add this line for a smooth line chart
    }
  ]
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        autoSkip: false
      },
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true
    }
  }
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true
    }
  }
};

function Analytic(): React.ReactElement {
  return (
    <Box className="insight-root-container">
      <Typography sx={{ gridRow: 1, gridColumn: 'span 2', fontSize: '1.5rem', color: '#008ae6' }}>
        Insight
      </Typography>
      <Box sx={{ gridRow: 2, gridColumn: '1/2' }}>
        <Typography className="section-heading">Date</Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography>Jan-2024 - </Typography>
          <Typography>Dec-2024</Typography>
        </Box>
      </Box>
      <Box sx={{ gridRow: 3 }}>
        <Typography className="section-heading">Liked By Category</Typography>
        <Box className="doughnut-chart-container" sx={{ display: 'flex', flexGrow: '1' }}>
          <Doughnut data={data} options={doughnutOptions} />
        </Box>
      </Box>
      <Box className="scrollable-section">
        <Typography className="section-heading">Post Overview</Typography>
        <Box>Post Overview Table</Box>
      </Box>
      <Box className="charts-container">
        <Box sx={{ display: 'flex', flexGrow: '1' }}>
          <Typography className="section-heading">Most Liked Blog</Typography>
          <Box className="doughnut-chart-container" sx={{ display: 'flex', flexGrow: '1' }}>
            <Bar data={likeData} options={barOptions} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: '1' }}>
          <Typography className="section-heading">Visitors Count</Typography>
          <Box className="doughnut-chart-container" sx={{ display: 'flex', flexGrow: '1' }}>
            <Line data={countData} options={lineOptions} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Analytic;
