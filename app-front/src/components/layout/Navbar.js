import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar>
          <WorkspacePremiumTwoToneIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LISTA VIP - THE PROJECT
          </Typography>
          <Box sx={{ ml: 100 }}>
            <Button color="inherit" component={Link} to="/" sx={{ mr: 2 }}>Home</Button>
            <Button color="inherit" component={Link} to="/form" sx={{ mr: 2 }}>Lista</Button>
            <Button color="inherit" component={Link} to="/contato">Contato</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}