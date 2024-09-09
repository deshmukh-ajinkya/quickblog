'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { blogData } from '@/mock/blogData';
import Like from '../../../../public/thumbs-up.svg';
import './style.css';

function Dashboard(): React.ReactNode {
  const [category, setCategory] = React.useState<number>(1);

  const handleChange = (event: SelectChangeEvent): void => {
    setCategory(Number(event.target.value));
  };

  return (
    <Box className="dashboard-root-container">
      <Select
        name="select-category"
        className="dashboard-select-category"
        size="small"
        value={String(category)}
        onChange={handleChange}>
        <MenuItem value={1}>All</MenuItem>
        <MenuItem value={2}>Technology</MenuItem>
      </Select>
      <Box className="dashboard-blog-container">
        {blogData.slice(0, 10).map((blog, index) => (
          <Link
            className="dashboard-blog-card-wrapper"
            href={`/dashboard/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, '-'))}`}
            key={index}>
            <Image
              src={blog.image}
              alt="Banner"
              width={400}
              height={200}
              className="dashboard-blog-img"
            />
            <Typography className="dashboard-blog-title">{blog.title}</Typography>
            <Box className="dashboard-blog-user-info">
              <AccountCircleIcon color="secondary" className="dashboard-user-info-icon" />
              <Typography className="dashboard-user-info-title">{blog.user.name}</Typography>
            </Box>
            <Box className="dashboard-blog-user-like">
              <Typography className="dashboard-user-info-title">{blog.user.likes}</Typography>
              <Image src={Like} alt="like" width={20} className="dashboard-user-like-icon" />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;
