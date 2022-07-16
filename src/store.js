import {createStore} from 'redux';

const defaultState = {
	todos: [],
};

const todoReducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                	...state.todos,
                	action.payload
                ]
            };
        case 'SET_COMPLETED':
            /* Find the concerned item in todos array */
            const item = state.todos.find(todo => todo.id === action.payload);

            /* Return an object with non concerned item + item with new state completed */
            return {
                ...state,
                todos:[
                    ...state.todos.filter(todo => todo.id !== action.payload),
                    {...item, status: "completed"}
                ],
            }

        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;
