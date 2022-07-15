import React from 'react';

function Todo(todo) {
	return (
		<li className="todoItem">{todo.content}</li>
	);
};

export default Todo;