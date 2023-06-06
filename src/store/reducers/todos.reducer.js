const initialState={
    todos:[
       "Learn react",
       "Learn js"
       
    ]
}
    

   


function todoReducer(state=initialState,action){
    if(action.type==="ADD"){
        return {...state, todos:[...state.todos,action.payload]}
    }
    else if(action.type === "DELETE"){
       var temp=[...state.todos];
       temp.splice(action.payload);
       return {...state,todos:[...temp]}
    }
    return state

}

export default todoReducer