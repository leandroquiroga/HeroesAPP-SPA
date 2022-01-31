import React from 'react';
import { HeroList } from './../Heores/HeroList';

export const DCScreen = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>DC Screen</h1>
      <hr />
      <HeroList publisher='DC Comics' />
    </div>
  );
}