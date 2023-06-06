import reducer from "./reducers/reducer";

import{createStore} from 'redux'

var store=createStore(reducer)

export default store 