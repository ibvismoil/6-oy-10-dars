import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Логин и пароль не могут быть пустыми!");
      return;
    }

    if (username === "admin" && password === "1234") {
      localStorage.setItem("auth", "true");
      navigate("/");
      window.location.reload();
    } else {
      setError("Неверный логин или пароль!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", maxWidth: "400px", margin: "50px auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2>Вход</h2>
      
      <input type="text" placeholder="Логин" value={username} autoComplete="off"
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }} required style={{ padding: "12px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}/>

      <div style={{ position: "relative", width: "100%" }}>
        <input type={showPassword ? "text" : "password"} placeholder="Пароль" value={password} autoComplete="new-password"
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          required
          style={{ padding: "12px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px", paddingRight: "40px" }}/>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center",}}>
          {showPassword ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.94 17.94C16.37 19.22 14.27 20 12 20C7 20 2.73 15.74 1 12C1.67 10.5 2.69 9.15 3.94 8.06M9.9 4.24C10.57 4.09 11.28 4 12 4C17 4 21.27 8.26 23 12C22.33 13.5 21.31 14.85 20.06 15.94M3 3L21 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C2.73 8.26 7 4 12 4C17 4 21.27 8.26 23 12C21.27 15.74 17 20 12 20C7 20 2.73 15.74 1 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>)}
        </button>
      </div>
      {error && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{error}</p>}
      <button
        onClick={handleLogin}
        style={{ padding: "12px", width: "100%", backgroundColor: "#BC8E5BE6", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Войти
      </button>
    </div>
  );
};

export default Login;
