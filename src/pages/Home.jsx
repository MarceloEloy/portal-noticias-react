import { useState } from "react";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import { noticias } from "../data/noticias";
import "./home.css";

export default function Home() {
  const [busca, setBusca] = useState("");

  const noticiasFiltradas = noticias.filter(noticia =>
    noticia.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    noticia.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2 className="home-title">Últimas Notícias</h2>

      <SearchBar valor={busca} onChange={setBusca} />

      <div className="news-container">
        {noticiasFiltradas.length > 0 ? (
          noticiasFiltradas.map(noticia => (
            <NewsCard key={noticia.id} noticia={noticia} />
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Nenhuma notícia encontrada 😕
          </p>
        )}
      </div>
    </div>
  );
}
