import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Patient Experiences</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from patients who have regained their quality of life through Dr. Junaid's expert care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-200" size={48} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-xs text-slate-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full text-sm font-bold text-slate-600">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
              alt="Google" 
              className="h-4"
              referrerPolicy="no-referrer"
            />
            4.9/5 Rating based on 150+ Google Reviews
          </div>
        </div>
      </div>
    </section>
  );
}
