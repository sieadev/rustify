
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import "./App.css";

function App() {
    function checkLogin() {
        return true;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={checkLogin() ? <Navigate to="/home" /> : <Navigate to="/login" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
