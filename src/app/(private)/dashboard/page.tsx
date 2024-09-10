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
  // State variable to store the selected category (initially set to 1)
  const [category, setCategory] = React.useState<number>(1);

  // Function to handle changes in the category selection dropdown
  const handleChange = (event: SelectChangeEvent): void => {
    setCategory(Number(event.target.value)); // Update state with the selected value converted to a number
  };

  // Render the dashboard content
  return (
    <Box className="dashboard-root-container">
      {/* Category selection dropdown */}
      <Select
        name="select-category"
        className="dashboard-select-category"
        size="small"
        value={String(category)} // Set the selected value from state
        onChange={handleChange}>
        <MenuItem value={1}>All</MenuItem>
        <MenuItem value={2}>Technology</MenuItem>
      </Select>

      {/* Container for blog posts */}
      <Box className="dashboard-blog-container">
        {/* Loop through the first 10 blog posts from mock data */}
        {blogData.slice(0, 10).map((blog, index) => (
          <Link
            className="dashboard-blog-card-wrapper"
            key={index} // Set a unique key for each blog post
            href={`/dashboard/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, '-'))}`} // Generate a dynamic URL based on blog title
          >
            {/* Blog post image */}
            <Image
              src={blog.image}
              alt="Banner"
              width={400}
              height={200}
              className="dashboard-blog-img"
            />

            {/* Blog post title */}
            <Typography className="dashboard-blog-title">{blog.title}</Typography>

            {/* Blog post description */}
            <Typography className="dashboard-blog-description">{blog.description}</Typography>

            {/* Container for blog post user information */}
            <Box className="dashboard-blog-user-info">
              {/* User icon */}
              <AccountCircleIcon color="secondary" className="dashboard-user-info-icon" />

              {/* User name */}
              <Typography className="dashboard-user-info-title">{blog.user.name}</Typography>
            </Box>

            {/* Container for blog post likes */}
            <Box className="dashboard-blog-user-like">
              {/* Number of likes */}
              <Typography className="dashboard-user-info-title">{blog.user.likes}</Typography>

              {/* Like icon */}
              <Image src={Like} alt="like" width={20} className="dashboard-user-like-icon" />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;
