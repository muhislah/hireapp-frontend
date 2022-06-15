const initialState = {
   data : []
}

const employeeReducer = (state = initialState, action) => {
   if (action.type === 'GET_EMPLOYEE'){
      return {
         ...state,
         data : [
            ...state.data,
            action.payload
         ]
      }
   }else {
      return state
   }
}

export default employeeReducer