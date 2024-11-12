'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [toggleMenu, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!toggleMenu);
  };

  return (
    <nav className="fixed flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-400 pt-3 pb-3 px-12 w-full z-50">
      <div className="text-white font-bold text-2xl">
        <Link href="/">Portfolio</Link>
      </div>
      <div className="flex flex-col justify-between cursor-pointer w-7 h-5 sm:hidden" onClick={handleMenuToggle}>
        <span className="block w-full h-0.5 bg-white rounded"></span>
        <span className="block w-full h-0.5 bg-white rounded"></span>
        <span className="block w-full h-0.5 bg-white rounded"></span>
      </div>
      <ul className={`flex gap-5 list-none m-0 transition-transform duration-300 sm:flex ${toggleMenu ? 'flex flex-col absolute top-14 left-0 w-full bg-gray-800 py-4 z-20' : 'hidden sm:flex'}`}>
        <li className="text-center">
          <Link href="/" className="block text-white text-lg p-2 transition duration-300 hover:text-black">Home</Link>
        </li>
        <li className="text-center">
          <Link href="/about" className="block text-white text-lg p-2 transition duration-300 hover:text-black">About</Link>
        </li>
        <li className="text-center">
          <Link href="/project" className="block text-white text-lg p-2 transition duration-300 hover:text-black">Projects</Link>
        </li>
        <li className="text-center">
          <Link href="/contact" className="block text-white text-lg p-2 transition duration-300 hover:text-black">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
