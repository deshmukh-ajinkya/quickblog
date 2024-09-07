'use client';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
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
import User from '../../../public/user.png';
import './style.css';

const privatePaths = [
  { title: 'Explore', icon: WindowIcon, url: '/dashboard' },
  { title: 'Create', icon: NoteAltIcon, url: '/blog' },
  { title: 'Insight', icon: AssessmentIcon, url: '/insight' }
];

function Private({ children }: { children: React.ReactNode }): React.ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [email, setEmail] = React.useState('user@example.com');
  const [name, setName] = React.useState('John Doe');
  const [isEditing, setIsEditing] = useState<{ email: boolean; name: boolean }>({
    email: false,
    name: false
  });
  const [selectedItem, setSelectedItem] = React.useState(() => {
    const initialSelected = privatePaths.find((item) => item.url === pathname);
    return initialSelected?.title || 'Explore';
  });

  const handleNavigation = React.useCallback(
    (item: INavigationItem): void => {
      setSelectedItem(item.title);
      router.push(item.url);
    },
    [router]
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

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const toggleEditMode = (field: 'email' | 'name'): void => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

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
        <Image
          src={User}
          alt="user"
          onClick={handleMenuOpen}
          style={{
            height: 'auto',
            marginRight: '1rem',
            cursor: 'pointer',
            width: '2rem'
          }}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          sx: {
            maxWidth: isMobile ? '100%' : 240,
            width: isMobile ? '100%' : 'auto'
          }
        }}
        className="account-menu">
        <MenuItem sx={{ cursor: 'pointer' }}></MenuItem>
        <MenuItem sx={{ cursor: 'pointer' }}>
          <Box component="div" display="flex" alignItems="center" width="100%">
            <Image
              src={User}
              alt="user"
              style={{ width: '24px', height: 'auto', marginRight: '1rem' }}
            />
            {isEditing.name ? (
              <TextField
                value={name}
                onChange={handleNameChange}
                size="small"
                variant="outlined"
                sx={{ width: 150 }}
              />
            ) : (
              <Typography variant="body2" component="span" sx={{ fontWeight: 'bold', width: 150 }}>
                {name}
              </Typography>
            )}
            <IconButton onClick={() => toggleEditMode('name')} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </MenuItem>
        <MenuItem sx={{ cursor: 'pointer' }}>
          <Box component="div" display="flex" alignItems="center" width="100%">
            <MailIcon color="primary" sx={{ marginRight: '1rem' }} />
            {isEditing.email ? (
              <TextField
                value={email}
                onChange={handleEmailChange}
                size="small"
                variant="outlined"
                sx={{ width: 150 }}
              />
            ) : (
              <Typography variant="body2" component="span" sx={{ fontWeight: 'bold', width: 150 }}>
                {email}
              </Typography>
            )}
            <IconButton onClick={() => toggleEditMode('email')} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>

      <Box className="children-content">{children}</Box>
      <Box className="navigation">
        {privatePaths.map((item, index) => (
          <Box
            className={`navigation-item-wrapper ${item.title === selectedItem ? 'selected' : ''}`}
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
