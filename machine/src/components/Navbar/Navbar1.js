import React from 'react'
import {Navbar,Nav,Container,Form,FormControl,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navbar.css';
function Navbar1() {
    return (
        <>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            
  <Container className="general">
    <Navbar.Brand href="#machine for rent">MACHINE FOR RENT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={""}>HOME</Nav.Link>
        <Nav.Link as={Link} to={"/Contact"}>CONTACT</Nav.Link>
        <Nav.Link as={Link} to={"/login"}>LOGIN</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button href="#" variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    



       

      
        </>
    )
}

export default Navbar1
