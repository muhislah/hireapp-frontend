import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Module/Footer/Footer'
import Header from '../../Components/Module/Header/Header'
import style from './style.module.css'
import edit from './edit.svg'
import photo from './photo.png'
import map from './map.svg'
import drag from './drag.svg'

const Edit = () => {
   const [skill, setSkill] = useState('')
   const [skills, setSkills] = useState([])

   const handleAddSkill = () => {
      setSkills([skill, ...skills])
   }
  useEffect(() => {
   console.log(skills)
  },[skills])
  return (
    <>
      <Header />
      <main className={style.main}>
         <div className={style.blue}></div>
         <div className={style.container+' d-flex flex-row'}>
            <div className={style.profile+' d-flex flex-column '}>
               <div className={style.profileIdentity+' d-flex flex-column align-items-center'}>
                  <img className={style.photo} src={photo} alt="images" />
                  <img className={style.edit} src={edit} alt="edit" />
                  <div className={style.identity+' d-flex flex-column justify-content-start'}>
                     <p className='h5 font-weight-bold' style={{fontSize:"20px"}}>Louis Tomlinson</p>
                     <p>Web Developer</p>
                     <p className='text-muted'><img src={map} alt="map" /><span className='ml-2'>Purwokerto, Jawa Tengah</span></p>
                     <p className='text-muted'>Freelancer</p>

                  </div>
               </div>
               <button>Simpan</button>
               <button className={style.white}>Batal</button>
            </div>
            <div className={style.forms}>
               <div className={style.form}>
                  <h3 className='p-4'>Data Diri</h3>
                  <hr />
                  <div className='p-4'>
                     <p htmlFor="nama">Nama Lengkap</p>
                     <input type="text" />
                     <p htmlFor="job">Job Desk</p>
                     <input type="text" />
                     <p htmlFor="domisili">Domisili</p>
                     <input type="text" />
                     <p htmlFor="tempatkerja">Tempat Kerja</p>
                     <input type="text" />
                     <p htmlFor="deskripsi">Deskripsi singkat</p>
                     <textarea className={style.dual} name="" id="" />
                  </div>
               </div>
               <div className={style.form}>
                  <h3 className='p-4'>Skill</h3>
                  <hr />
                  {
                     skills.length > 0 ? (
                        <div className='d-flex flex-row flex-wrap p-4'>
                           {  skills.map((skill) => <div className={style.skill+' mr-2'}>{skill}</div>) }
                        </div>
                     ) : " "
                  }
                  
                  <div className='p-4 d-flex flex-row'>
                     <input type="text" onChange={(e) => setSkill(e.target.value)}/><button className={style.yellow+' ml-3'} onClick={() => handleAddSkill()}>Simpan</button>
                  </div>
               </div>
               <div className={style.form}>
                  <h3 className='p-4'>Pengalaman Kerja</h3>
                  <hr />
                  <div className='p-4'>
                     <p htmlFor="nama">Posisi</p>
                     <input type="text" />
                     <div className='d-flex flex-row'>
                        <div className='w-50'>
                           <p htmlFor="job">Nama Perusahaan</p>
                           <input type="text" />
                        </div>
                        <div className='w-50 ml-3'>
                           <p htmlFor="job">Bulan / Tahun</p>
                           <input type="text" />
                        </div>
                     </div>
                     <p htmlFor="deskripsi">Deskripsi singkat</p>
                     <input className={style.dual} type="text" name="" id="" />
                     <hr className='my-3' />
                     <button className='px-4'>Tambah Pengalaman Kerja</button>
                  </div>
               </div>
               <div className={style.form}>
                  <h3 className='p-4'>Portofolio</h3>
                  <hr />
                  <div className='p-4'>
                     <p htmlFor="nama">Nama Aplikasi</p>
                     <input type="text" />
                     <p htmlFor="nama">Link Repository</p>
                     <input type="text" />
                     <p htmlFor="nama">Type Portfolio</p>
                     <div className='d-flex flex-row'>
                        <div className={"w-25 d-flex align-items-center"}>
                           <input type="radio" name="tipeporto" id="mobile" /><label htmlFor="mobile" className='ml-3'>Aplikasi mobile</label>
                        </div>
                        <div className={"w-25 d-flex align-items-center"}>
                           <input type="radio" name="tipeporto" id="web" /><label htmlFor="web" className='ml-3'>Aplikasi Web</label>
                        </div>
                     </div>
                     <p>Upload Gambar</p>
                     <input type="file" name="" id="" style={{background: `url(${drag})`, width: '200px', height : '200px'}}/>
                     <p htmlFor="deskripsi">Deskripsi singkat</p>
                     <input className={style.dual} type="text" name="" id="" />
                  </div>
               </div>
            </div>
         </div>
      </main>
      <Footer />
    </>
  )
}

export default Edit