import React from 'react';

function Background({darkThemeEnabled}) {
	return (
			<div className={darkThemeEnabled === true ? "image-background dark" : "image-background light" }></div>
	);
};

export default Background;