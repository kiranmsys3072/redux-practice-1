import {combineReducers}  from 'redux'
import counterReducer from './counter.reducer'
import studentReducer from './student.reducer'
import todoReducer from './todos.reducer'
import CountriesReducer from './Countries'


var reducer=combineReducers({
    counter:counterReducer,
    students:studentReducer,
    todos:todoReducer,
    countries:CountriesReducer
})

export default reducer 