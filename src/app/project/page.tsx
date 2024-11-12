import React from 'react'
import portfolio from '../../../public/portfolio.png'
import website from '../../../public/WhatsApp Image 2024-11-10 at 5.36.33 PM (1).jpeg'
import app from '../../../public/WhatsApp Image 2024-11-10 at 5.36.33 PM.jpeg'
import comming from '../../../public/Screenshot 2024-11-10 180740.png'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <div className="py-28 px-6 sm:px-24">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 mb-2">Here Is Some Of My Portfolio Items</p>

      {/* Flex container for portfolio items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start justify-center">
        
        {/* Portfolio Item 1 */}
        <div className="w-full">
          <Image src={portfolio} alt="portfolio" className="w-full h-[280px] mt-5 object-cover" />
          <div className="py-4">
            <h2 className="text-xl font-semibold">Resume Builder</h2>
            <p>This resume builder is built on HTML, CSS, and Typescript</p>
            <button className="mt-2 bg-gradient-to-r from-pink-400 to-purple-600 text-white py-2 px-5 rounded-lg transition-all duration-300 hover:text-black hover:border-black">
              <Link href="https://dynamic-resume-builder-ashy-five.vercel.app/">Check Here</Link>
            </button>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="w-full">
          <Image src={website} alt="website" className="w-full h-[280px] mt-5 object-cover" />
          <div className="py-4">
            <h2 className="text-xl font-semibold">Explore Ease Website</h2>
            <p>Developed version will be live soon stay connected!</p>
            <button className="mt-2 bg-gradient-to-r from-pink-400 to-purple-600 text-white py-2 px-5 rounded-lg transition-all duration-300 hover:text-black hover:border-black">
              <Link href="https://www.behance.net/gallery/211311359/Travel-Website-UI-design">Check Here</Link>
            </button>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="w-full">
          <Image src={app} alt="app" className="w-full h-[280px] mt-5 object-cover" />
          <div className="py-4">
            <h2 className="text-xl font-semibold">Explore Ease App</h2>
            <p>Explore Ease App UI design in Figma</p>
            <button className="mt-2 bg-gradient-to-r from-pink-400 to-purple-600 text-white py-2 px-5 rounded-lg transition-all duration-300 hover:text-black hover:border-black">
              <Link href="https://www.behance.net/gallery/211296313/Travel-Mobile-App-UI-design">Check Here</Link>
            </button>
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className="w-full">
          <Image src={comming} alt="coming soon" className="w-full h-[280px] mt-5 object-cover" />
          <div className="py-4">
            <h2 className="text-xl font-semibold">Raw Juice Website</h2>
            <p>Stay Connected!</p>
            <button className="mt-2 bg-gradient-to-r from-pink-400 to-purple-600 text-white py-2 px-5 rounded-lg transition-all duration-300 hover:text-black hover:border-black">
              Coming...
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
