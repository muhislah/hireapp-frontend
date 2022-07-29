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
import { loginUser } from '../../../../Configs/redux/actions/userAction'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.auth);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formLogin.email)
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formLogin, navigate));
  };
  return (
    <div className='container-fluid vh-100'>
      <div className='row vh-100'>
        <div className='col-6 p-5 vh-100 pl-8'>
          <div className='d-flex align-items-center w-100 h-100 overflow-hidden position-relative p-5'>
            <img src={bg} alt="" className={style.baligho+' position-absolute'}/>
            <img src={mask} alt="" className={style.masking+' position-absolute'}/>
            <img src={logo} alt="" className={style.logo+ " position-absolute"}/>
            <h1 className={style.tagline +' position-absolute font-weight-bold m-auto' }>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
          </div>
        </div>
        <div className='col-6 d-flex flex-column justify-content-center p-5 pr-8'>
          <h1>Halo, Pewpeople Recruiter</h1>
          <p className='mb-5 text-muted'>Masuk sebagai company dan dapatkan developers terbaik untuk project anda</p>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Email :</span>
            <input type="text" name="email" value={formLogin.email} onChange={handleChange} placeholder='Masukkan email anda' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Password :</span>
            <input type="password" name="password" value={formLogin.password} onChange={handleChange} placeholder='Masukkan password anda' className={style.input+" my-2 pl-4"} />
          </label>
          <p className='ml-auto'>Forgot Password</p>
          <button className={style.button} onClick={(e) => handleLogin(e)}>Masuk</button>
          <p className='mt-5 text-center'>Anda belum punya akun ? <Link to="/register">Daftar disini</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login