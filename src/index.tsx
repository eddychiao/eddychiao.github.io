import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Photography from './pages/Photography';
import Coding from './pages/Coding';

import Navbar from './components/Navbar';
import ThemeOverlay from './components/ThemeOverlay';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import reportWebVitals from './reportWebVitals';

const App: React.FC = () => {
  const location = useLocation(); // Get the current route path
  const { theme } = useTheme(); // Get the current theme from ThemeContext

  return (
    <>
      {location.pathname !== '/' && <Navbar theme={theme}/>} {/* Show Navbar only if not on the home page */}
      <ThemeOverlay />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} /> {/* Pass theme to Home */}
        <Route path="/about" element={<About theme={theme}/>} />
        <Route path="/photography" element={<Photography theme={theme}/>} />
        <Route path="/coding" element={<Coding theme={theme}/>} />
        <Route path="/contact" element={<Contact theme={theme}/>} />
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();