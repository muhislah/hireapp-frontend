import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Header from '../../Components/module/Header/Header'
import arrow from './arrow.svg'
import Card from '../../Components/module/Card/Card'
import Footer from '../../Components/module/Footer/Footer'
import Pagination from '../../Components/module/Pagination/Pagination'
import { employeeAction } from '../../Configs/redux/actions/employeeAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const Home = () => {
   const { employee : {data : employee} , employee : {pagination} } = useSelector(state => state)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [page, setPage] = useState(1)
   const [rotate, setRotate] = useState(false)
   const [dropDown, setDropDown] = useState(false)

   const [search, setSearch] = useState('')
   const [sort, setSort] = useState('asc')
   const [sortBy, setSortBy] = useState('fullname')

   useEffect(() => {
      fetchData()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[page, search, sort, sortBy])

   function fetchData(){
      dispatch(employeeAction(page, search, sort, sortBy))
      navigate({
         pathname : '/home',
         search : `?search=${search}&sort=${sort}&sortby=${sortBy}`
      })
   }
//   if (employee.length === 0) {
//       return (
//          <>
//             <Header />
//             <div className='d-flex w-100 h-75'>
//                <h1 className="m-auto">Data Not Found</h1>
//             </div>
//             <Footer />
//          </>
//       )
//   }
  return (
    <>
      <Header />
      <div className={style.topcode +' d-flex align-items-center'}>
         <h3 className='font-weight-medium text-white' style={{
            fontSize : "20px",
            marginTop : '5px'
         }}>Talents</h3>
      </div>
      <div className={style.mainbody} >
      <div className={style.container}>
         <div className={style.searchbar}>
            <input placeholder="Search for any skill" onChange={(e) => setSearch(e.target.value)}/>
            <div className='d-flex flex-row justify-content-center align-items-center'>
               <img style={{width: '20px', transform :  rotate ? 'rotate(180deg)' : 'rotate(0)'}} src={arrow} alt='arrow' onClick={() => {setRotate(!rotate); rotate ? setSort('desc') : setSort('asc')}}/>
               <p className='ml-3 mr-3 mb-0' style={{cursor: 'pointer'}} onClick={() => setDropDown((dropDown) => !dropDown)}>{sortBy}</p>
               <ul className={style.sortDrop+' list-group '+ (dropDown && style.active )}>
                  <li className='list-group-item' style={{cursor: 'pointer'}} onClick={() => {setSortBy('address'); setDropDown(!dropDown)}}>Address</li>
                  <li className='list-group-item' style={{cursor: 'pointer'}} onClick={() => {setSortBy('fullname');; setDropDown(!dropDown)}}>Name</li>
               </ul>
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