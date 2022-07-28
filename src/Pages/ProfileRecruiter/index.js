import React, { Fragment, useEffect } from 'react'
import styles from './ProfileRecruiter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/module/Header/Header'
import Footer from '../../Components/module/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { companyAction } from '../../Configs/redux/actions/companyAction'

const ProfileRecuiter = () => {
    const { company: { data: company } } = useSelector(state => state)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    return (
        <Fragment>
            <Header />
            {
                company &&
                (
                    <div className={styles.body}>
                        <div className={styles.Box}>
                            <div className={styles.Head}>
                                <img src={company?.image} className={styles.Ellipse} />
                                <div className={styles.Content}>
                                    <p className={styles.CompanyName}>
                                        {company.company && company.company}
                                    </p>
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
                                <div>
                                    <button
                                        className={styles.btn}
                                        onClick={() => navigate("/company/profile/edit")}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                                <div className={styles.SocialMedia}>
                                    {company?.email &&
                                        (
                                            <p className={styles.Email}>
                                                <FontAwesomeIcon icon={faEnvelope} /> {company.email}
                                            </p>

                                        )
                                    }
                                    {company?.instagram &&
                                        (
                                            <p className={styles.Instagram}>
                                                <i className="fa-brands fa-instagram"></i> {company.instagram}
                                            </p>

                                        )
                                    }
                                    {company?.phonenumber &&
                                        (
                                            <p className={styles.Phone}>
                                                <FontAwesomeIcon icon={faPhone} /> {company.phonenumber}
                                            </p>

                                        )
                                    }
                                    {company?.linkedin &&
                                        (
                                            <p className={styles.LinkedIn}>
                                                <i className="fa-brands fa-linkedin"></i> {company.linkedin}
                                            </p>

                                        )
                                    }



                                </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                        </div>
                    </div>
                )
            }

            <Footer />
        </Fragment>
    );
}

export default ProfileRecuiter