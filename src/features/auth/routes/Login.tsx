import type React from "react";
import { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your login logic here
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={handleUsernameChange}
					style={{ marginBottom: "10px" }}
				/>
				<br />
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={handlePasswordChange}
					style={{ marginBottom: "10px" }}
				/>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
