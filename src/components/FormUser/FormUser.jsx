import { Link } from 'react-router-dom';
import { SIGN_USER, LOGIN_USER, HOME } from '../../utils/path';
import { GOOGLE } from '../../utils/image';

import './_formUser.scss';

import { Input } from '../../components/Input';
import { Paragraph } from '../Paragraph';
import { Image } from '../Image';
import { Title } from '../Title';
import { Box } from '../Box';

const FormUser = ({ title, children, questionEmailUser }) => {
	return (
		<Box boxClass='form-father'>
			<Box boxClass='form form__login'>
				<Box boxClass='form-header form__login--header'>
					<Image imgSrc={GOOGLE.img} imgAlt={GOOGLE.alt} />
					<Title size='lg'>{title}</Title>
					<Paragraph>ir a Google fotos</Paragraph>
				</Box>
				<Box boxClass='form-article form__login--article'>
					<Input typeInput='email' placheholderInput='Correo electronico' />
					<Input typeInput='password' placheholderInput='Contraseña' />
					{children}
					<Link className='btn-get-in' to={HOME.path}>
						Entrar a Google Fotos
					</Link>
					{questionEmailUser && <Link>{questionEmailUser}</Link>}
				</Box>
				<Box boxClass='form-footer form__login--footer'>
					<Link to={SIGN_USER.path}>crear cuenta</Link>
					<Link to={LOGIN_USER.path}>iniciar sesión</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default FormUser;
