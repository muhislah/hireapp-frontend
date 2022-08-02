import React, { Fragment } from 'react'
import LoginConfcss from './LoginConfirm.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'

const LoginConfirm = () => {
    return (
        <Fragment>
            <div className="container-fluid">
              <div className={LoginConfcss.Cover}>
                <div className={LoginConfcss.wrapperPwImg}>
                    <img src={BG} className={LoginConfcss.BG} alt="" />
                    <img src={Mask} className={LoginConfcss.Mask} alt="" />
                    <img src={Mask1} className={LoginConfcss.Mask1} alt="" />
                    <img src={Logo} className={LoginConfcss.Logo} alt="" />
                    <p className={LoginConfcss.text}>Peeworld</p>
                    <div className={LoginConfcss.wrapperText}>
                    <h3 className={LoginConfcss.text2}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                    </div>
                    <p className={LoginConfcss.halo}>Please Login With Your Account</p>
                    <p className={LoginConfcss.lorem}>We have an an email containing a password reset instruction toyour email. please check your email.</p>
                    <div className={LoginConfcss.wrapperEmail}>
                      <p>Email</p>
                      <input type="text" className={LoginConfcss.inpEmail} placeholder='Masukan email' />
                    </div>
                    <div className={LoginConfcss.wrapperPassword}>
                      <p>Password</p>
                      <input type="text" className={LoginConfcss.inpEmail} placeholder='Masukan password' />
                    </div>
                </div>
                  <button className={LoginConfcss.btnLogin}>Reset Password</button>
                  </div>
            </div>
        </Fragment>
      )
}

export default LoginConfirm