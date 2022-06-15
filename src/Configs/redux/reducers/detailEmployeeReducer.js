const initialState = {
   data : {
      employee : [],
      experience : [],
      folio : []
   },
}

const detailEmployeeReducer = (state = initialState, action) => {
   if (action.type === 'GET_DETAIL_EMPLOYEE'){
      return {
         ...state,
         data : {
            ...action.payload,
            employee : [
               ...action.payload.employee
            ]
         }
      }
   }else {
      return state
   }
}

export default detailEmployeeReducer