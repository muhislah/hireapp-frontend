import React from 'react'
import { useOutletContext } from 'react-router-dom'
import style from './style.module.css'
import tokped from './tokped.png'

const MyExperience = () => {
   const props = useOutletContext()
   const experience = props.experience
   return (
      <div className={style.experience + ' d-flex flex-column my-2 row'}>
         {experience ? experience.map(data => {
            return (
               <div className='d-flex flex-row my-2 col-4'>
                  <img src={tokped} alt="tokped" />
                  <div className='d-flex flex-column ml-5'>
                     <p className="font-weight-bold" >{data.position}</p>
                     <p className="text-muted">{data.namecompany}</p>
                     <p className="text-muted">{data.monthyear}</p>
                     <p className={style.desc}>{data.jobdescription}</p>
                  </div>
               </div>
            )
         })
            : "loading"
         }
      </div>
   )
}

export default MyExperience