import React from 'react'
import {connect}from 'react-redux'

const Counter = (props) => {

  function decrementHandler(){
    props.dispatch({type:"DEC"})
  }

  function increaseHandler(){
    props.dispatch({type:"INC"})
  }
  console.log("props",props)
  return (
    <div>
      <h1>Counter</h1>
      <h2>count-{props.counter.count}</h2>
      <button onClick={increaseHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default connect(function(store){return store})(Counter)