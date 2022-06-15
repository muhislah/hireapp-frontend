const initialState = {
   data : []
}

const companyReducer = (state = initialState, action) => {
   if (action.type === 'GET_COMPANY'){
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

export default companyReducer