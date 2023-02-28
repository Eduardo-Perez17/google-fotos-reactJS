import React from 'react';

const Form = ({ formClass, formSubmit, children }) => {
	return React.createElement(
		'form',
		{ className: formClass, onSubmit: formSubmit },
		children
	);
};

export default Form;
