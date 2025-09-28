// src/components/Footer.js

import React from 'react';

const Footer = () => {
  // Obtenemos el año actual
  const currentYear = new Date().getFullYear();

  return (
    // Contenedor principal: Fondo oscuro para contraste, padding simple.
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        
        {/* Enlaces de Redes Sociales (Opcional, pero recomendado para un senior) */}
        <div className="flex justify-center space-x-6 mb-3">
          {/* Ejemplo de enlaces (puedes añadir iconos de LinkedIn, GitHub, etc.) */}
          <a 
            href="https://linkedin.com/in/uzieltrujillo" // Reemplaza con tu perfil real
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/uzieltrujillo" // Reemplaza con tu perfil real
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm"
          >
            GitHub
          </a>
        </div>

        {/* Información de Copyright y Símbolo */}
        <p className="text-sm text-gray-400 font-light">
          Creado con {" "}
          <span role="img" aria-label="Corazón" className="text-red-500 text-base">
            ❤️
          </span>
          {" "} por Uziel Trujillo Colón &copy; {currentYear}
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;