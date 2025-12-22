import { Link } from "react-router-dom";

export default function NewsCard({ noticia }) {
  if (!noticia) {
    return null; 
  }

  return (
    <Link to={`/noticia/${noticia.id}`} className="link-noticia">
      <div className="card">
        <img src={noticia.imagem} alt={noticia.titulo} />
        <h3>{noticia.titulo}</h3>
        <p><strong>{noticia.categoria}</strong></p>
      </div>
    </Link>
  );
}
