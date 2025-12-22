import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { noticias } from "../data/noticias";
import "./Noticia.css";

export default function Noticia() {
  const { id } = useParams();

  const noticia = noticias.find(n => n.id === Number(id));

  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [curtidas, setCurtidas] = useState(0);
  const [curtiu, setCurtiu] = useState(false);

  useEffect(() => {
    if (!id) return;

    const comentariosSalvos =
      JSON.parse(localStorage.getItem(`comentarios_${id}`) || "[]");

    setComentarios(comentariosSalvos);
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const likesSalvos =
      JSON.parse(localStorage.getItem(`likes_${id}`) || "0");

    const usuarioCurtiu =
      JSON.parse(localStorage.getItem(`curtiu_${id}`) || "false");

    setCurtidas(likesSalvos);
    setCurtiu(usuarioCurtiu);
  }, [id]);

  const enviarComentario = () => {
    if (!comentario.trim()) return;

    const novos = [...comentarios, comentario];
    setComentarios(novos);
    localStorage.setItem(`comentarios_${id}`, JSON.stringify(novos));
    setComentario("");
  };

  const curtirNoticia = () => {
    const novoValor = curtiu ? curtidas - 1 : curtidas + 1;

    setCurtidas(novoValor);
    setCurtiu(!curtiu);
    localStorage.setItem(`likes_${id}`, JSON.stringify(novoValor));
    localStorage.setItem(`curtiu_${id}`, JSON.stringify(!curtiu));
  };

  if (!noticia) {
    return <h2 style={{ textAlign: "center" }}>Notícia não encontrada</h2>;
  }

  return (
    <div className="noticia-detalhe">
      <Link to="/" className="btn-voltar">⬅ Voltar</Link>

      <h1>{noticia.titulo}</h1>

      <p className="info-noticia">
        {noticia.categoria} • {noticia.autor} • {noticia.data}
      </p>

      <img src={noticia.imagem} alt={noticia.titulo} />

      <p className="texto-noticia">{noticia.conteudo}</p>

      <div className="area-like">
        <button
          className={curtiu ? "btn-like ativo" : "btn-like"}
          onClick={curtirNoticia}
        >
          ❤️ Curtir {curtidas}
        </button>
      </div>

      <div className="comentarios">
        <h3>Comentários</h3>

        <textarea
          placeholder="Escreva seu comentário..."
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />

        <button onClick={enviarComentario}>Enviar comentário</button>

        <div className="lista-comentarios">
          {comentarios.length === 0 ? (
            <p>Nenhum comentário ainda.</p>
          ) : (
            comentarios.map((c, index) => (
              <div key={index} className="comentario-item">
                {c}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

