const initialState = {
  profile : {

  }
}

const profileEmployeeReducer = (state = initialState, action) => {
  if (action.type === 'GET_PROFILE_EMPLOYEE'){
     return {
        profile : {
           ...action.payload
        } 
     }
  }else {
     return state
  }
}

export default profileEmployeeReducer