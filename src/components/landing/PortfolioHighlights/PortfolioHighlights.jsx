// src/components/PortfolioHighlights/PortfolioHighlights.js

import React from 'react'
import Link from 'next/link';

// Datos de ejemplo para 4 proyectos destacados
const projects = [
  {
    title: "Plataforma de Trading Global",
    description: "Arquitectura de microservicios utilizando FastAPI y Vue para procesar más de 10,000 transacciones por minuto.",
    stack: "FastAPI, Vue, PostgreSQL, Docker",
    image: "/projects/trading_platform.jpg", // Asegúrate de tener estas imágenes en /public/projects/
    link: "/proyectos/trading-global", // Enlace al caso de estudio detallado
  },
  {
    title: "App Móvil de Gestión de Inventario",
    description: "Aplicación B2B desarrollada en React Native, reduciendo el tiempo de auditoría de inventario en almacenes en un 60%.",
    stack: "React Native, Rails, Redux",
    image: "/projects/inventory_app.jpg",
    link: "/proyectos/gestion-inventario",
  },
  {
    title: "Sistema CRM/ERP Personalizado",
    description: "Desarrollo Full-Stack con PHP/Laravel y React para automatizar procesos internos y centralizar datos de clientes.",
    stack: "PHP/Laravel, React, MySQL",
    image: "/projects/crm_erp.jpg",
    link: "/proyectos/crm-personalizado",
  },
  {
    title: "MVP de Streaming Interactivo",
    description: "Lanzamiento rápido (3 meses) de un MVP usando Flutter, validando la demanda en los mercados de iOS y Android.",
    stack: "Flutter, Firebase, Node.js",
    image: "/projects/streaming_mvp.jpg",
    link: "/proyectos/streaming-interactivo",
  },
];

const PortfolioHighlights = () => {
  return (
    // Sección con ID para navegación y fondo blanco (asumiendo que viene después de TechStack, que es gris)
    <div id="portafolio" className="container mx-auto px-6 py-20 md:py-32 bg-white">
      
      {/* Encabezado y CTA principal */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Proyectos Destacados (Casos de Éxito)
        </h2>
        <p className="text-xl text-gray-600">
          Una muestra del impacto y la diversidad técnica lograda en mi carrera.
        </p>
      </div>

      {/* Cuadrícula de Proyectos (Responsiva: 1, 2 o 4 columnas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      {/* CTA Final para ir a la página detallada */}
      <div className="text-center mt-12">
        <Link 
          href="/proyectos" 
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 text-lg"
        >
          Ver Todos los Casos de Estudio y Detalles Técnicos →
        </Link>
      </div>
      
    </div>
  );
};

// Componente Card para cada Proyecto
const ProjectCard = ({ project }) => (
  // Usamos un Link para hacer toda la tarjeta clickeable
  <Link href={project.link} className="block group">
    <div className="bg-gray-50 rounded-xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
      
      {/* Imagen del Proyecto (Placeholder simple sin next/image para brevedad, pero recomendado usarlo) */}
      <div className="relative h-40 bg-gray-200 overflow-hidden">
        {/* Usar una imagen simple para un placeholder */}
        <img 
          src={project.image} 
          alt={`Captura del proyecto ${project.title}`} 
          className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
        
        {/* Stack Técnico - Etiquetas */}
        <div className="flex flex-wrap gap-1">
          {project.stack.split(', ').map((tech, i) => (
            <span key={i} className="text-xs font-medium px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

export default PortfolioHighlights;