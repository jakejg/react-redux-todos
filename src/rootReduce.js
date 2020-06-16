const INITIAL_STATE = {todos: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'TODO') {
        return {...state, todos: [...state.todos, action.payload]}
    }

    if (action.type === 'REMOVE') {
        return {...state, todos: state.todos.filter(todos =>todos.props.id !== action.payload)}
    }
    return state
}

export default rootReducer;