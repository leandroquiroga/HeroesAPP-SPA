import React, { useMemo, useState } from 'react';
import { useForm } from './../../hooks/useForm';
import { getHeroByName } from './../../helpers/index';
import { HeroCard } from '../Heores/HeroCard';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

export const SearchScreen = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { q } = queryString.parse(location.search);

  const query = q === undefined ? '' : q;

  const [state, handleChangeInput] = useForm({
    searchHeroe: query,
  });

  const { searchHeroe } = state;
  
  const heroFilter = useMemo(() => getHeroByName(query), [query] ) 

  const handleSearch = (e) => {
    e.preventDefault();


    if (searchHeroe === '') { 
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      
      return;
    }

    setError(false);
    navigate(`?q=${searchHeroe}`)
  };
  const searchImagePath = `/assets/svg/search.svg`

  return (
    <div className='container animate__animated animate__fadeIn'>
      <h1>Busquedas </h1>
      <hr />

      <div className='row'>
        <div className='col-lg-5 col-12'>
          <h4>Buscar </h4>
          <hr />
          
          <form onSubmit={handleSearch}>
            <input
              className='form-control'
              type='text'
              autoComplete='off'
              autoFocus
              placeholder='Ingrese un heore'
              name='searchHeroe'
              value={searchHeroe}
              onChange={handleChangeInput}
            >

            </input>
            {
              error &&
                <div className='alert alert-danger text-center fw-bold my-2 p-1'>
                  Ingresa un heroe
                </div>
            }
            <button
              type="submit"
              className='btn btn-danger mt-2 w-100'
            >
              Buscar <img src={ searchImagePath } alt='search hero' />
            </button>
          </form>
        </div>

        <div className='col-lg-7 col-12 d-flex flex-column justify-content-center align-items-center'>
          
          <h4>Resultados</h4>
            <hr />  

            {
              (heroFilter.length === 0 ) ?

              <div className="alert alert-danger w-100"> No hay resultados: { query } </div>
                
                :
                  heroFilter.map((hero) => (
                    <HeroCard 
                      key={hero.id}
                      {...hero}
                    />
                  ))
            }
        </div>
      </div>
    </div>
  );
}