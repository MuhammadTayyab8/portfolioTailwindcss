import React from 'react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center py-24">
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 tracking-wide">
          Contact Information
        </h1>
        <p className="text-xl text-gray-600 italic mb-8">
          Stay Connected To my Social Media!
        </p>

        <h4 className="text-xl text-gray-800 mb-5">
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/muhammad-tayyab-982a25290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition ease-in-out duration-300"
          >
            View Here
          </Link>
        </h4>

        <h4 className="text-xl text-gray-800 mb-5">
          GitHub:{" "}
          <Link
            href="https://github.com/MuhammadTayyab8"
            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition ease-in-out duration-300"
          >
            View Here
          </Link>
        </h4>

        <h4 className="text-xl text-gray-800 mb-5">
          Behance:{" "}
          <Link
            href="https://www.behance.net/Mtayyabdesigner"
            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition ease-in-out duration-300"
          >
            View Here
          </Link>
        </h4>
      </div>
    </div>
  )
}

export default ContactPage
