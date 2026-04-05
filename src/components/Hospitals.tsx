import React from 'react';
import { DR_INFO } from '../constants';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Hospitals() {
  return (
    <section id="hospitals" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Clinic Locations & Timings</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dr. Junaid is affiliated with Karachi's premier healthcare institutions, ensuring high-quality care and advanced facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {DR_INFO.hospitals.map((hospital) => (
            <div 
              key={hospital.name}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <MapPin size={32} />
                </div>
                <a 
                  href="#" 
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                >
                  View Map <ExternalLink size={14} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {hospital.name}
              </h3>
              <p className="text-slate-400 mb-6 flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                {hospital.location}
              </p>

              <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Consultation Hours</div>
                  <div className="text-sm font-medium">{hospital.timings}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
