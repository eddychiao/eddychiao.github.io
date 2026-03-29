import React, { useState, useEffect } from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { Theme } from '../context/ThemeContext';
import './ScrollToTop.css';

interface ScrollToTopProps {
  theme: Theme;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(total > 0 && scrolled / total >= 0.1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`ScrollToTop${visible ? ' ScrollToTop--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        borderColor: theme.buttonColor,
        color: theme.buttonColor,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <KeyboardArrowUpRoundedIcon fontSize="small" />
      <span className="ScrollToTop-label">back to top</span>
    </button>
  );
};

export default ScrollToTop;
