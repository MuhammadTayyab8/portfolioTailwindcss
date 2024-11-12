import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap">

        {/* Left Section: Portfolio */}
        <div className="pages mb-8 md:mb-0">
          <Link href="/">
            <h1 className="text-gradient text-2xl font-bold">Portfolio</h1>
          </Link>
          <h4 className="text-lg mt-2">Muhammad Tayyab</h4>
          <p className="mt-1 text-sm">Student At Giaic</p>
        </div>

        {/* Pages Section */}
        <div className="pages mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mt-2">Pages</h3>
          <p className="mt-2 cursor-pointer">Home</p>
          <p className="mt-2 cursor-pointer">Portfolio</p>
          <p className="mt-2 cursor-pointer">About</p>
          <p className="mt-2 cursor-pointer">Contact</p>
        </div>

        {/* Informations Section */}
        <div className="pages mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mt-2">Informations</h3>
          <p className="mt-2">Linkedin: www.linkedin.com</p>
          <p className="mt-2">Github: www.github.com</p>
          <p className="mt-2">Behance: www.behance.net</p>
        </div>

        {/* Skills Section */}
        <div className="pages mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mt-2">Skills</h3>
          <p className="mt-2">Web Development</p>
          <p className="mt-2">UI/UX Designing</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
