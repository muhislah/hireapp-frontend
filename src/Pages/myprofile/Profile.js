import React, { useEffect, useState } from 'react'
import Footer from '../../Components/module/Footer/Footer'
import Header from '../../Components/module/Header/Header'
import style from './style.module.css'
import photo from './noimage.jpg'
import location from './location.svg'
import mail from './mail.svg'
import instagram from './instagram.svg'
import github from './github.svg'
import { Outlet, useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'


const MyProfile = () => {
   const { profileEmployee: { profile } } = useSelector(state => state)
   const navigate = useNavigate()
   const [active, setActive] = useState('portfolio')

   const handleLogout = () => {
      navigate('/login')
   }


   return (
      <>
         <Header />
         { profile.employee ?
            <div className={style.main}>
               <div className={style.container + " d-flex flex-column align-items-center"}>
                  <div className={style.blue}></div>
                  <div className={style.profile}>
                     <img src={profile.employee[0]?.image ? profile.employee[0].image : photo} alt='photoprofile' />
                     <p id='name' className='h4 mt-3 font-weight-bold'>{profile ? profile?.employee[0]?.fullname : ""}</p>
                     <p className='h6'>{profile ? profile.employee[0]?.jobs : ""}</p>
                     <p className='h6'><img src={location} alt='location' /><span className='text-muted ml-3'>{profile ? profile?.employee[0]?.address : "No Location set"}</span> </p>
                     <p className='text-muted my-3'>Freelancer</p>
                     <p className='text-muted w-50'>{profile ? profile.employee[0]?.description : ""}</p>
                     <button className={style.button} onClick={() => navigate('/edit')}>Edit profile</button>
                  </div>
                  <h3 >Skill</h3>
                  <div className={style.skills + ' w-25'} >
                     {
                        profile.employee[0].skill?.length > 0 ? profile.employee[0]?.skill.map(data => <div className={style.skill}>{data}</div>) : "Not Skill Found"
                     }
                  </div>
                  <div className={style.account + ' mt-4'}>
                     <div className='mb-2'><img src={mail} alt="" /><span className='text-muted ml-3'>{profile ? profile?.employee[0].email : "email not set"}</span></div>
                     <div className='mb-2'><img src={instagram} alt="" /><span className='text-muted ml-3'>{profile ? profile?.employee[0].instagram : "instgram not set"}</span></div>
                     <div className='mb-2'><img src={github} alt="" /><span className='text-muted ml-3'>{profile ? profile?.employee[0].github : "github not set"}</span></div>
                  </div>
                  <button className={style.button+ " my-4"} onClick={() => handleLogout()}>Logout</button>
                  <div className={style.menu + ' mt-5'}>
                     <button className={active === 'portfolio' ? style.active : ""} onClick={() => { setActive('portfolio'); navigate('/profile/portfolio') }} >Portfolio</button>
                     <button className={active === 'experience' ? style.active : ""} onClick={() => { setActive('experience'); navigate('/profile/experience') }}>Pengalaman Kerja</button>
                     <div className='d-flex mt-5 mb-5 flex-column'>
                        <Outlet context={{ experience : profile.experience , portfolio : profile.folio}} />
                     </div>
                  </div>
               </div>
               
            </div>
            : "loading.."
         }

         <Footer />
      </>
   )
}

export default MyProfile