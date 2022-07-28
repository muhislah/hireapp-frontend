import React from 'react'
import style from './style.module.css'
import maps from './location.svg'
import profile from './profile.png'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { employeeAction } from '../../../Configs/redux/actions/employeeAction'

const Card = ({name, job, address, skills, id, img}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className={style.card+''}>
      <div className={style.profile}>
         <img src={img ? img : profile} alt='profile'/>
      </div>
      <div className={style.profiledetail}>
         <p className='font-weight-bold ' style={{fontSize: '20px', cursor: "pointer"}} onClick={() => navigate('/employee/'+id)}>{name}</p>
         <p className='text-muted'>{job || 'No Tagline..'}</p>
         <p className='text-muted'><img src={maps} alt='location'/><span className='ml-2'>{address || "Address not Set"}</span></p>
         <div className={style.skills} >
          {
            skills?.length > 0 ? skills.map((skill) => <div className={style.skill}>{skill}</div>) : <p className='text-muted'>No Skill Includes</p>
          }
            

         </div>
      </div>
    </div>
  )
}

export default Card