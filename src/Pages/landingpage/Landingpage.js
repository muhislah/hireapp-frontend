import React from 'react'
import style from './style.module.css'
import talenta from './talenta.png'
import whyshould from './whyshould.png'
import skilltalent from './skilltalent.png'
import check from './check.svg'
import yellowcheck from './yellowcheck.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/module/Footer/Footer'
import Header from '../../Components/module/Header/Header'

const LandingPage = () => {
   const navigate = useNavigate()
  return (
   <>
   <Header  />
    <div className={style.container}>
      <div className={style.section+' row'}>
         <div className='col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center'>
            <h1 className='font-weight-bold d-inline-block w-75'>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
            <p className='text-muted'>Perubahan di era 4.0 yang sangat pesat membutuhkan sumber daya manusia yang berkembang pesat pula</p>
            <button className={style.button} onClick={() => navigate('/company/login')}>Mulai Sebagai Company</button>
         </div>
         <div className='col-md-6 col-sm-12 col-xs-12'>
            <img className='w-100' src={talenta} alt="talenta"/>
         </div>
      </div>
      <div className={style.section+' row'}>
         <div className='col-md-6 col-sm-12 col-xs-12'>
            <img className='w-100' src={whyshould} alt="talenta"/>
         </div>
         <div className='col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center ps-3'>
            <h1 className='font-weight-bold mb-5'>Kenapa harus mencari tallent di peworld</h1>
            <p className='text-muted'><img src={check} alt="alt" /><span className='ml-3'>Terjamin kualitasnya.</span></p>
            <p className='text-muted'><img src={check} alt="alt" /><span span className='ml-3'>Optimis dan tanggung jawab.</span></p>
            <p className='text-muted'><img src={check} alt="alt" /><span span className='ml-3'>Semangat dan berdikasi.</span></p>
            <p className='text-muted'><img src={check} alt="alt" /><span span className='ml-3'>Berattitude dan berakhlak.</span></p>
         </div>
      </div>
      <div className={style.section+' row'}>
         <div className='col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center'>
            <h1 className='font-weight-bold'>Skill Tallent</h1>
            <p >Skill talent kita telah disesuiakan dengan perkembangan industri modern.</p>
            <div className='row'>
               <div className='col-6'>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>Java</span></p>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>Kotlin</span></p>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>PHP</span></p>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>Javascript</span></p>
               </div>
               <div className='col-6'>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>Golang</span></p>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>C++</span></p>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>Ruby</span></p>
                  <p className='text-muted'><img src={yellowcheck} alt="alt" /><span className='ml-3'>10+ Bahasa Lainnya</span></p>
               </div>
            </div>
         </div>
         <div className='col-md-6 col-sm-12 col-xs-12'>
            <img className='w-100' src={skilltalent} alt="talenta"/>
         </div>
      </div>  
      </div> 
      <div className={style.review+' d-flex flex-column align-items-center justify-content-center'}>
         <h1 className='d1 font-weight-bold'>Beberapa Pendapat mengenai Peworld</h1>
         <div className={style.carousel}>

         </div>
      </div>
      <div className={style.container}>

      </div>
      <Footer />
   </>
  )
}

export default LandingPage