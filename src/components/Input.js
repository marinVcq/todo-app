import React from 'react';
import styled, {ThemeProvider} from "styled-components/macro";

function Input({handleSubmit, todo, handleChange, handleCompleted}) {
	return (
	    <FormDiv onSubmit={handleSubmit} className="input-form">
	      <SubButtonDiv className="round-btn"></SubButtonDiv>
	      <InputDiv type='text' value={todo} onChange={handleChange} placeholder="Create a new todo..." />
	    </FormDiv>
	);
};

const SubButtonDiv = styled.button`
  border-color: ${(props) => props.theme.textCompleted};
`
const FormDiv = styled.form`
  background-color: ${(props) => props.theme.todoContainerBackground};
`
const InputDiv = styled.input`
  background-color: ${(props) => props.theme.todoContainerBackground};
	color: ${(props) => props.theme.textSoft};

	&::placeholder{
		color: ${(props) => props.theme.textSoft};

	}

	&:focus {
		color: ${(props) => props.theme.text};
		font-weight: bold;
	}
`

export default Input;