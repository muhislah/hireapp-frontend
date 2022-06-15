import React, { Fragment } from 'react'
import ConfirmPasscss from './ConfirmPass.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'

const ConfirmPassword = () => {
    return (
        <Fragment>
            <div className="container-fluid">
              <div className={ConfirmPasscss.Cover}>
                <div className={ConfirmPasscss.wrapperPwImg}>
                    <img src={BG} className={ConfirmPasscss.BG} alt="" />
                    <img src={Mask} className={ConfirmPasscss.Mask} alt="" />
                    <img src={Mask1} className={ConfirmPasscss.Mask1} alt="" />
                    <img src={Logo} className={ConfirmPasscss.Logo} alt="" />
                    <p className={ConfirmPasscss.text}>Peeworld</p>
                    <div className={ConfirmPasscss.wrapperText}>
                    <h3 className={ConfirmPasscss.text2}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                    </div>
                    <p className={ConfirmPasscss.halo}>Reset Password</p>
                    <p className={ConfirmPasscss.lorem}>You need to change your password to activate your account</p>
                    <div className={ConfirmPasscss.wrapperEmail}>
                      <p>Kata Sandi</p>
                      <input type="text" className={ConfirmPasscss.inpEmail} placeholder='Masukan kata sandi' />
                    </div>
                    <div className={ConfirmPasscss.wrapperPassword}>
                      <p>Confirmation New Password</p>
                      <input type="text" className={ConfirmPasscss.inpEmail} placeholder='Masukan konfirmasi kata sandi' />
                    </div>
                </div>
                  <button className={ConfirmPasscss.btnLogin}>Reset Password</button>
                  </div>
            </div>
        </Fragment>
      )
}

export default ConfirmPassword