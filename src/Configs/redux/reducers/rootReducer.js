import { combineReducers } from 'redux'
import companyReducer from './companyReducer'
import detailEmployeeReducer from './detailEmployeeReducer'
import employeeReducer from './employeeReducer'
import { userReducer } from './userReducer'
const rootReducer = combineReducers({
    employee: employeeReducer,
    detailEmployee : detailEmployeeReducer,
    user : userReducer,
    company : companyReducer
    
   //  tambahkan reducer disini
})

export default rootReducer