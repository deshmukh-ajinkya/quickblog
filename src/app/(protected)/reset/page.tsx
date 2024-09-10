'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../../public/icon.png';
import './style.css'; // Import the plain CSS file

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
    <Box className="reset-container">
      <Image src={Logo} alt="logo" className="reset-logo" />

      <Box className="input-container">
        {renderStepContent()}
        <Typography className="validation-message">Validation message</Typography>
      </Box>

      <Box className="button-container">
        {activeStep > 0 && (
          <Button
            variant="contained"
            size="small"
            className="reset-button"
            onClick={() => handleStepChange('back')}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          size="small"
          className="reset-button"
          onClick={handleSubmit}>
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>

      <Link href="/login" className="reset-link">
        Back to login
      </Link>
    </Box>
  );
}

export default Reset;
