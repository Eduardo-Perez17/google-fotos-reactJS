import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth/Auth';
import { RoutesApp } from './RoutesApp';

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<RoutesApp />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
