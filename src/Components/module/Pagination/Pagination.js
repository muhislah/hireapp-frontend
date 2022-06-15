import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import left from './left.svg'
import right from './right.svg'
import {useDispatch} from 'react-redux'


const Pagination = ({totalPage, currentPage}) => {
   const [currPage, setCurrPage] = useState(1)

   useEffect(() => {
      console.log(currPage)
      currentPage(currPage)
   },[currPage])

   let page = []
   for (let i = 1; i<= totalPage ; i++){
      page.push(i);
   }

  return (
   <div className={style.pagination}>
      <div className={style.page+' d-flex'} onClick={() => setCurrPage(currPage-1)}><img src={left} className="m-auto" alt='toleft'/></div>
      {
         page.map((page, index) => <div className={style.page+' d-flex '+(currPage === (index+1) ? style.active : '' )} onClick={() => setCurrPage((currPage) => currPage = index+1)} key={index+1}><p className='m-auto font-weight-bold' value={index+1}>{index+1}</p></div>)
      }
      <div className={style.page+' d-flex'} onClick={() => setCurrPage(currPage+1)}><img src={right} className="m-auto" alt='toright'/></div>
   </div>
  )
}

export default Pagination