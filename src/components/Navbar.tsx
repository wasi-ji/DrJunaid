import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MessageSquare } from 'lucide-react';
import { DR_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Symptom Checker', href: '#symptom-checker' },
    { name: 'Hospitals', href: '#hospitals' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            JA
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-tight", isScrolled ? "text-slate-900" : "text-white")}>
              {DR_INFO.name}
            </span>
            <span className={cn("text-xs font-medium opacity-80", isScrolled ? "text-slate-600" : "text-slate-100")}>
              Orthopedic Surgeon
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-slate-600" : "text-slate-100"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${DR_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-medium py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${DR_INFO.whatsapp}`}
            className="bg-green-500 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <MessageSquare size={20} />
            WhatsApp Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
