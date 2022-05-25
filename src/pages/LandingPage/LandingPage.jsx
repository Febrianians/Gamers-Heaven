import React from 'react';
import { NavbarComponent } from '../../components';
import styles from './LandingPageStyle.module.css'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function LandingPage() {

  return(
    <>
      <div className={styles.landingpage}>
        <NavbarComponent />
        <div className={styles.wrapperUp}>
          <div className={styles.content}>
            <h1 className={styles.contenth1}>PLAY TRADITIONAL GAME</h1>
            <h3 className={styles.contenth3}>Experience New Traditional Game Play</h3>
            <div>
              <Button
                color="warning"
                size="lg"
              >
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
  )
}