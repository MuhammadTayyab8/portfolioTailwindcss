import React from 'react';
import Image from 'next/image';
import Section from '../../public/about.webp';

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-24 px-6 md:py-24 md:px-10">
      <div className="md:w-1/2 px-0 md:pl-10 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Muhammad Tayyab</h1>
        <h4 className="text-xl md:text-2xl font-medium mb-4">Student At GIAIC</h4>
        <p className="text-justify mb-6 md:pr-8">
          I am a Frontend Web Developer with strong expertise in HTML, CSS, Next.js, and TypeScript, committed to crafting responsive websites that deliver exceptional user experiences. With a keen eye for design and a solid foundation in UI/UX principles, I strive to create intuitive and visually appealing interfaces. My approach blends thoughtful user research with innovative design to ensure that every project I undertake not only meets the functional needs of the users but also delights them. Whether building for myself or for clients, my focus remains on delivering top-tier, user-centered design solutions.
        </p>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src={Section}
          alt="about-image"
          className="w-full h-auto max-w-[680px] object-cover"
        />
      </div>
    </div>
  );
};
