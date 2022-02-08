import React, { useContext } from 'react';
import { Link, NavLink,  useNavigate } from 'react-router-dom';
import { AuthContext } from './../../auth/authContext';
import { types } from './../../types/type';
import { auth } from './../../firebase';


export const NavbarScreen = () => {

  const navigate = useNavigate();
  const { user, dispatch, logOut } = useContext(AuthContext)
  // retorna a inicio de sesion

  const handleLoguot =  async () => {
    
    try {

      await logOut(auth);
      dispatch({
        type: types.logout,
      });
      navigate('/login', {
        replace: true
      });  
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-2'>

      <Link
        className='navbar-brand'
        to="/"
      >
        Inicio
      </Link>
      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) => 'nav-item nav-link text-white' + (isActive ? 'active' : '' )}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => 'nav-item nav-link text-white' + (isActive ? 'active' : '' )}
            to='/dc'
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav-item nav-link text-white' + (isActive ? 'active' : '' )}
            to='/search'
          >
            Search
          </NavLink>
      </div>
    </div>
    <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
      <ul className='navbar-nav ml-auto'>

        <span className='nav-item nav-link text-white'>
            Hola, { user.name }
            <small style={{fontSize: 20 + 'px'}}> &#x1F44B; </small>
        </span>

        <button
          className='nav-item btn btn-danger'
          onClick={handleLoguot}
        >
          Cerrar sesión
        </button>
      </ul>
    </div>
  </nav>
  );
}