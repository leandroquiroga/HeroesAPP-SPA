import React, { useContext } from 'react';
  
import { useNavigate } from 'react-router-dom';
import { types } from './../../types/type';
import { AuthContext } from './../../auth/autoContext';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  
  //inida a que pagina se debe regresar
  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Leandro'
      },
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/'

    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      
      <button 
        className='btn btn-dark'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}