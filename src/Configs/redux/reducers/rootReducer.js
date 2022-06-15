import { combineReducers } from 'redux'
import detailEmployeeReducer from './detailEmployeeReducer'
import employeeReducer from './employeeReducer'
import { userReducer } from './userReducer'
const rootReducer = combineReducers({
    employee: employeeReducer,
    detailEmployee : detailEmployeeReducer,
    user : userReducer
    
   //  tambahkan reducer disini
})

export default rootReducer