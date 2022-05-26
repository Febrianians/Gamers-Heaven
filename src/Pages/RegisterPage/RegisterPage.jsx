import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { auth, db } from '../../services/firebase'
import { ref, set } from 'firebase/database'

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    } from "firebase/auth";

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = async (e) =>  {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            if (user) alert('Register Success')
            set(ref(db, `users/${user.uid}`), {
                email: email,
              });
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
        console.log(email, password);
    }
  return(
        <>
        <Header title="Register"/>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={e => setEmail(e.target.value)} 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
        </>
    )
}