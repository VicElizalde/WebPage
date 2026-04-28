import React from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f0f5f4] pt-20 pb-8 px-6 text-slate-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3 text-[#1f2937]">
              <div className="w-10 h-10 rounded-full bg-[#4e9c96] text-white flex items-center justify-center font-bold text-lg">
                M
              </div>
              <span className="font-semibold text-[15.75px]">MindCare</span>
            </div>
            <p className="text-[14px] leading-relaxed">
              Professional psychological services focused on your mental health and wellbeing.
            </p>
            <div className="text-[12.25px] space-y-1 pt-2">
              <p>Licensed in California</p>
              <p>License #PSY12345</p>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-medium text-[#1f2937] text-[14px]">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4e9c96] mt-0.5 shrink-0" />
                <div className="text-[12.5px] leading-relaxed">
                  <p>123 Wellness Street</p>
                  <p>Suite 200</p>
                  <p>San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4e9c96] shrink-0" />
                <p className="text-[12.5px]">(415) 555-1234</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#4e9c96] shrink-0" />
                <p className="text-[12.5px]">hello@mindcaretherapy.com</p>
              </div>
            </div>
          </div>

          {/* Column 3: Office Hours */}
          <div className="flex flex-col space-y-6">
            <h4 className="flex items-center gap-2 font-medium text-[#1f2937] text-[14px]">
              <Clock className="w-5 h-5 text-[#4e9c96]" />
              Office Hours
            </h4>
            <div className="space-y-3 text-[12.5px]">
              <div className="flex justify-between items-center">
                <span>Monday - Thursday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-[12.5px] pt-4">
              Emergency support available 24/7
            </p>
          </div>

          {/* Column 4: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-medium text-[#1f2937] text-[14px]">Quick Links</h4>
            <div className="flex flex-col space-y-3 text-[12.5px]">
              <a href="#about" className="hover:text-[#4e9c96] transition-colors">About Dr. Mitchell</a>
              <a href="#services" className="hover:text-[#4e9c96] transition-colors">Our Services</a>
              <a href="#booking" className="hover:text-[#4e9c96] transition-colors">Book Appointment</a>
              <a href="#" className="hover:text-[#4e9c96] transition-colors">Privacy Policy</a>
            </div>
            
            <div className="border-t border-gray-200/60 pt-6 mt-4">
              <h5 className="text-[#e11d48] font-medium text-[14px] mb-2">Crisis Support</h5>
              <p className="text-[12.5px] mb-3">
                If you're experiencing a mental health emergency:
              </p>
              <div className="text-[12.5px] space-y-1">
                <p>Call 988 (Suicide & Crisis Lifeline)</p>
                <p>Or dial 911</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200/60 gap-4">
          <p className="text-[13.5px]">
            © 2024 MindCare Psychology Practice. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[13.5px]">Follow us:</span>
            <a href="#" className="text-gray-500 hover:text-[#4e9c96] transition-colors">
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#4e9c96] transition-colors">
              <Twitter className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
