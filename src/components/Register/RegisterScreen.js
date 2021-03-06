import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { registerUser } from '../../helpers';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const [state, handleChangeInput] = useForm({
    emailUser: '',
    password: '',
    passwordConfirm: '',
  });
  const { emailUser, password, passwordConfirm } = state;
  const { dispatch, singUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Registra un usuario, si los datos son correctos,
    // lo redirije a la pagina principal de la App
    registerUser(singUp, dispatch, navigate, setError, state)
  }

  return (
    <div className='container-background'>
      <div className='d-flex justify-content-center align-items-center p-3 text-white'>
        <div
          className='shadow-lg p-3 mb-5 container-blur rounded '
          style={{ width: 370 + 'px'}}
        >
          <h1 className='text-center fs-3'>Registrate</h1>
          <hr />

          <form
            className='form-control border-0 bg-transparent text-white'
            onSubmit={handleRegister}
          >
            <div className='mb-2 '>
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

            <div className='mb-2 '>
              <label
                htmlFor='passUser'
                className='form-label'
              >
                Contrase??a: 
              </label>
              <input 
                className='form-control border-0 border-bottom bg-transparent text-white'
                type='password'
                id='passUser'
                placeholder='Ingrese contrase??a'
                name='password'
                value={password}
                onChange={handleChangeInput}
              />
            </div>
            <div className='mb-2 '>
              <label
                htmlFor='passConfirm'
                className='form-label'
              >
                Repite contrase??a: 
              </label>
              <input 
                className='form-control border-0 border-bottom bg-transparent text-white'
                type='password'
                id='passConfirm'
                placeholder='Repite contrase??a'
                name='passwordConfirm'
                value={passwordConfirm}
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
            >
              Registrate
            </button>
          </form>
          <p className='text-center'>
            ??Ya eres usuario? Haz click en <br />
            <Link to='/login'> Iniciar Sesi??n </Link>
          </p>
          <p className='fs-6 mt-3 text-center'>
            Todos los derechos reservados <br />
            &copy;Hero App
          </p>
        </div>
      </div>
    </div>
  );
};
