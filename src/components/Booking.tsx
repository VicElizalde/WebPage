import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, Clock, ChevronDown, CheckCircle, X } from 'lucide-react';

export default function Booking() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowSuccessModal(true);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      reason: ''
    });
  };

  const todayDate = new Date().toISOString().split('T')[0];
  const inputClasses = "w-full px-2.5 py-1.5 bg-white border border-[#a5d1ce] rounded-lg text-body text-[14px] focus:outline-none focus:ring-1 focus:ring-[#4e9c96] focus:border-[#4e9c96] transition-colors appearance-none";
  const labelClasses = "flex items-center gap-1.5 text-dark font-medium text-[12.5px] mb-1";

  return (
    <section id="booking" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-[31.75px] font-bold text-dark mb-3 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            Agenda tu consulta
          </h2>
          <p className="text-body text-[15.75px] leading-relaxed">
            Inicia un espacio de escucha y acompañamiento.<br />
            Completa el formulario y te responderemos en menos de 24 horas.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto bg-white rounded-xl p-5 md:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" style={{ width: '100%', maxWidth: '586px', height: '567.5px' }}>
          <div className="text-center mb-4">
            <h3 className="flex items-center justify-center gap-2 text-dark font-medium text-[14px] mb-0.5">
              <Calendar className="w-4 h-4 text-black" />
              Reserva tu consulta
            </h3>
            <p className="text-body text-[14px]">
              Toda la información se mantiene bajo estricta confidencialidad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col h-[calc(100%-60px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  <User className="w-3.5 h-3.5 text-black" />
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Ingrese su nombre completo"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  <Mail className="w-3.5 h-3.5 text-black" />
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu.correo@ejemplo.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  <Phone className="w-3.5 h-3.5 text-black" />
                  Número telefónico *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="1234567890"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Phone number must be exactly 10 digits"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className={labelClasses}>
                  Tipo de servicio
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled className="text-gray-400">Selecciona un servicio</option>
                    <option value="Consulta inicial">Consulta inicial</option>
                    <option value="Psicoterapia individual">Psicoterapia individual</option>
                    <option value="Terapia de pareja">Terapia de pareja</option>
                    <option value="Orientación familiar">Orientación familiar</option>
                    <option value="Orientación profesional">Orientación profesional</option>
                    <option value="Psicoanálisis">Psicoanálisis</option>
                    <option value="Bienestar emocional">Bienestar emocional</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className={labelClasses}>
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  Fecha preferida
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  min={todayDate}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ color: formData.preferredDate ? '#4c525f' : '#9ca3af' }} // subtle color change for placeholder feel
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className={labelClasses}>
                  <Clock className="w-3.5 h-3.5 text-black" />
                  Horario Preferido
                </label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled className="text-gray-400">Elije horario</option>
                    <option value="Morning (9 AM - 12 PM)">Mañana (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 5 PM)">Tarde (12 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Noche (5 PM - 8 PM)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div className="flex-1 flex flex-col mb-3">
              <label htmlFor="reason" className="block text-dark font-medium text-[12.5px] mb-1">
                Motivo de consulta *
              </label>
              <textarea
                id="reason"
                name="reason"
                placeholder="Por favor, describa en qué necesita ayuda..."
                required
                value={formData.reason}
                onChange={handleChange}
                className={`${inputClasses} resize-none flex-1`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4e9c96] hover:bg-[#3f847e] text-white py-2.5 rounded-lg font-medium text-[12.5px] transition-colors"
            >
              Enviar solicitud de reserva
            </button>

            <p className="text-center text-body text-[11px] mt-3">
              Al enviar este formulario, acepta nuestra política de privacidad. Nos pondremos en contacto con usted en un plazo de 24 horas para confirmar su cita.
            </p>
          </form>

        </div>

        {/* Contact Info Outside Form */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-body text-[14px]">
            ¿Prefieres llamarnos? Estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#4e9c96] text-[14px] font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>55-37-31-00-05</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@mindcaretherapy.com</span>
            </div>
          </div>
        </div>

      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f4f2]">
              <CheckCircle className="h-9 w-9 text-[#4e9c96]" />
            </div>

            <h3 className="mb-2 text-[22px] font-bold text-dark">
              Solicitud enviada
            </h3>

            <p className="mb-6 text-[15px] leading-relaxed text-body">
              Gracias por contactarnos. Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de 24 horas para confirmar tu cita.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-lg bg-[#4e9c96] px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#3f847e]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
