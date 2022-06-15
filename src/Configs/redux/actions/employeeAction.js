import axios from "axios";

export const employeeAction = (page, idemployee) => async(dispatch) =>{
   if (!idemployee){
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/employee?page='+page)
         const data = result.data
         dispatch({type: 'GET_EMPLOYEE', payload: data})
      } catch (error) {
         console.log(error)
      }
   }else {
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/employee/'+idemployee)
         const data = result.data.data
         dispatch({type: 'GET_DETAIL_EMPLOYEE', payload: data})
      } catch (error) {
         console.log(error)
      }
   }
   
}