import { createContext, useEffect, useReducer, useState } from "react";
import { signInWithEmailAndPassword, signOut ,createUserWithEmailAndPassword } from 'firebase/auth';
import { authReducer } from "./authReducer";
import { auth } from './../firebase';

// Retorna el usuario si lo encuentra en localStorage si no retorna el logged en false
const init = () => JSON.parse(localStorage.getItem('user')) || {logged: false}

export const AuthContext = createContext();

export const AuthProvaider = (props) => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [currentUser, setCurrentUser] = useState({});


  // Cuando inicia la aplicacion va a estar observando si hay un cambio
  // de usuario.
  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user))
  }, []);

  // Esta pendiente al user para ir almancendolo en el localStorage,
  // siempre y cuando exista.
  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  const logOut = (auth) => signOut(auth);

  const value = {
    user,
    dispatch,
    singUp,
    logIn,
    logOut,
    currentUser,
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}