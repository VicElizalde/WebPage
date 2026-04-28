import React from 'react';
import { User, Users, Briefcase, Brain, Heart, TreePine } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "Individual Therapy",
      description: "One-on-one sessions focused on your personal growth, healing, and mental wellness.",
      items: [
        "Anxiety & Depression",
        "Trauma Recovery",
        "Self-Esteem Building",
        "Stress Management"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Couples Therapy",
      description: "Strengthen your relationship through improved communication and deeper understanding.",
      items: [
        "Communication Skills",
        "Conflict Resolution",
        "Intimacy Building",
        "Pre-marital Counseling"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Career Guidance",
      description: "Navigate career transitions, workplace stress, and professional development challenges.",
      items: [
        "Career Planning",
        "Work-Life Balance",
        "Leadership Development",
        "Burnout Prevention"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Cognitive Behavioral Therapy",
      description: "Evidence-based approach to changing negative thought patterns and behaviors.",
      items: [
        "Thought Restructuring",
        "Behavioral Activation",
        "Coping Strategies",
        "Relapse Prevention"
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Family Counseling",
      description: "Improve family dynamics and create healthier relationships within your family system.",
      items: [
        "Parent-Child Relations",
        "Sibling Conflicts",
        "Family Communication",
        "Generational Patterns"
      ]
    },
    {
      icon: <TreePine className="w-6 h-6 text-primary" />,
      title: "Mindfulness & Wellness",
      description: "Integrate mindfulness practices and holistic wellness approaches into your healing journey.",
      items: [
        "Meditation Guidance",
        "Stress Reduction",
        "Emotional Regulation",
        "Mind-Body Connection"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[31.75px] font-bold text-dark mb-4 tracking-tight">
            Therapeutic Services
          </h2>
          <p className="text-body text-[15.75px] leading-relaxed">
            Dedicated to providing compassionate, evidence-based therapy to help you 
            achieve lasting positive change.
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
            Not sure which service is right for you?
          </p>
          <a 
            href="#booking" 
            className="text-primary text-[12.25px] underline hover:text-primary-hover transition-colors"
          >
            Schedule a consultation to discuss your needs.
          </a>
        </div>

      </div>
    </section>
  );
}
