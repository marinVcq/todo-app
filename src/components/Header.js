import React from 'react';

function Header({toggleTheme}) {
	return (
		<div className="header">
			<h1 className="app-title">todo</h1>
			<button className="toggle" onClick={toggleTheme}></button>
		</div>
	);
};

export default Header;