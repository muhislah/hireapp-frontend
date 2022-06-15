import { LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS, 
    LOAD_DATA_FAILURE } from '../actions/CompanyProfile/companyType'

export const USER_KEY = 'userStore'

const initialState = {
    data:[],
    loading: false,
    errorMessage: ''
}

export const companyReducer = (state = initialState, action) =>{
    const {type,payload} = action
    switch (type) {
        case LOAD_DATA_REQUEST:
            return{
                ...state,
                loading: true
            }
        case LOAD_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload
            }
        case LOAD_DATA_FAILURE:
            return{
                ...state,
                errorMessage: payload
            }    
    
        default: return state
    }
}