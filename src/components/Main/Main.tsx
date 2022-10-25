import React from 'react';

import { Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';

import style from './Main.module.css';

function Main() {
  return (
    <div className={style.main}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}
export default Main;
