import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { ThemeProvider } from './theme/ThemeContext';
import getTheme from './theme/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import CarListing from './pages/CarListing';
import CarDetails from './pages/CarDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import { useThemeMode } from './theme/ThemeContext';
import Auth from './pages/Auth';

const ThemedApp = () => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cars" element={<CarListing />} />
            <Route path="cars/:id" element={<CarDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
