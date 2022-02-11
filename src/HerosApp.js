import React from 'react';
import { AuthProvaider } from './auth/authContext';
import { AppRouter } from './routers/AppRouter';

import 'animate.css';


export const HerosApp = () => {
  return (
    <AuthProvaider>
      <AppRouter />
    </AuthProvaider>
  );
};
