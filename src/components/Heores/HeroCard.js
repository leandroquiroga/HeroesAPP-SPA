import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher, 
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imageSRC = `/assets/img/${id}.jpg`
  const infoImagePath = `/assets/svg/info.svg`
  return (

    <div className='col animate__animated animate__fadeIn'>
      
      <div className='card p-3' style={{ width: 18 + 'rem'}}>  
        <img
          src={imageSRC}
          className='card-img-top img-thumbnail'
          alt={superhero}
        />

        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
          <h5 className="card-title"> {superhero} </h5>
          <p className="card-text"> {publisher} </p>
          <div className='d-flex flex-row '>
            <p className="card-text p-2"> {alter_ego} </p>
            <p className="card-text p-2">
              {
                ( alter_ego !== characters ) && 
                  <small className='text-muted'> {characters} </small>
              }
            </p>
          </div>
          <p className="card-text p-2"> {first_appearance} </p>
        </div>
        
        <Link to={`/hero/${id}`}>
          <button
            className='btn btn-dark w-100'
            type='button'
          >
            Mas informacion <img src={infoImagePath} alt='info' />
          </button>
        </Link>
      </div>
    </div>
  )
};
