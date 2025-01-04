import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip,
  useTheme,
  IconButton,
  Stack,
  useMediaQuery,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import {
  Speed,
  LocalGasStation,
  AttachMoney,
  Star,
  ArrowBack,
  ShoppingCart,
  Check,
} from '@mui/icons-material';
import { addToCart } from '../features/cartSlice';
import { images } from '../utils/imageUrls';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`car-tabpanel-${index}`}
      aria-labelledby={`car-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Sample car data (in a real app, this would come from an API)
const carData = {
  id: '1',
  name: 'Tesla Model 3',
  price: 45000,
  image: images.cars['tesla-model-3'],
  brand: 'Tesla',
  category: 'Electric',
  year: 2023,
  description: 'The Tesla Model 3 is an electric four-door sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km).',
  specifications: {
    'Range': '263 miles',
    'Top Speed': '140 mph',
    'Acceleration': '0-60 mph in 5.3s',
    'Drive': 'Rear-Wheel Drive',
    'Peak Power': '283 horsepower',
    'Wheels': '18" or 19"',
    'Weight': '3,582 lbs',
    'Cargo': '23 cu ft',
  },
  features: [
    'Autopilot',
    '15" Touchscreen',
    'Wireless Charging',
    'Premium Audio System',
    'Glass Roof',
    'LED Fog Lamps',
  ],
  highlights: [
    {
      icon: <Speed />,
      title: 'Performance',
      value: '0-60 mph in 5.3s',
    },
    {
      icon: <LocalGasStation />,
      title: 'Range',
      value: '263 miles',
    },
    {
      icon: <AttachMoney />,
      title: 'Starting Price',
      value: '$45,000',
    },
    {
      icon: <Star />,
      title: 'Rating',
      value: '4.9/5.0',
    },
  ],
};

const CarDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState(0);

  // Find the car from the sample data
  const car = carData;

  if (!car) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Car Not Found
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/cars')}
            sx={{ mt: 2 }}
          >
            Back to Cars
          </Button>
        </Box>
      </Container>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 3, md: 4 },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          {/* Navigation */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ mb: { xs: 3, md: 4 } }}
          >
            <IconButton
              onClick={() => navigate('/cars')}
              sx={{ 
                bgcolor: 'background.paper',
                boxShadow: 1,
                '&:hover': { bgcolor: 'background.paper' }
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h4" component="h1">
              Car Details
            </Typography>
          </Stack>

          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            sx={{
              flexGrow: 1,
              alignContent: 'flex-start',
            }}
          >
            {/* Car Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                    position: 'relative',
                    '& img': {
                      width: '100%',
                      height: { xs: '300px', sm: '400px', md: '500px' },
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <img src={car.image} alt={car.name} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={car.category}
                      color="primary"
                      sx={{ bgcolor: 'rgba(25, 118, 210, 0.9)' }}
                    />
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Car Info */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, md: 4 },
                    height: '100%',
                    borderRadius: theme.shape.borderRadius,
                  }}
                >
                  <Typography variant="h3" component="h2" gutterBottom>
                    {car.name}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    ${car.price.toLocaleString()}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                    <Chip label={car.brand} />
                    <Chip label={car.year} />
                  </Stack>

                  {/* Highlights */}
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {car.highlights.map((highlight, index) => (
                      <Grid item xs={6} sm={3} key={index}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            height: '100%',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: theme.shadows[8],
                            },
                          }}
                        >
                          <Box sx={{ color: 'primary.main', mb: 1 }}>
                            {highlight.icon}
                          </Box>
                          <Typography variant="subtitle2" gutterBottom>
                            {highlight.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {highlight.value}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 'auto' }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleAddToCart}
                      startIcon={<ShoppingCart />}
                      fullWidth
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/cars')}
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Back to Listings
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>

            {/* Tabs Section */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    mt: { xs: 2, md: 4 },
                    borderRadius: theme.shape.borderRadius,
                    overflow: 'hidden',
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    centered
                    variant={isMobile ? 'fullWidth' : 'standard'}
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      '& .MuiTab-root': {
                        py: 2,
                        minHeight: 64,
                      },
                    }}
                  >
                    <Tab label="Description" />
                    <Tab label="Specifications" />
                    <Tab label="Features" />
                  </Tabs>

                  <TabPanel value={value} index={0}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {car.description}
                    </Typography>
                  </TabPanel>

                  <TabPanel value={value} index={1}>
                    <TableContainer>
                      <Table>
                        <TableBody>
                          {Object.entries(car.specifications).map(([key, value]) => (
                            <TableRow key={key}>
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontWeight: 600, width: { xs: '50%', md: '40%' } }}
                              >
                                {key}
                              </TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>

                  <TabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                      {car.features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              transition: 'transform 0.2s',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: theme.shadows[4],
                              },
                            }}
                          >
                            <Check color="primary" />
                            <Typography>{feature}</Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </TabPanel>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CarDetails; 