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
import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { BaseSyntheticEvent, ChangeEvent, useRef, useState } from 'react';
import { CustomTheme } from '@/components';
import { INavigationItem } from '@/interface';
import Logo from '../../../public/icon.png';
import User from '../../../public/user.png';
import './style.css';

// Define the private navigation paths with their titles, icons, and URLs
const privatePaths = [
  { title: 'Explore', icon: WindowIcon, url: '/dashboard' },
  { title: 'Create', icon: NoteAltIcon, url: '/blog' },
  { title: 'Insight', icon: AssessmentIcon, url: '/insight' }
];

// Private component to render navigation and user profile menu
function Private({ children }: { children: React.ReactNode }): React.ReactNode {
  const router = useRouter(); // Hook to programmatically navigate
  const pathname = usePathname(); // Get the current pathname for navigation highlighting
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // State for menu anchor element
  const [email, setEmail] = React.useState('user@example.com'); // State for user email
  const [name, setName] = React.useState('John Doe'); // State for user name
  const [isEditing, setIsEditing] = useState<{ email: boolean; name: boolean }>({
    email: false,
    name: false
  }); // State for tracking if editing mode is active
  const [selectedItem, setSelectedItem] = React.useState(() => {
    // Determine the initially selected navigation item based on the current pathname
    const initialSelected = privatePaths.find((item) => item.url === pathname);
    return initialSelected?.title || 'Explore';
  });

  // Handle navigation item click
  const handleNavigation = React.useCallback(
    (item: INavigationItem): void => {
      setSelectedItem(item.title); // Set the selected item
      router.push(item.url); // Navigate to the selected URL
    },
    [router]
  );

  // Open the user profile menu
  const handleMenuOpen = (event: BaseSyntheticEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  // Close the user profile menu
  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  // Handle email input change
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  // Handle name input change
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  // Toggle between editing and viewing mode for profile fields
  const toggleEditMode = (field: 'email' | 'name'): void => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const theme = useTheme(); // Get the current theme for responsive design
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the viewport is mobile-sized
  const inputRef = useRef<HTMLInputElement | null>(null); // Ensure the ref is typed as an HTMLInputElement
  const [imagePreview, setImagePreview] = useState<string | StaticImageData>(User);

  const handleImageClick = (): void => {
    // Trigger the hidden file input click
    inputRef.current!.click();
  };

  const handleFileChange = (event: BaseSyntheticEvent): void => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a preview URL
      setImagePreview(imageUrl); // Update the image source with the new file    }
    }
  };
  return (
    <Box className="private-root-container">
      {/* Logo image */}
      <Image src={Logo} alt="logo" className="header-logo-image" />

      {/* Search input field */}
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

      {/* Header icons including theme switcher and user profile icon */}
      <Box className="header-icons">
        <CustomTheme />
        <Image
          src={imagePreview}
          width={200}
          height={200}
          alt="user"
          onClick={handleMenuOpen}
          className="user-profile-icon"
        />
      </Box>

      {/* User profile menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          sx: {
            minWidth: 230, // Fixed minimum width for the menu
            maxWidth: isMobile ? '100%' : 240,
            width: isMobile ? '100%' : 'auto'
          }
        }}
        className="account-menu">
        {/* Profile information */}
        <MenuItem className="profile-menu-items">
          <Box component="div" display="flex" alignItems="center" width="100%">
            {/* Dynamic Image Component */}
            <Image
              src={imagePreview} // The image preview will update when a new file is selected
              alt="user"
              className="profile-img"
              onClick={handleImageClick}
              width={150} // Example width
              height={150} // Example height
            />

            {/* Hidden file input */}
            <Box
              component="input"
              type="file"
              hidden
              ref={inputRef} // Reference to trigger the file input
              onChange={handleFileChange} // Handle file input change
              accept="image/*" // Accept only image files
            />
            {isEditing.name ? (
              <TextField
                value={name}
                onChange={handleNameChange}
                size="small"
                variant="outlined"
                className="profile-email"
              />
            ) : (
              <Typography variant="body2" component="span">
                {name}
              </Typography>
            )}
            <IconButton
              onClick={() => toggleEditMode('name')}
              size="small"
              sx={{ marginLeft: 'auto' }}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </MenuItem>

        {/* Email information */}
        <MenuItem className="profile-menu-items">
          <Box component="div" display="flex" alignItems="center" width="100%">
            <MailIcon color="primary" className="mail-icon" />
            {isEditing.email ? (
              <TextField
                value={email}
                onChange={handleEmailChange}
                size="small"
                variant="outlined"
                className="profile-email"
              />
            ) : (
              <Typography variant="body2">{email}</Typography>
            )}
            <IconButton
              onClick={() => toggleEditMode('email')}
              size="small"
              sx={{ marginLeft: 'auto' }}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </MenuItem>

        {/* Logout option */}
        <MenuItem>
          <Typography className="logout-item">Logout</Typography>
        </MenuItem>
      </Menu>

      {/* Main content area where children components are rendered */}
      <Box className="children-content">{children}</Box>

      {/* Navigation items */}
      <Box className="navigation">
        {privatePaths.map((item, index) => (
          <Box
            className={`navigation-item-wrapper ${selectedItem === item.title ? 'selected' : ''}`}
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
