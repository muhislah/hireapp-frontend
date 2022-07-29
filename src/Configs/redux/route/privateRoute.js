import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const RemoveToken = ({ children }) => {
  const token = window?.localStorage.getItem('token')
  const navigate = useNavigate()
  if (token) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your Login status will be destroyed",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed){
        localStorage?.removeItem('token')
          return (
            <>{children}</>
          )
      }else {
        return navigate('/home')
      }
    })
  }
  return (
    <>{children}</>
  )
}

export const IsEmployee = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const { auth: { data: { role } } } = useSelector(state => state)
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])
  if (!token) {
    return navigate('/login')
  } else {
    if (role === "company") {
      Swal.fire({
        title: 'Caution!',
        text: 'You Logged as Company',
        icon: 'warning',
        confirmButtonText: 'Oke'
      })
      return navigate('/company/profile')
    }
  }
  return (
    <>{children}</>
  )
}

export const IsCompany = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const { auth: { data: { role } } } = useSelector(state => state)
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])
  if (!token) {
    return navigate('/company/login')
  } else {
    if (role === "employee") {
      Swal.fire({
        title: 'Caution!',
        text: 'You Logged as Employee',
        icon: 'warning',
        confirmButtonText: 'Oke'
      })
      return navigate('/profile')
    }
  }
  return (
    <>{children}</>
  )
}


