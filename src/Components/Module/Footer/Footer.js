import React from 'react'
import style from './style.module.css'
import logo from './logo.svg'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img className='mb-3' src={logo} alt='logo' />
      <br></br>
      <p className='d-inline-block w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
      <hr style={{borderTop : '2px solid white'}}/>
      <div className='d-flex justify-content-between'>
         <p>2020 Pewworld. All right reserved</p>
         <div className='d-flex justify-content-end'> 
            <p>Telepon</p>
            <p style={{marginLeft : "15px"}}>Email</p>
         </div>
      </div>
    </footer>
  )
}

export default Footer