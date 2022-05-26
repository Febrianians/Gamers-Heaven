import React from "react";
import { NavbarHomeComponent } from "../../components";
import styles from "./homePageStyle.module.css";

export default function HomePage () {
    return (
        <>
            <NavbarHomeComponent />
            
            <div className={styles.homePage}>
                <div className={styles.bodySection}>
                    <div className={styles.thumbnail}>
                    </div>
                    <div className={styles.thumbnail}>
                    </div>
                    <div className={styles.thumbnail}>
                    </div>
                </div>
            </div>    
            
        </>
    )
}