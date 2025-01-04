import { Box, Container, Typography, Grid, Link, Divider, useTheme, IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Speed, LocationOn, Email, Phone, Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Navbar from './Navbar';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
          : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: { xs: '.2rem', sm: '.3rem' },
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                  mb: 2,
                }}
              >
                <Speed sx={{ mr: { xs: 0.5, sm: 1 }, fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' } }} />
                VELOCE
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  maxWidth: 300,
                  fontSize: { xs: '0.875rem', sm: '0.9rem' },
                  lineHeight: 1.6,
                }}
              >
                Experience luxury and performance with our premium car collection. Your journey to automotive excellence starts here.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                fontWeight: 600,
                mb: { xs: 2, sm: 3 },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={{ xs: 1, sm: 1.5 }}>
              <Link component={RouterLink} to="/" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Home
              </Link>
              <Link component={RouterLink} to="/cars" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Cars
              </Link>
              <Link component={RouterLink} to="/contact" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                fontWeight: 600,
                mb: { xs: 2, sm: 3 },
              }}
            >
              Contact Info
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                <Typography variant="body2" color="text.secondary">
                  123 Car Street<br />
                  Automotive City, AC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                <Typography variant="body2" color="text.secondary">
                  info@veloce.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                <Typography variant="body2" color="text.secondary">
                  (123) 456-7890
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1}>
                <IconButton size="small" color="primary" aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="YouTube">
                  <YouTube />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} VELOCE. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

const Layout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        overflow: 'hidden',
        bgcolor: 'background.default',
        transition: theme.transitions.create(['background-color'], {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: 0,
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout; 