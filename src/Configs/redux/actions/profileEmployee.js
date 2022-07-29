import axios from "axios";
import { getNotification } from "./companyAction";

export const profileEmployee = (token) => async(dispatch) =>{
      try {
          const config = {
            method: 'get',
            url: 'https://hire-jobs.herokuapp.com/authEmployee/profil',
            headers: { 
              Authorization : `Bearer ${token}`
            }
          };
         const result = await axios(config)
         const data = result.data.data
         dispatch({type: 'GET_PROFILE_EMPLOYEE', payload: data})
         dispatch(getPortfolioEmployee(data.employee[0].idemployee))
      } catch (error) {
         console.log(error)
      }   
}

export const getPortfolioEmployee = (id) => async(dispatch) =>{
  try {
      const config = {
        method: 'get',
        url: 'https://hire-jobs.herokuapp.com/portfolio',
      };
     const result = await axios(config)
     const data = result.data.data
     const porto = data.filter(data => data.idemployee === id)
     dispatch({type: 'GET_PORTOFOLIO_EMPLOYEE', payload: porto})
  } catch (error) {
     console.log(error)
  }   
}



export const employeeLogin = (user, navigate) => async(dispatch) =>{
  try {
     dispatch({type: 'LOGIN_PENDING'})
     const result = await axios.post(`https://hire-jobs.herokuapp.com/authEmployee/login`, user)
     const data = result.data.data
     dispatch({type: 'LOGIN_SUCCESS', payload: data})
     dispatch(getNotification(data.token))
     dispatch(profileEmployee(data.token))
      if (data){
        localStorage.setItem('token', data.token)
        navigate('/profile')
      }
  } catch (error) {
     console.log(error)
  }   
}