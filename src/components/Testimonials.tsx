import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "El proceso terapéutico me ayudó a entender mi desgaste laboral, poner límites y recuperar claridad en mis decisiones.",
    author: "Paciente anónimo",
    location: "Lago esmeralda, Atizapán de Zaragoza"
  },
  {
    text: "Encontré un espacio de escucha donde pude hablar sin juicio y comenzar a elaborar aquello que me causaba malestar.",
    author: "Paciente anónimo",
    location: "Fuentes de Satélite, Cdad. López Mateos"
  },
  {
    text: "El proceso con Rosaura me ayudó a comprender mi historia, mis vínculos y mi angustia con mayor claridad.",
    author: "Paciente anónimo",
    location: "Lomas Verdes, Naucalpan de Juárez"
  },
  {
    text: "Llegué por una relación con rasgos narcisistas. Rosaura me ayudó a entender la dinámica y a recuperar mi lugar.",
    author: "Paciente anónimo",
    location: "Bosque Esmeralda, Cdad. López Mateos"
  },
  {
    text: "La consulta me ayudó a comprender mi ansiedad desde otra perspectiva y a iniciar un proceso de cambio más profundo.",
    author: "Paciente anónimo",
    location: "La Cuspide, Naucalpan de Juárez"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[31.75px] font-bold text-dark mb-4 tracking-tight">
            Lo que dicen los pacientes
          </h2>
          <p className="text-body text-[15.75px] leading-relaxed">
            Experiencias de personas que han iniciado un proceso de escucha, elaboración y cambio.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative px-0 md:px-6">
          <div className="bg-[#fcfdfd] border border-primary/20 rounded-2xl p-6 md:p-8 relative overflow-hidden text-center h-[320px] md:h-[240px] flex flex-col justify-center shadow-sm transition-all duration-500">
            {/* Left green bar */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-primary"></div>
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-4 mt-2">
              <Quote className="w-8 h-8 text-primary/40 rotate-180" strokeWidth={1.5} />
            </div>
            
            {/* Text */}
            <p className="text-dark text-[17.5px] font-normal leading-relaxed mb-6 max-w-[85%] md:max-w-3xl px-8 mx-auto transition-opacity duration-300">
              "{testimonials[currentIndex].text}"
            </p>
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4 mt-auto">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" />
              ))}
            </div>
            
            {/* Author */}
            <div className="mb-0 md:mb-2 text-center relative z-0">
              <p className="font-normal italic text-[14px] text-dark mb-0.5">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-500 text-[12.5px] italic">
                {testimonials[currentIndex].location}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 mt-20 text-center">
          <div>
            <h4 className="text-[21px] font-bold text-primary mb-2">500+</h4>
            <p className="text-body text-[14px]">Pacientes atendidos</p>
          </div>
          <div>
            <h4 className="text-[21px] font-bold text-primary mb-2">12+</h4>
            <p className="text-body text-[14px]">Años de experiencia</p>
          </div>
          <div>
            <h4 className="text-[19px] font-bold text-primary mb-2">Atención</h4>
            <p className="text-body text-[14px]"> Ética y confidencial</p>
          </div>
        </div>

      </div>
    </section>
  );
}
