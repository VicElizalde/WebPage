import React from 'react';

export default function Hero() {
  return (
    <section className="bg-bg-light min-h-[100dvh] pt-32 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
            <span className="block lg:whitespace-nowrap">Caring for your mind,</span>
            <span className="text-primary block lg:whitespace-nowrap">transforming your life</span>
          </h1>
          
          <p className="text-body text-base lg:text-lg leading-relaxed max-w-xl">
            Professional, compassionate psychological support to help you navigate life's challenges and discover your inner strength.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#booking" className="bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-xl font-medium text-[12.25px] transition-colors shadow-sm text-center">
              Schedule Consultation
            </a>
            <a href="#about" className="border border-primary text-primary hover:bg-primary/5 px-7 py-3 rounded-xl font-medium text-[12.25px] transition-colors text-center">
              Learn More
            </a>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
          {/* Image Container */}
          <div className="relative w-full aspect-square max-w-[400px]">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full z-0" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full z-0" />
            
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Professional female psychologist smiling" 
              className="w-full h-full object-cover rounded-3xl shadow-xl relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
