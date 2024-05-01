import type React from "react";
import { useState } from "react";

const Register = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={handleNameChange}
					style={{ marginBottom: "10px" }}
				/>
				<br />
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
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Register;
