'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';
import { blogData } from '@/mock/blogData';
import './style.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const [liked, setLiked] = React.useState(false);

  const data = blogData.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!data) {
    return <Typography variant="h4">Blog not found</Typography>;
  }

  return (
    <Box className="blog-content-root-container">
      <Typography className="blog-content-title" variant="h6">
        {data.title}
        <Box className="blog-content-like" onClick={() => setLiked(!liked)}>
          <Typography>25k</Typography>
          {liked ? <ThumbUpOutlinedIcon fontSize="small" /> : <ThumbUpAltIcon fontSize="small" />}
        </Box>
      </Typography>
      <Typography className="blog-content-description" variant="h6">
        {data.description}
      </Typography>
      <Box className="blog-content-comment">
        <Box className="comments">
          <Box className="sender-comment">
            <Box className="sender-comment-info" sx={{ textAlign: 'center', lineHeight: 0 }}>
              <AccountCircleIcon color="secondary" fontSize="small" />
              <Typography className="sender-text">Bob</Typography>
            </Box>
            <Typography className="sender-text">Sender Comments Here</Typography>
          </Box>
          <Box className="receiver-comment">
            <Box className="sender-comment-info">
              <AccountCircleIcon color="secondary" fontSize="small" />
              <Typography className="sender-text">Alice</Typography>
            </Box>
            <Typography className="sender-text">Recevier Comments Here</Typography>
          </Box>
        </Box>
        <TextField
          className="comment-input"
          placeholder="Add Your Comment Here"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <QuickreplyIcon className="comment-icon" color="primary" />
              </InputAdornment>
            )
          }}
        />
      </Box>
    </Box>
  );
};

export default BlogDetail;
