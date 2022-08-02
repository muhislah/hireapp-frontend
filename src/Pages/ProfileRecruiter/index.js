import React, { Fragment, useEffect } from 'react'
import styles from './ProfileRecruiter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/module/Header/Header'
import Footer from '../../Components/module/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { companyAction } from '../../Configs/redux/actions/companyAction'
import photo from './noimage.jpg'

const ProfileRecuiter = () => {
    const dispatch = useDispatch()
    const { company: { data: company } } = useSelector(state => state)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(companyAction(token))
    },[])

    const handleLogout = () => {
        navigate('/company/login')
     }
  
    return (
        <Fragment>
            <Header />
            {
                company &&
                (
                    <div className={styles.body}>
                        <div className={styles.Box}>
                            <div className={styles.Head}>
                                <img src={company?.image || photo} className={styles.Ellipse} />
                                <div className={styles.Content}>
                                    <h4 className="font-weight-bold">
                                        {company.company && company.company}
                                    </h4>
                                    <p className={styles.CompanyRole}>{company?.companyfield}</p>
                                    <p className={styles.WrapperLoct}>
                                        <FontAwesomeIcon
                                            className={styles.MapsIcon}
                                            icon={faLocationDot}
                                        />{" "}
                                        <span className={styles.CompanyAdress}>
                                            {company?.address}
                                        </span>
                                    </p>
                                    <p className={styles.Desciption}>
                                        {
                                            company?.companydescription
                                        }
                                    </p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button
                                        className="my-3"
                                        onClick={() => navigate("/company/profile/edit")}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                                <div className="d-flex flex-column justify-content-center mx-auto">
                                    {company?.email &&
                                        (
                                            <p className="mx-auto">
                                                <FontAwesomeIcon icon={faEnvelope} /> {company.email}
                                            </p>

                                        )
                                    }
                                    {company?.instagram &&
                                        (
                                            <p className="mx-auto">
                                                <i className="fa-brands fa-instagram"></i> {company.instagram}
                                            </p>

                                        )
                                    }
                                    {company?.phonenumber &&
                                        (
                                            <p className="mx-auto">
                                                <FontAwesomeIcon icon={faPhone} /> {company.phonenumber}
                                            </p>

                                        )
                                    }
                                    {company?.linkedin &&
                                        (
                                            <p className="mx-auto">
                                                <i className="fa-brands fa-linkedin"></i> {company.linkedin}
                                            </p>

                                        )
                                    }
                                <button className={styles.button} onClick={() => handleLogout()}>Logout</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            }

            <Footer />
        </Fragment>
    );
}

export default ProfileRecuiter