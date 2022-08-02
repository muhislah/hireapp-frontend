import axios from "axios";

export const employeeAction = (page = 1, search = "", sort ="asc", sortBy="name") => async(dispatch) =>{

      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+`/employee?search=${search}&sort=${sort}&sortby=${sortBy}&page=${page}`)
         const data = result.data
         dispatch({type: 'GET_EMPLOYEE', payload: data})
      } catch (error) {
         console.log(error)
      }   
}

