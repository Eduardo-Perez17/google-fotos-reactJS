import React from 'react';

const Button = ({ children, buttonType, buttonClass }) => {
	return React.createElement(
		'button',
		{ type: buttonType, className: buttonClass },
		children
	);
};

export default Button;
