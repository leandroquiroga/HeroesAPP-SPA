import React, { useContext, useState } from 'react';
  
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { loginUser } from '../../helpers';

export const LoginScreen = () => {
  const [state, handleChangeInput] = useForm({
    emailUser: '',
    password: ''
  });
  const { emailUser, password } = state;
  const { dispatch, currentUser, logIn } = useContext(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate();

  //inida a que pagina se debe regresar
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Valida que los campos no esten vacios
    if ([emailUser, password].includes('')) {
      setError('Completa todos los campos');
      setTimeout(() => setError(''), 2500); 
      return;
    };
    // Autenticacion y busca en el localStorage el ultimo path. 
    loginUser(logIn, dispatch, navigate, setError, state, currentUser);
  }
  return (
    <div className='container-background'>
      <div className='d-flex justify-content-center align-items-center p-2'>
        <div
          className='shadow-lg p-3 mb-5 container-blur rounded text-white'
          style={{ width: 370 + 'px'}}
        >
          <h1 className='text-center fs-4 text-white'>Iniciar sesión</h1>
          <hr />
          <form
            className='form-control border-0 bg-transparent text-white'
            onSubmit={handleLogin}
          >
            <div className='mb-3'>
              <label
                htmlFor='emailUser'
                className='form-label'
              >
                Email :
              </label>
              <input 
                autoFocus
                className='form-control border-0 border-bottom bg-transparent text-white'
                type='email'
                id='emailUser'
                placeholder='Ingrese e-mail'
                name='emailUser'
                value={emailUser}
                onChange={handleChangeInput}
              />
            </div>

            <div className='mb-3'>
              <label
                htmlFor='passUser'
                className='form-label'
              >
                Contraseña: 
              </label>
              <input 
                className='form-control border-0 border-bottom bg-transparent text-white'
                type='password'
                id='passUser'
                placeholder='Ingrese contraseña'
                name='password'
                value={password}
                onChange={handleChangeInput}
              />
            </div>
            {error &&
                <div className='alert alert-danger text-center fw-bold my-2 p-1'>
                  {error}
                </div>
            }
            <button 
              className='btn btn-dark w-100 mt-4'
              type='submit'
            >
              Login
            </button>
          </form>
          <p className='text-center fs-6 text-white'>
            ¿No tienes cuenta? Haz click en <br />
            <Link to='/register'> Registrarme </Link>
          </p>
          <p className='fs-6 mt-3 text-center'>
            Todos los derechos reservados <br />
            &copy;Hero App
          </p>
        </div>
      </div>
    </div>
  );
}