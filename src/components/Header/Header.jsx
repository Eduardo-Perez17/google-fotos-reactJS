import { useState } from 'react';
import { GOOGLE, MENU, LUPA, HOME_PAGE } from '../../utils/image';
import { LIBRARY, HOME } from '../../utils/path';

import { useAuth } from '../../context/auth/Auth';

import './_header.scss';

import { HeaderToggle } from '../HeaderToggle';
import { EmailProfile } from '../EmailProfile';
import { MenuHeader } from '../MenuHeader';
import { Title } from '../Title';
import { Image } from '../Image';
import { Input } from '../Input';
import { Box } from '../Box';

const Header = () => {
	const [searchToggle, setSearchToggle] = useState(false);
	const [menuToggle, setMenuToggle] = useState(false);
	const { email } = useAuth();

	const searchToggleHandle = () => setSearchToggle(!searchToggle);
	const menuToggleHandle = () => setMenuToggle(!menuToggle);

	return (
		<>
			<Box boxClass='header'>
				<Box boxClass='header__image--title'>
					<Image imgSrc={GOOGLE.img} imgAlt={GOOGLE.alt} />
					<Image
						imgSrc={MENU.img}
						imgAlt={MENU.alt}
						imgClick={menuToggleHandle}
					/>
					<Title size='lg'>Fotos</Title>
				</Box>
				<Box boxClass='header__search'>
					{menuToggle && (
						<HeaderToggle searchToggleHandle={menuToggleHandle} email={email}>
							<MenuHeader
								homePage={HOME_PAGE}
								home={HOME}
								lupa={LUPA}
								library={LIBRARY}
								searchToggleHandle={searchToggleHandle}
							/>
						</HeaderToggle>
					)}
				</Box>
				<Box boxClass='header__menu--desktop'>
					<EmailProfile email={email} />
					<MenuHeader
						homePage={HOME_PAGE}
						home={HOME}
						lupa={LUPA}
						library={LIBRARY}
						searchToggleHandle={searchToggleHandle}
					/>
				</Box>
				<Box boxClass='header__search'>
					{searchToggle && (
						<HeaderToggle searchToggleHandle={searchToggleHandle} email={email}>
							<Input placheholderInput='Buscar ....' />
						</HeaderToggle>
					)}
				</Box>
				<Box boxClass='header__search--main'>
					<Input
						typeInput='text'
						nameInput='input'
						idInput='input'
						placheholderInput='Buscar algo ...'
					/>
					<Image
						imgSrc={LUPA.img}
						imgAlt={LUPA.alt}
						imgClick={searchToggleHandle}
					/>
				</Box>
				<Box boxClass='header__profile'>
					<EmailProfile email={email} />
				</Box>
			</Box>
		</>
	);
};

export default Header;
