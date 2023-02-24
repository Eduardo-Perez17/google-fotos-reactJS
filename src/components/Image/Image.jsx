import React from 'react';

const Image = ({ imgSrc, imgAlt, imgClass }) => {
	return React.createElement('img', {
		src: imgSrc,
		alt: imgAlt,
		className: imgClass,
	});
};

export default Image;
