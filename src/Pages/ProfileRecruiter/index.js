import React, { Fragment } from 'react'
import Navbar from '../../Components/Module/Navbar'
import Footer from '../../Components/Module/Footer'
import styles from './ProfileRecruiter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ProfileRecuiter = () => {
  return (
    <Fragment>
        <Navbar />
        <div className={styles.Box}>
            <div className={styles.Head}>
                <div className={styles.Ellipse}>
                    <div className={styles.Content}>
                        <p className={styles.CompanyName}>PT. Martabat Jaya Abadi</p>
                        <p className={styles.CompanyRole}>Finance</p>
                        <p className={styles.WrapperLoct}><FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot}/> <span className={styles.CompanyAdress}>Purwokerto, Jawa Tengah</span></p>
                        <p className={styles.Desciption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                    <div>
                        <button className={styles.btn}>Edit Profile</button>
                    </div>
                    <div className={styles.SocialMedia}>
                        <p className={styles.Email}><FontAwesomeIcon icon={faEnvelope}/> martabatjaya@gmail.com</p>
                        <p className={styles.Instagram}><i class="fa-brands fa-instagram"></i> martabat_jaya</p>
                        <p className={styles.Phone}><FontAwesomeIcon icon={faPhone}/> 0821-8190-1821</p>
                        <p className={styles.LinkedIn}><i class="fa-brands fa-linkedin"></i> Martabat Jaya Abadi</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footer}><Footer /></div>
    </Fragment>

  )
}

export default ProfileRecuiter