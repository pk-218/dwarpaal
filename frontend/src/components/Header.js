import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className='header-branding'>
                <Container>
                    <Link to='/'>
                        <Navbar.Brand className='header-brand'>Dwarpaal</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto">
                            <Nav.Link as={Link} to="/faq" className='navbar-link'>FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header