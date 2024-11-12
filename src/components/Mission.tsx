import React from 'react';
import Image from 'next/image';
import Section from '../../public/about.webp';

export const Mission = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 px-6 md:py-6 md:px-10">
 
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src={Section}
          alt="about-image"
          className="w-full h-auto max-w-[680px] object-cover"
        />
      </div>
      <div className="md:w-1/2 px-0 md:pl-10 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Mission</h1>
        <h4 className="text-xl md:text-2xl font-medium mb-4">Future Goals</h4>
        <p className="text-justify mb-6 md:pr-8">
          After completing the course from GIAIC, my goal is to secure an internship or job where I can apply and enhance my skill set. I am dedicated to continuously learning about AI and its profound impact on the world. I aim to complete all the quarters of the course, pushing myself to achieve the best results and stay at the forefront of AI advancements. With a relentless commitment to growth, I will strive to contribute meaningfully and make a positive impact in the field.
        </p>
      </div>
 
    </div>
  );
};
