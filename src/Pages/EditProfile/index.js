import React, { Fragment } from 'react'
import styles from './EditProfile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Module/Header/Header'
import Footer from '../../Components/Module/Footer/index'

const EditProfilCompany = () => {
  return (
    <Fragment>
            <div className={styles.Container}></div>
            <Header />
            <div className={styles.WrapperProfil}>
                <div className={styles.imgProfil}></div>
                <div className={styles.Edit}><FontAwesomeIcon icon={faPencil} /> Edit</div>
                <div className={styles.Content}>
                        <p className={styles.CompanyName}>PT. Martabat Jaya Abadi</p>
                        <p className={styles.CompanyRole}>Finance</p>
                        <p className={styles.WrapperLoct}><FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot}/> <span className={styles.CompanyAdress}>Purwokerto, Jawa Tengah</span></p>
                </div>
                <button className={styles.BtnSave}>Simpan</button>
                <button className={styles.BtnCancel}>Batal</button>
            </div>
            <div className={styles.Container2}>
              <h3 className={styles.textHead}>Data Diri</h3>
              <div className={styles.Line}></div>
              <div className={styles.wrapperCompanyName}>
                  <p>Nama Perusahaan</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan nama perusahaan' />
                </div>
                <div className={styles.wrapperCompanyRole}>
                  <p>Bidang</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan bidang perusahaan ex : Financial' />
                </div>
                <div className={styles.wrapperCity}>
                  <p>Kota</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan kota' />
                </div>
                <div className={styles.wrapperDescript}>
                  <p>Deskripsi Singkat</p>
                  <input type="text" className={styles.FormInputDescript} placeholder='Tuliskan deskripsi singkat' />
                </div>
                <div className={styles.wrapperEmail}>
                  <p>Email</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan email' />
                </div>
                <div className={styles.wrapperInstagram}>
                  <p>Instagram</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan nama instagram' />
                </div>
                <div className={styles.wrapperNoTelepon}>
                  <p>Nomor Telepon</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan nomor telepon' />
                </div>
                <div className={styles.wrapperLinkedIn}>
                  <p>LinkedIn</p>
                  <input type="text" className={styles.FormInput} placeholder='Masukan nama LinkedIn' />
                </div>
            </div>
            <Footer />
    </Fragment>
  )
}

export default EditProfilCompany