import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.scss';

const Navigation = () => (
  <ul className={style.navbar}>
    <li className={style.link}>
      <NavLink activeClassName={style.active} to="/" exact>Nauka</NavLink>
    </li>
    <li className={style.link}>
      <NavLink activeClassName={style.active} to="/test">Test</NavLink>
    </li>
  </ul>
);

export default Navigation;
