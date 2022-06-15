import axios from "axios";

export const employeeAction = (page) => async(dispatch) =>{
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/employee?page='+page)
         const data = result.data
         dispatch({type: 'GET_EMPLOYEE', payload: data})
      } catch (error) {
         console.log(error)
      }   
}