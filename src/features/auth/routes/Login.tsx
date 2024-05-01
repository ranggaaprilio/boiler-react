import type React from "react";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const signIn = useSignIn();
	const navigate = useNavigate();
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
		if (!username || !password) {
			alert("Please enter username and password");
			return;
		}

		//dummy login
		if (username === "admin" && password === "admin") {
			// Add your login logic here
			if (
				signIn({
					auth: {
						token:
							"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTQ1MzQxMDAsImV4cCI6MTc0NjA3MDEwMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.PKpLG0o0r7PZyQKfKKQDuD4mOkML2gQbxaUDmKaBuMY",
						type: "Bearer",
					},
					userState: {
						givenName: "John",
						surname: "Rocket",
						email: "",
					},
				})
			) {
				alert("Login successful");
				navigate("/app");
			}
			return;
		} else {
			alert("Invalid username or password");
		}
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
