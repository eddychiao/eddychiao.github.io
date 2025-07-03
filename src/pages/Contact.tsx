import React from 'react';
import './Contact.css';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';

import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface ContactProps {
  theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {

  const handleFabClick = (title: string) => {
    switch (title) {
      case 'Email':
        window.open('mailto:eddychiao@gmail.com', '_blank');
        break;
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/edward-chiao/', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/eddychiao', '_blank');
        break;
      case 'Instagram':
        window.open('https://www.instagram.com/chiao.jpg/', '_blank');
        break;
      default:
        console.error('Unknown action:', title);
    }
  };

  const createTooltip = (title: string, caption: string, icon: React.ReactNode) => (
    <Fab
      
      variant="extended"
      style={{ backgroundColor: theme.buttonColor }}
      color="secondary"
      aria-label={title}
      onClick={() => handleFabClick(title)} // Map Fab click to navigation logic
    >
      {icon}
      <div className="Contact-fab">
        {caption}
      </div>
    </Fab>
  );

  return (
    <div className="Contact" style={{backgroundColor: theme.backgroundColor}}>
        <div className="Contact-left">
            <div className="Contact-header" style={{ color: theme.headerColor }}>
            Let's get in touch!
            </div>
            <div className="Contact-description" style={{ color: theme.textColor }}>
            Here are a few ways you can reach me:
            </div>
        </div>
        <div className='Contact-right'>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              {createTooltip('Email', 'eddychiao@gmail.com', <MailOutlineRoundedIcon sx={{ mr: 1 }}/>)}
              {createTooltip('LinkedIn', 'LinkedIn', <LinkedInIcon sx={{ mr: 1 }}/>)}
              {createTooltip('GitHub', 'GitHub', <GitHubIcon sx={{ mr: 1 }}/>)}
              {createTooltip('Instagram', 'Photography Insta', <InstagramIcon sx={{ mr: 1 }}/>)}
            </Stack>
          </Box>

        </div>
    </div>
  );
}

export default Contact;
