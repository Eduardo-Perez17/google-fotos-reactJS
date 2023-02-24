import { Outlet } from 'react-router-dom';
import './layaout.scss';

import { Box } from '../components/Box';

const Layaout = ({ children }) => {
	return (
		<Box boxClass='grid-father'>
			<Box boxClass='grid-son'>
				<h1>HEADER</h1>
				<Outlet />
				<h1>FOOTER</h1>
			</Box>
		</Box>
	);
};

export default Layaout;
