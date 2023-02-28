import { Routes, Route } from 'react-router-dom';
import {
	HOME,
	LOGIN_USER,
	SIGN_USER,
	FAVORITE,
	ALBUMES,
	ARCHIVE,
	TRUSH,
	NOT_FOUND,
} from '../utils/path';

import { CreateUser } from '../pages/CreateUser';
import { LoginUser } from '../pages/LoginUser';
import { NotFound } from '../pages/NotFound';
import { Favorite } from '../pages/Favorite';
import { Archive } from '../pages/Archive';
import { Albumes } from '../pages/Albumes';
import { Trush } from '../pages/Trush';
import { Layaout } from '../Layaout';
import { Home } from '../pages/Home';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path={HOME.path} element={<Layaout />}>
				<Route path={HOME.path} element={<Home />} />
				<Route path={FAVORITE.path} element={<Favorite />} />
				<Route path={ALBUMES.path} element={<Albumes />} />
				<Route path={ARCHIVE.path} element={<Archive />} />
				<Route path={TRUSH.path} element={<Trush />} />
			</Route>
			<Route path={LOGIN_USER.path} element={<LoginUser />} />
			<Route path={SIGN_USER.path} element={<CreateUser />} />
			<Route path={NOT_FOUND.path} element={<NotFound />} />
		</Routes>
	);
};

export default RoutesApp;
