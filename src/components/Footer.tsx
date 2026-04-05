import React from 'react';
import { DR_INFO } from '../constants';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                JA
              </div>
              <div>
                <div className="text-2xl font-bold">{DR_INFO.name}</div>
                <div className="text-sm text-blue-400 font-medium">{DR_INFO.title}</div>
              </div>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              Dedicated to providing world-class orthopedic care in Karachi. Specializing in joint replacements, sports injuries, and advanced trauma surgery.
            </p>
            <div className="flex gap-4">
              <a href={DR_INFO.socials.facebook} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                <Facebook size={20} />
              </a>
              <a href={DR_INFO.socials.instagram} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href={DR_INFO.socials.linkedin} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#specialties" className="hover:text-blue-400 transition-colors">Specialties</a></li>
              <li><a href="#symptom-checker" className="hover:text-blue-400 transition-colors">AI Symptom Checker</a></li>
              <li><a href="#hospitals" className="hover:text-blue-400 transition-colors">Hospitals</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>{DR_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>{DR_INFO.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {DR_INFO.name}. All rights reserved. PMDC: 12345-S</p>
          <p className="mt-2">Designed for Excellence in Orthopedics.</p>
        </div>
      </div>
    </footer>
  );
}
