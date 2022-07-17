import React,{ useState, useEffect } from 'react';

/* Components */
import Wrapper from './Wrapper';
import Background from './Background';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';





function Todos({todos, addTodo, setCompleted, clearCompleted, deleteTodo}) {

  /* State */
  const [todo, setTodo] = useState('');

  /* handleChange function */
  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  /* onSubmit todo function */

  function submitTodo(event) {
    event.preventDefault();

    if (todo.trim().length === 0){
      return;
    }

    addTodo({
      id: Math.random(),
      content: todo.trim(),
      status: "active",
    });

    setTodo('');
  }

  /* Set todo completed - function */
  const handleCompleted = (id,e) => {
    e.preventDefault();
    console.log('set completed !');
    setCompleted(id);
  }

  /* Delete a todo - function */
  const handleDelete = (id,event) => {
    event.preventDefault();
    console.log('try to delete ');
    deleteTodo(id);
  }

  /* View */
  return (
    <>
      <Background />

      <Wrapper>

        <Header/>

        <Input handleSubmit={submitTodo} handleChange={handleChange} handleCompleted={handleCompleted} todo={todo} />

        <div className="todoListContainer">

          <TodoList todos={todos} handleCompleted={handleCompleted} handleDelete={handleDelete}/>

          <div className="todoInfo">
            <p className="itemsLeft">{todos.length} items left</p>
            <button onClick={clearCompleted}>Clear completed</button>
          </div>
        </div>

        <div className="filterPanel">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>


      </Wrapper>
    </>
  );
}

export default Todos;