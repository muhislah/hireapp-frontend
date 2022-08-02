const initialState = {
  isLoading : false,
  data : {}
}

const authEmployeeReducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_PENDING'){
     return {
        ...state,
        isLoading : true
     }
  }else if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      isLoading : false,
      data : {
        ...action.payload
      }
   }
  }else {
     return state
  }
}

export default authEmployeeReducer