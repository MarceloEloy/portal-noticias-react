import "../styles/login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button>Entrar</button>
      </div>
    </div>
  );
}
