import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState(null);

	const login = userEmail => {
		setEmail(userEmail);
		navigate('/');
	};

	const logout = () => {
		setEmail(null);
		navigate('/');
	};

	const auth = { email, login, logout };
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
	const auth = React.useContext(AuthContext);
	return auth;
};

export { AuthProvider, useAuth };
