import { combineReducers } from 'redux'
import employeeReducer from './employeeReducer'
const rootReducer = combineReducers({
    employee: employeeReducer
    
   //  tambahkan reducer disini
})

export default rootReducer