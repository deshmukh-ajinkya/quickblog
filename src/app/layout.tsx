'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import React from 'react';
import { Provider } from 'react-redux';
import { theme } from '@/config';
import { store } from '@/store';
import './globals.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>{children}</Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
