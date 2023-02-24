import { FormUser } from '../../components/FormUser';
import { Input } from '../../components/Input';

const CreateUser = () => {
	return (
		<FormUser
			title='Crear cuenta'
			questionEmailUser='Si ya tienes una cuenta y no te acuerdas de los datos, prueba recuperar el correo'>
			<Input placheholderInput='Nombre' />
		</FormUser>
	);
};

export default CreateUser;
