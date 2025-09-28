// src/components/common/ThemeToggle.js
"use client";

import React from 'react';
import useDarkMode from '@/hooks/useDarkMode';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();
  console.log('Current theme:', theme); // Para depuración
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
      aria-label="Alternar modo oscuro/claro"
    >
      {/* Icono de Sol (Modo Claro) */}
      {theme === 'dark' ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      ) : (
        // Icono de Luna (Modo Oscuro)
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      )}
    </button>
  );
};

export default ThemeToggle;