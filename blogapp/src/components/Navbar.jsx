import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static">
        <Toolbar style={{background:'gray'}}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG 
          </Typography>
          <Link to='/'>       
              <Button style={{ color: "white" }} >Home</Button>
          </Link>
          <Link to='/a'>       
              <Button style={{ color: "white" }}>Add Blog</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
