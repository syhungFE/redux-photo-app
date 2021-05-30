import React from "react"

function ToDoList(props){
    const {todos} = props;
    return(
        <div className="todo-list_content">
            <div className="request"> 
                Request
            </div>
            <div className="in-progress"> In Progess </div>
            <div className="done"> Done </div>
        </div>
    )
}

export default ToDoList