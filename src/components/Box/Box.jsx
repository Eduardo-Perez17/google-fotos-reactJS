import React from 'react';

const Box = ({ children, boxClass, boxClick }) => {
	return React.createElement(
		'div',
		{ className: boxClass, onClick: boxClick },
		children
	);
};

export default Box;
