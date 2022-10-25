import React from 'react';

import avatarIcon from '../../assets/image/avatar.png';
import basketIcon from '../../assets/image/basket.svg';
import geoIcon from '../../assets/image/geo.svg';
import searchIcon from '../../assets/image/search.svg';

import style from './Header.module.css';

function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.text}>React</div>
      <div className={style.location}>
        <img src={geoIcon} alt="Geo icon" />
        <div className={style.cityName}>Минск</div>
      </div>

      <div className={style.search}>
        <input
          type="text"
          name="search"
          className={style.inputSearch}
          placeholder="Поиск бренда, товара, категории..."
        />
        <button type="button" className={style.buttonSearch}>
          <img src={searchIcon} alt="Search icon" />
        </button>
      </div>
      <div className={style.basket}>
        <img src={basketIcon} alt="Basket icon" />
        <div className={style.countProducts}>10+</div>
      </div>
      <img src={avatarIcon} className={style.avatar} alt="Avatar" />
    </div>
  );
}
export default Header;
