import { Link } from 'react-router-dom';

import { Image } from '../Image';
import { Span } from '../Span';
import { Box } from '../Box';

const MenuHeader = ({ homePage, home, lupa, library, searchToggleHandle }) => {
	return (
		<Box boxClass='header__menu'>
			<Box boxClass='header__menu--item'>
				<Image imgSrc={homePage.img} imgAlt={homePage.alt} />
				<Link to={home.path}>{home.name}</Link>
			</Box>
			<Box boxClass='header__menu--item' boxClick={searchToggleHandle}>
				<Image imgSrc={lupa.img} imgAlt={lupa.alt} />
				Busqueda
			</Box>
			<Span>Biblioteca</Span>
			{library.map(path => (
				<Box boxClass='header__menu--item' key={path.name}>
					<Image imgSrc={path.img} />
					<Link to={path.path}>{path.name}</Link>
				</Box>
			))}
		</Box>
	);
};

export default MenuHeader;
