import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Navbarcss from './Navbar.module.css'
import Logo from '../../../Images/PeworldLogo2.png'

const Navbar = () => {
  return (
    <Fragment>
        <div className={Navbarcss.Container}>
            <div>
                <img src={Logo} className={Navbarcss.Logo} alt="" />
            </div>
            <div className={Navbarcss.Component}>
                <ul className={Navbarcss.list}>
                    <li><FontAwesomeIcon className={Navbarcss.NotifIcon} icon={faBell} /></li>
                    <li><FontAwesomeIcon className={Navbarcss.MessageIcon} icon={faEnvelope} /></li>
                    <li className={Navbarcss.ProfilIcon}></li>
                </ul>
            </div>
        </div>
    </Fragment>
  )
}

export default Navbar