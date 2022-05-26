import React, {useState, useEffect} from "react";
import { Table } from 'reactstrap'
import styles from './profilePageCardStyle.module.css'
import { auth, db } from '../../services/firebase'
import { ref, onValue, get, child } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function ProfileCardComponent() {

    const [userData, setUserData] = useState([])
    const [user, loading, error] = useAuthState(auth)

    function fetchUserData() {
        // const dbRef = ref(getDatabase());
        get(child(ref(db), `users/${user.uid}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
            console.log(snapshot.val());
            setUserData(snapshot.val());
            } else {
            console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        if (loading) return;
        // if (!user) return navigate("/");
        fetchUserData();
    }, []);

    return (
        <>
            <Table
                responsive 
                className={styles.table}
                >
                <thead>
                    <tr>
                    <th>
                        Email
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Total Score
                    </th>
                    <th>
                        Bio    
                    </th>
                    <th>
                        City    
                    </th>
                    <th>
                        Social Media Url    
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        {userData.email}
                    </th>
                    <td>
                        {userData.username}
                    </td>
                    <td>
                        {userData.password}
                    </td>
                    <td>
                        {userData.totalScore}
                    </td>
                    <td>
                        {userData.bio}
                    </td>
                    <td>
                        {userData.city}
                    </td>
                    <td>
                        {userData.socialMediaUrl}
                    </td>
                    </tr>
                </tbody>
                </Table>
        </>
    )
}