import React from 'react'
import style from './style.module.css'
import talenta from './talenta.png'
import whyshould from './whyshould.png'
import skilltalent from './skilltalent.png'
import check from './check.svg'
import Footer from '../../Components/Module/Footer/Footer'
import yellowcheck from './yellowcheck.svg'

const LandingPage = () => {
  return (
   <>
    <div className={style.container}>
      <div className={style.section+' row'}>
         <div className='col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center'>
            <h1 className='font-weight-bold d-inline-block w-75'>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <button className={style.button}>Mulai Sekarang</button>
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
            <p className='text-muted'><img src={check} alt="alt" /><span className='ml-3'>Lorem ipsum dolor sit amet.</span></p>
            <p className='text-muted'><img src={check} alt="alt" /><span span className='ml-3'>Lorem ipsum dolor sit amet.</span></p>
            <p className='text-muted'><img src={check} alt="alt" /><span span className='ml-3'>Lorem ipsum dolor sit amet.</span></p>
            <p className='text-muted'><img src={check} alt="alt" /><span span className='ml-3'>Lorem ipsum dolor sit amet.</span></p>
         </div>
      </div>
      <div className={style.section+' row'}>
         <div className='col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center'>
            <h1 className='font-weight-bold'>Skill Tallent</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
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
         <h1 className='d1 font-weight-bold'>Their opinion about peworld</h1>
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