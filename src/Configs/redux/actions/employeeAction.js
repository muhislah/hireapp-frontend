import axios from "axios";

export const employeeAction = () => async(dispatch) =>{
   try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/employee')
      const data = result.data.data
      console.log(data)
      dispatch({type: 'GET_EMPLOYEE', payload: data})
   } catch (error) {
      console.log(error)
   }
}