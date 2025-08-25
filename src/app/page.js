import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Actividad de Estilizado en Next.js</h1>

      {/* CSS Global */}
      <h2 className="text-2xl font-semibold mb-2">1. CSS Global</h2>
      <TarjetaGlobal titulo="Global Card" contenido="Este componente usa estilos globales." color="blue" />

      {/* CSS Modules */}
      <h2 className="text-2xl font-semibold mb-2">2. CSS Modules</h2>
      <TarjetaModulo
        nombre="Tarjeta Primaria"
        descripcion="Estilizada con módulos CSS."
        categoria="Primaria"
        variante="tarjetaPrimaria"
      />
      <TarjetaModulo
        nombre="Tarjeta Secundaria"
        descripcion="Ejemplo con otra variante."
        categoria="Secundaria"
        variante="tarjetaSecundaria"
      />

      {/* Inline Styles */}
      <h2 className="text-2xl font-semibold mb-2">3. Estilos en Línea</h2>
      <TarjetaDinamica
        titulo="Dinamica Activa"
        contenido="Soy una tarjeta con estilos dinámicos."
        colorFondo="#ffe0b2"
        colorTexto="#000"
        ancho="300px"
        activo={true}
      />

      {/* Tailwind CSS */}
      <h2 className="text-2xl font-semibold mb-2">4. Tailwind CSS</h2>
      <TarjetaTailwind
        titulo="Tailwind Card"
        descripcion="Ejemplo moderno con Tailwind CSS."
        imagen="https://via.placeholder.com/200"
        etiqueta="Tailwind"
      />
    </main>
  );
}
