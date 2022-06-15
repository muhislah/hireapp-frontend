import axios from "axios";

export const detailEmployeeAction = (idemployee) => async(dispatch) =>{
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/employee/'+idemployee)
         const data = result.data.data
         dispatch({type: 'GET_DETAIL_EMPLOYEE', payload: data})
      } catch (error) {
         console.log(error)
      }
}