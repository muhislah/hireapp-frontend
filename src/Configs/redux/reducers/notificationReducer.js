const initialState = {
  notification : []
}

const notificationReducer = (state = initialState, action) => {
  if (action.type === "GET_NOTIFICATION__COMPANY"){
     return {
      ...state,
      notification : action.payload
     }
  }else {
     return state
  }
}

export default notificationReducer