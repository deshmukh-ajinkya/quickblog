'use client';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import GoogleIcon from '../../../../public/google.png';
import Logo from '../../../../public/icon.png';

function Login(): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto',
        gap: '0.5rem',
        placeItems: 'center',
        margin: 'auto',
        minWidth: '250px',
        height: 'auto',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #008AE6',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
      <Image
        src={Logo}
        alt="logo"
        style={{ maxWidth: '8rem', height: 'auto', paddingBottom: '0.5rem' }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <TextField size="small" placeholder="Email" fullWidth />
        <Typography sx={{ color: 'red', fontSize: '0.75rem', visibility: 'hidden' }}>
          Validation message
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <TextField
          size="small"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <RemoveRedEyeIcon fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Typography sx={{ color: 'red', fontSize: '0.75rem', visibility: 'hidden' }}>
          Validation Message
        </Typography>
      </Box>

      <Link href={'/reset'} style={{ fontSize: '0.8rem', color: '#008AE6', padding: 0 }}>
        Forget Password
      </Link>

      <Button
        variant="contained"
        color="primary"
        size="medium"
        sx={{
          textTransform: 'capitalize',
          width: '100%',
          fontSize: '0.7rem'
        }}>
        Login
      </Button>

      <Typography>or</Typography>

      <Button
        variant="contained"
        color="primary"
        size="medium"
        sx={{
          textTransform: 'none',
          width: '100%',
          fontSize: '0.7rem',
          display: 'flex',
          gap: '0.5rem'
        }}>
        <Image src={GoogleIcon} alt="google-icon" width={24} style={{ borderRadius: '24px' }} />
        SignIn with Google
      </Button>

      <Link href={'/register'} style={{ fontSize: '0.8rem', color: '#008AE6' }}>
        Dont have an account? Register
      </Link>
    </Box>
  );
}

export default Login;
