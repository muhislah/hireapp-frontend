import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../Components/module/Footer/Footer'
import Header from '../../Components/module/Header/Header'
import style from './style.module.css'

const History = () => {
  const { notification: { notification } } = useSelector(state => state)
  return (
    <>
      <Header />
      <div className={style.body + " " + 'container-fluid'}>
        <h3 className='text-center my-3'>History of Hiring</h3>
        <div className='container '>

          {notification?.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Hire Person</th>
                  <th scope="col">Tujuan</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Company Email</th>
                  <th scope="col">Employee</th>
                </tr>
              </thead>
              <tbody>
                {
                  notification.map((data, index) => {
                    return (
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{data.fullnamehire}</td>
                        <td>{data.hiretujuan}</td>
                        <td>{data.deskripsihirejob}</td>
                        <td>{data.emailcompany}</td>
                        <td>{data.fullname}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          ) : "No History"}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default History