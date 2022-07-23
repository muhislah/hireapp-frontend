import React, { Fragment } from 'react'
import logincss from './login.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'

const LoginPekerja = () => {
  return (
    <Fragment>
        <div className="container-fluid">
          <div className={logincss.Cover}>
            <div className={logincss.wrapperPwImg}>
                <img src={BG} className={logincss.BG} alt="" />
                <img src={Mask} className={logincss.Mask} alt="" />
                <img src={Mask1} className={logincss.Mask1} alt="" />
                <img src={Logo} className={logincss.Logo} alt="" />
                <p className={logincss.text}>Peeworld</p>
                <div className={logincss.wrapperText}>
                <h3 className={logincss.text2}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                </div>
                <p className={logincss.halo}>Halo, Pewpeople</p>
                <p className={logincss.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <div className={logincss.wrapperEmail}>
                  <p>Email</p>
                  <input type="text" className={logincss.inpEmail} placeholder='Masukan alamat email' />
                </div>
                <div className={logincss.wrapperPassword}>
                  <p>Kata Sandi</p>
                  <input type="text" className={logincss.inpEmail} placeholder='Masukan kata sandi' />
                </div>
            </div>
              <p className={logincss.forgot}>Lupa kata sandi?</p>
              <button className={logincss.btnLogin}>Masuk</button>
              <p className={logincss.textAkhir}>Anda belum punya akun? <span className={logincss.daftar}>Daftar disini</span></p>
              </div>
        </div>
    </Fragment>
  )
}

export default LoginPekerja