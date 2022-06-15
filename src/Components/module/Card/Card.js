import React from 'react'
import style from './style.module.css'
import maps from './location.svg'
import profile from './profile.png'

const Card = () => {
  return (
    <div className={style.card+''}>
      <div className={style.profile}>
         <img src={profile} alt='profile'/>
      </div>
      <div className={style.profiledetail}>
         <p className='font-weight-bold ' style={{fontSize: '20px'}}>Louis Tomlinson</p>
         <p className='text-muted'>Web developer</p>
         <p className='text-muted'><img src={maps} alt='location'/><span className='ml-2'>Lorem Ipsum</span></p>
         <div className={style.skills} >
            <div className={style.skill}>PHP</div>
            <div className={style.skill}>Javascript</div>
            <div className={style.skill}>Python</div>
            <div className={style.skill}>HTML</div>
            <div className={style.skill}>Nodejs</div>

         </div>
      </div>
    </div>
  )
}

export default Card