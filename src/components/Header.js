import React from 'react';

function Header({toggleTheme, darkThemeEnabled}) {
	return (
		<div className="header">
			<h1 className="app-title">todo</h1>
			<button className={darkThemeEnabled === true ? 'toggle-dark' : 'toggle-light'} onClick={toggleTheme}></button>
		</div>
	);
};

export default Header;