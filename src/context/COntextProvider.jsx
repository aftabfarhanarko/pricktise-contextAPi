import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fierbase/fierbase.config.js"

const COntextProvider = ({ children }) => {

    const [myLogingUser, setMyLogingUser] = useState(null);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubcriet = onAuthStateChanged(auth, (currentUser) => {
        console.log("Fierbase Data Current User", currentUser);
        setMyLogingUser(currentUser)
    });

    return () => {
        unsubcriet()
    }
  }, [])

  const userInfo = {
    myLogingUser,
    signOutUser,
    creatUser,
    singInUser,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default COntextProvider;
