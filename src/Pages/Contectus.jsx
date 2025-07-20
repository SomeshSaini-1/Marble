import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contectus = () => {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section
        style={{
          background: 'url("https://picsum.photos/400/300?random=9")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[70vh] w-full flex items-center justify-center text-white mb-10"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
          <p className="font-semibold text-xl">
            <Link to="/">Home</Link> / Contact
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="container mx-auto px-20 py-10 grid md:grid-cols-2 gap-10">
        {/* Left Side: Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h2>
          <p className="text-gray-600">
            Get in touch with Suraj Marbles Digital for premium quality marble solutions tailored to your needs.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p className="text-gray-700">
                Makrana Road, Madanganj, Kishangarh, Rajasthan 305801, India
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              <p className="text-gray-700">+91 xxxxxxxxxxx</p>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-orange-500 mt-1" />
              <p className="text-gray-700">xxxxxxxxxxx@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.269063260753!2d74.85792727525825!3d26.59217907685444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c52a453de9055%3A0xa86e4e7c54c745fd!2sSuraj%20Marbles%20Private%20Limited!5e0!3m2!1sen!2sin!4v1721478610585!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          How Can We Help You ?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Please feel free to get in touch using the form below. We’d love to hear from you.
        </p>

        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name*</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name*</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email*</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Comment or Message*</label>
            <textarea
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Contectus;
