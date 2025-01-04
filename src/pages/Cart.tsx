import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  useTheme,
  Paper,
  Divider,
  Stack,
  CardContent,
  Tooltip,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  ShoppingCart,
  LocalShipping,
  Payment,
  Security,
  ArrowForward,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../features/store';
import { removeFromCart, updateQuantity, clearCart, CartItem } from '../features/cartSlice';
import { useState } from 'react';

const features = [
  {
    icon: <LocalShipping sx={{ fontSize: '2rem' }} />,
    title: 'Free Shipping',
    description: 'Free shipping on all orders',
  },
  {
    icon: <Payment sx={{ fontSize: '2rem' }} />,
    title: 'Secure Payment',
    description: 'Multiple payment methods accepted',
  },
  {
    icon: <Security sx={{ fontSize: '2rem' }} />,
    title: 'Buyer Protection',
    description: '100% secure transaction',
  },
];

const Cart = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items) as CartItem[];
  const total = useSelector((state: RootState) => state.cart.total) as number;
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    setSnackbar({ open: true, message: 'Item removed from cart' });
  };

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    alert('Proceeding to checkout...');
    dispatch(clearCart());
    navigate('/');
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          pt: { xs: 4, sm: 8, md: 12 },
          pb: { xs: 6, sm: 8 },
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #000000 0%, #1a1a1a 100%)'
            : 'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                textAlign: 'center',
                py: { xs: 6, sm: 8 },
                px: { xs: 3, sm: 4 },
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: theme.palette.mode === 'dark'
                    ? 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%)'
                    : 'radial-gradient(circle at top right, rgba(0, 0, 0, 0.05), transparent 70%)',
                  pointerEvents: 'none',
                },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ShoppingCart 
                  sx={{ 
                    fontSize: { xs: 60, sm: 80 }, 
                    color: 'primary.main',
                    mb: { xs: 2, sm: 3 },
                  }} 
                />
              </motion.div>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2.5rem' },
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #fff 30%, #ccc 90%)'
                    : 'linear-gradient(45deg, #000 30%, #333 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your Cart is Empty
              </Typography>
              <Typography 
                color="text.secondary" 
                sx={{ 
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                Looks like you haven't added any cars to your cart yet.
                Explore our collection to find your perfect ride.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/cars')}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 4, sm: 6 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 600,
                  borderRadius: 2,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                    : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 12px rgba(33, 150, 243, 0.4)'
                    : '0 4px 12px rgba(33, 150, 243, 0.2)',
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)'
                      : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 6px 16px rgba(33, 150, 243, 0.5)'
                      : '0 6px 16px rgba(33, 150, 243, 0.3)',
                  },
                }}
              >
                Explore Collection
              </Button>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 4, sm: 8, md: 12 },
        pb: { xs: 6, sm: 8 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(45deg, #000000 0%, #1a1a1a 100%)'
          : 'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: { xs: 3, sm: 4 },
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #fff 30%, #ccc 90%)'
                : 'linear-gradient(45deg, #000 30%, #333 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Shopping Cart
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <AnimatePresence mode="wait">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                          : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                        borderRadius: 2,
                        overflow: 'hidden',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: theme.palette.mode === 'dark'
                            ? 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%)'
                            : 'radial-gradient(circle at top right, rgba(0, 0, 0, 0.05), transparent 70%)',
                          pointerEvents: 'none',
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                        <Grid container spacing={3} alignItems="center">
                          <Grid item xs={12} sm={4}>
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{
                                width: '100%',
                                height: { xs: 150, sm: 180 },
                                borderRadius: 2,
                                objectFit: 'cover',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                                    mb: 1,
                                  }}
                                >
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="primary"
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                    mb: { xs: 2, sm: 3 },
                                  }}
                                >
                                  ${item.price.toLocaleString()}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  flexWrap: 'wrap',
                                  gap: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    bgcolor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.05)'
                                      : 'rgba(0, 0, 0, 0.02)',
                                    borderRadius: 2,
                                    p: 0.5,
                                  }}
                                >
                                  <IconButton
                                    size="small"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    sx={{
                                      bgcolor: theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.1)'
                                        : 'rgba(0, 0, 0, 0.05)',
                                    }}
                                  >
                                    <RemoveIcon />
                                  </IconButton>
                                  <Typography
                                    sx={{
                                      minWidth: 40,
                                      textAlign: 'center',
                                      fontWeight: 600,
                                    }}
                                  >
                                    {item.quantity}
                                  </Typography>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    sx={{
                                      bgcolor: theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.1)'
                                        : 'rgba(0, 0, 0, 0.05)',
                                    }}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </Box>
                                <Tooltip title="Remove from cart">
                                  <IconButton
                                    onClick={() => handleRemoveItem(item.id)}
                                    sx={{
                                      color: theme.palette.error.main,
                                      '&:hover': {
                                        bgcolor: theme.palette.error.main,
                                        color: 'white',
                                      },
                                    }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Paper>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.mode === 'dark'
                      ? 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%)'
                      : 'radial-gradient(circle at top right, rgba(0, 0, 0, 0.05), transparent 70%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  Order Summary
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">Subtotal</Typography>
                    <Typography fontWeight={600}>${total.toLocaleString()}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">Shipping</Typography>
                    <Typography
                      sx={{
                        color: theme.palette.success.main,
                        fontWeight: 600,
                      }}
                    >
                      Free
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">Tax</Typography>
                    <Typography fontWeight={600}>
                      ${(total * 0.1).toLocaleString()}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Total
                    </Typography>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography
                        variant="h5"
                        color="primary"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: '1.5rem', sm: '1.75rem' },
                        }}
                      >
                        ${(total * 1.1).toLocaleString()}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block' }}
                      >
                        Including VAT
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleCheckout}
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: 2,
                      py: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 12px rgba(33, 150, 243, 0.4)'
                        : '0 4px 12px rgba(33, 150, 243, 0.2)',
                      '&:hover': {
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)'
                          : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 6px 16px rgba(33, 150, 243, 0.5)'
                          : '0 6px 16px rgba(33, 150, 243, 0.3)',
                      },
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/cars')}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      borderWidth: 2,
                      '&:hover': { borderWidth: 2 },
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Stack>
              </Paper>

              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                            borderRadius: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 48,
                              height: 48,
                              borderRadius: '50%',
                              color: 'primary.main',
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(33, 150, 243, 0.1)'
                                : 'rgba(33, 150, 243, 0.1)',
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: { xs: '1rem', sm: '1.1rem' },
                              }}
                            >
                              {feature.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: { xs: '0.875rem', sm: '0.9rem' },
                              }}
                            >
                              {feature.description}
                            </Typography>
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart; 