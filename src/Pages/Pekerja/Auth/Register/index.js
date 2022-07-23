import React, { Fragment } from 'react'
import RegisterCSS from './Register.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'

const RegisterPekerja = () => {
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
                  <input type="text" className={RegisterCSS.inpEmail} placeholder='Masukan nama lengkap' />
                </div>
                <div className={RegisterCSS.wrapperEmail}>
                  <p>Email</p>
                  <input type="text" className={RegisterCSS.inpEmail} placeholder='Masukan alamat email' />
                </div>
                <div className={RegisterCSS.wrapperNoHp}>
                  <p>No. Handphone</p>
                  <input type="text" className={RegisterCSS.inpEmail} placeholder='Masukan No. Handphone' />
                </div>
                <div className={RegisterCSS.wrapperPassword}>
                  <p>Kata Sandi</p>
                  <input type="text" className={RegisterCSS.inpEmail} placeholder='Masukan kata sandi' />
                </div>
                <div className={RegisterCSS.wrapperConfPassword}>
                  <p>Konfirmasi Kata Sandi</p>
                  <input type="text" className={RegisterCSS.inpEmail} placeholder='Konfirmasi kata sandi' />
                </div>
            </div>
              <button className={RegisterCSS.btnLogin}>Daftar</button>
              <p className={RegisterCSS.textAkhir}>Anda belum punya akun? <span className={RegisterCSS.daftar}>Masuk disini</span></p>
              </div>
        </div>
    </Fragment>
  )
}

export default RegisterPekerja