'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EditIcon from '@mui/icons-material/Edit';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WindowIcon from '@mui/icons-material/Window';
import {
  Box,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton
} from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import { CustomTheme } from '@/components';
import { INavigationItem } from '@/interface';
import Logo from '../../../public/icon.png';
import './style.css';

const privatePaths = [
  { title: 'Create', icon: NoteAltIcon, url: '/blog' },
  { title: 'Explore', icon: WindowIcon, url: '/dashboard' },
  { title: 'Insight', icon: AssessmentIcon, url: '/insight' }
];

function Private({ children }: { children: React.ReactNode }): React.ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // State for Menu
  const [email, setEmail] = React.useState('user@example.com'); // State for email
  const [mobile, setMobile] = React.useState('123-456-7890'); // State for mobile
  const [isEditing, setIsEditing] = useState<{ email: boolean; mobile: boolean }>({
    email: false,
    mobile: false
  }); // State for edit mode
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

  const handleMenuOpen = (event: BaseSyntheticEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMobile(event.target.value);
  };

  const toggleEditMode = (field: 'email' | 'mobile'): void => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Responsive styling
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        <AccountCircleIcon
          color="secondary"
          fontSize="large"
          onClick={handleMenuOpen} // Open menu on click
          sx={{ cursor: 'pointer' }} // Add cursor pointer style
        />
      </Box>

      {/* Account Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          sx: {
            maxWidth: isMobile ? '100%' : 240, // Adjust menu width for mobile
            width: isMobile ? '100%' : 'auto'
          }
        }}
        className="account-menu">
        <MenuItem sx={{ cursor: 'pointer' }}>
          <Box component="div" display="flex" alignItems="center" width="100%">
            {isEditing.email ? (
              <TextField
                value={email}
                onChange={handleEmailChange}
                size="small"
                variant="outlined"
                fullWidth
              />
            ) : (
              <Typography variant="body2" component="span" sx={{ fontWeight: 'bold' }}>
                {email}
              </Typography>
            )}
            <IconButton onClick={() => toggleEditMode('email')} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </MenuItem>
        <MenuItem sx={{ cursor: 'pointer' }}>
          <Box component="div" display="flex" alignItems="center" width="100%">
            {isEditing.mobile ? (
              <TextField
                value={mobile}
                onChange={handleMobileChange}
                size="small"
                variant="outlined"
                fullWidth
              />
            ) : (
              <Typography variant="body2" component="span" sx={{ fontWeight: 'bold' }}>
                {mobile}
              </Typography>
            )}
            <IconButton onClick={() => toggleEditMode('mobile')} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>

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
