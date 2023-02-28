import React from 'react';

const Paragraph = ({ pClass, children }) => {
	return React.createElement('p', { className: pClass }, children);
};

export default Paragraph;
