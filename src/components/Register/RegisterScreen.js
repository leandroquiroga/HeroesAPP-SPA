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
  const { dispatch, singUp, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();

    // Validacion de campos vacios y contraseñas iguales
    if ([emailUser, password, passwordConfirm].includes('')) {
      setError('Completa todos los campos');
      setTimeout(() => setError(''), 2500);
      return
    } else if (password !== passwordConfirm) {
      setError('Las contraseñas no coinciden');
      setTimeout(() => setError(''), 2500);
      return
    }

    console.log(emailUser);

    // Registra un usuario, si los datos son correctos,
    // lo redirije a la pagina principal de la App
    registerUser(singUp, dispatch, navigate, setError, state, currentUser)
  }

  const imagePath = `/assets/svg/avatar.svg`
  return (
    <div className='container mt-3 '>
      <div className='d-flex justify-content-center align-items-center p-3  '>
        <div
          className='shadow-lg p-3 mb-5 bg-body rounded '
          style={{ width: 370 + 'px'}}
        >
          <h1 className='text-center fs-3'>Registrate</h1>
          <hr />
          <div className='d-flex justify-content-center align-items-center p-1'>
            <img 
              className='img-fluid w-25'
              src={imagePath}
              alt='icon'
            />
          </div>
          <form
            className='form-control  border-0'
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
                className='form-control border-0 border-bottom'
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
                Contraseña: 
              </label>
              <input 
                className='form-control border-0 border-bottom'
                type='password'
                id='passUser'
                placeholder='Ingrese contraseña'
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
                Repite contraseña: 
              </label>
              <input 
                className='form-control border-0 border-bottom'
                type='password'
                id='passConfirm'
                placeholder='Repite contraseña'
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
            ¿Ya eres usuario? Haz click en <br />
            <Link to='/login'> Iniciar Sesión </Link>
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
