import React from 'react';
import { GraduationCap, Users, Heart } from 'lucide-react';
import aboutImage from '../images/about_image.png';

export default function About() {
  const specializations = [
    "Ansiedad y depresión",
    "Vínculos y pareja",
    "Trauma",
    "Cambios vitales",
    "Malestar emocional",
    "Orientación familiar"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[31.75px] font-bold text-dark mb-4 tracking-tight">
            Sobre Rosaura González
          </h2>
          <p className="text-body text-[15.75px] leading-relaxed">
            Dedicada a ofrecer un espacio de escucha profesional para acompañar procesos de cambio y elaboración personal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="flex justify-start relative">
            <div className="relative left-16">
              <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-2xl relative z-10 flex items-center justify-center bg-gray-100">
                <img 
                  src={aboutImage}
                  alt="Dr. Sarah Mitchell" 
                  className="w-full h-full object-cover object-[center_0%] rounded-full"
                />
              </div>
              
              {/* Decorative Circle/Badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 w-14 h-14 md:w-16 md:h-16 bg-[#eaf4f3] rounded-full flex items-center justify-center shadow-md z-20 border-4 border-white">
                <Heart className="text-primary w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
              </div>
              
              {/* Background accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[340px] md:h-[340px] bg-primary/5 rounded-full z-0 blur-2xl"></div>
            </div>
          </div>

          {/* Cards & Specializations Column */}
          <div className="flex flex-col gap-5">
            
            {/* Card 1 */}
            <div className="bg-[#fcfdfd] border border-primary/20 rounded-2xl p-5 flex items-start gap-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-2xl"></div>
              <div className="text-primary shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-dark text-[14px] mb-2">Formación académica</h3>
                <p className="text-body text-sm leading-relaxed">
                  Maestría en Psicoanálisis. Psicóloga con experiencia en acompañamiento clínico y procesos terapéuticos desde una orientación psicoanalítica.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fcfdfd] border border-primary/20 rounded-2xl p-5 flex items-start gap-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-2xl"></div>
              <div className="text-primary shrink-0 mt-0.5">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-dark text-[14px] mb-2">Enfoque terapéutico</h3>
                <p className="text-body text-sm leading-relaxed">
                  Mi trabajo se orienta a construir un espacio de escucha, confidencial y sin juicio, donde cada persona pueda explorar su historia, sus vínculos y aquello que le causa malestar.
                </p>
              </div>
            </div>

            {/* Specializations */}
            <div className="mt-2">
              <h3 className="font-semibold text-dark text-[14px] mb-3">Áreas de atención</h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-[#eaf4f3] text-dark font-medium text-[10.5px] rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
