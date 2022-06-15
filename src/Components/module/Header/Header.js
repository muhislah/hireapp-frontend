import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import logo from './Logo.svg'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { employeeAction } from '../../../Configs/redux/actions/employeeAction';


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      setIsLogin(true)
    }
  },[])

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