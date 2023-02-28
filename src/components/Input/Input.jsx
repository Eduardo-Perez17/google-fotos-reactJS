import React from 'react';

const Input = ({
	typeInput,
	placheholderInput,
	nameInput,
	valueInput,
	inputChange,
	inputBlur,
	idInput,
	acceptInput,
	multiplyInput,
}) => {
	return React.createElement('input', {
		type: typeInput,
		placeholder: placheholderInput,
		name: nameInput,
		value: valueInput,
		onChange: inputChange,
		onBlur: inputBlur,
		id: idInput,
		accept: acceptInput,
		multiple: multiplyInput,
	});
};

export default Input;
