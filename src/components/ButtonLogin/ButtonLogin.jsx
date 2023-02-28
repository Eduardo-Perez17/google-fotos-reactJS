import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/path';

const ButtonLogin = () => {
	return (
		<Link to={LOGIN_USER.path} className='button btn-get-in'>
			iniciar sesion
		</Link>
	);
};

export default ButtonLogin;
