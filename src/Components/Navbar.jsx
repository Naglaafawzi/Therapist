import React from 'react';
import { Link } from 'react-router-dom';
import Logoimage from '../images/logo ( Footer & Nav ).svg';
import { AppBar, Toolbar, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';

const NavbarLogo = styled(Link)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#003d33',
    fontFamily: 'Arial, sans-serif',
    marginLeft: '5%',
    textDecoration: 'none',
}));

const NavbarLinks = styled(List)(({ theme }) => ({
    display: 'flex',
    gap: '6rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
}));

const NavbarLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#002936',
    fontSize: '1.12rem',
}));

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#06422D',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    fontSize: '1rem',
    marginRight: '5%',
    '&:hover': {
        backgroundColor: '#2EABD1',
    },
}));

function CustomNavbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFFEF4', padding: '0.4rem 0rem' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <NavbarLogo to="/">
                    <img src={Logoimage} alt="logo" />
                </NavbarLogo>

                <Box component="nav">
                    <NavbarLinks>
                        <ListItem component="div">
                            <NavbarLink to="/services">
                                <ListItemText primary="Services" />
                            </NavbarLink>
                        </ListItem>
                        <ListItem component="div">
                            <NavbarLink to="/therapists">
                                <ListItemText primary="Our Therapists" />
                            </NavbarLink>
                        </ListItem>
                        <ListItem component="div">
                            <NavbarLink to="/faq">
                                <ListItemText primary="FAQ" />
                            </NavbarLink>
                        </ListItem>
                    </NavbarLinks>
                </Box>

                <ContactButton>
                    Contact Us
                </ContactButton>
            </Toolbar>
        </AppBar>
    );
}

export default CustomNavbar;
