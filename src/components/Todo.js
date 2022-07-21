import React from 'react';
import styled, {ThemeProvider} from "styled-components/macro";

function Todo({todo, handleCompleted, handleDelete}) {

  return (
  	<TodoItemDiv className="todo-item">
  		
  		<CompletedButtonDiv todo={todo} className={todo.status === "completed" ? "round-btn completed" : "round-btn"} onClick={(event) => handleCompleted(todo.id,event)}>
  			<div className="icon-check"></div>
  		</CompletedButtonDiv>
  		
  		<TodoP todo={todo} className="todo-content" >{todo.content}</TodoP>

  		<button className="remove-todo-btn" onClick={(event) => handleDelete(todo.id,event)}></button>
  	</TodoItemDiv>)
};

const TodoItemDiv = styled.div`
	border-color: ${(props) => props.theme.textCompleted};
`

const TodoP = styled.p`
	
	color: ${(props) => props.todo.status === "completed" ? (props) => props.theme.textCompleted : (props) => props.theme.text};
	
	&:after {
		display: ${(props) => props.todo.status === "completed" ? "block" : "none"};
		border-bottom: 0.1rem solid ${(props) => props.theme.textCompleted};
	}
`

const CompletedButtonDiv = styled.button`
  	border-color: ${(props) => props.theme.textCompleted};

  	&:after{
  		background-color: ${(props) => props.theme.todoContainerBackground};
  	}
`

export default Todo;