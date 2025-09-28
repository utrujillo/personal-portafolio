// src/components/About.js

const About = () => {
  return (
    // Sección limpia con fondo blanco y padding generoso
    <div id="acerca-de" className="container mx-auto px-6 py-20 md:py-32">
      
      {/* Título de la Sección */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
        Más de Una Década Creando Valor Digital
      </h2>
      
      {/* Contenedor Principal con Diseño a Dos Columnas (Desktop) */}
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        {/* Columna 1: Narrativa y Filosofía (md:col-span-7) */}
        <div className="md:col-span-7 space-y-6 text-lg text-gray-700 leading-relaxed">
          
          <p>
            Soy **Arquitecto de Software y Desarrollador Full-Stack Senior** con **más de 10 años** de experiencia liderando y ejecutando el ciclo completo de vida del producto, desde la conceptualización hasta el despliegue escalable. Mi enfoque se centra en la **arquitectura robusta, el código limpio** y las **metodologías ágiles** para garantizar la entrega de proyectos de alto impacto.
          </p>
          
          <p className="border-l-4 border-indigo-600 pl-4 py-2 italic text-gray-800 bg-indigo-50/50">
            "Mi valor principal reside en la **versatilidad**. Al dominar ecosistemas Web (React, Rails, FastAPI) y Móvil (Flutter, React Native), puedo ofrecer una **visión holística** para construir soluciones unificadas y optimizadas, eliminando silos tecnológicos."
          </p>
          
          <p>
            A lo largo de mi carrera, he trabajado en diversos entornos, desde **startups de rápido crecimiento** hasta la optimización de sistemas legados para grandes empresas. Siempre busco aplicar las tecnologías más adecuadas—no las más nuevas—para resolver problemas de negocio de manera eficiente y sostenible.
          </p>
          
          {/* CTA para ir directamente al CV o LinkedIn */}
          <div className="pt-4">
            <a 
              href="/cv.pdf" 
              download 
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
            >
              Descargar CV Completo (PDF)
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </a>
          </div>

        </div>

        {/* Columna 2: Logros Clave (Destacados) (md:col-span-5) */}
        <div className="md:col-span-5 bg-indigo-50 p-8 rounded-xl shadow-lg border border-indigo-200">
          <h3 className="text-2xl font-bold mb-6 text-indigo-700">Logros Destacados</h3>
          <ul className="space-y-4">
            <ListItem icon="💡">Lideré la migración de un monolito PHP a una arquitectura de **Microservicios con FastAPI y React**, mejorando el rendimiento en un 40%.</ListItem>
            <ListItem icon="🚀">Lancé **3+ aplicaciones móviles multiplataforma** (Flutter/React Native) desde cero, alcanzando más de 50K descargas combinadas.</ListItem>
            <ListItem icon="⚖️">Responsable de la **planificación de arquitectura cloud (AWS)**, optimizando costos de infraestructura en un 20% anual.</ListItem>
            <ListItem icon="🛠️">Mentor y formador de equipos de desarrollo junior y mid-level, enfocando en la calidad del código y prácticas de **DevOps**.</ListItem>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

// Componente helper para la lista de logros (por limpieza)
const ListItem = ({ icon, children }) => (
  <li className="flex items-start">
    <span className="text-2xl mr-3 leading-none">{icon}</span>
    <p className="text-gray-700 text-base font-medium">{children}</p>
  </li>
);

export default About;