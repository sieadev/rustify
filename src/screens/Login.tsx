import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/home");
    }

    return (
        <div className="login">
            <div className="login-container">
                <h1>Login to your Account</h1>
                <h2>Enter your Spotify Login Details</h2>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button onClick={handleLogin}>Login</button>
                <p className="disclaimer">
                    Login data will only be shared directly with the official Spotify servers and will never be
                    accessed by any external services.
                </p>
            </div>
        </div>
    );
}

export default Login;
