'use client';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import GoogleIcon from '../../../../public/google.png';
import Logo from '../../../../public/icon.png';
import './style.css'; // Import plain CSS file

function Login(): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box className="container">
      <Image src={Logo} alt="logo" className="logo" />

      <Box className="input-container">
        <TextField size="small" placeholder="Email" fullWidth />
        <Typography className="validation-message">Validation message</Typography>
      </Box>

      <Box className="input-container">
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
        <Typography className="validation-message">Validation Message</Typography>
      </Box>

      <Link href={'/reset'} className="link">
        Forget Password
      </Link>

      <Button variant="contained" color="primary" size="medium" className="button">
        Login
      </Button>

      <Typography className="or-text">or</Typography>

      <Button variant="contained" color="primary" size="medium" className="google-button">
        <Image src={GoogleIcon} alt="google-icon" width={24} style={{ borderRadius: '24px' }} />
        SignIn with Google
      </Button>

      <Link href={'/register'} className="link">
        Dont have an account? Register
      </Link>
    </Box>
  );
}

export default Login;
