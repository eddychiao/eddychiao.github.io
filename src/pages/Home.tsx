import React from 'react';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css';

import * as constants from '../const/enum';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface HomeProps {
  theme: Theme;
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  
  const navigate = useNavigate(); // Initialize navigation
  const isDarkTheme = theme.backgroundColor === constants.colors.katana.backgroundColor;

  // Navigation logic for Fab buttons
  const handleFabClick = (page: string) => {
    switch (page) {
      case 'home':
        navigate('/'); // Navigate to the home page
        break;
      case 'photography':
        navigate('/photography'); // Navigate to the photos page
        break;
      case 'about':
        navigate('/about'); // Navigate to the about page
        break;
      case 'contact':
        navigate('/contact'); // Navigate to the contact page
        break;
      case 'coding':
        navigate('/coding'); // Navigate to the coding page
        break;
      case 'music':
        navigate('/music'); // Navigate to the music page
        break;
      case 'minigames':
        navigate('/minigames'); // Navigate to the minigames page
        break;
      default:
        navigate('/'); // Default to home if no match
    }
  };

  // Function to create tooltip component with navigation
  const createTooltip = (title: string, icon: React.ReactNode) => (
    <Tooltip
      title={title}
      slots={{ transition: Zoom }}
      slotProps={{
        tooltip: {
          sx: {
            fontSize: '1.4rem',
            fontFamily: 'Urbanist, sans-serif',
            backgroundColor: theme.buttonColor,
          },
        },
      }}
    >
      <Fab
        style={{ backgroundColor: theme.buttonColor, }}
        color="secondary"
        aria-label={title}
        onClick={() => handleFabClick(title)} // Map Fab click to navigation logic
        sx={{
          width: '1vw', // Width proportional to viewport width
          height: '1vw', // Height proportional to viewport width (makes it circular)
          minWidth: '50px', // Minimum size for smaller screens
          minHeight: '50px', // Minimum size for smaller screens
        }}
      >
        {icon}
      </Fab>
    </Tooltip>
  );
  
  return (
    <div className="Home" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="Home-left">
        <div className="Home-body" style={{ color: theme.headerColor }}>
          Hey, I'm Eddy
        </div>
        <div className="Home-description" style={{ color: theme.textColor }}>
          Welcome to my website!
        </div>
        <div className='Home-navbar'>
          <Box
            sx={{
              '& > :not(style)': {
                m: 0,
                marginRight: '2vw', // Replaced 30px with 2vw
                marginTop: '1vh', // Replaced 10px with 1vh
              },
            }}
          >
            {createTooltip('about', <WavingHandRoundedIcon />)}
            {createTooltip('photography', <PhotoCameraRoundedIcon />)}
            {createTooltip('coding', <CodeRoundedIcon />)}
            {createTooltip('music', <MusicNoteRoundedIcon />)}
            {createTooltip('minigames', <SportsEsportsRoundedIcon />)}
            {createTooltip('contact', <ContactPageRoundedIcon />)}
          </Box>
        </div>
      </div>
      <div className="Home-right">
        <img 
          src="/images/home_stencil.svg" 
          alt="Home Page" 
          className="Home-image" 
          style={{ filter: isDarkTheme ? 'invert(1)' : 'invert(0)', pointerEvents: 'none' }} // Apply invert filter based on theme
        />
      </div>
    </div>
  );
};

export default Home;