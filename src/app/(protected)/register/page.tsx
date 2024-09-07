'use client';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../../public/icon.png';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
      <Typography sx={{ color: 'red', fontSize: '0.75rem', visibility: 'hidden' }}>
        Validation message
      </Typography>
    </Box>
  );
}

function Register(): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 36px auto 36px auto 36px auto',
        gap: '1rem',
        placeItems: 'center',
        margin: 'auto',
        minWidth: '250px',
        height: 'fit-content',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #008AE6',
        position: 'absolute',
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
        <TextField size="small" placeholder="Full Name" fullWidth />
        <Typography sx={{ color: 'red', fontSize: '0.75rem', visibility: 'hidden' }}>
          Validation message
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <TextField size="small" placeholder="Email" fullWidth />
        <Typography sx={{ color: 'red', fontSize: '0.75rem', visibility: 'hidden' }}>
          Validation Message
        </Typography>
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

      <Button
        variant="contained"
        color="primary"
        size="medium"
        sx={{ textTransform: 'capitalize', width: '100%', fontSize: '0.7rem' }}>
        Register
      </Button>

      <Link href={'/login'} style={{ fontSize: '0.8rem', color: '#008AE6' }}>
        Already have an account? Login
      </Link>
    </Box>
  );
}

export default Register;
