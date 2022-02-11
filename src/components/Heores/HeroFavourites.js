import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const HeroFavourites = (props) => {
  const { data, pathCloseSVG, dispatchHero } = props;

  const { id, superhero, publisher, characters, first_appearance } = data;

  const handleDeleteHero = ((heroID) => {
  
    
    dispatchHero({
      type: 'deleteHero',
      payload: heroID
    });

    
    (function notify() {
      toast.error('Se ha eliminado un heroe', {
        theme: 'colored',
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })();
  });

  return (
    <div
      className='col animate__animated animate__fadeIn px-2'
    >
      <li
        className='card'
      >
        <div className='d-flex justify-content-end align-items-center'>
          <button
            className='main-container--button'
          >
            <img
              src={pathCloseSVG}
              alt='delete'
              className='main-container--button-close'
              onClick={() => handleDeleteHero(id)}
            />
          </button>
          <ToastContainer />
        </div>
        <img 
          src={`/assets/img/${id}.jpg`}
          alt={superhero}
          className='card-img-top img-thumbnail'
        />
        
        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
          <h5 className="card-title"> {superhero} </h5>
          <p className="card-text"> {publisher} </p>
          <div className='d-flex flex-row '>
            <p className="card-text p-2">
                  <small className='text-muted'> {characters} </small>
            </p>
          </div>
          <p className="card-text p-2"> {first_appearance} </p>
        </div>
      </li>
    </div>
  )
}
