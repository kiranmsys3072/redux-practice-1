export function AddTodoList(task){
    return{
        type:"ADD",
        payload:task
    }

}

export  function DeleteTodoList(task){
    return{
        type:"DELETE",
        payload:task
    }

}

