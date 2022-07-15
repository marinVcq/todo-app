import React from 'react';

function TodoList({todos}) {
	return (
      <ol className="todoList">
        {todos.map(todo => {
          return (
          	<li className="todoItem" key={todo.id}>
          		
          		<button className="round-btn"></button>
          		
          		<p>{todo.content}</p>

          		<button className="remove-todo-btn"></button>
          	</li>)
        })}
      </ol>
	);
};

export default TodoList;