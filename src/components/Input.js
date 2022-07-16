import React from 'react';
import styled, {ThemeProvider} from "styled-components/macro";

function Input({handleSubmit, todo, handleChange, handleCompleted}) {
	return (
	    <form onSubmit={handleSubmit} className="input">
	      <SubButtonDiv className="round-btn"></SubButtonDiv>
	      <InputDiv type='text' value={todo} onChange={handleChange} placeholder="Create a new todo..." />
	    </form>
	);
};

const SubButtonDiv = styled.button`
  border-color: ${(props) => props.theme.textSoft};
`

const InputDiv = styled.input`
	color: ${(props) => props.theme.textSoft};
	&:focus {
		color: ${(props) => props.theme.text};
		font-weight: bold;
	}
`

export default Input;