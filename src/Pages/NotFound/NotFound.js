import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='h-100 w-100 d-flex'>
         <div className="m-auto d-flex align-items-center flex-column">
         <h1 className='mt-5'>Sorry Page Not Found</h1>
         <Link to="/login">Back to Home</Link>
         </div>
      </div>
    </>
  )
}

export default NotFound