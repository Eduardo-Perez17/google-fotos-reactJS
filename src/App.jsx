import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME, LOGIN_USER, SIGN_USER, NOT_FOUND } from './utils/path';

import { CreateUser } from './pages/CreateUser';
import { LoginUser } from './pages/LoginUser';
import { NotFound } from './pages/NotFound';
import { Layaout } from './Layaout';
import { Home } from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME.path} element={<Layaout />}>
					<Route path={HOME.path} element={<Home />} />
				</Route>
				<Route path={LOGIN_USER.path} element={<LoginUser />} />
				<Route path={SIGN_USER.path} element={<CreateUser />} />
				<Route path={NOT_FOUND.path} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
