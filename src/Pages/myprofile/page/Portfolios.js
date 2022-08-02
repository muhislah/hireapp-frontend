import React from 'react'
import style from './style.module.css'
import exporto from './exporto.png'
import { useOutletContext } from 'react-router-dom'

const MyPortfolios = () => {
   const props = useOutletContext()
   const portfolio = props.portfolio
   return (
      <div className={style.portfolios + ' d-flex pt-5 pb-5 flex-wrap'}>
         {portfolio ? portfolio.map((porto) => {
            return (
               <div className={style.portfolio + 'd-flex align-items-center flex-column'}>
                  <div className={style.imgwrapper}>
                     <img src={porto.image_portfolio[0]} alt="portfolio" />
                  </div>
                  <p>{porto.nameapps}</p>
               </div>
            )
         })
            : "loading..."
         }
      </div>
   )
}

export default MyPortfolios