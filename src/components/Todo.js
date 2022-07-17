import React from 'react';
import styled, {ThemeProvider} from "styled-components/macro";

function Todo({todo, handleCompleted, handleDelete}) {

  return (
  	<div className="todoItem">
  		
  		<CompletedButtonDiv todo={todo} className={todo.status === "completed" ? "round-btn completed" : "round-btn"} onClick={(event) => handleCompleted(todo.id,event)}>
  			<div className="icon-check"></div>
  		</CompletedButtonDiv>
  		
  		<TodoP todo={todo} >{todo.status + ' ' + todo.content}</TodoP>

  		<button className="remove-todo-btn" onClick={(event) => handleDelete(todo.id,event)}></button>
  	</div>)
};

const TodoP = styled.p`
	color: ${(props) => props.todo.status === "completed" ? (props) => props.theme.textCompleted : (props) => props.theme.text};
	&:after {
		display: ${(props) => props.todo.status === "completed" ? "block" : "none"};
	}
`

const CompletedButtonDiv = styled.button`
  	border-color: ${(props) => props.theme.buttonCompleted};
`

export default Todo;