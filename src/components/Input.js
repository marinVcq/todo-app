import React from 'react';

function Input({onSubmit, value, onChange}) {
	return (
	    <form onSubmit={onSubmit} className="input">
	      <button className="round-btn"></button>
	      <input type='text' value={value} onChange={onChange} placeholder="Create a new todo..." />
	    </form>
	);
};

export default Input;