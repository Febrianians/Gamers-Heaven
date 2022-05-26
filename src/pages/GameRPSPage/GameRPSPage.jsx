import React, { useState,useEffect } from 'react';
import {auth,db} from "../../services/firebase"
import { ref, onValue, get, child, set } from 'firebase/database';
import { useAuthState} from "react-firebase-hooks/auth"
import arrow from '../../assets/_arrow-left.png';
import logosuit from '../../assets/logo-suit.png';
import rock from '../../assets/batu.png';
import paper from '../../assets/kertas.png';
import scissors from '../../assets/gunting.png';
import refresh from '../../assets/refresh.png';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './GameRPSPageStyle.module.css'

export default function GamePRSPage() {
  const [playerHand,setPlayerHand] = useState("")
  const [comHand,setComHand] = useState("")
  const [userData, setUserData] = useState({})
  const [score,setScore] = useState(0)
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

  function writeUserData() {
    set(ref(db, 'users/' + user.uid), {...userData, total_score: userData.score + score});
  }

  useEffect(() => {
    if (loading) return;
    // if (!user) return navigate("/");
    fetchUserData();
  }, []);

  function handlePlayerHand (e){
    // console.log(e.target);
    const pHand = e.target.alt
    
    setPlayerHand(pHand)
      // console.log(playerHand);
      const comHand = PilihanComputer();
      console.log(comHand);
      Result(comHand,pHand);
      writeUserData()

}
function PilihanComputer(){
  let comp = Math.random();

  if( comp < 0.34 ) return 'rock';
  if( comp >= 0.34 && comp < 0.67 ) return 'paper';
      return 'scissors';
  
}

function Result(comp, player){
  if( player == comp ) return setScore(score+1);
  if( player == 'rock' ) return ( comp == 'scissors' ) ? setScore(score+3) : setScore(score-1);
  if( player == 'scissors' ) return ( comp == 'rock' ) ? setScore(score-1) : setScore(score+3);
  if( player == 'paper' ) return ( comp == 'scissors' ) ? setScore(score-1) : setScore(score+3);
}

  return(
    <>
      {/* <h1>/gamerps is loaded successfully</h1> */}
      <div className="header">
        <Navbar
        color="light"
        dark
        expand="md"
        fixed="off"
        className={styles.navbar}
        >
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/">
                  <img src={arrow} alt="back" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <img src={logosuit} alt="logo" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <main>
        <div className='container'>
            {/* game play */}
            <div className='row text-center'>
                <div className='col-lg-5 player'>
                  <h1>{score}</h1>
                    <h2>PLAYER 1</h2>
                    <div id="playerOption" className='choices'>
                        <button id="rock" className={styles.choiceSign} onClick = {handlePlayerHand}>
                            <img className={styles.choiceImg} src={rock} alt="rock" />
                        </button>
                        <button id="paper" className={styles.choiceSign} onClick= {handlePlayerHand}>
                            <img className={styles.choiceImg} src={paper} alt="paper" />
                        </button>
                        <button id="scissors" className={styles.choiceSign} onClick = {handlePlayerHand}>
                            <img className={styles.choiceImg} src={scissors} alt="scissors" />
                        </button>
                    </div>
                    <div>{playerHand}</div>
                </div>



                <div className='col-lg-2 versus'>
                    <div id="versusBox">
                        <h2 id="displayResult">VS</h2>
                    </div>
                </div>

                <div className='col-lg-5 com'>
                    <h2>COM</h2>
                    <div id="comOption" className='choices'>
                        <button id="comRock" className={styles.choiceSign}>
                            <img className={styles.choiceImg} src={rock} alt="rock" />
                        </button>
                        <button id="comPaper" className={styles.choiceSign}>
                            <img className={styles.choiceImg} src={paper} alt="paper" />
                        </button>
                        <button id="comScissors" className={styles.choiceSign}>
                            <img className={styles.choiceImg} src={scissors} alt="scissors" />
                        </button>
                    </div>
                </div>
            </div>

            {/* refresh area */}
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-lg refresh-area'>
                        <button id="refresh">
                            <img className={styles.choiceImg} src={refresh} alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </main>

    </>
  )
}