import React, { Fragment, useState } from 'react'
import RegisterCSS from './Register.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'
import { useRef } from 'react'
import { register } from './helper'

const RegisterPekerja = () => {
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
      const data = await register(user)
      if(data?.message == 'User berhasil register'){
        return alert('registrasi berhasil')
      }
      alert('registrasi gagal')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Fragment>
        <div className="container-fluid">
        <div className={RegisterCSS.Cover}>
            <div className={RegisterCSS.wrapperPwImg}>
                <img src={BG} className={RegisterCSS.BG} alt="" />
                <img src={Mask} className={RegisterCSS.Mask} alt="" />
                <img src={Mask1} className={RegisterCSS.Mask1} alt="" />
                <img src={Logo} className={RegisterCSS.Logo} alt="" />
                <p className={RegisterCSS.text}>Peeworld</p>
                <div className={RegisterCSS.wrapperText}>
                <h3 className={RegisterCSS.text2}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                </div>
                <p className={RegisterCSS.halo}>Halo, Pewpeople</p>
                <p className={RegisterCSS.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <div className={RegisterCSS.wrapperFullName}>
                  <p>Nama</p>
                  <input type="text" className={RegisterCSS.inpEmail} name="fullname" onChange={(e) => handleChange(e)} placeholder='Masukan nama lengkap' />
                </div>
                <div className={RegisterCSS.wrapperEmail}>
                  <p>Email</p>
                  <input type="text" className={RegisterCSS.inpEmail} name="email" onChange={(e) => handleChange(e)}  placeholder='Masukan alamat email' />
                </div>
                <div className={RegisterCSS.wrapperNoHp}>
                  <p>No. Handphone</p>
                  <input type="text" className={RegisterCSS.inpEmail} name="phonenumber" onChange={(e) => handleChange(e)} placeholder='Masukan No. Handphone' />
                </div>
                <div className={RegisterCSS.wrapperPassword}>
                  <p>Kata Sandi</p>
                  <input type="text" className={RegisterCSS.inpEmail} name="password" ref={pass1} onChange={(e) => handleChange(e)} placeholder='Masukan kata sandi' />
                </div>
                <div className={RegisterCSS.wrapperConfPassword}>
                  <p>Konfirmasi Kata Sandi</p>
                  <input type="text" className={RegisterCSS.inpEmail} name="password2" onChange={(e) => handleChange(e)} placeholder='Konfirmasi kata sandi' ref={pass2} />
                </div>
            </div>
              <button className={RegisterCSS.btnLogin} disabled={user.password !== user.password2 || user.password == '' } onClick={handleSubmit}>Daftar</button>
              <p className={RegisterCSS.textAkhir}>Anda belum punya akun? <span className={RegisterCSS.daftar}>Masuk disini</span></p>
              </div>
        </div>
    </Fragment>
  )
}

export default RegisterPekerja