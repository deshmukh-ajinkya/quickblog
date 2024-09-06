import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

function Blog(): React.ReactElement {
  return (
    <Box
      sx={{
        gridColumn: 'span 2',
        display: 'grid',
        gridTemplateRows: 'max-content 2fr 8fr',
        gridTemplateColumns: '2fr 1fr',
        gap: 1,
        height: 'calc(100vh - 5rem)'
      }}>
      <Typography color="primary" sx={{ gridRow: '1', gridColumn: 'span 2', fontSize: '24px' }}>
        Blog
      </Typography>

      <Box
        sx={{
          gridRow: '2',
          display: 'inherit',
          gridTemplateColumns: '9fr 1fr',
          gridTemplateRows: 'auto',
          gap: '1rem'
        }}>
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: '0.3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <AddBoxIcon color="primary" />
        </Box>
        <Box sx={{ display: 'grid' }}>
          <Box>
            <Select
              name="select-category"
              size="small"
              defaultValue={1}
              sx={{ minWidth: '200px' }}
              fullWidth>
              <MenuItem value={1}>Select Category</MenuItem>
              <MenuItem value={2}>Technology</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
        sx={{
          gridRow: '3',
          '& .MuiOutlinedInput-root': {
            height: '100%'
          },
          '& .MuiInputBase-input': {
            height: '100% !important',
            overflow: 'auto !important'
          }
        }}
      />
      <Box
        sx={{
          gridRow: 'span 3',
          gridColumn: '2 / 3',
          overflow: 'auto',
          height: '100%'
        }}>
        <Box>Card1</Box>
      </Box>
    </Box>
  );
}

export default Blog;
