import React, { Fragment, useEffect } from 'react'
import styles from './ProfileRecruiter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone, faPencil } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Module/Header/Header'
import Footer from '../../Components/Module/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { loadData } from '../../Configs/redux/actions/CompanyProfile/companyProfile'
import { USER_KEY } from '../../Configs/redux/reducers/profileReducers'

const ProfileRecuiter = () => {
    let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // view data from store
  let viewUser = useSelector((state) => {
    return state[USER_KEY];
  });
  console.log();


  return (
    <Fragment>
        <Header />
        <div className={styles.Box}>
            <div className={styles.Head}>
                <p>{JSON.stringify(viewUser)}</p>
                        <p className={styles.Edit}><FontAwesomeIcon icon={faPencil} /> Ubah Latar</p>
                        <input type="img" className={styles.Ellipse}/>
                        <p className={styles.CompanyName}>PT. Martabat Jaya Abadi</p>
                        <p className={styles.CompanyRole}>Finance</p>
                        <p className={styles.WrapperLoct}><FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot}/> <span className={styles.CompanyAdress}>Purwokerto, Jawa Tengah</span></p>
                        <p className={styles.Desciption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    <div>
                        <button className={styles.btn}>Edit Profile</button>
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