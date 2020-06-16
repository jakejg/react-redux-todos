import React, { useState } from "react";
import "./Todo.css"

const Todo = ({task, remove, id}) => {
    const [completed, setCompleted] = useState(false)

    //cross off a todo
    const lineThrough = () => {
        setCompleted(!completed)
        
    }
 
    return (
        <li className="Todo">
            <span className="Todo-task" style={completed ? {textDecoration: "line-through"}: null}>
                {task}
            </span>
            <button className="Todo-btn" onClick={lineThrough}>Mark as Done</button>
            <button className="Todo-btn" onClick={() => remove(id)}>Delete</button>
        </li>
    )
}

export default Todo;