import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const products = [
  {
    name: 'Marble',
    description: 'Marble Facades',
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    name: 'Granite',
    description: 'Granite Surfaces',
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    name: 'Slate',
    description: 'Slate Walls',
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    name: 'Limestone',
    description: 'Limestone Cladding',
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    name: 'Quartz',
    description: 'Quartz Countertops',
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    name: 'Onyx',
    description: 'Onyx Panels',
    image: 'https://picsum.photos/400/300?random=6',
  },
  {
    name: 'Travertine',
    description: 'Travertine Flooring',
    image: 'https://picsum.photos/400/300?random=7',
  },
];

const ProductCard = ({ product, index }) => {
  return (
    <div
      className="p-6 rounded-sm hover:shadow-xl transition-all duration-300"
      style={{ width: '25rem', flexShrink: 0 }}
    >
      <img src={product.image} alt="product" className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl my-1 text-yellow-600 lowercase">{product.name}</h3>
      <p className="text-gray-600 text-2xl">{product.description}</p>
    </div>
  );
};

const Discover = () => {
  return (
    <section id="Offer" className="py-28 px-16 bg-gray-100 h-[130vh]">
      <div className="container mx-auto">
        <p className="text-xl mb-4 animate-slide-in-right text-[#fcb900]">━━━ LATEST WORK</p>
        <div className='flex justify-between mb-20 border-b-2 items-center'>
          <h2 className="text-4xl font-bold text-left mb-12 animate-slide-in-left text-gray-600">Discover Our Creation</h2>
          <Link
            to="/Aboutus"
            className="h-fit bg-gray-600 text-white px-6 py-3 rounded font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            <div className='flex items-center'>
              <span>View More</span> <MoveRight className='ml-2' />
            </div>
          </Link>
        </div>
        {/* Slider Container */}
        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>

        <div className="container mx-auto">
        <p className="text-xl mb-4 animate-slide-in-right text-[#fcb900] uppercase">━━━ our testimonial</p>
        <div className='flex justify-between mb-20 border-b-2 items-center'>
          <h2 className="text-4xl font-bold text-left mb-12 animate-slide-in-left text-gray-600">what our clients say</h2>
          <Link
            to="/Aboutus"
            className="h-fit bg-gray-600 text-white px-6 py-3 rounded font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            <div className='flex items-center'>
              <span>View More</span> <MoveRight className='ml-2' />
            </div>
          </Link>
        </div>
        
    
      </div>
    </section>
  );
};

export default Discover;