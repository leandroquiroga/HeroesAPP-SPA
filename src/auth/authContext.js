import { createContext, useEffect, useReducer, useState } from "react";
import { signInWithEmailAndPassword, signOut ,createUserWithEmailAndPassword } from 'firebase/auth';
import { authReducer } from "./authReducer";
import { auth } from './../firebase';
import { heroReducer } from "../helpers";

// Retorna el usuario si lo encuentra en localStorage si no retorna el logged en false
const init = () => JSON.parse(localStorage.getItem('user')) || {logged: false}

// Retorna los hero si lo encuntra en localStorage si no retorna un array 
const initHero = () => JSON.parse(localStorage.getItem('hero')) || [];

export const AuthContext = createContext();

export const AuthProvaider = (props) => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [currentUser, setCurrentUser] = useState({});
  const [hero, dispatchHero] = useReducer(heroReducer, [], initHero);

  // Cuando inicia la aplicacion va a estar observando si hay un cambio
  // de usuario.
  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user))
  }, []);

  // Esta pendiente al user para ir almancendolo en el localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    return () => {
      if (!user) return;
    }
  }, [user]);

  // Esta pendiente al hero, cuando detecta un cambio lo almacena en el localStorage
  useEffect(() => {
    localStorage.setItem('hero', JSON.stringify(hero));
    return () => {
      if (!hero) return;
    }
  }, [hero])
  


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
    dispatchHero,
    hero,
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}