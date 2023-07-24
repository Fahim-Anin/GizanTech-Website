import React from 'react'
import { Navbar, Nav, Container, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';


const AdminNavBar = () => {
  return (
    <div>
      <Navbar bg="info" expand="md" className='px-4'>

        <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Link 1</Nav.Link>
            <Nav.Link href="#">Link 2</Nav.Link>
            <Nav.Link href="#">Link 3</Nav.Link>
            <Nav.Link href="#">
              {/* <FaUserCircle /> */}
            <DropdownButton >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            </DropdownButton>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </div>
  )
}

export default AdminNavBar