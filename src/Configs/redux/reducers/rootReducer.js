import { combineReducers } from 'redux'
import authEmployeeReducer from './authEmployeeReducer'
import companyReducer from './companyReducer'
import detailEmployeeReducer from './detailEmployeeReducer'
import employeeReducer from './employeeReducer'
import profileEmployeeReducer from './profileEmployeeReducer'
import { userReducer } from './userReducer'
const rootReducer = combineReducers({
    employee: employeeReducer,
    detailEmployee : detailEmployeeReducer,
    profileEmployee: profileEmployeeReducer,
    user : userReducer,
    authEmployee : authEmployeeReducer,
    company : companyReducer,
    
   //  tambahkan reducer disini
})

export default rootReducer