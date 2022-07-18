import React from 'react';
import Todo from './Todo';

function TodoList({todos, handleCompleted, handleDelete,filter}) {

  if(filter === 'all'){
    return (
        <ol className="todoList">
          {todos.map(todo => {
            return <Todo todo={todo} handleCompleted={handleCompleted} key={todo.id} handleDelete={handleDelete} filter={filter}/>
          })}
        </ol>
    );    
  }else if(filter === 'active'){
    return (
        <ol className="todoList">
          {todos.filter(todo => todo.status === "active").map(todo => {
            return <Todo todo={todo} handleCompleted={handleCompleted} key={todo.id} handleDelete={handleDelete} filter={filter}/>
          })}
        </ol>
    );    
  }else{
    return (
        <ol className="todoList">
          {todos.filter(todo => todo.status === "completed").map(todo => {
            return <Todo todo={todo} handleCompleted={handleCompleted} key={todo.id} handleDelete={handleDelete} filter={filter}/>
          })}
        </ol>
    );     
  }

};

export default TodoList;