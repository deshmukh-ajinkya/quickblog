'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../../public/icon.png';

const steps = ['Enter Email', 'Enter OTP', 'Set New Password'];

function Reset(): React.ReactElement {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  const handleStepChange = (direction: 'next' | 'back'): void => {
    setActiveStep((prevStep) => prevStep + (direction === 'next' ? 1 : -1));
  };

  const handleReset = (): void => {
    setActiveStep(0);
    setEmail('');
    setOtp('');
    setPassword('');
  };

  const handleSubmit = (): void => {
    if (activeStep === steps.length - 1) {
      handleReset();
    } else {
      handleStepChange('next');
    }
  };

  const renderStepContent = (): React.ReactElement | null => {
    if (activeStep === 0) {
      return (
        <TextField
          size="small"
          placeholder="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      );
    } else if (activeStep === 1) {
      return (
        <TextField
          size="small"
          placeholder="Enter OTP"
          fullWidth
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      );
    } else if (activeStep === 2) {
      return (
        <TextField
          size="small"
          placeholder="Enter New Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 36px auto 36px fit-content',
        gap: '0.5rem',
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
      <Image src={Logo} alt="logo" style={{ maxWidth: '8rem', height: 'auto' }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {renderStepContent()}
        <Typography sx={{ color: 'red', fontSize: '0.75rem', visibility: 'hidden' }}>
          Validation message
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {activeStep > 0 && (
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: 'capitalize', fontSize: '0.7rem', justifySelf: 'center' }}
            onClick={() => handleStepChange('back')}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ textTransform: 'capitalize', fontSize: '0.7rem', justifySelf: 'center' }}
          onClick={handleSubmit}>
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>

      <Link href="/login" style={{ fontSize: '0.8rem', color: '#008AE6' }}>
        Back to login
      </Link>
    </Box>
  );
}

export default Reset;
