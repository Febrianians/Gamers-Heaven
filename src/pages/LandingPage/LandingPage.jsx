import React, { useState, useEffect } from "react";
import { NavbarComponent } from "../../components";
import styles from "./LandingPageStyle.module.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../services/firebase";
import { ref, onValue, get, child } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LandingPage() {
  const [userData, setUserData] = useState([]);
  const [user, loading, error] = useAuthState(auth);

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
      <div className={styles.landingpage}>
        <NavbarComponent />
        <div className={styles.wrapperUp}>
          <div className={styles.content}>
            <h1 className={styles.contenth1}>PLAY TRADITIONAL GAME</h1>
            <h3>{userData?.email}</h3>
            <h3 className={styles.contenth3}>
              Experience New Traditional Game Play
            </h3>
            <div>
              <Button color="warning" size="lg">
                PLAY NOW
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.wrapperDown}>
          <h6>THE STORY</h6>
          <a className={styles.facaretdown} href="/">
            <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </div>
      </div>
    </>
  );
}
