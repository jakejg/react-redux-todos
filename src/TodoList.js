import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Todo from "./Todo";
import { v4 as uuid} from 'uuid';
import NewTodoForm from './NewTodoForm';
// import { setLocalStorage, getLocalStorage } from './LocalStorage';

const TodoList = () => {
    const todos = useSelector(store => store.todos);

    const dispatch = useDispatch();

    const addTodo = (task) => {
        const id = uuid();
        dispatch({type: 'TODO', payload: <Todo key={id} task={task} id={id} remove={remove} />});
    }
        
    const remove = (id) => {
        dispatch({type: 'REMOVE', payload: id})  
    }

    return ( 
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos}
            </ul>
        </div>
    )
}

export default TodoList;