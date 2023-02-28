import React from 'react';

const Span = ({ spanClass, children }) => {
	return React.createElement('span', { className: spanClass }, children);
};

export default Span;
