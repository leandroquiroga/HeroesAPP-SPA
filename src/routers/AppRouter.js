import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PriveteRouter } from './PriveteRouter';
import { PublicRouter } from './PublicRouter';
import { LoginScreen } from './../components/Login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={
          <PublicRouter >
            <LoginScreen />
          </PublicRouter>
        } />
        

        <Route path="/*" element={
          <PriveteRouter>
              <DashboardRoute />
          </PriveteRouter>
          } />
      </Routes>
    </BrowserRouter>
  );
};
