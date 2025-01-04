import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  Paper,
  Stack,
  Rating,
  Chip,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import {
  Speed,
  Security,
  SupportAgent,
  LocalShipping,
  Star,
  DirectionsCar,
  ArrowForward,
  LocalOffer,
  Favorite,
  CompareArrows,
  Search,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    'Luxury at Your Fingertips',
    'Drive Your Dreams',
    'Premium Cars, Premium Service',
    'Experience Excellence',
  ];

  const featuredCars = [
    {
      id: 1,
      name: 'Tesla Model S',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800',
      price: '89,990',
      category: 'Electric',
      rating: 5,
      reviews: 128,
    },
    {
      id: 2,
      name: 'Porsche 911',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800',
      price: '129,900',
      category: 'Sports',
      rating: 5,
      reviews: 96,
    },
    {
      id: 3,
      name: 'BMW M4',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800',
      price: '74,900',
      category: 'Luxury',
      rating: 4.9,
      reviews: 84,
    },
  ];

  const categories = [
    { name: 'Electric', icon: <Speed />, count: 24 },
    { name: 'Sports', icon: <DirectionsCar />, count: 18 },
    { name: 'Luxury', icon: <Star />, count: 32 },
    { name: 'SUV', icon: <LocalShipping />, count: 28 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Speed />, title: 'Premium Selection', description: 'Curated collection of luxury and performance vehicles' },
    { icon: <Security />, title: 'Secure Transactions', description: 'Safe and transparent buying process' },
    { icon: <SupportAgent />, title: '24/7 Support', description: 'Expert assistance whenever you need it' },
    { icon: <LocalShipping />, title: 'Nationwide Delivery', description: 'Convenient delivery to your doorstep' },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: { xs: '80px', sm: '100px' },
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #000000 0%, #1a1a1a 100%)'
            : 'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: theme.palette.mode === 'dark' ? 0.3 : 0.1,
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative', 
            zIndex: 1,
            py: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 4, md: 6 }} 
            alignItems="center"
            sx={{
              minHeight: { xs: 'calc(100vh - 80px)', sm: 'calc(100vh - 100px)' },
            }}
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    lineHeight: { xs: 1.2, sm: 1.3 },
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #00bcd4, #62efff)'
                      : 'linear-gradient(45deg, #0097a7, #4dd0e1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  VELOCE
                </Typography>
                <motion.div
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.primary,
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                      lineHeight: { xs: 1.3, sm: 1.4 },
                    }}
                  >
                    {phrases[currentPhrase]}
                  </Typography>
                </motion.div>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: 500,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                    lineHeight: { xs: 1.5, sm: 1.6 },
                  }}
                >
                  Discover our exclusive collection of premium vehicles.
                  Experience luxury, performance, and unmatched service.
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 2 }}
                  sx={{ width: { xs: '100%', sm: 'auto' } }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/cars')}
                    fullWidth={isMobile}
                    sx={{
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 3, sm: 4 },
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                  >
                    Explore Collection
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/contact')}
                    fullWidth={isMobile}
                    sx={{
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 3, sm: 4 },
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', mt: { xs: 4, md: 0 } }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800"
                    alt="Featured Car"
                    sx={{
                      width: '100%',
                      borderRadius: 4,
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                        : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </motion.div>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #1a1a1a, #121212)'
                      : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                      : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    Special Offer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get up to 10% off on selected models
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Actions */}
      <Box
        sx={{
          py: 4,
          background: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                startIcon={<Search />}
                onClick={() => navigate('/cars')}
                sx={{
                  py: 2,
                  justifyContent: 'flex-start',
                  color: theme.palette.text.primary,
                }}
              >
                Search Cars
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                startIcon={<CompareArrows />}
                onClick={() => navigate('/cars')}
                sx={{
                  py: 2,
                  justifyContent: 'flex-start',
                  color: theme.palette.text.primary,
                }}
              >
                Compare Models
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                startIcon={<Favorite />}
                onClick={() => navigate('/cars')}
                sx={{
                  py: 2,
                  justifyContent: 'flex-start',
                  color: theme.palette.text.primary,
                }}
              >
                Saved Cars
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                fullWidth
                startIcon={<LocalOffer />}
                onClick={() => navigate('/cars')}
                sx={{
                  py: 2,
                  justifyContent: 'flex-start',
                  color: theme.palette.text.primary,
                }}
              >
                Special Offers
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories */}
      <Box
        sx={{
          py: 8,
          background: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Browse by Category
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      cursor: 'pointer',
                      height: '100%',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1a1a1a, #121212)'
                        : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                    }}
                    onClick={() => navigate(`/cars?category=${category.name}`)}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, #00bcd4, #62efff)'
                          : 'linear-gradient(45deg, #0097a7, #4dd0e1)',
                        display: 'inline-flex',
                        mb: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.count} vehicles
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Cars */}
      <Box
        sx={{
          py: 8,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #121212, #0a0a0a)'
            : 'linear-gradient(145deg, #f8f8f8, #ffffff)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 0 } }}>
            <Typography 
              variant="h2" 
              color="text.primary"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Featured Vehicles
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/cars')}
              sx={{
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              View All
            </Button>
          </Box>
          <Grid container spacing={4}>
            {featuredCars.map((car, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1a1a1a, #121212)'
                        : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={car.image}
                      alt={car.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" component="h3" color="text.primary">
                          {car.name}
                        </Typography>
                        <Chip
                          label={car.category}
                          color="primary"
                          size="small"
                          sx={{ borderRadius: 1 }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={car.rating} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({car.reviews} reviews)
                        </Typography>
                      </Box>
                      <Typography variant="h6" color="primary" gutterBottom>
                        ${car.price}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={() => navigate(`/cars/${car.id}`)}
                        >
                          View Details
                        </Button>
                        <IconButton
                          color="primary"
                          sx={{
                            border: `2px solid ${theme.palette.primary.main}`,
                            borderRadius: 1,
                          }}
                        >
                          <Favorite />
                        </IconButton>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: 8,
          background: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Why Choose VELOCE
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1a1a1a, #121212)'
                        : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, #00bcd4, #62efff)'
                          : 'linear-gradient(45deg, #0097a7, #4dd0e1)',
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #121212, #0a0a0a)'
            : 'linear-gradient(145deg, #f8f8f8, #ffffff)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: theme.palette.text.primary,
                  mb: 3,
                }}
              >
                Ready to Find Your Dream Car?
              </Typography>
              <Typography
                variant="h5"
                paragraph
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Browse our exclusive collection of premium vehicles and take the first step towards luxury.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/cars')}
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.2rem',
                  }}
                >
                  View Collection
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.2rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Contact Sales
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 