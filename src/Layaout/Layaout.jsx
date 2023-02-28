import { Outlet } from 'react-router-dom';
import './layaout.scss';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Box } from '../components/Box';

const Layaout = () => {
	return (
		<Box boxClass='grid-father'>
			<Box boxClass='grid-son'>
				<Header />
				<Outlet />
				<Footer />
			</Box>
		</Box>
	);
};

export default Layaout;
