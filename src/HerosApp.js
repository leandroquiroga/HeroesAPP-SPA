import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/autoContext';
import { AppRouter } from './routers/AppRouter';
import 'animate.css';
import { authReducer } from './auth/authReducer';


// Retorna el usuario si lo encuentra en localStorage si no retorna el logged en false
const init = () => JSON.parse(localStorage.getItem('user')) || {logged: false}



export const HerosApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  // Esta pendiente al user para ir almancendolo en el localStorage,
  // siempre y cuando exista.
  
  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
