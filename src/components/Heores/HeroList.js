import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers';
import { HeroCard } from './HeroCard';


export const HeroList = ({publisher}) => {
  
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className=' animate__animated animate__fadeIn row justify-content-center row-cols-1 row-cols-md-2  row-cols-xxl-3 g-2'>
      
      {
        heroes.map(hero => ( 
          <HeroCard
            key={hero.id}
            {...hero}   
          />
        ))
      }
      
    </div>
  );
};