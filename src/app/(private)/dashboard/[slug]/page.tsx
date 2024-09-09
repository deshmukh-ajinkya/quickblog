'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { blogData } from '@/mock/blogData';
import './style.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const [liked, setLiked] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState<{ sender: string; text: string }[]>([]);

  const commentsEndRef = useRef<HTMLDivElement>(null);

  const data = blogData.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === slug);

  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]);

  if (!data) {
    return <Typography variant="h4">Blog not found</Typography>;
  }

  const handleSendComment = (): void => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, { sender: 'You', text: comment }]);
      setComment('');

      // Instead of immediate update, you could handle it differently if needed
      setTimeout(() => {
        setComments((prevComments) => [
          ...prevComments,
          { sender: 'Alice', text: 'Receiver Comments Here' }
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      handleSendComment();
    }
  };

  return (
    <Box className="blog-content-root-container">
      <Typography className="blog-content-title" variant="h6">
        {data.title}
        <Box className="blog-content-like" onClick={() => setLiked(!liked)}>
          <Typography>{data.user.likes}</Typography>
          {liked ? <ThumbUpAltIcon fontSize="small" /> : <ThumbUpOutlinedIcon fontSize="small" />}
        </Box>
      </Typography>
      <Typography className="blog-content-description" variant="h6">
        {data.description}
      </Typography>
      <Box className="blog-content-comment">
        <Box className="comments">
          {comments.map((msg, index) => (
            <Box
              key={index}
              className={msg.sender === 'You' ? 'sender-comment' : 'receiver-comment'}>
              <Box className="sender-comment-info" sx={{ textAlign: 'center', lineHeight: 0 }}>
                <AccountCircleIcon color="secondary" fontSize="small" />
                <Typography className="sender-name-text">{msg.sender}</Typography>
              </Box>
              <Typography className="sender-text">{msg.text}</Typography>
            </Box>
          ))}
          {/* This is the element we scroll to */}
          <div ref={commentsEndRef} />
        </Box>
        <TextField
          className="comment-input"
          placeholder="Add Your Comment Here"
          size="small"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown} // Add onKeyDown handler
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <QuickreplyIcon className="comment-icon" color="primary" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleSendComment}
                style={{ cursor: 'pointer' }}>
                <SendIcon className="comment-icon" color="primary" />
              </InputAdornment>
            )
          }}
        />
      </Box>
    </Box>
  );
};

export default BlogDetail;
