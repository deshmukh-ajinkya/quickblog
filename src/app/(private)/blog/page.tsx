import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ReactImg from '../../../../public/react.png';
import Like from '../../../../public/thumbs-up.svg';
import './style.css'; // Import the new CSS file

function Blog(): React.ReactElement {
  return (
    <Box className="blog-root-container">
      <Box className="blog-grid-container">
        <Box className="blog-icon-container">
          <AddBoxIcon color="primary" />
        </Box>
        <Box className="blog-select-container">
          <Box>
            <Select
              name="select-category"
              size="small"
              defaultValue={1}
              className="blog-select"
              fullWidth>
              <MenuItem value={1}>Select Category</MenuItem>
              <MenuItem value={2}>Technology</MenuItem>
            </Select>
          </Box>
          <Box className="blog-actions">
            <AddBoxIcon color="primary" />
            <NoteAltIcon color="primary" />
            <DeleteIcon color="primary" />
          </Box>
        </Box>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        multiline
        label="Blog Content"
        className="blog-textfield"
      />
      <Box className="blog-content-container">
        <Box className="blog-content-box">
          <Image src={ReactImg} alt="Banner" className="blog-image" />
          <Typography>Title</Typography>
          <Typography>Description</Typography>
          <Box className="blog-info">
            <Box className="blog-user-info">
              <AccountCircleIcon color="secondary" className="dashboard-user-info-icon" />
              <Typography>User 1</Typography>
            </Box>
            <Box className="blog-like-info">
              <Image src={Like} alt="like" width={20} className="dashboard-user-like-icon" />
              <Typography>2.5k</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="blog-content-box">
          <Image src={ReactImg} alt="Banner" className="blog-image" />
          <Typography>Title</Typography>
          <Typography>Description</Typography>
          <Box className="blog-info">
            <Box className="blog-user-info">
              <AccountCircleIcon color="secondary" className="dashboard-user-info-icon" />
              <Typography>User 1</Typography>
            </Box>
            <Box className="blog-like-info">
              <Image src={Like} alt="like" width={20} className="dashboard-user-like-icon" />
              <Typography>2.5k</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="blog-content-box">
          <Image src={ReactImg} alt="Banner" className="blog-image" />
          <Typography>Title</Typography>
          <Typography>Description</Typography>
          <Box className="blog-info">
            <Box className="blog-user-info">
              <AccountCircleIcon color="secondary" className="dashboard-user-info-icon" />
              <Typography>User 1</Typography>
            </Box>
            <Box className="blog-like-info">
              <Image src={Like} alt="like" width={20} className="dashboard-user-like-icon" />
              <Typography>2.5k</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="blog-content-box">
          <Image src={ReactImg} alt="Banner" className="blog-image" />
          <Typography>Title</Typography>
          <Typography>Description</Typography>
          <Box className="blog-info">
            <Box className="blog-user-info">
              <AccountCircleIcon color="secondary" className="dashboard-user-info-icon" />
              <Typography>User 1</Typography>
            </Box>
            <Box className="blog-like-info">
              <Image src={Like} alt="like" width={20} className="dashboard-user-like-icon" />
              <Typography>2.5k</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Blog;
