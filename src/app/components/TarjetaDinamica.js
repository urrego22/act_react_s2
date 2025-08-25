export default function TarjetaDinamica({ titulo, contenido, colorFondo, colorTexto, ancho, activo }) {
  const estilo = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "10px",
    border: activo ? "3px solid green" : "1px solid gray",
    fontWeight: activo ? "bold" : "normal",
  };

  return (
    <div style={estilo}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
