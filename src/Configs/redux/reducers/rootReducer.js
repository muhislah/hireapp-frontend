import { combineReducers } from 'redux'
import employeeReducer from './employeeReducer'
import { companyReducer, USER_KEY } from './profileReducers'
const rootReducer = combineReducers({
    employee: employeeReducer,
    [USER_KEY]: companyReducer
   //  tambahkan reducer disini
})

export default rootReducer