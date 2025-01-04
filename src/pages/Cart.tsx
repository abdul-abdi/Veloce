import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import { Delete as DeleteIcon, ShoppingCart } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RootState } from '../features/store';
import { removeFromCart, updateQuantity, clearCart, CartItem } from '../features/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items) as CartItem[];
  const total = useSelector((state: RootState) => state.cart.total) as number;

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    alert('Proceeding to checkout...');
    dispatch(clearCart());
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              px: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <ShoppingCart sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Your Cart is Empty
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Looks like you haven't added any cars to your cart yet.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/cars')}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
              }}
            >
              Explore Collection
            </Button>
          </Box>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Shopping Cart
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.name}
                          sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 1,
                            objectFit: 'cover',
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                          {item.name}
                        </Typography>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                          ${item.price.toLocaleString()}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          inputProps={{ min: 1 }}
                          size="small"
                          fullWidth
                          label="Quantity"
                        />
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <IconButton
                          color="error"
                          onClick={() => handleRemoveItem(item.id)}
                          sx={{ 
                            '&:hover': { 
                              transform: 'scale(1.1)',
                              bgcolor: 'error.dark',
                            }
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Subtotal</Typography>
                  <Typography>${total.toLocaleString()}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6" color="primary">
                    ${total.toLocaleString()}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleCheckout}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #00bcd4 30%, #62efff 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #008ba3 30%, #00bcd4 90%)',
                    },
                  }}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/cars')}
                  sx={{ mt: 1 }}
                >
                  Continue Shopping
                </Button>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart; 