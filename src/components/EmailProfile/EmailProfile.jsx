import { ProfileHeader } from '../ProfileHeader';
import { ButtonLogin } from '../ButtonLogin';

const EmailProfile = ({ email }) => {
	return <>{email ? <ProfileHeader email={email} /> : <ButtonLogin />}</>;
};

export default EmailProfile;
