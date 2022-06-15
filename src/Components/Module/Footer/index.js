import React, { Fragment } from 'react'
import styles from './Footer.module.css'
import Logo from '../../../Images/PeworldLogo3.png'

const Footer = () => {
  return (
    <Fragment>
        <div className={styles.Container}>
            <div className={styles.Logo}>
                <img className={styles.imgLogo} src={Logo} alt="" />
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <div className={styles.Line}></div>
            <p className={styles.text2}>2020 Pewworld. All right reserved</p>
            <p className={styles.text3}>Telepon</p>
            <p className={styles.text4}>Email</p>
        </div>
    </Fragment>
  )
}

export default Footer