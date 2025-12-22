import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Portal de Notícias</h1>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}


