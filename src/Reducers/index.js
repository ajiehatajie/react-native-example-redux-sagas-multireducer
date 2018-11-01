import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer'
import KecamatanReducer from './KecamatanReducer'


const rootReducer = combineReducers({
    TaskReducer,
    KecamatanReducer
})

export default rootReducer;