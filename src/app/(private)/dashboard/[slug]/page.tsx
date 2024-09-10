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

// Functional component for displaying blog details
const BlogDetail: React.FC = () => {
  // Extracting slug parameter from URL
  const { slug } = useParams();

  // State variables for managing like status, comment input, and comments
  const [liked, setLiked] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState<{ sender: string; text: string }[]>([]);

  // Ref to scroll to the end of the comments section
  const commentsEndRef = useRef<HTMLDivElement>(null);

  // Finding the blog data based on the slug
  const data = blogData.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === slug);

  // Scroll to the end of the comments section when a new comment is added
  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]);

  // Return a message if the blog is not found
  if (!data) {
    return <Typography variant="h4">Blog not found</Typography>;
  }

  // Function to handle sending a comment
  const handleSendComment = (): void => {
    if (comment.trim()) {
      // Add the new comment to the list of comments
      setComments((prevComments) => [...prevComments, { sender: 'You', text: comment }]);
      setComment('');

      // Simulate receiving a reply after a delay
      setTimeout(() => {
        setComments((prevComments) => [
          ...prevComments,
          { sender: 'Alice', text: 'Receiver Comments Here' }
        ]);
      }, 1000);
    }
  };

  // Function to handle 'Enter' key press for sending comments
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
          {/* Displaying each comment */}
          {comments.map((msg, index) => (
            <Box
              key={index}
              className={msg.sender === 'You' ? 'sender-comment' : 'receiver-comment'}>
              <Box className="sender-comment-info">
                <AccountCircleIcon color="secondary" fontSize="small" />
                <Typography className="sender-name-text">{msg.sender}</Typography>
              </Box>
              <Typography className="sender-text">{msg.text}</Typography>
            </Box>
          ))}
          {/* Ref to scroll to the end of comments */}
          <Box component={'div'} ref={commentsEndRef} />
        </Box>
        <TextField
          className="comment-input"
          placeholder="Add Your Comment Here"
          size="small"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown}
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
