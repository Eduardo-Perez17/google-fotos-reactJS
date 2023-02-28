import './_createUser.scss';

import { FormUser } from '../../components/FormUser';
import { Input } from '../../components/Input';
import { Span } from '../../components/Span';
import { Box } from '../../components/Box';

const CreateUser = () => {
	return (
		<FormUser
			title='Crear cuenta'
			questionEmailUser='Si ya tienes una cuenta y no te acuerdas de los datos, prueba recuperar el correo'>
			<Box boxClass='form__article--login-input'>
				<Span>Opcional</Span>
				<Input placheholderInput='Nombre' />
			</Box>
		</FormUser>
	);
};

export default CreateUser;
