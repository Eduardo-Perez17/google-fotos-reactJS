import React from 'react';

const Image = ({ imgSrc, imgAlt, imgClass, imgClick }) => {
	return React.createElement('img', {
		src: imgSrc,
		alt: imgAlt,
		className: imgClass,
		onClick: imgClick,
	});
};

export default Image;
