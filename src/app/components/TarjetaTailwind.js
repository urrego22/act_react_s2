export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      <img src={imagen} alt={titulo} className="rounded-lg mb-3" />
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p className="text-gray-600 mb-2">{descripcion}</p>
      <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded">
        {etiqueta}
      </span>
    </div>
  );
}
