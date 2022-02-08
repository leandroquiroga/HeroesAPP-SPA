

import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PriveteRouter = ({children}) => {
  
  const { currentUser } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  
  // Esta atento al cambio del nuesto pathname del useLocation,
  // cuando detecte un cambio checkea si exite el search, en caso de que 
  // sea correcto se alamacena en el localStorage, sino se almancena el pathname
  useEffect(() => {
    localStorage.setItem('lastPath', pathname + (search && search) )
  },[pathname, search])
  
  return (currentUser) ?
          children : <Navigate to='/login'/> 
};


// En caso que el usuario este autenticado
// le permite acceso a la aplicacion 
// en caso contrario lo redirige 
// al que dse autentifique