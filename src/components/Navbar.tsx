import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Photography', 'Coding', 'Music', 'Minigames', 'Contact'];

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface NavbarProps {
  theme: Theme;
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const navigate = useNavigate();

  const handleCloseNavMenu = (page: string) => {
    switch (page) {
      case 'Home':
        navigate('/'); // Navigate to the home page
        break;
      case 'Photography':
        navigate('/photography'); // Navigate to the photos page
        break;
      case 'About':
        navigate('/about'); // Navigate to the about page
        break;
      case 'Contact':
        navigate('/contact'); // Navigate to the contact page
        break;
      case 'Coding':
        navigate('/coding'); // Navigate to the coding page
        break;
      case 'Music':
        navigate('/music'); // Navigate to the music page
        break;
      case 'Minigames':
        navigate('/minigames'); // Navigate to the unknown page
        break;
      default:
        navigate('/'); // Default to home if no match
    }
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar 
          position="static"
          sx={{ backgroundColor: theme.backgroundColor }}
        >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'DejaVu Sans Mono, monospace',
              fontWeight: 700,
              color: theme.headerColor
            }}
          >
            &lt;ETC/&gt;
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button key={page} className={"navbar-item"} onClick={() => handleCloseNavMenu(page)}>
                  <Typography sx={{ textAlign: 'center', color: theme.headerColor, fontFamily: 'DejaVu Sans Mono, monospace' }}>{page}</Typography>
                </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </React.Fragment>
  );
}

export default Navbar