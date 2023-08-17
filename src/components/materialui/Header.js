import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import logo from "../../images/react-logo.png"

const pages = [{
  title: 'Fun facts about React', route: 'fun-facts'
}, { title: 'Reasons I like React', route: 'reasons' }, { title: 'About', route: 'about' }];

function MaterialUIHeader() {
  const [, setAnchorElNav] = React.useState(null);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={logo} id="nav-logo" className="App-logo" alt="logo" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.route}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MaterialUIHeader;
