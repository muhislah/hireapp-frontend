import { combineReducers } from 'redux'
import detailEmployeeReducer from './detailEmployeeReducer'
import employeeReducer from './employeeReducer'
const rootReducer = combineReducers({
    employee: employeeReducer,
    detailEmployee : detailEmployeeReducer
    
   //  tambahkan reducer disini
})

export default rootReducer