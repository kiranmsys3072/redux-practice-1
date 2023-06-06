const initialState={
    todos:[
       "Learn react",
       "Learn js"
       
    ]
}
    

   


function todoReducer(state=initialState,action){
    if(action.type==="TODO"){
        return {...state, todos:[...state.todos,action.payload]}
    }
    return state

}

export default todoReducer