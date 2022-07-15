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
		})
	};
};
const TodosContainer = connect(mapStateToProps,mapDispatchToProps)(Todos);

export default TodosContainer;
