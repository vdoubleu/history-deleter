import { AppBar, Box, Toolbar, Typography, Container, IconButton, Button } from '@material-ui/core';
import Home from "@material-ui/icons/Home";

import Link from 'next/link';

function NavBar() {
  const pages = { 
    'Home': '/',
    'About': '/about',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {Object.keys(pages).map(page => (
                <Link href={pages[page]} key={page}>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar;
