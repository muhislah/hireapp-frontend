import React from 'react'
import style from './style.module.css'

import exporto from './exporto.png'
import { useOutletContext } from 'react-router-dom'

const Portfolios = () => {
   const { portfolio } = useOutletContext()
   console.log(portfolio)
   return (
      <div className={style.portfolios + ' d-flex pt-5 pb-5 flex-wrap'}>
         { portfolio?.length > 0 && 
          portfolio.map(data => {
            return (
               <div className={style.portfolio + 'd-flex align-items-center flex-column'}>
                  <div className={style.imgwrapper}>
                     <img src={data.image_portfolio[0]} alt="portfolio" />
                  </div>
                  <p>{data.nameapps}</p>
               </div>
            )
          })
         }
      </div>
   )
}

export default Portfolios