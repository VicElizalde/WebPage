import React from 'react';
import { User, Users, Briefcase, Brain, HouseHeart, TreePine } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "Psicoterapia individual",
      description: "Espacio personal para explorar tu historia, tus emociones y aquello que hoy genera malestar.",
      items: [
        "Ansiedad y depresión",
        "Trauma y duelos",
        "Autoestima",
        "Estrés y angustia"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Terapia de pareja",
      description: "Acompañamiento para comprender los vínculos, los conflictos y las formas de comunicación en la pareja.",
      items: [
        "Comunicación",
        "Conflictos de pareja",
        "Intimidad y deseo",
        "Crisis vinculares"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Orientación profesional",
      description: "Espacio para elaborar cambios laborales, estrés profesional y decisiones importantes de vida.",
      items: [
        "Decisiones laborales",
        "Estrés en el trabajo",
        "Equilibrio personal",
        "Desgaste emocional"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Psicoanálisis",
      description: "Espacio de escucha para trabajar el malestar, los síntomas y las preguntas que insisten en tu vida.",
      items: [
        "Síntomas y angustia",
        "Conflictos internos",
        "Historia personal",
        "Procesos de cambio"
      ]
    },
    {
      icon: <HouseHeart className="w-6 h-6 text-primary" />,
      title: "Orientación familiar",
      description: "Acompañamiento para comprender dinámicas familiares, vínculos y patrones que se repiten.",
      items: [
        "Relación padres e hijos",
        "Conflictos familiares",
        "Comunicación familiar",
        "Patrones generacionales"
      ]
    },
    {
      icon: <TreePine className="w-6 h-6 text-primary" />,
      title: "Bienestar emocional",
      description: "Trabajo clínico orientado a reconocer emociones, elaborar experiencias y encontrar nuevas formas de estar.",
      items: [
        "Regulación emocional",
        "Estrés y ansiedad",
        "Cuerpo y emociones",
        "Recursos internos"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[31.75px] font-bold text-dark mb-4 tracking-tight">
            Servicios terapéuticos
          </h2>
          <p className="text-body text-[15.75px] leading-relaxed">
            Un espacio de escucha profesional para acompañar procesos personales, vinculares y emocionales desde una orientación psicoanalítica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-[#eaf4f3] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#d5ebe8]">
                {service.icon}
              </div>

              <h3 className="text-[17.5px] font-semibold text-dark mb-2.5">
                {service.title}
              </h3>

              <p className="text-body text-[14px] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* List Items */}
              <ul className="w-full space-y-2 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-left gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-body text-[12.25px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-body text-[14px] mb-1">
            ¿No sabes qué servicio es adecuado para ti?
          </p>
          <a
            href="#booking"
            className="text-primary text-[12.25px] underline hover:text-primary-hover transition-colors"
          >
            Agenda una consulta para conversar sobre tu situación.
          </a>
        </div>

      </div>
    </section>
  );
}
