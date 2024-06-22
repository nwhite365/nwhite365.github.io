import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["About", "Projects", "Publications", "CV"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 20
            }}>
            <Link to="about" spy={true} smooth={true} duration={500} >Nathan T White</Link>
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{padding:0}}>
                  <Link to={page.toLowerCase()} spy={true} smooth={true} duration={500} style={{width: "100%"}} onSetActive={handleCloseNavMenu}>
                    <Button
                      key={page.toLowerCase()}
                      sx={{width: "100%", height: "100%", display: 'block', paddingTop: 1, paddingLeft: 2, paddingRight: 2 }}
                      // sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            key={"short-flex-name-button"}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 20
            }}>
            <Link to="about" key={"short-flex-name"} spy={true} smooth={true} duration={500} >Nathan T White</Link>
          </Button>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: "100%"}}>
            {pages.map((page) => (
              <Link key={page.toLowerCase()} to={page.toLowerCase()} spy={true} smooth={true} duration={500} style={{height: "100%"}}>
                <Button
                  key={page.toLowerCase()}
                  sx={{ color: 'white', display: 'block', width: "100%", height: "100%", display: 'block', paddingTop: 1, paddingLeft: 2, paddingRight: 2  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}