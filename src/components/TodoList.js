import React from 'react';
import Todo from './Todo';

function TodoList({todos, handleCompleted}) {
	return (
      <ol className="todoList">
        {todos.map(todo => {
          return <Todo todo={todo} handleCompleted={handleCompleted} key={todo.id}/>
        })}
      </ol>
	);
};

export default TodoList;