import React from 'react'
import style from './style.module.css'
import maps from './location.svg'
import profile from './profile.png'
import { useNavigate } from 'react-router'

const Card = ({name, job, address, skills, id, img}) => {
  const navigate = useNavigate()
  return (
    <div className={style.card+''}>
      <div className={style.profile}>
         <img src={img ? img : profile} alt='profile'/>
      </div>
      <div className={style.profiledetail}>
         <p className='font-weight-bold ' style={{fontSize: '20px'}} onClick={() => navigate('/employee/'+id)}>{name}</p>
         <p className='text-muted'>{job}</p>
         <p className='text-muted'><img src={maps} alt='location'/><span className='ml-2'>{address}</span></p>
         <div className={style.skills} >
          {
            skills.length > 0 ? skills.map((skill) => <div className={style.skill}>{skill}</div>) : ''
          }
            

         </div>
      </div>
    </div>
  )
}

export default Card