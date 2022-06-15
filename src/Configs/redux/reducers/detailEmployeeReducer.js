const initialState = {
   data : [],
}

const detailEmployeeReducer = (state = initialState, action) => {
   if (action.type === 'GET_DETAIL_EMPLOYEE'){
      return {
         ...state,
         data : {
            ...action.payload
         }
      }
   }else {
      return state
   }
}

export default detailEmployeeReducer