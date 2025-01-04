import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  IconButton,
  InputAdornment,
  Link,
  Alert,
  Divider,
  Stack,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  Phone,
  Google,
  Apple,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Auth = () => {
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form submitted:', formData);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      email: '',
      password: '',
      name: '',
      phone: '',
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 12 },
        pb: 8,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 600,
            display: 'flex',
            flexDirection: isLogin ? 'row' : 'row-reverse',
            borderRadius: 4,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
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
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: isLogin ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 50 : -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '48px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      fontSize: { xs: '2rem', sm: '2.5rem' },
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(45deg, #fff 30%, #ccc 90%)'
                        : 'linear-gradient(45deg, #000 30%, #333 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      color: theme.palette.text.secondary,
                      maxWidth: 400,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {isLogin
                      ? 'Sign in to access your account and explore our premium car collection.'
                      : 'Join us to discover exclusive car deals and personalized recommendations.'}
                  </Typography>
                  {!isLogin && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          ✓
                        </motion.div>
                        Access to exclusive deals and offers
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          ✓
                        </motion.div>
                        Personalized car recommendations
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          ✓
                        </motion.div>
                        Save favorite cars and searches
                      </Typography>
                    </Box>
                  )}
                </Box>
              </motion.div>

              {error && (
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3,
                    borderRadius: 2,
                    '& .MuiAlert-icon': {
                      fontSize: '1.5rem'
                    }
                  }}
                >
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Stack spacing={2.5}>
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Stack spacing={2.5}>
                        <TextField
                          required
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person sx={{ color: theme.palette.primary.main }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                            }
                          }}
                        />
                        <TextField
                          required
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Phone sx={{ color: theme.palette.primary.main }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                            }
                          }}
                        />
                      </Stack>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Stack spacing={2.5}>
                      <TextField
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                          }
                        }}
                      />
                      <TextField
                        required
                        fullWidth
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                sx={{ color: theme.palette.primary.main }}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                          }
                        }}
                      />
                    </Stack>
                  </motion.div>

                  {isLogin && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        component={RouterLink}
                        to="/forgot-password"
                        sx={{
                          display: 'block',
                          textAlign: 'right',
                          color: theme.palette.primary.main,
                          textDecoration: 'none',
                          fontWeight: 500,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Forgot password?
                      </Link>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2,
                        py: 1.8,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(33, 150, 243, 0.4)'
                          : '0 4px 12px rgba(33, 150, 243, 0.2)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 6px 16px rgba(33, 150, 243, 0.5)'
                            : '0 6px 16px rgba(33, 150, 243, 0.3)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Box sx={{ position: 'relative', my: 3 }}>
                      <Divider>
                        <Typography
                          variant="body2"
                          sx={{
                            px: 2,
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Or continue with
                        </Typography>
                      </Divider>
                    </Box>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: '100%', mb: 3 }}
                    >
                      <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        startIcon={<Google />}
                        sx={{
                          py: 1.8,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                              : '0 4px 12px rgba(0, 0, 0, 0.1)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        Google
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        startIcon={<Apple />}
                        sx={{
                          py: 1.8,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                              : '0 4px 12px rgba(0, 0, 0, 0.1)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        Apple
                      </Button>
                    </Stack>
                  </motion.div>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {isLogin ? "Don't have an account? " : 'Already have an account? '}
                      <Link
                        component="button"
                        variant="body2"
                        onClick={toggleMode}
                        sx={{
                          color: theme.palette.primary.main,
                          textDecoration: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {isLogin ? 'Sign Up' : 'Sign In'}
                      </Link>
                    </Typography>
                  </Box>
                </Stack>
              </form>
            </motion.div>
          </AnimatePresence>

          <Box
            sx={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              display: { xs: 'none', md: 'block' },
              borderRadius: isLogin ? '0 4px 4px 0' : '4px 0 0 4px',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${isLogin ? 'https://images.unsplash.com/photo-1583121274602-3e2820c69888' : 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7'}?auto=format&fit=crop&w=1000)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                color: 'white',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800, 
                      mb: 2, 
                      textAlign: 'center',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                    }}
                  >
                    {isLogin ? 'Welcome to VELOCE' : 'Join Our Community'}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      textAlign: 'center', 
                      maxWidth: 400, 
                      mx: 'auto',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      lineHeight: 1.6
                    }}
                  >
                    {isLogin 
                      ? 'Experience luxury and performance with our premium car collection.'
                      : 'Create an account to unlock exclusive deals and personalized recommendations.'}
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Auth; 