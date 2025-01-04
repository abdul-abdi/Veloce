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
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: { xs: 1.2, sm: 1.3 },
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
                variant="subtitle1"
                paragraph
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 500,
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: { xs: 1.5, sm: 1.6 },
                }}
              >
                Have questions about our cars or services? We'd love to hear from you.
                Our team is ready to assist you with any inquiries you may have.
              </Typography>

              <Box sx={{ mb: { xs: 4, sm: 6 } }}>
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
                          p: { xs: 1.5, sm: 2 },
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 1.5, sm: 2 },
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.02)',
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

              <Box>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  color="text.primary"
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    mb: { xs: 1.5, sm: 2 },
                  }}
                >
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 } }}>
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
                          color: theme.palette.primary.main,
                          width: { xs: 40, sm: 48 },
                          height: { xs: 40, sm: 48 },
                          '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(0, 0, 0, 0.02)',
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
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 2,
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
                          textTransform: 'none',
                          fontSize: { xs: '1rem', sm: '1.1rem' },
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
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 