import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollManager } from './components/layout/ScrollManager';
import { Home } from './pages/Home';
import { SharetribeExpert } from './pages/SharetribeExpert';
import { SolutionGuide } from './pages/SolutionGuide';

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen w-full flex-col bg-white font-sans text-brand-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-white">
          
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sharetribe-expert" element={<SharetribeExpert />} />
            <Route
              path="/sharetribe-solutions/quote-and-calendar-booking"
              element={<SolutionGuide />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>);

}