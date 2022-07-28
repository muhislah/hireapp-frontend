import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import Footer from '../../Components/module/Footer/Footer'
import Header from '../../Components/module/Header/Header'
import style from './style.module.css'
import photo from './photo.png'
import map from './map.svg'
import drag from './dragndrop.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addExperience, addPortofolio, deleteExperience, deletePortfolio, updateProfile } from './helper'
import { profileEmployee } from '../../Configs/redux/actions/profileEmployee'
import x from './x.svg'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
   const navigate = useNavigate()
   const { profileEmployee: { profile } } = useSelector(state => state)
   const { profileEmployee: { portofolio : myPortofolio } } = useSelector(state => state)
   const [skill, setSkill] = useState('')
   const [skills, setSkills] = useState([])
   const [experience, setExperience] = useState([])
   const [portfolio, setPorfolio] = useState([])
   const dispatch = useDispatch()
   const [image, setImage] = useState()
   const [image2, setImage2] = useState()
   const [exp, setExp] = useState({})
   const [porto, setPorto] = useState({})
   const token  = localStorage.getItem('token')
   const [user, setUser] = useState({})

   const handleChangeProfile = (e) => {
      setUser({
         ...user,
         [e.target.name] : e.target.value
      })
   }

   const handleImage = (e) => {
      if(e.target.files.length !== 0){
         setImage({
            file: e.target.files[0],
            preview: URL.createObjectURL(e.target.files[0])
         })
      }else{
         console.log("add file failed")
      }
   }

   const handleDeleteSkill = (value) => {
      setSkills(current => 
         current.filter(valueSk => valueSk !== value)   
      )
   }

   const handleImage2 = (e) => {
      if(e.target.files.length !== 0){
         setImage2({
            file: e.target.files[0],
            preview: URL.createObjectURL(e.target.files[0])
         })
      }else{
         console.log("add file failed")
      }
   }

   const handleAddSkill = () => {
      setSkills([skill, ...skills])
      setSkill('')
   }

   useEffect(() => {
      setUser({
         ...user,
         skill : skills
      })
   }, [skills])

   useEffect(() => {
      setSkills(profile.employee[0].skill)
      setExperience(profile.experience)
      if (myPortofolio){
         setPorfolio(myPortofolio)
      }
   }, [profile])

   const handleDelete = async (id) => {
      setExperience((exp) => {
         return exp.filter(data => data.idexperience !== id)
      })
      try {
         if(token) {
            const result = await deleteExperience(id, token)
            if(result){
               alert('succes delete')
               dispatch(profileEmployee(token))
            }
         }else {
            console.log('token invalid / or server need token')
         }
      } catch (error) {
         console.log(error)
      }
   }

   const handleDeletePorto = async (id) => {
      setPorfolio((exp) => {
         return exp.filter(data => data.idportfolio !== id)
      })
      try {
         if(token) {
            const result = await deletePortfolio(id, token)
            if(result){
               alert('succes delete')
               dispatch(profileEmployee(token))
            }
         }else {
            console.log('token invalid / or server need token')
         }
      } catch (error) {
         console.log(error)
      }
   }

   const handleChangeExp = (e) => {
      setExp({
         ...exp,
         [e.target.name] : e.target.value
      })
   }
   
   const handleChangePorto = (e) => {
      setPorto({
         ...porto,
         [e.target.name] : e.target.value,
      })
   }

   const handleSubmitPorto = async () => {
      try {
         const result = await addPortofolio(porto, token, image2)
         setPorfolio([...portfolio, result])
         setPorto({
            nameapps : '',
            respository : '',
            type : '',
         })
         setImage2({
            file: null,
            preview: null
         })
         dispatch(profileEmployee(token))
         alert('success add Portfolio')
      } catch (error) {
         console.log(error)
      }
   }

   
   const handleAddExp = async () => {
      console.log(exp)
      if(token){
         const add = await addExperience(exp, token)
         setExperience([...experience,add])
         setExp({
            position: '', 
            namecompany: '', 
            monthyear: '', 
            jobdescription: '', 
            idemployee: ''
         })
         dispatch(profileEmployee(token))
         alert('success add experience')
      }else {
         console.log('need token')
      }
   }

   const handleSubmitProfile = async () => {
      try {
         const result = await updateProfile(user, image, token)
         console.log(result)
         dispatch(profileEmployee(token))
      } catch (error) {
         console.log('error')
      }
   }

   return (
      <>
         <Header />
         {
            profile ?
               (
                  <main className={style.main}>
                     <div className={style.blue}></div>
                     <div className={style.container + ' d-flex flex-row'}>
                        <div className={style.profile + ' d-flex flex-column '}>
                           <div className={style.profileIdentity + ' d-flex flex-column align-items-center'}>
                              <img className={style.photo} src={image?.preview ? image.preview : profile.employee[0].image || photo} alt="images" />
                              <button className={style.white} style={{
                                 borderRadius: '50px',
                                 position: "relative",
                                 width: "200px"
                              }}><input type="file" accept='images/*' style={{
                                 opacity: 0,
                                 position: 'absolute',
                                 width: "100%",
                                 height: "100%",
                                 zIndex: "3",
                                 top: 0,
                                 left: 0,
                                 cursor: 'pointer'
                              }} onChange={(e) => handleImage(e)} />Edit</button>
                              <div className={style.identity + ' d-flex flex-column justify-content-start'}>
                                 <p className='h5 font-weight-bold' style={{ fontSize: "20px" }}>{profile.employee[0].fullname || "Loading.."}</p>
                                 <p>{profile.employee[0].jobs || "Loading.."}</p>
                                 <p className='text-muted'><img src={map} alt="map" /><span className='ml-2'>{profile.employee[0].address || "Loading..."}</span></p>
                                 <p className='text-muted'>Freelancer</p>

                              </div>
                           </div>
                           <button onClick={handleSubmitProfile}>Simpan</button>
                           <button className={style.white} onClick={() => navigate('/profile')}>Batal</button>
                        </div>
                        <div className={style.forms}>
                           <div className={style.form}>
                              <h3 className='p-4'>Data Diri</h3>
                              <hr />
                              <div className='p-4'>
                                 <p htmlFor="nama">Nama Lengkap</p>
                                 <input type="text" defaultValue={profile.employee[0].fullname} name="fullname" onChange={(e) => handleChangeProfile(e) } />
                                 <p htmlFor="job">Job Desk</p>
                                 <input type="text" defaultValue={profile.employee[0].jobs} name="jobs" onChange={(e) => handleChangeProfile(e) } />
                                 <p htmlFor="domisili">Domisili</p>
                                 <input type="text" defaultValue={profile.employee[0].address} name="address" onChange={(e) => handleChangeProfile(e) } />
                                 <p htmlFor="tempatkerja" defaultValue={profile.employee[0].workplace || ""} >Tempat Kerja</p>
                                 <input type="text" name="work_place" onChange={(e) => handleChangeProfile(e) } />
                                 <p htmlFor="deskripsi">Deskripsi singkat</p>
                                 <textarea className={style.dual} defaultValue={profile.employee[0].description} name="description" onChange={(e) => handleChangeProfile(e) }  />
                              </div>
                           </div>
                           <div className={style.form}>
                              <h3 className='p-4'>Skill</h3>
                              <hr />
                              {
                                 skills.length > 0 ? (
                                    <div className='d-flex flex-row flex-wrap p-4'>
                                       {skills.map((skill) => <div className={style.skill + ' mr-2'}>{skill + "  "} <img src={x} alt="" onClick={() => handleDeleteSkill(skill)} className={style.xbutton}/></div>)}
                                    </div>
                                 ) : " "
                              }

                              <div className='p-4 d-flex flex-row'>
                                 <input type="text" onChange={(e) => setSkill(e.target.value)} value={skill}/><button className={style.yellow + ' ml-3'} onClick={() => handleAddSkill()}>Simpan</button>
                              </div>
                           </div>
                              {
                                 experience.length > 0 ? (
                                 <div className={style.form + " p-4"}>
                                    <h3 className='p-4'>Pengalaman Kerja</h3>
                                    <hr />
                                    <table className="table">
                                       <thead>
                                          <tr>
                                             <th scope="col">#</th>
                                             <th scope="col">Posisi</th>
                                             <th scope="col">Nama Company</th>
                                             <th scope="col">Bulan / Tahun</th>
                                             <th scope="col">Deskripsi</th>
                                             <th scope="col">Action</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {experience.map((data, index) => {
                                             return (
                                                <tr>
                                                   <th scope="row">{index + 1}</th>
                                                   <td>{data.position}</td>
                                                   <td>{data.namecompany}</td>
                                                   <td>{data.monthyear}</td>
                                                   <td>{data.jobdescription}</td>
                                                   <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(data.idexperience)} style={{
                                                      height: "30px"
                                                   }}>Hapus</button></td>
                                                </tr>
                                             )
                                          })
                                          }
                                       </tbody>
                                    </table>
                                    </div>   
                                 )  : ""
                              }
                           <div className={style.form}>
                              <h3 className='p-4'>Pengalaman Kerja</h3>
                              <hr />
                              <div className='p-4'>
                                 <p htmlFor="nama">Posisi</p>
                                 <input type="text" name="position" value={exp.position} onChange={(e) => handleChangeExp(e)} />
                                 <div className='d-flex flex-row'>
                                    <div className='w-50'>
                                       <p htmlFor="job">Nama Perusahaan</p>
                                       <input type="text" name="namecompany" value={exp.namecompany} onChange={(e) => handleChangeExp(e)}/>
                                    </div>
                                    <div className='w-50 ml-3'>
                                       <p htmlFor="job">Bulan/Tahun</p>
                                       <input type="text" name="monthyear" value={exp.monthyear} onChange={(e) => handleChangeExp(e)}/>
                                    </div>
                                 </div>
                                 <p htmlFor="deskripsi">Deskripsi singkat</p>
                                 <input className={style.dual} type="text" name="jobdescription" value={exp.jobdescription} id="" onChange={(e) => handleChangeExp(e)}/>
                                 <hr className='my-3' />
                                 <button className='px-4' onClick={handleAddExp}>Tambah Pengalaman Kerja</button>
                              </div>
                           </div>
                           {
                                 portfolio?.length > 0 ? (
                                 <div className={style.form + " p-4"}>
                                    <h3 className='p-4'>Portfolio</h3>
                                    <hr />
                                    <table className="table">
                                       <thead>
                                          <tr>
                                             <th scope="col">#</th>
                                             <th scope="col">Image</th>
                                             <th scope="col">Name Apps</th>
                                             <th scope="col">Type</th>
                                             <th scope="col">Action</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {portfolio.map((data, index) => {
                                             return (
                                                <tr>
                                                   <th scope="row">{index + 1}</th>
                                                   <td><img src={data.image[0]} alt="" style={{
                                                      width : '50px',
                                                      height : "50px",
                                                      borderRadius : '9px'
                                                   }}/></td>
                                                   <td>{data.nameapps}</td>
                                                   <td>{data.type}</td>
                                                   <td><button className='btn btn-danger btn-sm' onClick={() => handleDeletePorto(data.idportfolio)} style={{
                                                      height: "30px"
                                                   }}>Hapus</button></td>
                                                </tr>
                                             )
                                          })
                                          }
                                       </tbody>
                                    </table>
                                    </div>   
                                 )  : ""
                              }
                           <div className={style.form}>
                              <h3 className='p-4'>Portofolio</h3>
                              <hr />
                              <div className='p-4'>
                                 <p htmlFor="nama">Nama Aplikasi</p>
                                 <input type="text" value={porto.nameapps} name="nameapps" onChange={(e) => handleChangePorto(e)}/>
                                 <p htmlFor="nama">Link Repository</p>
                                 <input type="text" value={porto.respository} name="respository" onChange={(e) => handleChangePorto(e)}/>
                                 <p htmlFor="nama">Type Portfolio</p>
                                 <div className='d-flex flex-row'>
                                    <div className={"w-25 d-flex align-items-center"}>
                                       <input type="radio" name="type" value="mobile" id="mobile" onClick={e => handleChangePorto(e)}/><label htmlFor="mobile" className='ml-3'>Aplikasi mobile</label>
                                    </div>
                                    <div className={"w-25 d-flex align-items-center"}>
                                       <input type="radio" name="type" value="website" id="web" onClick={e => handleChangePorto(e)} /><label htmlFor="web" className='ml-3'>Aplikasi Web</label>
                                    </div>
                                 </div>
                                 <p>Upload Gambar</p>
                                 <div style={{
                                    width : "100%",
                                    height : "200px",
                                    border : "2px dashed #e2e2e2",
                                    overflow : 'hidden',
                                    borderRadius : '20px',
                                    display : 'flex',
                                    position : "relative"
                                 }}>
                                    <input type="file" accept='image/*' style={{
                                       width : "100%",
                                       position : "absolute",
                                       height : "100%",
                                       opacity : 0,
                                       zIndex : 9
                                    }} onChange={(e) => handleImage2(e)}/>
                                    <img src={image2?.preview || drag} alt=""  style={{
                                       margin: 'auto',
                                       width: '100%'
                                    }}/>
                                 </div>
                                 <hr className='my-4'/>
                                 <button className='px-4' onClick={handleSubmitPorto}>Tambah Portofolio</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </main>
               ) : "Loading.."
         }

         <Footer />
      </>
   )
=======
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
>>>>>>> 2a6f486c23ec759314fecaa4cd334f8346ec1152
}

export default Edit