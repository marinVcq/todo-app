import { connect } from 'react-redux';
import Todos from '../components/Todos';

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addTodo: value => dispatch({
			type: 'ADD_TODO',
			payload: value
		}),
		setCompleted: value => dispatch({
			type: 'SET_COMPLETED',
			payload: value
		}),
		clearCompleted: () => dispatch({
			type: 'CLEAR_COMPLETED',
		}),
		deleteTodo: value => dispatch({
			type: 'DELETE_TODO',
			payload: value
		})
	};
};
const TodosContainer = connect(mapStateToProps,mapDispatchToProps)(Todos);

export default TodosContainer;
