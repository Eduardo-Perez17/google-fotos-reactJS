import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { SIGN_USER, LOGIN_USER } from '../../utils/path';
import { GOOGLE } from '../../utils/image';

import { useAuth } from '../../context/auth/Auth';

import './_formUser.scss';

import { Input } from '../../components/Input';
import { Form } from '../../components/Form';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import { Image } from '../Image';
import { Title } from '../Title';
import { Box } from '../Box';

const FormUser = ({ title, children, questionEmailUser }) => {
	const auth = useAuth();

	return (
		<Box boxClass='form-father'>
			<Box boxClass='form form__login'>
				<Box boxClass='form-header form__login--header'>
					<Image imgSrc={GOOGLE.img} imgAlt={GOOGLE.alt} />
					<Title size='lg'>{title}</Title>
					<Paragraph>ir a Google fotos</Paragraph>
				</Box>
				<Formik
					initialValues={{
						emailUser: '',
						passwordUser: '',
					}}
					validate={value => {
						const errors = {};

						// VALIDAMOS EL EMAIL
						if (!value.emailUser) {
							errors.emailUser = 'Por favor ingrese un correo';
						} else if (
							!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
								value.emailUser
							)
						) {
							errors.emailUser =
								'El correo solo puede contener \n letras, numeros, puntos, guiones bajos y guion bajo';
						}

						// VALIDAMOS EL PASSSWORD
						if (!value.passwordUser) {
							errors.passwordUser = 'Por favor ingrese la contraseña';
						} else if (value.passwordUser.length <= 2) {
							errors.passwordUser =
								'Por favor ingrese la contraseña con mas de 2 caracteres';
						}

						// RETORNAMOS LOS ERRORES EN UN OBJETO
						return errors;
					}}
					onSubmit={values => auth.login(values.emailUser)}>
					{({
						values,
						errors,
						touched,
						handleSubmit,
						handleChange,
						handleBlur,
					}) => (
						<Form
							formClass='form-article form__login--article'
							formSubmit={handleSubmit}>
							<Box boxClass='form__article--login-input'>
								<Input
									placheholderInput='Nombre de usuario o correo'
									typeInput='text'
									nameInput='emailUser'
									idInput='emailUser'
									inputChange={handleChange}
									inputBlur={handleBlur}
									valueInput={values.emailUser}
								/>
								{touched.emailUser && errors.emailUser && (
									<Paragraph pClass='error'>{errors.emailUser}</Paragraph>
								)}
							</Box>
							<Box boxClass='form__article--login-input'>
								<Input
									placheholderInput='Contraseña'
									typeInput='password'
									nameInput='passwordUser'
									idInput='passwordUser'
									inputChange={handleChange}
									inputBlur={handleBlur}
									valueInput={values.password}
								/>
								{touched.passwordUser && errors.passwordUser && (
									<Paragraph pClass='error'>{errors.passwordUser}</Paragraph>
								)}
							</Box>
							{children}
							<Button buttonClass='button '>Iniciar sesion</Button>
							{questionEmailUser && <Link>{questionEmailUser}</Link>}
						</Form>
					)}
				</Formik>

				<Box boxClass='form-footer form__login--footer'>
					<Link to={SIGN_USER.path}>crear cuenta</Link>
					<Link to={LOGIN_USER.path}>iniciar sesión</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default FormUser;
