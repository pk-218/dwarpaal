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
                            {/* <Link to='/cart'>
                                <Nav.Link><i class="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                            </Link> */}
                            {/* <Link to='/login'>
                                <Nav.Link><i class="fa-solid fa-right-to-bracket"></i> Login</Nav.Link>
                            </Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header