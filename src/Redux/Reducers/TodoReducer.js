const ADD_TODO = "ADD_TODO";
const UPD_TODO = "UPD_TODO";
const DEL_TODO = "DEL_TODO"

let initState = {
    todo: []
}

const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            let newTodo = {
                id: action.todo.id,
                title: action.todo.title,
                body: action.todo.body
            }
            return {
                ...state,
                todo: [...state.todo, newTodo]
            }
        }
        case UPD_TODO: {
            for (let i = 0; i < state.todo.length; i++) {
                if (action.todo.id === state.todo[i].id) {
                    state.todo[i].title = action.todo.title
                    state.todo[i].body = action.todo.body
                }
            }

            return {
                ...state,
                ...state.todo
            }
        }
        case DEL_TODO: {
            let id = action.id
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.id !== id)
            }
        }
        default: {
            return state
        }
    }
}

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
})
export const updTodo = (todo) => ({
    type: UPD_TODO,
    todo
})
export const delTodo = (id) => ({
    type: DEL_TODO,
    id
})


export default TodoReducer