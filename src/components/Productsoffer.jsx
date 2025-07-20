import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';


const products = [
  {
    name: 'Top Notch Process',
    description: 'Our advanced machinery ensures flawless cutting, finishing, and polishing for a perfect finish every time.',
    image: 'https://picsum.photos/400/300?random=1',
    link: 'https://x.ai/grok',
  },
  {
    name: 'Guaranteed Thickness',
    description: 'Each marble slab meets the highest industry standards for durability, precision, and performance.',
    image: 'https://picsum.photos/400/300?random=2',
    link: 'https://x.ai/grok',
  },
  {
    name: 'Best Prices',
    description: 'Get premium marble at the most affordable rates. We offer unbeatable value without compromising on quality.',
    image: 'https://picsum.photos/400/300?random=3',
    link: 'https://x.ai/api',
  },
];

const ProductCard = ({ product, index }) => {
  return (
    <div className={`p-6 bg-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
      <img src={product.image} alt={"imgs"} className="w-full h-36 object-cover rounded-md mb-4" />
      <h3 className="text-3xl font-semibold my-4">{product.name}</h3>
      <p className="text-gray-600  text-xl my-6">{product.description}</p>
    
    </div>
  );
};

const Offer = () => {
  return (
    <section id="Offer" className="py-28  px-16 bg-gray-100 h-[130vh]">
      <div className="container mx-auto">
         <p className="text-xl mb-4 animate-slide-in-right text-[#fcb900]">
          ━━━ what we offer
        </p>
        <div className='flex justify-between mb-20 border-b-2'>
          
        <h2 className="text-4xl font-bold text-left mb-12 animate-slide-in-left text-gray-600">MARBLE HANDPICKED FROM <br /> AROUND THE WORLD</h2>
          <Link
            to="/Aboutus"
            className=" h-fit bg-gray-600 text-white px-6 py-3 rounded-1 font-semibold 
            hover:bg-gray-700 transition-colors duration-300 animate-pulse-glow"
          >
            <p className='flex'>Read More <MoveRight className='ml-2'/></p>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;