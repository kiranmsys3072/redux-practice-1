import React ,{useState}from 'react'
import { connect } from 'react-redux'
import {AddTodoList,DeleteTodoList} from '../store/actions'

const Todos = (props) => {
    const [task,newTask]=useState('')

    function addTaskHandler(){
        props.dispatch(AddTodoList(task))
        // props.dispatch({
        //     type:"TODO",
        //     payload:task
        // })
    }

    function deleteTodoList(id){
        props.dispatch(DeleteTodoList(id))
    }
    // console.log("props todos",props.todos[0])
    // function deleteTodo(index){
    //     props.dispatch({
    //         type:"DELETE",
    //         payload:index
    //     })
    // }
  return (
    <div>
        <h1>Todos</h1>
        <input type="text" onChange={(e)=>{newTask(e.target.value)}}/>
        <button onClick={addTaskHandler}>Add Todo</button>
       

        {
            props.todos.todos.map((each,i)=>{
               return <div key={i}>
                <h1 key={i}>{each}</h1> 
                <button onClick={()=>{ deleteTodoList(i)}}>D</button>
               </div> 
            })
        }
    </div>
  )
}

export default connect(function(store){return store})(Todos) 