import React from 'react';

const Input = ({
	children,
	typeInput,
	placheholderInput,
	nameInput,
	valueInput,
	inputChange,
}) => {
	return React.createElement(
		'input',
		{
			type: typeInput,
			placeholder: placheholderInput,
			name: nameInput,
			value: valueInput,
			onChange: inputChange,
		},
		children
	);
};

export default Input;
