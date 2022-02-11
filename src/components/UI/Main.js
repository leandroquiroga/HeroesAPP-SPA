import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { HeroFavourites } from './../Heores/HeroFavourites';

export const Main = () => {

  const { hero, dispatchHero } = useContext(AuthContext);
  
  const pathIMG = `/assets/img/not-super-hero.png`
  const pathCloseSVG = `/assets/svg/close.svg`
  return (
    <main className='container p-4'>
      {(
        (hero.length === 0) ?
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
        : 
          <div>
            <h1 className='text-center'> Superheroes favoritos </h1>
            <hr />
            <div
              className="container-card"
             
              >
              {(
                  hero.map(data => (
                    <HeroFavourites 
                      key={data.id}
                      data={data}
                      pathCloseSVG={pathCloseSVG}
                      dispatchHero={dispatchHero}
                    />
                  ))
                )}
            </div>  
          </div>
      )}

    </main>
      

  );
};
