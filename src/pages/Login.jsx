import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert("User already exists! Please log in.");
      setIsSignup(false);
      return;
    }
    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Signup successful! You can now log in.");
    setIsSignup(false);
    setUsername("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = localStorage.getItem(username);
    if (!user) {
      alert("No user found! Please sign up first.");
      setIsSignup(true);
      return;
    }
    const parsedUser = JSON.parse(user);
    if (parsedUser.password === password) {
      alert("Login successful!");
      navigate("/shop");
    } else {
      alert("Incorrect password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isSignup ? "Create an Account" : "Welcome Back!"}</h2>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p>
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login here" : "Sign up here"}
          </span>
        </p>
      </div>
    </div>
  );
}
