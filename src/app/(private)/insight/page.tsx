import { Box, Typography } from '@mui/material';
import React from 'react';
import './style.css';

function Analytic(): React.ReactElement {
  return (
    <Box className="insight-root-container">
      <Typography sx={{ gridRow: 1, gridColumn: 'span 2', fontSize: '1.5rem', color: '#008ae6' }}>
        Insight
      </Typography>
      <Box sx={{ gridRow: 2, gridColumn: '1/2' }}>
        <Typography className="section-heading">Date</Typography>
        <Typography>Jan-2024</Typography>
        <Typography>Dec-2024</Typography>
      </Box>
      <Box sx={{ gridRow: 3 }}>
        <Typography className="section-heading">Liked By Category</Typography>
        <Box>Like By Category Pie Chart</Box>
      </Box>
      <Box sx={{ gridRow: 4, overflow: 'scroll', scrollbarWidth: 'none' }}>
        <Typography className="section-heading">Post Overview</Typography>
        <Box>Post Overview Table</Box>
      </Box>
      <Box className="charts-container">
        <Box>
          <Typography className="section-heading">Most Liked Blog</Typography>
          <Box>Most Liked Blog Graph</Box>
        </Box>
        <Box>
          <Typography className="section-heading">Visitors Count</Typography>
          <Box>Visitors Count Graph</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Analytic;
