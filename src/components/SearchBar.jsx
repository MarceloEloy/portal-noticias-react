export default function SearchBar({ valor, onChange }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Pesquisar notícias..."
        value={valor}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "25px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none"
        }}
      />
    </div>
  );
}

