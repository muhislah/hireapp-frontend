import React, { Fragment } from 'react'
import ResetPasscss from './ResetPass.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'

const ResetPassword = () => {
  return (
    <Fragment>
        <div className="container-fluid">
          <div className={ResetPasscss.Cover}>
            <div className={ResetPasscss.wrapperPwImg}>
                <img src={BG} className={ResetPasscss.BG} alt="" />
                <img src={Mask} className={ResetPasscss.Mask} alt="" />
                <img src={Mask1} className={ResetPasscss.Mask1} alt="" />
                <img src={Logo} className={ResetPasscss.Logo} alt="" />
                <p className={ResetPasscss.text}>Peeworld</p>
                <div className={ResetPasscss.wrapperText}>
                <h3 className={ResetPasscss.text2}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                </div>
                <p className={ResetPasscss.halo}>Reset Password</p>
                <p className={ResetPasscss.lorem}>Enter your user account's verified email address and we will send you a password reset link.</p>
                <div className={ResetPasscss.wrapperEmail}>
                  <p>Email</p>
                  <input type="text" className={ResetPasscss.inpEmail} placeholder='Masukan alamat email' />
                </div>
            </div>
              <button className={ResetPasscss.btnLogin}>Send password reset email</button>
              </div>
        </div>
    </Fragment>
  )
}

export default ResetPassword