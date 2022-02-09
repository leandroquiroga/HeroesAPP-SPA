import React from 'react';

export const Main = () => {
  const pathIMG = `/assets/img/not-super-hero.png`
  return (
       
    <div className=' container d-flex justyfy-content-center align-items-center'>

    {/*
        Si hay elemento en arreglo de favoritos,
        muestra una lista de todos los elementos 
    
     */}

    <div className='d-flex justify-content-between align-items-center w-100 p-5 flex-column flex-lg-row '>
      <img 
        className='img-fluid'
        alt='have not element'
        src={pathIMG}
      />

      <p className='text-center fs-3 mt-5 mt-lg-0'>
        No hay superheroes en la lista de favoritos...
      </p>
    </div>
  </div>
  );
};
