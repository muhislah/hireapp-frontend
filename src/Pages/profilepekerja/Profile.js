import React, { useEffect, useState } from 'react'
import Footer from '../../Components/module/Footer/Footer'
import Header from '../../Components/module/Header/Header'
import style from './style.module.css'
import photo from './photo.jpg'
import location from './location.svg'
import mail from './mail.svg'
import instagram from './instagram.svg'
import github from './github.svg'
import gitlab from './gitlab.svg'
import { Outlet, useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { employeeAction } from '../../Configs/redux/actions/employeeAction'


const Profile = () => {
   const navigate = useNavigate()
   const { employee} = useSelector(state => state)
   const dispatch = useDispatch()
   const [active, setActive] = useState('portfolio')
   const {idemployee} = useParams()
   useEffect(() => {
      dispatch(employeeAction(null , idemployee))
   },[])
  return (
    <>
      <Header />
      <div className={style.main}>
         <div className={style.container+" d-flex flex-column align-items-center"}>
            <div className={style.blue}></div>
            <div className={style.profile}>
               <img src={photo} alt='photoprofile'/>
               <p id='name' className='h4 mt-3 font-weight-bold'>{}</p>
               <p className='h6'>{}</p>
               <p className='h6'><img src={location} alt='location'/><span className='text-muted ml-3'>Purwokerto, Jawa Tengah</span> </p>
               <p className='text-muted my-3'>Freelancer</p>
               <p className='text-muted w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
               <button className={style.button}>Hire</button>
            </div>
            <h3>Skill</h3>
            <div className={style.skills+' w-25'} >
               <div className={style.skill}>PHP</div>
               <div className={style.skill}>Javascript</div>
               <div className={style.skill}>Python</div>
               <div className={style.skill}>HTML</div>
               <div className={style.skill}>Nodejs</div>
            </div>
            <div className={style.account+' w-25 mt-4'}>
               <div className='mb-2'><img src={mail} alt=""/><span className='text-muted ml-3'>Louistommo@gmail.com</span></div>
               <div  className='mb-2'><img src={instagram} alt="" /><span className='text-muted ml-3'>@Louist91</span></div>
               <div  className='mb-2'><img src={github} alt=""/><span className='text-muted ml-3'>@Louistommo</span></div>
               <div  className='mb-2'><img src={gitlab} alt=""/><span className='text-muted ml-3'>@Louistommo91</span></div>
            </div>
            <div className={style.menu+' mt-5'}>
               <button className={active === 'portfolio' ? style.active : ""} onClick={() => {setActive('portfolio') ; navigate('/employee/'+idemployee+'/portfolio')}} >Portfolio</button>
               <button className={active === 'experience' ? style.active : ""} onClick={() => {setActive('experience') ; navigate('/employee/'+idemployee+'/experience')}}>Pengalaman Kerja</button>
               <div className='d-flex mt-5 mb-5 flex-column'>
               <Outlet />
               </div>
            </div>
         </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile