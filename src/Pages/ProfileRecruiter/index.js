import React, { Fragment, useEffect } from 'react'
import styles from './ProfileRecruiter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Module/Header/Header'
import Footer from '../../Components/Module/Footer/Footer'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { companyAction } from '../../Configs/redux/actions/companyAction'

const ProfileRecuiter = () => {
    const {company : {data : company}} = useSelector(state => state)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(companyAction(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <Fragment>
        <Header />
        <div className={styles.Box}>
            <div className={styles.Head}>
                <div className={styles.Ellipse}>
                    <div className={styles.Content}>
                        <p className={styles.CompanyName}>{company.company && company.company}</p>
                        <p className={styles.CompanyRole}>Finance</p>
                        <p className={styles.WrapperLoct}><FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot}/> <span className={styles.CompanyAdress}>Purwokerto, Jawa Tengah</span></p>
                        <p className={styles.Desciption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                    <div>
                        <button className={styles.btn} onClick={() => navigate('/EditProfilCompany/')}>Edit Profile</button>
                    </div>
                    <div className={styles.SocialMedia}>
                        <p className={styles.Email}><FontAwesomeIcon icon={faEnvelope}/> martabatjaya@gmail.com</p>
                        <p className={styles.Instagram}><i className="fa-brands fa-instagram"></i> martabat_jaya</p>
                        <p className={styles.Phone}><FontAwesomeIcon icon={faPhone}/> 0821-8190-1821</p>
                        <p className={styles.LinkedIn}><i className="fa-brands fa-linkedin"></i> Martabat Jaya Abadi</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footer}><Footer /></div>
    </Fragment>

  )
}

export default ProfileRecuiter