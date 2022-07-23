import React, { Fragment } from 'react'
import ReqResetcss from './ReqReset.module.css'
import Lock from '../../../../Images/Lock.png'
import Logo from '../../../../Images/PeworldLogo2.png'

const RequestReset = () => {
    return(
  <Fragment>
    <div className="container-fluid">
        <div className={ReqResetcss.mainBox}>
            <div className={ReqResetcss.Box}>
                <div>
                <img className={ReqResetcss.imgLogo} src={Logo} alt="" />
                </div>
                <div>
                    <p className={ReqResetcss.text}>Request to Reset Your Account Password</p>
                </div>
                <div>
                    <p className={ReqResetcss.text2}>The following is the button for you to reset the password.</p>
                </div>
                <div>
                <img className={ReqResetcss.imgLock} src={Lock} alt="" />
                </div>
                <div>
                    <button className={ReqResetcss.btn}>Change Password</button>
                </div>
            </div>
        </div>
    </div>
  </Fragment>
    )
}

export default RequestReset