import { Routes, Route } from "react-router-dom";
import UserAuthentication from './pages/UserAuthenticaion';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

function App() {

	return (
		<Routes>
			<Route path="/signup" element={ <UserAuthentication endpoint="signup" /> } />
			<Route path="/signin" element={ <UserAuthentication endpoint="signin" /> } />
			<Route path="/" element={ <HomePage /> } />
			<Route path="/dashboard" element={ <Dashboard /> } />
		</Routes>
	)
}

export default App
