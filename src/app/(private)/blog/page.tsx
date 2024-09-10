import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { blogData } from '@/mock/blogData';
import ReactImg from '../../../../public/react.png';
import Like from '../../../../public/thumbs-up.svg';
import './style.css';

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
        {blogData.map((blog, id) => (
          <Box key={id} className="blog-content-box">
            <Image src={ReactImg} alt="Banner" className="blog-image" />
            <Typography color="primary" className="blog-user-info-text">
              {blog.title}
            </Typography>
            <Typography color="primary" className="blog-user-info-description">
              {blog.description}
            </Typography>
            <Box className="blog-info">
              <Box className="blog-user-info">
                <AccountCircleIcon color="secondary" className="blog-user-info-icon" />
                <Typography color="primary" className="blog-user-info-text">
                  {blog.user.name}
                </Typography>
              </Box>
              <Box className="blog-like-info">
                <Image src={Like} alt="like" width={20} className="blog-user-like-icon" />
                <Typography color="primary" className="blog-user-info-text">
                  {blog.user.likes}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Blog;
