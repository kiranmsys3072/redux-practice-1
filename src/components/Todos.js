import React ,{useState}from 'react'
import { connect } from 'react-redux'

const Todos = (props) => {
    const [task,newTask]=useState('')

    function addTaskHandler(){
        props.dispatch({
            type:"TODO",
            payload:task
        })
    }
    // console.log("props todos",props.todos[0])
  return (
    <div>
        <h1>Todos</h1>
        <input type="text" onChange={(e)=>{newTask(e.target.value)}}/>
        <button onClick={addTaskHandler}>Add Todo</button>
        {
            props.todos.todos.map((each,i)=>{
               return  <h1 key={i}>{each}</h1>
            })
        }
    </div>
  )
}

export default connect(function(store){return store})(Todos) 