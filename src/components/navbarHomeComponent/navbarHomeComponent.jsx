import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './navbarHomeComponentStyle.module.css';

import { auth, db } from '../../services/firebase'
import { ref, get, child } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

export default function NavbarHomeComponent() {
  const [userData, setUserData] = useState({})
  const [ user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  function fetchUserdata() {
    get(child(ref(db), `users/${user.uid}`))
    .then((snapshot) => {
      if(snapshot.exists()) {
        console.log(snapshot.val());
        setUserData(snapshot.val())
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    if (loading) return;
    fetchUserdata();
  }, []);

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
        <NavLink className={styles.navlink} href="/home">
            HOME
          </NavLink>
        </NavItem>
        <NavItem className={styles.navitem}>
          <NavLink className={styles.navlink} href="/user">
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
          <NavLink className={styles.navlink} href='/home'>
            {user?.email}
          </NavLink>
        </NavItem>
        <NavItem className={styles.navitem}>
          <NavLink className={styles.navlink} href="/">
            LOG OUT
          </NavLink>
        </NavItem>

      </Nav>
    </Collapse>
  </Navbar>
  
  </div>
    )
}