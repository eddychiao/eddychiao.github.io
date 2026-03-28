import React from 'react';
import useTypingAnimation from '../hooks/useTypingAnimation';
import './Contact.css';

import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { Theme } from '../context/ThemeContext';

interface ContactProps {
  theme: Theme;
}

const contactItems = [
  { label: 'eddychiao@gmail.com', icon: <MailOutlineRoundedIcon fontSize="small" />, href: 'mailto:eddychiao@gmail.com' },
  { label: 'LinkedIn',            icon: <LinkedInIcon fontSize="small" />,            href: 'https://www.linkedin.com/in/edward-chiao/' },
  { label: 'GitHub',              icon: <GitHubIcon fontSize="small" />,              href: 'https://github.com/eddychiao' },
  { label: 'Instagram',           icon: <InstagramIcon fontSize="small" />,           href: 'https://www.instagram.com/chiao.jpg/' },
];

const TITLE = "Let's get in touch!";

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const { typed, done } = useTypingAnimation(TITLE, 75);

  return (
    <div className="Contact" style={{ backgroundColor: theme.backgroundColor }}>

      <div className="Contact-left">
        <div className="Contact-header" style={{ color: theme.headerColor, position: 'relative' }}>
          <span className="Contact-ghost">{TITLE}</span>
          <span className="Contact-typed">
            {typed}
            {!done && <span className="Contact-cursor" style={{ color: theme.headerColor }}>|</span>}
          </span>
        </div>
        <div className="Contact-divider" style={{ backgroundColor: theme.buttonColor }} />
        <div className="Contact-description" style={{ color: theme.textColor }}>
          Here are a few ways you can reach me.
        </div>
      </div>

      <div className="Contact-right">
        <nav className="Contact-nav-list">
          {contactItems.map(item => (
            <a
              key={item.label}
              className="Contact-nav-item"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ color: theme.textColor }}
            >
              <span className="Contact-nav-icon" style={{ color: theme.buttonColor }}>
                {item.icon}
              </span>
              <span className="Contact-nav-label">{item.label}</span>
              <span className="Contact-nav-external" style={{ color: theme.buttonColor }}>
                <NorthEastRoundedIcon sx={{ fontSize: '0.75rem' }} />
              </span>
            </a>
          ))}
        </nav>
      </div>

    </div>
  );
};

export default Contact;
