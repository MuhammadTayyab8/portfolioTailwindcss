'use client'

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex justify-center  items-center h-screen bg-black bg-opacity-70 bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/hero.webp')" }}>
      <div className="relative z-10 max-w-3xl">
        {/* Responsive heading with different font sizes for small and large screens */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">Welcome to My Portfolio</h1>
        {/* Responsive subtitle with smaller font sizes on smaller screens */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-10">Crafting beautiful designs and web experiences</p>
        {/* Button */}
        <Link href="/about" className="text-base sm:text-lg bg-gradient-to-r from-pink-400 to-purple-600 text-white py-3 px-10 rounded-lg transition-all duration-300 hover:text-black hover:border-black">
          Learn More
        </Link>
      </div>
      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
