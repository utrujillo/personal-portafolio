// src/components/Services.js

const servicesData = [
  {
    title: "Arquitectura & Diseño de Sistemas",
    description: "Diseño y planificación de arquitecturas escalables, resilientes y orientadas a microservicios. Consultoría en optimización de rendimiento y selección de la stack tecnológica ideal para su negocio (AWS, GCP).",
    icon: "🏗️",
  },
  {
    title: "Desarrollo Full-Stack & Móvil",
    description: "Implementación completa de aplicaciones web modernas con React/Next.js y APIs robustas (FastAPI/Rails). Creación de apps nativas y multiplataforma con Flutter y React Native.",
    icon: "💻",
  },
  {
    title: "Liderazgo Técnico & Mentoring",
    description: "Asesoramiento a equipos técnicos, implementación de buenas prácticas (DevOps, CI/CD), y mentoring en código limpio y patrones de diseño. Garantía de calidad mediante Code Review avanzado.",
    icon: "🧠",
  },
  {
    title: "Optimización de Rendimiento y Costos",
    description: "Auditoría de rendimiento de aplicaciones existentes. Reducción de latencia y mejora de la experiencia de usuario. Estrategias para reducir el gasto innecesario en infraestructura cloud.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    // Sección con ID para que funcione el Navbar, fondo claro
    <div id="servicios" className="container mx-auto px-6 py-20 md:py-32 bg-white">
      
      {/* Encabezado y Contexto Senior */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-lg font-semibold text-indigo-600 uppercase tracking-wider">
          Enfoque en la Solución
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
          Servicios de Consultoría y Ejecución
        </h2>
        <p className="text-xl text-gray-600">
          Mi experiencia se traduce en la entrega de sistemas robustos y eficientes. Estos son los pilares sobre los que construyo la excelencia digital para mis clientes.
        </p>
      </div>

      {/* Cuadrícula de Servicios (Responsiva) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      
    </div>
  );
};

// Componente Card para cada servicio
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:translate-y-[-4px] border border-gray-100">
    
    <div className="flex justify-center items-center w-12 h-12 rounded-full bg-indigo-100 text-3xl mb-4">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>
    
    <p className="text-gray-600 text-base">
      {description}
    </p>
  </div>
);

export default Services;