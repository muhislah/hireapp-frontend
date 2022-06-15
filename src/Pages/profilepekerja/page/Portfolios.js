import React from 'react'
import style from './style.module.css'

import exporto from './exporto.png'

const Portfolios = () => {
  return (
      <div className={style.portfolios+' d-flex pt-5 pb-5 flex-wrap'}>
      <div className={style.portfolio+' d-flex align-items-center flex-column'}>
         <img src={exporto} alt="portfolio" />
         <p>Remainder app</p>
      </div>
      <div className={style.portfolio+' d-flex align-items-center flex-column'}>
         <img src={exporto} alt="portfolio" />
         <p>Remainder app</p>
      </div>
      <div className={style.portfolio+' d-flex align-items-center flex-column'}>
         <img src={exporto} alt="portfolio" />
         <p>Remainder app</p>
      </div>
      <div className={style.portfolio+' d-flex align-items-center flex-column'}>
         <img src={exporto} alt="portfolio" />
         <p>Remainder app</p>
      </div>
      <div className={style.portfolio+' d-flex align-items-center flex-column'}>
         <img src={exporto} alt="portfolio" />
         <p>Remainder app</p>
      </div>
      <div className={style.portfolio+' d-flex align-items-center flex-column'}>
         <img src={exporto} alt="portfolio" />
         <p>Remainder app</p>
      </div>
      
   </div>
  )
}

export default Portfolios