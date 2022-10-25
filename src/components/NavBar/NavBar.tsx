import React from 'react';

import style from './NavBar.module.css';

function NavBar() {
  return (
    <div className={style.navBar}>
      <span className={style.categoryTitle}>Категории товаров</span>
      <span className={style.settingTitle}>Настройка</span>
    </div>
  );
}
export default NavBar;
