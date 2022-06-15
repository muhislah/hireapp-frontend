import { LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE  } from "../CompanyProfile/companyType"

import Axios from "axios"

export const loadData = () =>{
return async (dispatch) =>{
   try{
       dispatch({type: LOAD_DATA_REQUEST})
       let dataURL = 'https://hire-jobs.herokuapp.com/employee'
       let response = await Axios.get(dataURL)
       dispatch({type: LOAD_DATA_SUCCESS, payload:response.data.data})
    //    console.log(response);
   }
   catch(error){
       dispatch({type:LOAD_DATA_FAILURE, payload: error})
   }
}
}
