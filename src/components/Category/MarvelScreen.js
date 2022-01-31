import React from 'react';
import { HeroList } from './../Heores/HeroList';

export const MarvelScreen = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Marvel Screen</h1>
      <hr />

      <HeroList publisher='Marvel Comics' />
    </div>
  );
};
