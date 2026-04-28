import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, Clock, ChevronDown } from 'lucide-react';

export default function Booking() {
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
    window.alert('Your form has been submitted successfully!');
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
            Schedule Your Appointment
          </h2>
          <p className="text-body text-[15.75px] leading-relaxed">
            Take the first step towards better mental health.<br />
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto bg-white rounded-xl p-5 md:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" style={{ width: '100%', maxWidth: '586px', height: '567.5px' }}>
          <div className="text-center mb-4">
            <h3 className="flex items-center justify-center gap-2 text-dark font-medium text-[14px] mb-0.5">
              <Calendar className="w-4 h-4 text-black" />
              Book Your Consultation
            </h3>
            <p className="text-body text-[14px]">
              All information is kept strictly confidential
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col h-[calc(100%-60px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  <User className="w-3.5 h-3.5 text-black" />
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  placeholder="Enter your full name" 
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
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="your.email@example.com" 
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
                  Phone Number *
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
                  Service Type
                </label>
                <div className="relative">
                  <select 
                    id="serviceType" 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled className="text-gray-400">Select a service</option>
                    <option value="Initial consultation">Initial consultation</option>
                    <option value="Individual therapy">Individual therapy</option>
                    <option value="Couples therapy">Couples therapy</option>
                    <option value="Family Counseling">Family Counseling</option>
                    <option value="Career guidance">Career guidance</option>
                    <option value="Cognitive behavioral therapy">Cognitive behavioral therapy</option>
                    <option value="Mindfulness & wellness">Mindfulness & wellness</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className={labelClasses}>
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  Preferred Date
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
                  Preferred Time
                </label>
                <div className="relative">
                  <select 
                    id="preferredTime" 
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled className="text-gray-400">Select time</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div className="flex-1 flex flex-col mb-3">
              <label htmlFor="reason" className="block text-dark font-medium text-[12.5px] mb-1">
                Reason for Visit *
              </label>
              <textarea 
                id="reason" 
                name="reason"
                placeholder="Please briefly describe what you'd like help with..." 
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
              Send Booking Request
            </button>

            <p className="text-center text-body text-[11px] mt-3">
              By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours to confirm your appointment.
            </p>
          </form>

        </div>

        {/* Contact Info Outside Form */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-body text-[14px]">
            Prefer to call? We're here to help.
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
    </section>
  );
}
