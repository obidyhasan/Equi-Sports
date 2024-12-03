import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
    loading,
    loginUser,
    createUser,
    logOut,
    updateUser,
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  function createUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginUser(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    setLoading(true);
    return signOut(auth);
  }

  function updateUser(info) {
    updateProfile(auth.currentUser, info);
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
