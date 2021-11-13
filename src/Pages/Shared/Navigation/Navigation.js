import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/explore">
                        <Button style={{ backgroundColor: 'white'}}sx={{fontSize:"25px", fontWeight:"bold"}} color="inherit">Explore</Button>
                    </NavLink>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 2, fontWeight: 'bold' }}>
                       MARUTI car's Zone
                    </Typography>

                    <Link to="/home"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">HOME</Button></Link>
                    <Link to="/reviews"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Review</Button></Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;