import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Page404 } from '../Page404';
import { LoginScreen } from './../components/Login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
