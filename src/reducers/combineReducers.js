import { createStore, combineReducers as combine, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '@Reducers/reducers'

let combineReducers = createStore(combine({
    global: reducers
}), compose(applyMiddleware(thunk)))
export default combineReducers


