import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Chip,
  Rating,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  Drawer,
  useMediaQuery,
  Fab,
  Tooltip,
  CircularProgress,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Search,
  FilterList,
  FavoriteBorder,
  CompareArrows,
  Sort,
  Clear,
  DirectionsCar,
  LocalGasStation,
  Settings,
  Close,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  year: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  condition: string;
}

const sampleCars: Car[] = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800',
    price: 89990,
    category: 'Electric',
    rating: 5,
    reviews: 128,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Electric',
    condition: 'New',
  },
  {
    id: 2,
    name: 'Porsche 911',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800',
    price: 129900,
    category: 'Sports',
    rating: 5,
    reviews: 96,
    year: 2023,
    mileage: '1,200',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    condition: 'New',
  },
  {
    id: 3,
    name: 'BMW M4',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800',
    price: 74900,
    category: 'Luxury',
    rating: 4.9,
    reviews: 84,
    year: 2023,
    mileage: '500',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    condition: 'New',
  },
  {
    id: 4,
    name: 'Audi e-tron GT',
    image: 'https://images.unsplash.com/photo-1621689562058-4778e161c3e5?auto=format&fit=crop&w=800',
    price: 99900,
    category: 'Electric',
    rating: 4.8,
    reviews: 72,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Electric',
    condition: 'New',
  },
  {
    id: 5,
    name: 'Mercedes-Benz S-Class',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800',
    price: 109900,
    category: 'Luxury',
    rating: 4.9,
    reviews: 91,
    year: 2023,
    mileage: '1,500',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    condition: 'New',
  },
  {
    id: 6,
    name: 'Range Rover Sport',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800',
    price: 84900,
    category: 'SUV',
    rating: 4.7,
    reviews: 68,
    year: 2023,
    mileage: '2,000',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    condition: 'New',
  },
  {
    id: 7,
    name: 'Lamborghini Huracán',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800',
    price: 249900,
    category: 'Supercar',
    rating: 4.9,
    reviews: 45,
    year: 2023,
    mileage: '150',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    condition: 'New',
  },
  {
    id: 8,
    name: 'Toyota Camry Hybrid',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800',
    price: 32900,
    category: 'Sedan',
    rating: 4.6,
    reviews: 156,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    condition: 'New',
  },
  {
    id: 9,
    name: 'BMW i4',
    image: 'https://images.unsplash.com/photo-1617814065893-c533bc153ec1?auto=format&fit=crop&w=800',
    price: 65900,
    category: 'Electric',
    rating: 4.7,
    reviews: 62,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Electric',
    condition: 'New',
  },
  {
    id: 10,
    name: 'Porsche Taycan',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=800',
    price: 86900,
    category: 'Electric',
    rating: 4.8,
    reviews: 78,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Electric',
    condition: 'New',
  },
  {
    id: 11,
    name: 'Ferrari F8 Tributo',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800',
    price: 329900,
    category: 'Supercar',
    rating: 5,
    reviews: 32,
    year: 2023,
    mileage: '100',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    condition: 'New',
  },
  {
    id: 12,
    name: 'Lexus LS 500h',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800',
    price: 95900,
    category: 'Luxury',
    rating: 4.7,
    reviews: 85,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    condition: 'New',
  },
  {
    id: 13,
    name: 'Audi RS e-tron GT',
    image: 'https://images.unsplash.com/photo-1621689562058-4778e161c3e5?auto=format&fit=crop&w=800',
    price: 139900,
    category: 'Electric',
    rating: 4.9,
    reviews: 42,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Electric',
    condition: 'New',
  },
  {
    id: 14,
    name: 'McLaren 720S',
    image: 'https://images.unsplash.com/photo-1621815135928-63c21f0d4a38?auto=format&fit=crop&w=800',
    price: 299900,
    category: 'Supercar',
    rating: 4.9,
    reviews: 28,
    year: 2023,
    mileage: '200',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    condition: 'New',
  },
  {
    id: 15,
    name: 'BMW M8 Competition',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800',
    price: 130900,
    category: 'Sports',
    rating: 4.8,
    reviews: 56,
    year: 2023,
    mileage: '0',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    condition: 'New',
  },
];

const CarListing = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isLoading, setIsLoading] = useState(true);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedCars, setSelectedCars] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filteredCars, setFilteredCars] = useState<Car[]>(sampleCars);
  const [filters, setFilters] = useState({
    electric: false,
    hybrid: false,
    petrol: false,
    diesel: false,
    automatic: false,
    manual: false,
    new: false,
    used: false,
  });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorEl(null);
  };

  const handleSortSelect = (value: string) => {
    setSortBy(value);
    handleSortClose();
  };

  const filterCars = () => {
    let results = [...sampleCars];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(car => 
        car.name.toLowerCase().includes(query) ||
        car.category.toLowerCase().includes(query) ||
        car.fuelType.toLowerCase().includes(query) ||
        car.transmission.toLowerCase().includes(query)
      );
    }

    // Apply price range filter
    results = results.filter(car => 
      car.price >= priceRange[0] && car.price <= priceRange[1]
    );

    // Apply fuel type filters
    if (filters.electric || filters.hybrid || filters.petrol || filters.diesel) {
      results = results.filter(car => {
        if (filters.electric && car.fuelType === 'Electric') return true;
        if (filters.hybrid && car.fuelType === 'Hybrid') return true;
        if (filters.petrol && car.fuelType === 'Petrol') return true;
        if (filters.diesel && car.fuelType === 'Diesel') return true;
        return false;
      });
    }

    // Apply transmission filters
    if (filters.automatic || filters.manual) {
      results = results.filter(car => {
        if (filters.automatic && car.transmission === 'Automatic') return true;
        if (filters.manual && car.transmission === 'Manual') return true;
        return false;
      });
    }

    // Apply condition filters
    if (filters.new || filters.used) {
      results = results.filter(car => {
        if (filters.new && car.condition === 'New') return true;
        if (filters.used && car.condition === 'Used') return true;
        return false;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' sorting is default
        break;
    }

    setFilteredCars(results);
  };

  useEffect(() => {
    filterCars();
  }, [searchQuery, priceRange, filters, sortBy]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handlePriceRangeChange = (_: Event, newValue: number | number[]) => {
    setPriceRange(Array.isArray(newValue) ? newValue : [newValue, newValue]);
  };

  const handleFilterChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [name]: event.target.checked });
  };

  const handleCompare = (carId: number) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter(id => id !== carId));
    } else if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, carId]);
    }
  };

  const FilterDrawerContent = () => (
    <Box sx={{ 
      width: isMobile ? '100%' : 280, 
      p: { xs: 2, sm: 3 },
      height: isMobile ? 'auto' : '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: { xs: 2, sm: 3 },
        position: 'sticky',
        top: 0,
        bgcolor: theme.palette.background.paper,
        zIndex: 1,
        py: 1
      }}>
        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600 }}>
          Filters
        </Typography>
        <IconButton
          onClick={() => setFilterDrawerOpen(false)}
          sx={{
            color: theme.palette.text.primary,
            '&:hover': {
              transform: 'rotate(90deg)',
            },
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <Box sx={{ 
        flexGrow: 1, 
        overflowY: 'auto',
        pb: isMobile ? 8 : 0 
      }}>
        <Typography variant="subtitle1" gutterBottom color="text.primary" sx={{ fontWeight: 500 }}>
          Price Range
        </Typography>
        <Box sx={{ px: { xs: 1, sm: 2 }, mb: 4 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={200000}
            step={5000}
            valueLabelFormat={(value) => `$${value.toLocaleString()}`}
            sx={{
              '& .MuiSlider-thumb': {
                width: { xs: 20, sm: 24 },
                height: { xs: 20, sm: 24 },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0 0 0 8px ${theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.16)'
                    : 'rgba(0, 0, 0, 0.16)'}`,
                },
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              ${priceRange[0].toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${priceRange[1].toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* Filter Sections */}
        {[
          { title: 'Fuel Type', options: ['electric', 'hybrid', 'petrol', 'diesel'] },
          { title: 'Transmission', options: ['automatic', 'manual'] },
          { title: 'Condition', options: ['new', 'used'] },
        ].map((section) => (
          <Box key={section.title} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom color="text.primary" sx={{ fontWeight: 500 }}>
              {section.title}
            </Typography>
            <FormGroup>
              {section.options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={filters[option as keyof typeof filters]}
                      onChange={handleFilterChange(option)}
                      sx={{
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label={option.charAt(0).toUpperCase() + option.slice(1)}
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      color: theme.palette.text.primary,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    },
                    py: { xs: 0.5, sm: 0.75 },
                  }}
                />
              ))}
            </FormGroup>
          </Box>
        ))}
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        mt: 2,
        position: isMobile ? 'fixed' : 'relative',
        bottom: isMobile ? 0 : 'auto',
        left: isMobile ? 0 : 'auto',
        right: isMobile ? 0 : 'auto',
        p: isMobile ? 2 : 0,
        bgcolor: theme.palette.background.paper,
        borderTop: isMobile ? `1px solid ${theme.palette.divider}` : 'none',
        width: isMobile ? '100%' : 'auto',
      }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            setFilters({
              electric: false,
              hybrid: false,
              petrol: false,
              diesel: false,
              automatic: false,
              manual: false,
              new: false,
              used: false,
            });
            setPriceRange([0, 200000]);
          }}
          sx={{
            py: 1.5,
            borderRadius: 2,
            borderWidth: 2,
            '&:hover': { borderWidth: 2 },
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setFilterDrawerOpen(false)}
          sx={{
            py: 1.5,
            borderRadius: 2,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          }}
        >
          Apply Filters
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      {/* Header Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 200, sm: 220, md: 240 },
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
            background: `url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: theme.palette.mode === 'dark' ? 0.3 : 0.1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: { xs: 1.2, sm: 1.3 },
                mb: { xs: 1, sm: 2 },
              }}
            >
              Find Your Perfect Car
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 600,
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                lineHeight: { xs: 1.4, sm: 1.5 },
              }}
            >
              Browse our extensive collection of premium vehicles
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Search and Filter Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: -2, sm: -3, md: -4 }, position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1a1a1a, #121212)'
              : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
            borderRadius: 2,
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          }}
        >
          <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search by make, model, or keyword"
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  endAdornment: searchQuery && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setSearchQuery('')}>
                        <Clear />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.02)',
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.05)',
                    },
                  },
                }}
                sx={{ mb: { xs: 1, md: 0 } }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Sort />}
                onClick={handleSortClick}
                sx={{
                  height: { xs: '45px', md: '100%' },
                  borderWidth: 2,
                  borderRadius: 2,
                  '&:hover': { borderWidth: 2 },
                  fontSize: { xs: '0.875rem', sm: 'inherit' }
                }}
              >
                {isMobile ? 'Sort' : `Sort By: ${sortOptions.find(option => option.value === sortBy)?.label}`}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleSortClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: { xs: 140, sm: 180 },
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #1a1a1a, #121212)'
                      : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  },
                }}
              >
                {sortOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    onClick={() => handleSortSelect(option.value)}
                    selected={sortBy === option.value}
                    sx={{
                      py: { xs: 1, sm: 1.5 },
                      px: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '0.875rem', sm: 'inherit' },
                      '&.Mui-selected': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.05)',
                      },
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.15)'
                          : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<FilterList />}
                onClick={() => setFilterDrawerOpen(true)}
                sx={{
                  height: { xs: '45px', md: '100%' },
                  borderRadius: 2,
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                  },
                  fontSize: { xs: '0.875rem', sm: 'inherit' }
                }}
              >
                {isMobile ? 'Filter' : `Filters ${Object.values(filters).filter(Boolean).length > 0 ? `(${Object.values(filters).filter(Boolean).length})` : ''}`}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Car Listings */}
      <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 400,
              }}
            >
              <CircularProgress />
            </Box>
          ) : filteredCars.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 400,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom color="text.primary">
                No cars found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search criteria or filters
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setSearchQuery('');
                  setPriceRange([0, 200000]);
                  setFilters({
                    electric: false,
                    hybrid: false,
                    petrol: false,
                    diesel: false,
                    automatic: false,
                    manual: false,
                    new: false,
                    used: false,
                  });
                  setSortBy('featured');
                }}
                sx={{ mt: 2 }}
              >
                Clear all filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredCars.map((car, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        borderRadius: 2,
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: isMobile ? 'none' : 'translateY(-8px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 8px 30px rgba(0, 0, 0, 0.5)'
                            : '0 8px 30px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height={isMobile ? "200" : "240"}
                        image={car.image}
                        alt={car.name}
                        sx={{
                          objectFit: 'cover',
                          borderRadius: '8px 8px 0 0',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 8, sm: 12 },
                          right: { xs: 8, sm: 12 },
                          display: 'flex',
                          gap: { xs: 0.5, sm: 1 },
                        }}
                      >
                        <Tooltip title="Add to Favorites">
                          <IconButton
                            sx={{
                              bgcolor: 'background.paper',
                              width: { xs: 32, sm: 40 },
                              height: { xs: 32, sm: 40 },
                              '&:hover': {
                                bgcolor: 'background.paper',
                                transform: 'scale(1.1)',
                              },
                              transition: 'transform 0.2s ease-in-out',
                            }}
                          >
                            <FavoriteBorder sx={{ fontSize: { xs: 18, sm: 24 } }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={selectedCars.includes(car.id) ? 'Remove from Compare' : 'Add to Compare'}>
                          <IconButton
                            onClick={() => handleCompare(car.id)}
                            sx={{
                              bgcolor: selectedCars.includes(car.id) ? 'primary.main' : 'background.paper',
                              color: selectedCars.includes(car.id) ? 'common.white' : 'inherit',
                              width: { xs: 32, sm: 40 },
                              height: { xs: 32, sm: 40 },
                              '&:hover': {
                                bgcolor: selectedCars.includes(car.id) ? 'primary.dark' : 'background.paper',
                                transform: 'scale(1.1)',
                              },
                              transition: 'transform 0.2s ease-in-out',
                            }}
                          >
                            <CompareArrows sx={{ fontSize: { xs: 18, sm: 24 } }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 1, sm: 2 } }}>
                          <Typography 
                            variant="h6" 
                            component="h3" 
                            color="text.primary" 
                            sx={{ 
                              fontWeight: 600,
                              fontSize: { xs: '1rem', sm: '1.25rem' },
                              lineHeight: 1.2,
                            }}
                          >
                            {car.name}
                          </Typography>
                          <Chip
                            label={car.category}
                            color="primary"
                            size={isMobile ? "small" : "medium"}
                            sx={{
                              borderRadius: 1,
                              fontWeight: 500,
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Rating value={car.rating} readOnly size="small" />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            ({car.reviews} reviews)
                          </Typography>
                        </Box>
                        <Stack spacing={1.5} sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <DirectionsCar sx={{ fontSize: 20, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {car.year} • {car.mileage} miles
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Settings sx={{ fontSize: 20, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {car.transmission}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocalGasStation sx={{ fontSize: 20, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {car.fuelType}
                            </Typography>
                          </Box>
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                            ${car.price.toLocaleString()}
                          </Typography>
                          <Chip
                            label={car.condition}
                            color={car.condition === 'New' ? 'success' : 'warning'}
                            size="small"
                            sx={{ borderRadius: 1 }}
                          />
                        </Box>
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={() => navigate(`/cars/${car.id}`)}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 500,
                            boxShadow: 'none',
                            '&:hover': {
                              boxShadow: 'none',
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}
        </AnimatePresence>
      </Container>

      {/* Compare Fab */}
      {selectedCars.length > 0 && (
        <Fab
          variant={isMobile ? "circular" : "extended"}
          color="primary"
          sx={{
            position: 'fixed',
            bottom: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 24 },
            zIndex: 1000,
            borderRadius: isMobile ? '50%' : 3,
            minHeight: { xs: 48, sm: 56 },
            width: isMobile ? 48 : 'auto',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(0, 0, 0, 0.5)'
              : '0 4px 20px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              boxShadow: theme.palette.mode === 'dark'
                ? '0 6px 30px rgba(0, 0, 0, 0.7)'
                : '0 6px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
          onClick={() => navigate('/compare')}
        >
          <CompareArrows sx={{ 
            mr: isMobile ? 0 : 1,
            fontSize: { xs: 24, sm: 28 }
          }} />
          {!isMobile && `Compare (${selectedCars.length})`}
        </Fab>
      )}

      {/* Filter Drawer */}
      <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1a1a1a, #121212)'
              : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
            borderRadius: isMobile ? '16px 16px 0 0' : 0,
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            maxHeight: isMobile ? '90vh' : '100vh',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.2)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.3)'
                : 'rgba(0, 0, 0, 0.3)',
            },
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <FilterDrawerContent />
      </Drawer>
    </Box>
  );
};

export default CarListing; 