
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecommendationSection from '@/components/RecommendationSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <RecommendationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
