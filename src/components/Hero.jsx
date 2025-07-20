import React from 'react';
import TextSlideshow from '../assets/Textslider';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  const textArray = [
    '35+ Years of Legacy',
    'Crafting Timeless Beauty \n In Marbles',
  ];

  return (
    <>
    
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1671410372744-989627ea0033?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center text-white z-10 px-4">
        <p className="text-xl mb-20 animate-slide-in-right text-[#fcb900]">
          ━━━ Welcome To Abc PVT LTD. ━━━
        </p>
        <h2
          className="text-6xl font-bold mb-10 "
          style={{ whiteSpace: 'pre-line' }}
        >
          <TextSlideshow textArray={textArray} />
        </h2>
        <div className="space-x-4">
          <Link
            to="/Aboutus"
            className=" inline-block bg-yellow-600 text-white px-6 py-3 rounded-1 font-semibold hover:bg-yellow-700 transition-colors duration-300 animate-pulse-glow"
          >
            <p className='flex'>Read More <MoveRight className='ml-2'/></p>
          </Link>
          <Link
            to="/Contectus"
            className=" inline-block bg-gray-300 text-black px-6 py-3 rounded-1 font-semibold hover:bg-gray-400 transition-colors duration-300 animate-pulse-glow"
          >
            <p className='flex'>Get In Touch <MoveRight className='ml-2'/></p>
          </Link>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Hero;