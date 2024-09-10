'use client';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../../public/icon.png';
import './style.css'; // Import the plain CSS file

function PasswordField({
  label,
  showPassword,
  handleClickShowPassword
}: {
  label: string;
  showPassword: boolean;
  handleClickShowPassword: () => void;
}): React.ReactElement {
  return (
    <Box className="input-container">
      <TextField
        size="small"
        type={showPassword ? 'text' : 'password'}
        placeholder={label}
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
      <Typography className="validation-message">Validation message</Typography>
    </Box>
  );
}

function Register(): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box className="register-container">
      <Image src={Logo} alt="logo" className="register-logo" />

      <Box className="input-container">
        <TextField size="small" placeholder="Full Name" fullWidth />
        <Typography className="validation-message">Validation message</Typography>
      </Box>

      <Box className="input-container">
        <TextField size="small" placeholder="Email" fullWidth />
        <Typography className="validation-message">Validation Message</Typography>
      </Box>

      <PasswordField
        label="Password"
        showPassword={showPassword}
        handleClickShowPassword={() => setShowPassword((prev) => !prev)}
      />
      <PasswordField
        label="Confirm Password"
        showPassword={showConfirmPassword}
        handleClickShowPassword={() => setShowConfirmPassword((prev) => !prev)}
      />

      <Button variant="contained" color="primary" size="medium" className="register-button">
        Register
      </Button>

      <Link href={'/login'} className="register-link">
        Already have an account? Login
      </Link>
    </Box>
  );
}

export default Register;
