import React, { useEffect, useState } from 'react'
import Footer from '../../Components/module/Footer/Footer'
import Header from '../../Components/module/Header/Header'
import style from './style.module.css'
import photo from './photo.jpg'
import location from './location.svg'
import mail from './mail.svg'
import instagram from './instagram.svg'
import github from './github.svg'
import { Outlet, useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { detailEmployeeAction } from '../../Configs/redux/actions/detailEmployeeAction'


const Profile = () => {
   
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [active, setActive] = useState('portfolio')
   const {idemployee} = useParams()
   const { detailEmployee : { data } } = useSelector(state => state)
   useEffect(() => {
      dispatch(detailEmployeeAction(idemployee))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

  return (
    <>
      <Header />

      <div className={style.main}>
         <div className={style.container+" d-flex flex-column align-items-center"}>
            <div className={style.blue}></div>
            <div className={style.profile}>
               <img src={data.employee[0]?.image_profil ? data.employee[0].image_profil : photo } alt='photoprofile'/>
               <p id='name' className='h4 mt-3 font-weight-bold'>{data.employee[0].fullname ? data.employee[0].fullname : ""}</p>
               <p className='h6'>{data.employee.length > 0 && data.employee[0].jobs }</p>
               <p className='h6'><img src={location} alt='location'/><span className='text-muted ml-3'>{data.employee[0]?.address ? data.employee[0].address : "Not set"}</span> </p>
               <p className='text-muted my-3'>Freelancer</p>
               <p className='text-muted w-50'>{data.employee.length > 0 && data.employee[0].description}</p>
               <button className={style.button} onClick={() => navigate('/hire')}>Hire</button>
            </div>
            <h3>Skill</h3>
            <div className={style.skills+' w-25'} >
               {
                  data.employee[0].skill?.length > 0 ? data.employee[0].skill.map(data => <div className={style.skill}>{data}</div>) : "Not Skill Found"
               }
            </div>
            <div className={style.account+' w-25 mt-4'}>
               <div className='mb-2'><img src={mail} alt=""/><span className='text-muted ml-3'>{data.employee[0]?.email && data.employee[0].email }</span></div>
               <div  className='mb-2'><img src={instagram} alt="" /><span className='text-muted ml-3'>{data.employee[0]?.instagram ? data.employee[0].instagram : "Not set"}</span></div>
               <div  className='mb-2'><img src={github} alt=""/><span className='text-muted ml-3'>{data.employee[0]?.github ? data.employee[0].github : "Not set"}</span></div>
            </div>
            <div className={style.menu+' mt-5'}>
               <button className={active === 'portfolio' ? style.active : ""} onClick={() => {setActive('portfolio') ; navigate('/employee/'+idemployee+'/portfolio')}} >Portfolio</button>
               <button className={active === 'experience' ? style.active : ""} onClick={() => {setActive('experience') ; navigate('/employee/'+idemployee+'/experience')}}>Pengalaman Kerja</button>
               <div className='d-flex mt-5 mb-5 flex-column'>
               <Outlet context={{portfolio : data.folio, experience : data.experience}} />
               </div>
            </div>
         </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile