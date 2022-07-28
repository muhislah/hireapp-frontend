import React from 'react'
import style from './style.module.css'
import bg from './asset/BG.png'
import mask from './asset/Mask1.png'
import logo from './asset/PeworldLogo3.png'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { employeeLogin } from '../../../../Configs/redux/actions/profileEmployee'
import { useNavigate } from 'react-router-dom'

const LoginPekerja = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const navigate =  useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
    [e.target.name] : e.target.value
    })
  }

  const handleSubmit = () => {
    dispatch(employeeLogin(user, navigate))
  }
  return (
    <div className='container-fluid vh-100'>
      <div className='row vh-100'>
        <div className='col-6 p-5 vh-100 pl-8'>
          <div className='d-flex align-items-center w-100 h-100 overflow-hidden position-relative p-5'>
            <img src={bg} alt="" className={style.baligho+' position-absolute'}/>
            <img src={mask} alt="" className={style.masking+' position-absolute'}/>
            <img src={logo} alt="" className={style.logo+ " position-absolute"}/>
            <h1 className={style.tagline +' position-absolute font-weight-bold m-auto' }>Jadilah developer berbakat & terbaik di berbagai bidang keahlian</h1>
          </div>
        </div>
        <div className='col-6 d-flex flex-column justify-content-center p-5 pr-8'>
          <h1>Halo, Pewpeople</h1>
          <p className='mb-5 text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio tenetur ullam vel eos ea soluta corrupti expedita. Esse, eum!</p>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Email :</span>
            <input type="text" name="email" onChange={(e) => handleChange(e)} placeholder='Masukkan email anda' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Password :</span>
            <input type="password" name="password" onChange={(e) => handleChange(e)} placeholder='Masukkan password anda' className={style.input+" my-2 pl-4"} />
          </label>
          <p className='ml-auto'>Forgot Password</p>
          <button className={style.button} onClick={handleSubmit}>Masuk</button>
          <p className='mt-5 text-center'>Anda belum punya akun ? <Link to="/register">Daftar disini</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPekerja