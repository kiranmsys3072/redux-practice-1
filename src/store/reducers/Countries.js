let initialState={
    countries:[]

}

let CountriesReducer=(state=initialState,action)=>{
    if(action.type="UPDATE"){
        return {...state,countries:[action.payload]}
    }
    return state
}

export default CountriesReducer