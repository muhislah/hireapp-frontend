import React from 'react'
import style from './style.module.css'
import message from './message.svg'
import notif from './notif.svg'
import example from './noimage.jpg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = ({type}) => {
   const { auth : { data : { role }}} = useSelector(state=>state)
   const { auth : { data : { image }}} = useSelector(state=>state)
   let {company : {data : {image : imageCompany}}} = useSelector(state => state)
   if ( role == 'employee'){
    imageCompany = false
   }
   const link = (role === 'company') ? '/company/profile' : '/profile'
   const navigate = useNavigate()
   if (type === 'notLogged'){
      return (
        <div className={style.navbar}>
         <button className={style.white} onClick={() => navigate('/login')}>Masuk</button>
         <button onClick={() => navigate('/register')}>Daftar</button>
        </div>
      )
   }else {
      return (
         <div className={style.navbar}>
          <img src={notif} alt='notification' style={{
            cursor : 'pointer'
          }} onClick={() => navigate('/history')} />
          <img src={message} alt='chat' />
          <div className={style.profile} >
            <img src={image ? image : imageCompany ? imageCompany : example} alt="profile" style={{cursor : 'pointer'}} onClick={() => navigate(link)}/>
          </div>
         </div>
       )
   }
}

export default Navbar