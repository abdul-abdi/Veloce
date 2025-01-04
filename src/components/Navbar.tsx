import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Badge,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart,
  DirectionsCar,
  Home,
  ContactSupport,
  Close,
  Speed,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { useThemeMode } from '../theme/ThemeContext';

interface CartState {
  items: any[];
}

const pages = [
  { name: 'Home', path: '/', icon: <Home /> },
  { name: 'Cars', path: '/cars', icon: <DirectionsCar /> },
  { name: 'Contact', path: '/contact', icon: <ContactSupport /> },
];

const Navbar = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const cartItems = useSelector((state: RootState) => (state.cart as CartState).items);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: trigger
            ? mode === 'dark'
              ? 'rgba(18, 18, 18, 0.85)'
              : 'rgba(255, 255, 255, 0.85)'
            : mode === 'dark'
              ? 'rgba(18, 18, 18, 0.6)'
              : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(8px)',
          boxShadow: trigger
            ? '0 4px 30px rgba(0, 0, 0, 0.1)'
            : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 72 },
              py: { xs: 1, md: 1.5 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                }}
              >
                <Speed sx={{ mr: 1, fontSize: { xs: '1.5rem', md: '1.8rem' } }} />
                VELOCE
              </Typography>
            </motion.div>

            {isMobile ? (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                  color="inherit"
                  onClick={toggleTheme}
                  sx={{
                    mr: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  {mode === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton>
                <IconButton
                  component={RouterLink}
                  to="/cart"
                  sx={{
                    mr: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', ml: 4, gap: 2 }}>
                  {pages.map((page) => (
                    <motion.div
                      key={page.path}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        component={RouterLink}
                        to={page.path}
                        sx={{
                          color: theme.palette.text.primary,
                          display: 'flex',
                          alignItems: 'center',
                          position: 'relative',
                          px: 2,
                          py: 1,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: location.pathname === page.path ? '100%' : '0%',
                            height: '2px',
                            bottom: 0,
                            left: 0,
                            backgroundColor: theme.palette.primary.main,
                            transition: 'width 0.3s ease-in-out',
                          },
                          '&:hover::after': {
                            width: '100%',
                          },
                        }}
                      >
                        {page.icon}
                        <Typography sx={{ ml: 1, fontWeight: 500 }}>{page.name}</Typography>
                      </Button>
                    </motion.div>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      component={RouterLink}
                      to="/auth"
                      variant="outlined"
                      sx={{
                        color: theme.palette.text.primary,
                        borderWidth: 2,
                        borderRadius: 2,
                        px: 3,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  </motion.div>
                  <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                    <IconButton
                      onClick={toggleTheme}
                      sx={{
                        color: theme.palette.text.primary,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { transform: 'rotate(180deg)' },
                      }}
                    >
                      {mode === 'dark' ? <LightMode /> : <DarkMode />}
                    </IconButton>
                  </Tooltip>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      component={RouterLink}
                      to="/cart"
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      <Badge badgeContent={cartItems.length} color="primary">
                        <ShoppingCart />
                      </Badge>
                    </IconButton>
                  </motion.div>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ height: { xs: 64, md: 72 } }} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: theme.palette.background.paper,
            backgroundImage: 'none',
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Box>
          <List sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <ListItem
                key={page.path}
                disablePadding
                sx={{ mb: 2 }}
              >
                <Button
                  component={RouterLink}
                  to={page.path}
                  onClick={handleDrawerToggle}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    px: 2,
                    py: 1.5,
                    color: theme.palette.text.primary,
                    backgroundColor: location.pathname === page.path
                      ? theme.palette.action.selected
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  {page.icon}
                  <Typography sx={{ ml: 2 }}>{page.name}</Typography>
                </Button>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <Button
                component={RouterLink}
                to="/auth"
                onClick={handleDrawerToggle}
                fullWidth
                variant="outlined"
                sx={{
                  justifyContent: 'flex-start',
                  px: 2,
                  py: 1.5,
                  color: theme.palette.text.primary,
                  borderWidth: 2,
                  borderRadius: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                Sign In
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar; 