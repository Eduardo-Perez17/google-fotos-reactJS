import { EmailProfile } from '../EmailProfile';
import { Box } from '../Box';

const HeaderToggle = ({ email, searchToggleHandle, children }) => {
	return (
		<Box boxClass='header__search--mobile'>
			<Box boxClass='header__search--mobile-profile'>
				<Box boxClick={searchToggleHandle} boxClass='close-menu'>
					✖
				</Box>
				<EmailProfile email={email} />
			</Box>
			{children}
		</Box>
	);
};

export default HeaderToggle;
