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

        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;
