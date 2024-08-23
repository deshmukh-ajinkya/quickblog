'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WindowIcon from '@mui/icons-material/Window';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { CustomTheme } from '@/components';
import { INavigationItem } from '@/interface';
import Logo from '../../../public/icon.png';
import './style.css';

const privatePaths = [
  { title: 'Dashboard', icon: WindowIcon, url: '/dashboard' },
  { title: 'Blog', icon: NoteAltIcon, url: '/blog' },
  { title: 'Insight', icon: AssessmentIcon, url: '/insight' },
  { title: 'Support', icon: ContactSupportIcon, url: '/support' }
];

function Private({ children }: { children: React.ReactNode }): React.ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const [, setIsItemSelected] = React.useState(() => {
    const initialSelected = privatePaths.find((item) => item.url === pathname);
    return initialSelected?.title || privatePaths[0].title;
  });

  const handleNavigation = React.useMemo(
    () =>
      (item: INavigationItem): void => {
        setIsItemSelected(item.title);
        router.push(item.url);
      },
    [setIsItemSelected, router]
  );

  return (
    <Box className="private-root-container">
      <Image src={Logo} alt="logo" className="header-logo-image" />
      <TextField
        placeholder="Search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon color="primary" />
            </InputAdornment>
          )
        }}
        className="header-search-input"
      />
      <Box className="header-icons">
        <CustomTheme />
        <NotificationsIcon color="primary" />
        <AccountCircleIcon color="secondary" fontSize="large" />
      </Box>
      <Box className="children-content">{children}</Box>
      <Box className="navigation">
        {privatePaths.map((item, index) => (
          <Box
            className="navigation-item-wrapper"
            key={index}
            onClick={() => handleNavigation(item)}>
            <item.icon fontSize="large" color="primary" className="navigation-item-icon" />
            <Typography color="primary" className="navigation-item-label">
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Private;
