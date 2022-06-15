import React, { Fragment } from 'react'
import styles from './Hire.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/module/Header/Header'
import Footer from '../../Components/module/Footer/Footer'

const Hire = () => {
  return (
    <Fragment>
        <Header />
        <div className={styles.WrapperProfil}>
                <div className={styles.imgProfil}></div>
                <div className={styles.Content}>
                        <p className={styles.CompanyName}>PT. Martabat Jaya Abadi</p>
                        <p className={styles.CompanyRole}>Finance</p>
                        <p className={styles.WrapperLoct}><FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot}/> <span className={styles.CompanyAdress}>Purwokerto, Jawa Tengah</span></p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                        <p className={styles.Text2}>Skill</p>
                        <div className={styles.BoxRectangleSkill}>
                            <ul className={styles.List}>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>Phyton</p></li>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>Laravel</p></li>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>Golang</p></li>
                            </ul>
                            <ul className={styles.List}>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>Javascript</p></li>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>PHP</p></li>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>HTML</p></li>
                            </ul>
                            <ul className={styles.List}>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>C++</p></li>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>Kotlin</p></li>
                                <li className={styles.RectangleSkill}><p className={styles.TextSkill}>Swift</p></li>
                            </ul>
                        </div>
                        <div className={styles.Form}>
                            <p className={styles.TextHead}>Hubungi Louis Tomlinson</p>
                            <p className={styles.TextDescript}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        </div>
                        <div className={styles.wrapperProject}>
                            <p>Tujuan tentang pesan ini</p>
                            <select className={styles.ProjectOption}>
                                    <option>Project</option>
                                    <option>1</option>
                            </select>
                        </div>
                        <div className={styles.wrapperFullName}>
                            <p>Nama Lengkap</p>
                            <input type="text" className={styles.FormInput} placeholder='Masukan nama lengkap' />
                        </div>
                        <div className={styles.wrapperEmail}>
                            <p>Email</p>
                            <input type="text" className={styles.FormInput} placeholder='Masukan email' />
                        </div>
                        <div className={styles.wrapperNoHp}>
                            <p>Nomor Handphone</p>
                            <input type="text" className={styles.FormInput} placeholder='Masukan nomor handphone' />
                        </div>
                        <div className={styles.wrapperDescript}>
                            <p>Deskripsi</p>
                            <input type="text" className={styles.FormInputDescript} placeholder='Deskripsi/jelaskan lebih detail' />
                        </div>
                </div>
        </div>
        <div className={styles.footer}><Footer /></div>
    </Fragment>
  )
}

export default Hire