import { Box } from '../Box';
import { Paragraph } from '../Paragraph';

const ProfileHeader = ({ email }) => {
	return (
		<Box boxClass='header__search--mobile-profile-true profile'>
			<Box boxClass='profileUser'>{email[0]}</Box>
			<Paragraph>{email}</Paragraph>
		</Box>
	);
};

export default ProfileHeader;
