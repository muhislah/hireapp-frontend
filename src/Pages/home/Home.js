import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Header from '../../Components/module/Header/Header'
import arrow from './arrow.svg'
import Card from '../../Components/module/Card/Card'
import Footer from '../../Components/module/Footer/Footer'
import Pagination from '../../Components/module/Pagination/Pagination'
import { employeeAction } from '../../Configs/redux/actions/employeeAction'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
   const { employee : {data : employee} , employee : {pagination} } = useSelector(state => state)
   const dispatch = useDispatch()
   const [page, setPage] = useState(1)
   const [rotate, setRotate] = useState(false)
   useEffect(() => {
      dispatch(employeeAction(page))
   },[page])
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
               { employee ? employee.map((em) => <Card img={em.image} id={em.idemployee} name={em.fullname} job={em.jobs} address={em.address} skills={em.skill}/> ) : <h1 className='w-100'>Loading ..</h1>}
            </div>  
            
         </div>
         <div className={style.pagination} >
            <Pagination totalPage={pagination.totalPage} currentPage={(e) => setPage(e)}/>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home