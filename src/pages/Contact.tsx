import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  useTheme,
  IconButton,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Send,
  AccessTime,
  Language,
  Star,
  DirectionsCar,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const contactInfo: ContactInfo = {
  address: '123 Car Street, Auto City, AC 12345',
  phone: '+1 (555) 123-4567',
  email: 'info@veloce.com',
};

const socialLinks = [
  { icon: <Facebook />, url: 'https://facebook.com' },
  { icon: <Twitter />, url: 'https://twitter.com' },
  { icon: <Instagram />, url: 'https://instagram.com' },
  { icon: <LinkedIn />, url: 'https://linkedin.com' },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const stats = [
  { icon: <DirectionsCar />, value: '500+', label: 'Premium Cars' },
  { icon: <Star />, value: '4.9', label: 'Customer Rating' },
  { icon: <Language />, value: '24/7', label: 'Online Support' },
];

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSnackbar({
        open: true,
        message: 'Thank you for your message! We\'ll get back to you soon.',
        severity: 'success',
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Something went wrong. Please try again later.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

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
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #fff 30%, #ccc 90%)'
                : 'linear-gradient(45deg, #000 30%, #333 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Have questions about our cars or services? We'd love to hear from you.
            Our team is ready to assist you with any inquiries.
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mb: { xs: 4, sm: 6 } }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                      : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                    borderRadius: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: theme.palette.primary.main,
                      '& .MuiSvgIcon-root': {
                        fontSize: '2rem',
                      },
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
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
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={{ xs: 2, sm: 3 }}>
                    <Grid item xs={12}>
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        color="text.primary"
                        sx={{
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          mb: { xs: 2, sm: 3 },
                          fontWeight: 600,
                        }}
                      >
                        Send us a Message
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiInputBase-root': {
                            height: { xs: '45px', sm: '56px' },
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(0, 0, 0, 0.02)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiInputBase-root': {
                            height: { xs: '45px', sm: '56px' },
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(0, 0, 0, 0.02)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiInputBase-root': {
                            height: { xs: '45px', sm: '56px' },
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(0, 0, 0, 0.02)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiInputBase-root': {
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(0, 0, 0, 0.02)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                        sx={{
                          py: { xs: 1.5, sm: 2 },
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: { xs: '1rem', sm: '1.1rem' },
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
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: { xs: 4, sm: 6 } }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                  }}
                >
                  Contact Information
                </Typography>
                <Grid container spacing={{ xs: 2, sm: 3 }}>
                  {[
                    { icon: <LocationOn />, text: contactInfo.address },
                    { icon: <Phone />, text: contactInfo.phone },
                    { icon: <Email />, text: contactInfo.email },
                  ].map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: { xs: 2, sm: 2.5 },
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 1.5, sm: 2 },
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                          borderRadius: 2,
                          transition: 'transform 0.2s ease-in-out',
                          '&:hover': {
                            transform: 'translateX(8px)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            color: theme.palette.primary.main,
                            display: 'flex',
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography 
                          color="text.primary"
                          sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            lineHeight: { xs: 1.4, sm: 1.5 },
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ mb: { xs: 4, sm: 6 } }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                  }}
                >
                  Business Hours
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(18, 18, 18, 0.9))'
                      : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.95))',
                    borderRadius: 2,
                  }}
                >
                  {businessHours.map((schedule, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 1.5,
                        borderBottom: index < businessHours.length - 1
                          ? `1px solid ${theme.palette.divider}`
                          : 'none',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: theme.palette.text.primary,
                        }}
                      >
                        <AccessTime
                          sx={{
                            fontSize: '1.25rem',
                            color: theme.palette.primary.main,
                          }}
                        />
                        {schedule.day}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: schedule.hours === 'Closed'
                            ? theme.palette.error.main
                            : theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        {schedule.hours}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </Box>

              <Box>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                  }}
                >
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 1.5, sm: 2 },
                    flexWrap: 'wrap',
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'white',
                          width: { xs: 45, sm: 54 },
                          height: { xs: 45, sm: 54 },
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          '&:hover': {
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)'
                              : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          bottom: { xs: 16, sm: 24 },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            width: '100%',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            borderRadius: 2,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 