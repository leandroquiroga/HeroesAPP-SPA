import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { MarvelScreen } from '../components/Category/MarvelScreen';
import { HerosApp } from '../HerosApp';
import { DCScreen } from './../components/Category/DCScreen';
import { SearchScreen } from './../components/Search/Search';
import { NavbarScreen } from './../components/UI/Navbar';
import { Heroes } from './../components/Heores/Heroes';

export const DashboardRoute = () => {
  return (
    <Fragment>
      <NavbarScreen />
      <Routes>
        <Route path="./" element={<HerosApp />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DCScreen />} />
        <Route path="hero/:heroID" element={<Heroes />} />
        <Route path="search" element={<SearchScreen />} />
      </Routes>
    </Fragment>
  );
};
