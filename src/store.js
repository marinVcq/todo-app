import {createStore, combineReducers} from 'redux';
import {light,dark} from "./abstract/theme.js";


const todosDefaultState = {
	todos: [],
    filter: 'all',
};

const themeDefaultState = {
    darkThemeEnabled: false,
};

const themeReducer = (state = themeDefaultState , action = {}) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            console.log(state.darkThemeEnabled)
            return {
                ...state,
                darkThemeEnabled: !state.darkThemeEnabled
            };

        default:
            return state;
    }
};

const todoReducer = (state = todosDefaultState, action = {}) => {
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
        case 'CLEAR_COMPLETED':
            /* Return object with all items not completed */
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.status !== "completed")]
            }

        case 'DELETE_TODO':
            /* Return state without deleted item */
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        case 'SET_FILTER':
            return{
                ...state,
                filter: action.payload
            }

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos: todoReducer,
    theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
