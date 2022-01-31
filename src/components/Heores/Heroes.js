import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getHeroById } from './../../helpers/index';

export const Heroes = () => {
  
  const { heroID } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroID), [heroID] ) 

  const { id, superhero, alter_ego, characters, first_appearance, publisher } = hero; 

  if (!hero) {
    return <Navigate to='/' />
  };

  // Regresa al url anterior de la pila del stack
  const handleBack = () => navigate(-1)

  const imagePath = `/assets/img/${id}.jpg`
  return (
    <div className='container animate__animated animate__fadeIn '>
      <div className='row mt-3'>
        <div className='col-4 '>
          <img
            src={imagePath}
            alt={superhero}
            className='img-thumbnail'
          >
          </img>
        </div>
        <div className='col-8 p-5'>
          <h3>{superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Alter ego: </b>
                {alter_ego}
            </li>
            <li className='list-group-item'>
              <b>Publisher: </b>
                {publisher}
            </li>
            <li className='list-group-item'>
              <b>First Appearance: </b>
                {first_appearance}
            </li>
          </ul>

          <h5 className='mt-3 mx-3'> Characters </h5>
          <p className='mx-3'> {characters} </p>

          <button
            className='btn btn-danger mx-3'
            onClick={handleBack}
          >
            Regresar
          </button>

        </div>
      </div>
    </div>
  );
};
