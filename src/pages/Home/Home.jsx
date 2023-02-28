import { useState } from 'react';
import { USER_FALSE } from '../../utils/image';
import { useAuth } from '../../context/auth/Auth';

import './_home.scss';

import { ButtonLogin } from '../../components/ButtonLogin';
import { Paragraph } from '../../components/Paragraph';
import { Image } from '../../components/Image';
import { Input } from '../../components/Input';
import { Box } from '../../components/Box';

const Home = () => {
	const { email } = useAuth();
	const [image, setImage] = useState(null);

	const changeImage = e => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = event => {
			event.preventDefault();
			setImage(event.target.result);
		};
	};

	return (
		<Box boxClass={image ? 'home box-pages' : 'box-pages'}>
			{email ? (
				<>
					<Box boxClass='drop-area'>
						<Input
							typeInput='file'
							nameInput='input'
							acceptInput='image/*'
							multiplyInput
							inputChange={e => changeImage(e)}
						/>
					</Box>
					{!image && (
						<Box boxClass='main-drop-area-false'>
							<Input
								typeInput='file'
								nameInput='input'
								acceptInput='image/*'
								multiplyInput
								inputChange={e => changeImage(e)}
							/>
						</Box>
					)}

					<Box boxClass='content-img'>
						<img src={image} />
					</Box>
				</>
			) : (
				<Box boxClass='main__user--false'>
					<Image imgSrc={USER_FALSE.img} imgAlt={USER_FALSE.alt} />
					<Paragraph>
						Debes de iniciar sesión para poder accedes a las funciones de la
						aplicación
					</Paragraph>
					<ButtonLogin />
				</Box>
			)}
		</Box>
	);
};

export default Home;
