import React,{useEffect} from 'react'
import {connect} from 'react-redux'

const Countries = (props) => {
 useEffect(()=>{
  fetch('https://restcountries.com/v2/all')
  .then(res=> res.json())
  .then(data=>{ props.dispatch({ type:"UPDATE",payload:data})})

 },[])
  
  return (
    
    <div>
      <h1>Countries</h1>
      {console.log("con",props.countries.countries.map((name)=>{
        return name
      }))}
    </div>
  )
}

export default connect(function(store){return store})(Countries)