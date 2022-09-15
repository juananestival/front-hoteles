import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown  } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to='/'>
      {/* customize here */}
    <Navbar.Brand >Cymbal Hotels</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <LinkContainer to='/chat'>
        <Nav.Link><i className='fas fa-comment'></i>Chat</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
        <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
