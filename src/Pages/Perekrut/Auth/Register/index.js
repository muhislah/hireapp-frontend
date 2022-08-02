import React from 'react'
import style from './style.module.css'
import bg from './asset/BG.png'
import mask from './asset/Mask1.png'
import logo from './asset/PeworldLogo3.png'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../../Configs/redux/actions/userAction'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const pass1 = useRef(null)
  const pass2 = useRef(null)
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async () => {
    try {
      dispatch(registerUser(user, navigate))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container-fluid vh-100'>
      <div className='row vh-100'>
        <div className='col-6 p-5 vh-100 pl-8 ' style={{
          width : "inherit"
        }}>
          <div className={style.fixed + " d-flex align-items-center overflow-hidden p-5"}>
            <img src={bg} alt="" className={style.baligho+' position-absolute'}/>
            <img src={mask} alt="" className={style.masking+' position-absolute'}/>
            <img src={logo} alt="" className={style.logo+ " position-absolute"}/>
            <h1 className={style.tagline +' position-absolute font-weight-bold m-auto' }>Dapatkan developer berbakat & terbaik di berbagai bidang keahlian</h1>
          </div>
        </div>
        <div className='col-6 d-flex flex-column justify-content-center p-5 pl-2'>
          <h1>Halo, Pewpeople</h1>
          <p className='mb-3 text-muted'>Silahkan daftarkan diri anda sebagai Company terbaik kami,</p>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Name :</span>
            <input type="text" name="fullname" onChange={(e) => handleChange(e)} placeholder='Masukan nama lengkap' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Email :</span>
            <input type="text" name="email" onChange={(e) => handleChange(e)}  placeholder='Masukan alamat email' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Company :</span>
            <input type="text" name="company" onChange={(e) => handleChange(e)}  placeholder='Masukan nama company' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Position :</span>
            <input type="text" name="position" onChange={(e) => handleChange(e)}  placeholder='Masukan nama company' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Phone Number :</span>
            <input type="text" name="phonenumber" onChange={(e) => handleChange(e)} placeholder='Masukan No. Handphone' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Password :</span>
            <input type="password" name="password" ref={pass1} onChange={(e) => handleChange(e)} placeholder='Masukkan password anda' className={style.input+" my-2 pl-4"} />
          </label>
          <label htmlFor="" className='d-block'>
            <span className='d-block text-muted'>Retype Password :</span>
            <input type="password" name="password2" onChange={(e) => handleChange(e)} placeholder='Masukkan kembali password anda' className={style.input+" my-2 pl-4"} />
          </label>
          <p className='ml-auto'>Forgot Password</p>
          <button className={style.button} disabled={user.password !== user.password2 || user.password == '' } onClick={handleSubmit}>Masuk</button>
          <p className='mt-5 text-center'>Anda belum punya akun ? <Link to="/register">Daftar disini</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register