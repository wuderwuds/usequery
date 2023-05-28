import React from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from './header.module.css'

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <ul className={styles.headerMenu}>
          <li><Link to='/'>Home</Link></li>
          <li><NavLink
            className={({ isActive }) => isActive ? styles.active : ""}
            to='/todos'>
            Тудушки
          </NavLink></li>
          <li><NavLink
            className={({ isActive }) => isActive ? styles.active : ""}
            to='contacts'>
            Контакты
          </NavLink></li>
          {pathname === '/todos' && <li><Link to='/'>Нетудус</Link></li>}
        </ul>
      </nav>
    </header>
  )
}

export const MemoHeader = React.memo(Header)

