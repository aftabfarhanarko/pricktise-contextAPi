import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../fierbase/fierbase.config.js";

const googleProvider = new GoogleAuthProvider();

const COntextProvider = ({ children }) => {
  const [loding, setLoding] = useState(true);
  const [myLogingUser, setMyLogingUser] = useState(null);

  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);
    setLoding(true);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth,googleProvider);
  }
  useEffect(() => {
    const unsubcriet = onAuthStateChanged(auth, (currentUser) => {
      console.log("Fierbase Data Current User", currentUser);
      setMyLogingUser(currentUser);
      setLoding(false);
    });

    return () => {
      unsubcriet();
    };
  }, []);

  const userInfo = {
    loding,
    myLogingUser,
    signOutUser,
    creatUser,
    singInUser,
    googleSignIn
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default COntextProvider;
