'use client';
import { Box, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { blogData } from '@/mock/blogData';
import Like from '../../../../../public/thumbs-up.svg';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();

  const data = blogData.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!data) {
    return <Typography variant="h4">Blog not found</Typography>;
  }

  return (
    <Box className="blog-content-root-container">
      <Typography variant="h6">{data.title}</Typography>
      <Typography variant="h6">{data.description}</Typography>
      <Image src={data.image} alt={data.title} style={{ width: 250, height: 'auto' }} />
      <Box>Comments</Box>
      <Typography>Like Count</Typography>
      <Image src={Like} alt="like" width={20} />
      <TextField size="small" />
    </Box>
  );
};

export default BlogDetail;
