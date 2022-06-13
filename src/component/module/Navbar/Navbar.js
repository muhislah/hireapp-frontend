import React from 'react'
import style from './style.module.css'
import message from './message.svg'
import notif from './notif.svg'
import example from './example.png'

const Navbar = ({type}) => {
   console.log(type)
   if (type === 'notLogged'){
      return (
        <div className={style.navbar}>
         <button className={style.white} >Masuk</button>
         <button >Daftar</button>
        </div>
      )
   }else {
      return (
         <div className={style.navbar}>
          <img src={notif} alt='notification' />
          <img src={message} alt='chat' />
          <div className={style.profile} >
            <img src={example} alt="profile" />
          </div>
         </div>
       )
   }
}

export default Navbar