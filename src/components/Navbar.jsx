import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import  AccountBox  from '@mui/icons-material/AccountBox';

function Navbar() {
  return (
    <Box>
      <AppBar color="info">
        <Toolbar>
          <IconButton 
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          >
            <AccountBox/>
          </IconButton>
          <Typography>
            Erifa
          </Typography>
          <Button color="inherit"><NavLink to='/cart'>Cart</NavLink></Button>
          <Button color="inherit"><NavLink to='/'>Dasboard</NavLink></Button>
          <Button color="inherit"><NavLink to='/info'>Info</NavLink></Button>

        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Navbar;
