import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers';
import { HeroCard } from './HeroCard';


export const HeroList = ({publisher}) => {
  
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className=' animate__animated animate__fadeIn  container-card'>
      
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