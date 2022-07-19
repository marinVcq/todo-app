import React,{ useState } from 'react';

/* Components */
import Wrapper from './Wrapper';
import Background from './Background';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';

/* Style */
import styled, {ThemeProvider} from "styled-components";

function Todos({todos, addTodo, setCompleted, clearCompleted, deleteTodo, toggleTheme, darkThemeEnabled, filter, setFilter}) {

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
      <Background darkThemeEnabled={darkThemeEnabled}/>

      <Wrapper>

        <Header toggleTheme={toggleTheme} darkThemeEnabled={darkThemeEnabled}/>

        <Input handleSubmit={submitTodo} handleChange={handleChange} handleCompleted={handleCompleted} todo={todo}/>

        <ListContainerDiv className="todoListContainer">

          <TodoList todos={todos} handleCompleted={handleCompleted} handleDelete={handleDelete} filter={filter}/>

          <div className="todoInfo">
            <p className="itemsLeft">{todos.length} items left</p>
            <button onClick={clearCompleted}>Clear completed</button>
          </div>
        </ListContainerDiv>

        <div className="filterPanel">
          <FilterButton className={filter === "all" ? "active" : ""} onClick={() => setFilter('all')}>All</FilterButton>
          <FilterButton className={filter === "active" ? "active" : ""} onClick={() => setFilter('active')}>Active</FilterButton>
          <FilterButton className={filter === "completed" ? "active" : ""} onClick={() => setFilter('completed')}>Completed</FilterButton>
        </div>


      </Wrapper>
    </>
  );
}

const ListContainerDiv = styled.div`
  background-color: ${(props) => props.theme.todoContainerBackground};
`
const FilterButton = styled.button`

`

export default Todos;