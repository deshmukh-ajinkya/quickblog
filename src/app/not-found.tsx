import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NotFoundIcon from '../../public/not-found.png';

export default function NotFound(): React.ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem',
        textAlign: 'center'
      }}>
      <Image src={NotFoundIcon} alt="not-found-icon" width={100} height={100} />
      <Typography sx={{ fontSize: '2rem', marginLeft: '1rem' }} color="primary">
        Page Not Found
      </Typography>
      <Button variant="contained">
        <Link
          href="/"
          style={{ textDecoration: 'none', color: 'white', textTransform: 'capitalize' }}>
          Back To Home
        </Link>
      </Button>
    </Box>
  );
}
