import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import SymptomChecker from './components/SymptomChecker';
import Hospitals from './components/Hospitals';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <SymptomChecker />
        <Hospitals />
        <Reviews />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

