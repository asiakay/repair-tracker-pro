import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import { useAuth } from '@/hooks/useAuth';

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();

  const router = useRouter();
/*   const handleClick = (event) => {
    event.preventDefault();
    router.push('/new-repair-request');
  }; */

  const handleLogout = async (event) => {
    event.preventDefault();
    await logout();
    router.push('/login');
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <Navbar bg="light" variant="light" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Image
            src="/repair-icon.png"
            alt="Repair Tracker Pro"
            width={30}
            height={30}
            className="d-inline-block align-top"
          />{' '}
          Repair Tracker Pro
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       {/*  {user ? (
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" passHref>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/repair-list" passHref>
              Repairs
            </Nav.Link>
            <Nav.Link as={Link} href="/new-repair-request" passHref>
              New Request
            </Nav.Link>
            <Nav.Link as={Link} href="/settings" passHref>
              Settings
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" passHref>
              Home
            </Nav.Link>
          </Nav>
        )} */}
        </Navbar.Collapse>

        <Button variant="outline-primary" onClick={() => setShowMenu(true)}>
          Menu
        </Button>

        <Offcanvas
          show={showMenu}
          onHide={() => setShowMenu(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          {user ? (
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link as={Link} href="/" passHref>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} href="/repair-list" passHref>
                  Repairs
                </Nav.Link>
                <Nav.Link as={Link} href="/new-repair-request" passHref>
                  New Request
                </Nav.Link>
                <Nav.Link as={Link} href="/settings" passHref>
                  Settings
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          ) : (
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link as={Link} href="/" passHref>
                  Home
                </Nav.Link>
              </Nav>
              <hr />
              <Nav className="flex-column">
                <Nav.Link as={Link} href="/login" passHref>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} href="/register" passHref>
                  Register
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          )}
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;