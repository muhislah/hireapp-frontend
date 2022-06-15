import React from 'react'
import style from './style.module.css'
import tokped from './tokped.png'

const Experience = () => {
  return (
   <div className={style.experience+' d-flex flex-row my-2'}>
      <img src={tokped} alt="tokped"/>
      <div className='d-flex flex-column ml-5'>
         <p className="font-weight-bold" >Engineer</p>
         <p className="text-muted">Tokopedia</p>
         <p className="text-muted">July 2019 - Januari 2020<span>6 Monts</span></p>
         <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
      </div>
   </div>
  )
}

export default Experience