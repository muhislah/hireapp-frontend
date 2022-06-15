const initialState = {
   data : [],
   pagination : {}
}

const employeeReducer = (state = initialState, action) => {
   if (action.type === 'GET_EMPLOYEE'){
      return {
         ...state,
         data : [
            ...action.payload.data
         ],
         pagination : {
            ...action.payload.pagination
         }
      }
   }else if (action.type === 'GET_DETAIL_EMPLOYEE'){
      return {
         ...state,
         data : {
            ...action.payload
         },
         pagination : null
      }
   }else {
      return state
   }
}

export default employeeReducer