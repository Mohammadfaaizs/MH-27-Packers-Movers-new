"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Slide,
  Fade,
  Container
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LocalShipping,
  Phone,
  Email
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0f172a 0%, #042866ff 50%, #052451ff 100%)',
  boxShadow: '0 2px 20px rgba(2, 30, 94, 0.3)',
  backdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  transition: 'all 0.3s ease',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
    transition: 'transform 0.3s ease',
  },
}));

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  color: 'white',
  fontWeight: active ? 600 : 500,
  position: 'relative',
  padding: '8px 16px',
  borderRadius: '0px',
  transition: 'all 0.2s ease',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: active ? '80%' : '0',
    height: '2px',
    backgroundColor: '#fff',
    transition: 'width 0.2s ease',
  },
  '&:hover::after': {
    width: '80%',
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
  '&:active': {
    backgroundColor: 'transparent',
  },
  '&:focus': {
    backgroundColor: 'transparent',
  },
}));

const GetQuoteButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #dc2626 0%, #ea580c 50%, #f59e0b 100%)',
  color: 'white',
  fontWeight: 600,
  padding: '10px 24px',
  borderRadius: '25px',
  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(220, 38, 38, 0.4)',
    background: 'linear-gradient(45deg, #b91c1c 0%, #dc2626 50%, #ea580c 100%)',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export default function Header({ currentPage, openModal }) {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get current page from pathname
  const getCurrentPage = () => {
    if (pathname === '/') return 'home';
    if (pathname === '/services') return 'services';
    if (pathname === '/about') return 'about';
    if (pathname === '/contact') return 'contact';
    if (pathname === '/privacy') return 'privacy';
    if (pathname === '/terms') return 'terms';
    if (pathname === '/refund') return 'refund';
    return 'home';
  };

  const activePage = currentPage || getCurrentPage();

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <>
      <StyledAppBar position="sticky" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: '80px !important' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
              <LogoContainer sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    height: { 
                      xs: '35px', 
                      sm: '40px', 
                      md: '45px', 
                      lg: '50px', 
                      xl: '55px' 
                    },
                    width: { 
                      xs: '120px', 
                      sm: '140px', 
                      md: '160px', 
                      lg: '180px', 
                      xl: '200px' 
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/mh27-new-png.png"
                    alt="MH27 Packers & Movers Logo"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </LogoContainer>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1, md: 1.5 } }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <NavButton active={activePage === "home"}>
                    Home
                  </NavButton>
                </Link>
                <Link href="/about" style={{ textDecoration: 'none' }}>
                  <NavButton active={activePage === "about"}>
                    About Us
                  </NavButton>
                </Link>
                <Link href="/services" style={{ textDecoration: 'none' }}>
                  <NavButton active={activePage === "services"}>
                    Services
                  </NavButton>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <NavButton active={activePage === "contact"}>
                    Contact
                  </NavButton>
                </Link>
                <GetQuoteButton 
                  onClick={openModal}
                  sx={{
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' }
                  }}
                >
                  Get Quote
                </GetQuoteButton>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <MobileMenuButton onClick={handleMobileMenuOpen}>
                <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
              </MobileMenuButton>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        sx={{
          '& .MuiPaper-root': {
            mt: 2,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            color: 'white',
            minWidth: { xs: 200, sm: 250 },
            maxWidth: { xs: '90vw', sm: 300 },
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          },
        }}
      >
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "home" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "home" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              Home
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "about" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "about" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              About Us
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/services" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "services" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "services" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              Services
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "contact" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "contact" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              Contact
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/privacy" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "privacy" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "privacy" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              Privacy
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/terms" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "terms" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "terms" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              Terms
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ color: 'white', py: 1 }}>
          <Link href="/refund" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <Box sx={{ 
              color: 'white',
              backgroundColor: activePage === "refund" ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              fontWeight: activePage === "refund" ? 600 : 400,
              py: 1,
              px: 2,
              borderRadius: 1,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' }
            }}>
              Refund Policy
            </Box>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => { openModal(); handleMobileMenuClose(); }} sx={{ py: 2 }}>
          <GetQuoteButton fullWidth sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Get Quote
          </GetQuoteButton>
        </MenuItem>
      </Menu>
    </>
  );
}