import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bg-light/80 backdrop-blur-md border-b border-primary/20 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          aria-label="Ir al inicio"
          className="group flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-[15.75px] transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md">
            RG
          </div>

          <span className="text-dark font-semibold text-[15.75px] tracking-tight transition-colors duration-300 group-hover:text-primary">
            Psicoanalista
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-dark font-medium hover:text-primary transition-colors">
            Acerca
          </a>
          <a href="#services" className="text-dark font-medium hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#booking" className="text-dark font-medium hover:text-primary transition-colors">
            Citas
          </a>
          <a href="#contact" className="text-dark font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-xl font-medium text-[12.25px] transition-colors shadow-sm">
            Reservar cita
          </button>
        </div>

        {/* Mobile Menu Button - Placeholder */}
        <button className="md:hidden p-2 text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}