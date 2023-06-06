const initialState={
    count:10
}


function counterReducer(state=initialState,action){
    // console.log('action',action)
    // console.log('state',state)
    if(action.type === "INC"){
        return {...state,count:state.count+1}
        
    }else if(action.type === 'DEC'){
        return {...state, count:state.count-1}
    }
    return state

}

export default counterReducer