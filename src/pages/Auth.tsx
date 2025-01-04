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
            borderRadius: 4,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
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
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 1,
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
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: 400,
                  }}
                >
                  {isLogin
                    ? 'Sign in to access your account and explore our premium car collection.'
                    : 'Join us to discover exclusive car deals and personalized recommendations.'}
                </Typography>
              </motion.div>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
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
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(0, 0, 0, 0.4)'
                          : '0 4px 12px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 6px 16px rgba(0, 0, 0, 0.5)'
                            : '0 6px 16px rgba(0, 0, 0, 0.15)',
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
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                          },
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
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                          },
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
              borderRadius: '0 4px 4px 0',
            }}
          >
            <motion.div
              animate={{
                x: isLogin ? '0%' : '-100%',
                opacity: 1,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '200%',
                height: '100%',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1000)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 4,
                  color: 'white',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                  Welcome to VELOCE
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 400 }}>
                  Experience luxury and performance with our premium car collection.
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 4,
                  color: 'white',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                  Join Our Community
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 400 }}>
                  Create an account to unlock exclusive deals and personalized recommendations.
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Auth; 