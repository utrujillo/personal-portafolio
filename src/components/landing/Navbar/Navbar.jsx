'use client';
import ThemeToggle from '@/components/common/Theme/ThemeToggle';
import React, { useState } from 'react';
import Link from 'next/link'; // Usamos Link de Next.js para una navegación fluida

const navLinks = [
  { name: 'Acerca de Mí', href: '#acerca-de' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Portafolio', href: '/proyectos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Nombre Senior */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition duration-300">
              {/* Aquí puede ir un logo o su inicial/nombre */}
              UT.<span className='text-gray-500 text-base font-normal ml-1'>DEV SENIOR</span>
            </Link>
          </div>

          {/* Enlaces de Navegación (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition duration-300"
                  // Nota: Para scroll suave a ID, Next.js recomienda usar el prop `scroll={false}` si no es la página actual.
                >
                  {link.name}
                </Link>
              ))}
              
              {/* CTA Destacado */}
              <Link
                href="#contacto"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 ml-4 transition duration-300 shadow-md"
              >
                Contratar
              </Link>
              <ThemeToggle />
            </div>

          </div>

          {/* Botón de Menú (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de hamburguesa */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable (Mobile) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-semibold text-center hover:bg-indigo-700 mt-2 transition duration-300"
            >
              Contratar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;