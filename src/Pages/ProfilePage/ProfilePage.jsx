import React from "react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { NavbarComponentUser, ProfileCardComponent, ProfilePageComponent } from '../../components/index'
import styles from './ProfilePageStyle.module.css'
export default function ProfilePage (){
    return (
        <>
            <div className={styles.landingpage}>
                <NavbarComponentUser />
                <ProfileCardComponent/>
            </div>
        </>
    )
}