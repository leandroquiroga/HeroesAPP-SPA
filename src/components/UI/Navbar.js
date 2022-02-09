import React, { useContext, useState } from 'react';
import { Link, NavLink,  useNavigate } from 'react-router-dom';
import { AuthContext } from './../../auth/authContext';
import { types } from './../../types/type';
import { auth } from './../../firebase';


export const NavbarScreen = () => {

  const [toggle, setToggle] = useState(true)
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

  const imagePath = `/assets/svg/avatar.svg`
  const logoutImagePath = `/assets/svg/logout.svg`

  return (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-2'>
    <section className='container-fluid'>
      <Link
        className='navbar-brand'
        to='/'  
      >
        <img 
          className='img-fluid navbar-icon'
          alt='logo navbar'
          src={imagePath}
        />  
        </Link>
        <button
          className='navbar-toggler' 
          type='button'
          onClick={() => setToggle(!toggle)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <article
          className={toggle ? 'collapse navbar-collapse' : 'collapse navbar-collapse  active'}
          id="navbarSupportedContent"
        >
          <div className='navbar-nav text-center '> 
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
          <div className='navbar-nav ms-auto' >
            <ul className='navbar-nav'>

              <span className='nav-item nav-link text-white text-center'>
                  Hola, { user.name }
                  <small style={{fontSize: 20 + 'px'}}> &#x1F44B; </small>
              </span>

              <button
                className='nav-item btn btn-danger'
                onClick={handleLoguot}
              >
                Cerrar sesión <img src={logoutImagePath} alt='logout' />
              </button>
            </ul>

          </div>
        </article>
    </section>
  </nav>
  );
}

/*
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to="/"
        >
          <img 
            className='img-fluid navbar-icon'
            alt='logo navbar'
            src={imagePath}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse '
          id="navbarSupportedContent"
        >
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
        </div>
      </div>
*/