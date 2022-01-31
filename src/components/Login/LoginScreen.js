import React from 'react';
  
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();
  
  //inida a que pagina se debe regresar
  const handleLogin = () => {
    navigate('/', {
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