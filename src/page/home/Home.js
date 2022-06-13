import React, { useState } from 'react'
import style from './style.module.css'
import Header from '../../component/module/Header/Header'
import arrow from './arrow.svg'
import Card from '../../component/module/Card/Card'
import Footer from '../../component/module/Footer/Footer'
import Pagination from '../../component/module/Pagination/Pagination'


const Home = () => {
   const [rotate, setRotate] = useState(false)
  return (
    <>
      <Header />
      <div className={style.topcode +' d-flex align-items-center'}>
         <h3 className='font-weight-medium text-white'>Top Jobs</h3>
      </div>
      <div className={style.mainbody} >
      <div className={style.container}>
         <div className={style.searchbar}>
            <input placeholder="Search for any skill" />
            <div className='d-flex flex-row justify-content-center align-items-center'>
               <img style={{width: '20px', transform :  rotate ? 'rotate(180deg)' : 'rotate(0)'}} src={arrow} alt='arrow' onClick={() => setRotate(!rotate)}/>
               <p className='ml-3 mr-3 mb-0'>Sort</p>
            </div>
            <button>Search</button>
            </div>
            <div className={style.main}>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </div>  
            
         </div>
         <div className={style.pagination} >
            <Pagination totalPage={4}/>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home