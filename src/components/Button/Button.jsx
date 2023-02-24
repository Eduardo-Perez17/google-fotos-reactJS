import React from 'react';

const Button = ({ children, buttonType }) => {
	return React.createElement('button', { type: buttonType }, children);
};

export default Button;
