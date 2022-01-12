import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.scss';
import AppBtn from '../Button/Button';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Navbar collapseOnSelect expand='lg' bg='' variant='dark' className='navContainer'>
      <Navbar.Brand href='/' className='navbrand'>
        <img src={logo} alt='' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setToggle(true)} />
      {toggle && <div className='divider'></div>}

      <Navbar.Collapse id='responsive-navbar-nav mr-4 '>
        <Nav className='ms-auto pr-5'>
          <Nav.Link href='#features' className='navlink'>
            Contact
          </Nav.Link>
          <Nav.Link href='#pricing' className='navlink'>
            Plans
          </Nav.Link>
          <Nav.Link href='#pricing' className='navlink'>
            Blogs
          </Nav.Link>

          <Nav.Link href='#pricing' className='navlink'>
            <AppBtn value='Sign in' />
          </Nav.Link>
          <Nav.Link href='#pricing' className='navlink'>
            <AppBtn value='Sign up' outline />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
