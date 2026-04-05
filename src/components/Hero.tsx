import React from 'react';
import { motion } from 'motion/react';
import { DR_INFO } from '../constants';
import { Shield, Award, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Shield size={16} />
            PMDC Verified Specialist
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Restoring Your <span className="text-blue-500">Mobility</span>, <br />
            Relieving Your <span className="text-blue-500">Pain</span>.
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
            {DR_INFO.title} specializing in advanced joint replacement, sports injuries, and complex trauma care in Karachi.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
              Book Appointment
            </button>
            <a 
              href="#symptom-checker"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              AI Symptom Checker
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white/80">
              <Award className="text-blue-500" />
              <span className="text-sm font-medium">FCPS Orthopedics</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <CheckCircle2 className="text-blue-500" />
              <span className="text-sm font-medium">15+ Years Exp.</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="text-blue-500" />
              <span className="text-sm font-medium">AKUH & South City</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Trust Card */}
          <div className="absolute -left-12 top-1/4 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[240px] animate-bounce-slow">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
            <p className="text-sm text-slate-600">In joint replacement and complex orthopedic surgeries.</p>
          </div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Junaid Sawer Arain"
              className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
