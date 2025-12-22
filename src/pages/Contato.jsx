import "../styles/contato.css";
export default function Contato() {
  return (
    <div className="contato-container">
      <div className="contato-box">
        <h2>Entre em Contato</h2>
        
        <p>📧 Email: contato@mundonoticias.com</p>
        <p>📞 Telefone: (83) 99999-9999</p>
        <p>📍 Localização: João Pessoa - PB</p>

        <div className="contato-redes">
          <button>Instagram</button>
          <button>Facebook</button>
          <button>WhatsApp</button>
        </div>
      </div>
    </div>
  );
}
