import axios from "axios";

export const companyAction = (token) => async(dispatch) =>{
      try {
         const result = await axios({
            method : 'get',
            url : process.env.REACT_APP_BACKEND_API+'/authCompany/profile',
            headers : {"Authorization" : `Bearer ${token}`}
         })
         const data = result.data.data
         dispatch({type: 'GET_COMPANY', payload: data})
      } catch (error) {
         console.log(error)
      }
}