import React from 'react';
import { DR_INFO } from '../constants';
import { Bone, Activity, Zap, Scissors, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = [Bone, Activity, Zap, Scissors, HeartPulse];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Expert Orthopedic Care</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dr. Junaid Sawer Arain provides comprehensive surgical and non-surgical treatments for all musculoskeletal conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DR_INFO.specialties.map((spec, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={spec}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-600/10 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{spec}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Advanced treatment options using the latest surgical techniques and minimally invasive procedures for faster recovery.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
