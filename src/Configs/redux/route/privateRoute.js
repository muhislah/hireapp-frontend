import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const RemoveToken = ({children}) => {
  const token = window?.localStorage.getItem('token')
  const navigate = useNavigate()
  if(token) {
    if(window.confirm('You a logged, We will remove Login Auth') === true){
      localStorage?.removeItem('token')
      return (
        <>{children}</>
      )
    }else{
      return navigate('/home')
    }
  }
  return (
    <>{children}</>
  )
}

export const IsEmployee = ({children}) => {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const {auth : {data : {role}}} = useSelector( state => state)
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  },[])
  if (!token){
    return navigate('/login')
  }else {
    if(role === "company"){
      alert('you logged as company')
      return navigate('/company/profile')
    }
  }
  return (
    <>{children}</>
  )
}

export const IsCompany = ({children}) => {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const {auth : {data : {role}}} = useSelector( state => state)
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  },[])
  if (!token){
    return navigate('/company/login')
  }else {
    if(role === "employee"){
      alert('you logged as employee')
      return navigate('/profile')
    }
  }
  return (
    <>{children}</>
  )
}


