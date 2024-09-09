'use client';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
import '../insight/style.css';

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
      data: [65, 59, 180],
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
      data: [65, 59, 290],
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

function Insight(): React.ReactElement {
  function createData(title: string, like: string): { title: string; like: string } {
    return { title, like };
  }

  const rows = [
    createData('React.js', '2.5k'),
    createData('Node.Js', '5k'),
    createData('Next.js', '5k'),
    createData('Express.js', '5k'),
    createData('Nest.js', '5k')
  ];
  return (
    <Box className="insight-root-container">
      {/* <Typography>Insight</Typography> */}
      <Box className="date-container">
        <Typography color="primary" variant="h6">
          Date
        </Typography>
        <Typography>Select Date Range</Typography>
      </Box>
      <Box className="like-chart-container">
        <Typography color="primary" variant="h6">
          Liked By Category
        </Typography>
        <Box className="liked-chart">
          <Doughnut data={data} options={doughnutOptions} />
        </Box>
      </Box>
      <Box className="post-overview-container">
        <Typography color="primary" variant="h6">
          Post Overview
        </Typography>
        <TableContainer className="table-container">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
                <TableCell align="right">Like</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.title}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.like}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box className="graph-container">
        <Typography color="primary" variant="h6">
          Most Liked Blog
        </Typography>
        <Box className="most-liked-graph">
          <Bar data={likeData} options={barOptions} />
        </Box>
        <Typography color="primary" variant="h6" className="count-title">
          Visitors Count
        </Typography>
        <Box className="count-graph">
          <Line data={countData} options={lineOptions} />
        </Box>
      </Box>
    </Box>
  );
}
export default Insight;
