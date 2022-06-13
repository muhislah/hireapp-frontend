import React from 'react'
import style from './style.module.css'
import logo from './Logo.svg'
import Navbar from '../Navbar/Navbar';

const Header = () => {
   const isLogin = false;
  return (
    <header className={style.header}>
      <div className={style.container}>
         <img src={logo} alt="home" />
         { isLogin ? <Navbar type='logged' /> : <Navbar type='notLogged' /> }
      </div>
    </header>
  )
}

export default Header