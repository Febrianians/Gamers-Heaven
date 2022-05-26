// import React, {useState, useEffect} from "react";
import { NavbarHomeComponent, ProfileCardComponent } from '../../components/index'
// import { auth, db } from '../../services/firebase'
// import { ref, onValue, get, child } from 'firebase/database'
// import { useAuthState } from 'react-firebase-hooks/auth'

import styles from './ProfilePageStyle.module.css'

export default function ProfilePage() {
    
   

    return (
        <>
            <div className={styles.landingpage}>
                <NavbarHomeComponent />
                <ProfileCardComponent/>
            </div>
        </>
    )
}