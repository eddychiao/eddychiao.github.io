import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

import Navbar from './components/Navbar';
import ThemeOverlay from './components/ThemeOverlay';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import reportWebVitals from './reportWebVitals';

const App: React.FC = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
  }, [theme.backgroundColor]);

  return (
    <>
      {location.pathname !== '/' && <Navbar theme={theme} />}
      <ThemeOverlay />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/projects/:id" element={<ProjectDetail theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
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