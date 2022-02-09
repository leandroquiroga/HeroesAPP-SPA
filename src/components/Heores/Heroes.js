import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getHeroById } from './../../helpers/index';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const Heroes = () => {
  // const [msgAdd , setMsgAdd] = useState(false)  
  const { heroID } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroID), [heroID] ) 

  const { id, superhero, alter_ego, characters, first_appearance, publisher } = hero; 

  if (!hero) {
    return <Navigate to='/' />
  };

  // Regresa al url anterior de la pila del stack
  const handleBack = () => navigate(-1);


  const notify = () => {
    toast.success('Nuevo heroe agregado', {
      theme: 'colored',
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  

  const imagePath = `/assets/img/${id}.jpg`
  const startImagePath = `/assets/svg/start.svg`
  const backImagePath = `/assets/svg/back.svg`
  return (
    <div className='container animate__animated animate__fadeIn '>
      <div className='d-flex flex-column mt-3 flex-md-row '>
        <div className='col-12 col-md-4 '>
          <img
            src={imagePath}
            alt={superhero}
            className='img-fluid w-100'
          >
          </img>
        </div>
        <div className='col-12 col-md-8 p-5'>
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

          <div className='d-flex flex-row '>
              <button
                className='btn btn-danger m-2'
                onClick={handleBack}
              >
                Regresar <img src={backImagePath} alt='favorite' />
              </button>
              <div className='d-flex flex-column flex-md-row align-items-center'>
                <button
                  className='btn btn-danger m-2'
                  onClick={notify}>
                  Añadir a <img src={startImagePath} alt='favorite' />
              </button>
              <ToastContainer />
            </div>  
          </div>

        </div>
      </div>
    </div>
  );
};
