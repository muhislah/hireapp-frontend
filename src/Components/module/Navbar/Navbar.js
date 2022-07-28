import React from 'react'
import style from './style.module.css'
import message from './message.svg'
import notif from './notif.svg'
import example from './example.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = ({type}) => {
   const { auth : { data : { role }}} = useSelector(state=>state)
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
          <img src={notif} alt='notification' />
          <img src={message} alt='chat' />
          <div className={style.profile} >
            <img src={example} alt="profile" style={{cursor : 'pointer'}} onClick={() => navigate(link)}/>
          </div>
         </div>
       )
   }
}

export default Navbar