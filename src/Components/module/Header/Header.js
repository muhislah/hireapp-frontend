import React from 'react'
import style from './style.module.css'
import logo from './Logo.svg'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';


const Header = () => {
  const navigate = useNavigate()
   const isLogin = false;
  return (
    <header className={style.header}>
      <div className={style.container}>
         <img src={logo} alt="home" onClick={() => navigate('/home')}/>
         { isLogin ? <Navbar type='logged' /> : <Navbar type='notLogged' /> }
      </div>
    </header>
  )
}

export default Header