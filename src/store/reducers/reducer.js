import {combineReducers}  from 'redux'
import counterReducer from './counter.reducer'
import studentReducer from './student.reducer'
import todoReducer from './todos.reducer'


var reducer=combineReducers({
    counter:counterReducer,
    students:studentReducer,
    todos:todoReducer
})

export default reducer 