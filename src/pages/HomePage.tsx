import React from 'react';
import Hero from '../components/sections/Hero';
import BrandStory from '../components/sections/BrandStory';
import ArchitectProfile from '../components/sections/ArchitectProfile';
import Testimonials from '../components/sections/Testimonials';

export default function HomePage() {
  const handleNavigate = (hash: string) => {
    // For same-page anchors on home, scroll to them
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onNavigate={handleNavigate} />
      <BrandStory />
      <ArchitectProfile />
      <Testimonials />
    </>
  );
}
