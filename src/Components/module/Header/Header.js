import React from 'react'
import style from './style.module.css'
import logo from './Logo.svg'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import { employeeAction } from '../../../Configs/redux/actions/employeeAction';


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const isLogin = false;
  return (
    <header className={style.header}>
      <div className={style.container}>
         <img src={logo} alt="home" onClick={() => {navigate('/home'); dispatch(employeeAction())}}/>
         { isLogin ? <Navbar type='logged' /> : <Navbar type='notLogged' /> }
      </div>
    </header>
  )
}

export default Header