import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import logo from '../images/logo-no-background.png'

const FormButtonContained = styled(Button)(() => ({
    backgroundColor: '#ffffff',
    color: '#284b63',
    '&:hover': {
        backgroundColor: '#d0e1ec',
    },
}));

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className='header-branding'>
                <Container>
                    <Link to='/home'>
                        <Navbar.Brand className='header-brand'>
                            <img
                                src={logo}
                                alt='dwarpaal-logo'
                                width="45px"
                                style={{ marginRight: '6px', verticalAlign: 'text-top' }} />
                            Dwarpaal
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: 4 }}>
                            <Nav.Link as={Link} to="/faq" className='navbar-link'>FAQ</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/request-form" className='navbar-link'>
                                <FormButtonContained variant='contained'>Request Access</FormButtonContained>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header