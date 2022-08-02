const initialState = {
  profile: {

  },
  portofolio: [

  ]
}

const profileEmployeeReducer = (state = initialState, action) => {
  if (action.type === 'GET_PROFILE_EMPLOYEE') {
    return {
      profile: {
        ...action.payload
      }
    }
  } else if (action.type === 'GET_PORTOFOLIO_EMPLOYEE') {
    return {
      ...state,
      portofolio: action.payload
    }
  }
  else {
    return state
  }
}

export default profileEmployeeReducer