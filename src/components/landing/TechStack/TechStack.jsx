// src/components/TechStackMinimalist.js

const technologyGroups = [
  {
    title: "🌐 Front-End Web",
    description: "Creación de interfaces robustas y experiencias de usuario de alto rendimiento.",
    techs: ['React', 'Vue', 'Angular', 'PHP (Blade)'],
  },
  {
    title: "⚙️ Back-End & API",
    description: "Diseño y construcción de APIs escalables y lógica de negocio compleja.",
    techs: ['Rails (Ruby)', 'FastAPI (Python)', 'PHP (Laravel)'],
  },
  {
    title: "📱 Desarrollo Móvil",
    description: "Entrega de aplicaciones multiplataforma con rendimiento casi nativo para iOS y Android.",
    techs: ['React Native', 'Flutter'],
  },
  {
    title: "💾 Datos & Infraestructura",
    description: "Gestión de bases de datos, contenedorización y cimientos para la arquitectura cloud.",
    techs: ['PostgreSQL', 'Docker', 'AWS (Fundamentos)', 'Git/GitLab'],
  },
];

const TechStack = () => {
  return (
    <div id="habilidades" className="container mx-auto px-6 py-20 md:py-32 bg-white">
      
      {/* Encabezado Minimalista */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
          Dominio Tecnológico
        </h2>
        <p className="text-xl text-gray-600">
          Versatilidad probada a través de más de 10 años, categorizando las herramientas con las que construyo.
        </p>
      </div>

      {/* Matriz de Grupos Tecnológicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologyGroups.map((group, index) => (
          <div 
            key={index} 
            className="p-6 border-b-4 border-indigo-500 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            
            {/* Título del Grupo */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 border-b pb-2">
              {group.title}
            </h3>
            
            {/* Descripción (opcional, pero añade contexto senior) */}
            <p className="text-sm text-gray-600 mb-4">{group.description}</p>
            
            {/* Etiquetas de las Tecnologías */}
            <div className="flex flex-wrap gap-2 pt-2">
              {group.techs.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  // Estilo minimalista: Etiqueta gris claro, borde índigo sutil
                  className={`px-3 py-1 text-sm font-medium text-gray-800 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 transition duration-200`}
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TechStack;