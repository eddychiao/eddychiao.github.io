import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import './Navbar.css';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface NavbarProps {
  theme: Theme;
}

const navLinks = [
  { label: 'Home',        path: '/' },
  { label: 'About',       path: '/about' },
  { label: 'Projects',    path: '/projects' },
  { label: 'Photography', path: 'https://placeholder.com', external: true },
  { label: 'Contact',     path: '/contact' },
  { label: 'Résumé',      path: '/files/Resume_EdwardChiao_2026.pdf', external: true },
];

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const navigate  = useNavigate();
  const location  = useLocation();

  const handleClick = (link: typeof navLinks[0]) => {
    if (link.external) {
      window.open(link.path, '_blank');
    } else {
      navigate(link.path);
    }
  };

  const isActive = (link: typeof navLinks[0]) =>
    !link.external && location.pathname === link.path;

  return (
    <nav className="Navbar" style={{ backgroundColor: theme.backgroundColor }}>

      <span
        className="Navbar-brand"
        style={{ color: theme.headerColor }}
        onClick={() => navigate('/')}
      >
        etc.
      </span>

      <div className="Navbar-links">
        {navLinks.map(link => (
          <button
            key={link.label}
            className={`Navbar-link${isActive(link) ? ' active' : ''}`}
            onClick={() => handleClick(link)}
            style={{
              color: isActive(link) ? theme.headerColor : theme.textColor,
            }}
          >
            {link.label}
            {link.external && (
              <NorthEastRoundedIcon sx={{ fontSize: '0.65rem', ml: '2px', opacity: 0.7 }} />
            )}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;
