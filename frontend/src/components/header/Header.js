import React from 'react'
import {Nav, Navbar, NavDropdown,Container, Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'

const Header = () => {
  const user=localStorage.getItem("userInfo")
  const navigate=useNavigate()
  return (
    <Navbar bg="primary" expand="lg" variant='success'>
      <Container>
        <Navbar.Brand href="#home">
          
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
           Incubation Management
          </Link >
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {user?
        <Navbar.Collapse id="basic-navbar-nav">
            <Link to='/registeredcompany' style={{ textDecoration: 'none', color: 'white' }}>
             Status
          </Link>
          </Navbar.Collapse>
        :""}
        {user ?
        <Nav.Link className='text-white'>
          <Link to='/applicationform' style={{ textDecoration: 'none',color:'white' }}>
          Application Form
          </Link>
          </Nav.Link>
          :
          ""
          }

         
        <NavDropdown title={<span className='text-white'>Account</span>}
         id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <Link  to="/login" style={{  textDecoration: 'none' }}>
            Login
          </Link >
          </NavDropdown.Item>
          <NavDropdown.Item
           onClick={()=>{localStorage.removeItem("userInfo");
           navigate('/login')
          }}
          >
            Logout
          </NavDropdown.Item>

        </NavDropdown>
      </Container>
    </Navbar>
    
  )
}

export default Header
  