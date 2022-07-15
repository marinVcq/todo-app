import React,{ useState, useEffect } from 'react';

/* Components */
import Wrapper from './Wrapper';
import Background from './Background';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';





function Todos({todos, addTodo}) {

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

  /* View */
  return (
    <>
      <Background />

      <Wrapper>

        <Header/>

        <Input onSubmit={submitTodo} onChange={handleChange} value={todo} />

        <div className="todoListContainer">

          <TodoList todos={todos}/>

          <div className="todoInfo">
            <p className="itemsLeft">{todos.length} items left</p>
            <button>Clear completed</button>
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