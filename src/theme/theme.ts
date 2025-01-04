import { createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeMode } from './ThemeContext';

const getTheme = (mode: ThemeMode) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#00bcd4' : '#0097a7',
        light: mode === 'dark' ? '#62efff' : '#4dd0e1',
        dark: mode === 'dark' ? '#008ba3' : '#006064',
      },
      secondary: {
        main: mode === 'dark' ? '#ff4081' : '#e91e63',
        light: mode === 'dark' ? '#ff79b0' : '#f48fb1',
        dark: mode === 'dark' ? '#c60055' : '#ad1457',
      },
      background: {
        default: mode === 'dark' ? '#0a0a0a' : '#ffffff',
        paper: mode === 'dark' ? '#121212' : '#f8f8f8',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#1a1a1a',
        secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      },
      action: {
        active: mode === 'dark' ? '#ffffff' : '#000000',
        hover: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        selected: mode === 'dark' ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.16)',
        disabled: mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
        disabledBackground: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 900,
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
        fontSize: '3.5rem',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
        fontSize: '2.8rem',
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
        lineHeight: 1.4,
        fontSize: '2.2rem',
      },
      h4: {
        fontWeight: 500,
        letterSpacing: '0.02em',
        lineHeight: 1.4,
        fontSize: '1.8rem',
      },
      h5: {
        fontWeight: 500,
        letterSpacing: '0.02em',
        lineHeight: 1.4,
        fontSize: '1.4rem',
      },
      h6: {
        fontWeight: 500,
        letterSpacing: '0.02em',
        lineHeight: 1.4,
        fontSize: '1.2rem',
      },
      subtitle1: {
        fontWeight: 500,
        letterSpacing: '0.02em',
        lineHeight: 1.5,
        fontSize: '1.1rem',
      },
      subtitle2: {
        fontWeight: 500,
        letterSpacing: '0.02em',
        lineHeight: 1.5,
        fontSize: '1rem',
      },
      body1: {
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.6,
        fontSize: '1rem',
      },
      body2: {
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.6,
        fontSize: '0.875rem',
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
        letterSpacing: '0.02em',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '10px 24px',
            transition: 'all 0.3s ease-in-out',
          },
          contained: {
            background: mode === 'dark' 
              ? 'linear-gradient(45deg, #00bcd4 30%, #62efff 90%)'
              : 'linear-gradient(45deg, #0097a7 30%, #4dd0e1 90%)',
            color: mode === 'dark' ? '#ffffff' : '#ffffff',
            boxShadow: mode === 'dark'
              ? '0 8px 32px 0 rgba(0,188,212,0.3)'
              : '0 8px 32px 0 rgba(0,151,167,0.3)',
            '&:hover': {
              background: mode === 'dark'
                ? 'linear-gradient(45deg, #008ba3 30%, #00bcd4 90%)'
                : 'linear-gradient(45deg, #006064 30%, #0097a7 90%)',
              boxShadow: mode === 'dark'
                ? '0 12px 48px 0 rgba(0,188,212,0.4)'
                : '0 12px 48px 0 rgba(0,151,167,0.4)',
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            background: mode === 'dark' 
              ? 'linear-gradient(145deg, #141414, #121212)'
              : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
            boxShadow: mode === 'dark'
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: mode === 'dark'
                ? '0 16px 48px 0 rgba(0, 0, 0, 0.5)'
                : '0 16px 48px 0 rgba(0, 0, 0, 0.2)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            background: mode === 'dark'
              ? 'linear-gradient(145deg, #141414, #121212)'
              : 'linear-gradient(145deg, #ffffff, #f8f8f8)',
            boxShadow: mode === 'dark'
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: mode === 'dark'
              ? 'rgba(18, 18, 18, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
            boxShadow: 'none',
            backdropFilter: 'blur(10px)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                '& fieldset': {
                  borderColor: mode === 'dark' ? '#00bcd4' : '#0097a7',
                },
              },
            },
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};

export default getTheme; 