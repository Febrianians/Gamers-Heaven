import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './navbarComponentStyle.module.css';

export default function NavbarHomeComponent() {

  return(
    <div>
      <Navbar
      expand="md"
      fixed="off"
      className={styles.navbar}
      >
    <NavbarBrand className={styles.navbrand} href="/">
    LOGO
    </NavbarBrand>


    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
      <NavItem className={styles.navitem}>
        <NavLink className={styles.navlink} href="/">
            HOME
          </NavLink>
        </NavItem>
        <NavItem className={styles.navitem}>
          <NavLink className={styles.navlink} href="profile">
            PROFILE
          </NavLink>
        </NavItem>
        <NavItem className={styles.navitem}>
          <NavLink className={styles.navlink} href="/game-list">
            GAME LIST
          </NavLink>
        </NavItem>
      </Nav>
      
      
      <Nav>
        <NavItem className={styles.navitem}>
          <NavLink className={styles.navlink} href='/'>
            UserHasLogin@gmail.com
          </NavLink>
        </NavItem>
        <NavItem className={styles.navitem}>
          <NavLink className={styles.navlink} href="/logout">
            LOG OUT
          </NavLink>
        </NavItem>

      </Nav>
    </Collapse>
  </Navbar>
  
  </div>
    )
}