import { combineReducers } from 'redux'
import automationReducer from './automationBuilder.reducer'

export default combineReducers({
    automation: automationReducer,
})
