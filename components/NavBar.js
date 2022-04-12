import { AppBar, Box, Toolbar, Typography, Container, IconButton, Button } from '@mui/material';

import Link from 'next/link';

function NavBar() {
  const pages = { 
    'Home': '/',
    'About': '/about',
    'Resources': '/resources',
    // 'Internet Archive': '/dmca',
    // 'Google': '/google',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 2 }}>
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'flex' }}
          >
            History Deleter
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
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
      </AppBar>
    </Box>
  );
}

export default NavBar;
