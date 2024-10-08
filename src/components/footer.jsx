import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Typography} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { themeProps } from '../theme';

export const Footer = () => {


  return (
    <AppBar position="static" sx={{backgroundColor: "grey"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, height: "100%"}}>
            <Typography sx={{ color: themeProps.textColor }}>
              Designed & Developed by Nathan T White. <FontAwesomeIcon icon={faCopyright}/>  2024 Nathan T White
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}