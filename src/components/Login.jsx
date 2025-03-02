import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Логин и пароль не могут быть пустыми!");
      return;
    }

    // Хардкод проверки (замени на серверный запрос)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("auth", "true"); // Сохраняем авторизацию
      navigate("/");
      window.location.reload(); // Обновляем страницу, чтобы кнопки отобразились
    } else {
      setError("Неверный логин или пароль!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", maxWidth: "400px", margin: "50px auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2>🔑 Вход</h2>
      
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
        required
        style={{ padding: "12px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
        required
        style={{ padding: "12px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
      />

      {error && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{error}</p>}

      <button
        onClick={handleLogin}
        style={{ padding: "12px", width: "100%", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Войти 🚀
      </button>
    </div>
  );
};

export default Login;
