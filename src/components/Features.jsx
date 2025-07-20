import React from 'react';

const features = [
  {
    title: 'Voice Mode',
    description: 'Interact with Grok 3 using voice on iOS and Android apps.',
    image: 'https://picsum.photos/400/300?random=4',
  }
];

const Features = () => {
  return (
    <section id="features" className="">
            <div className={`flex flex-col md:flex-row items-center gap-10 animate-slide-in-right`}>

              <img src={'https://picsum.photos/400/300?random=3'} alt={'img'} className="w-full md:w-1/2 h-[100vh] object-cover rounded" />
              <div className="md:w-1/2 ">
                <p className="text-xl mt-40 my-4 animate-slide-in-right text-[#fcb900]">
                  ━━━ About Us
                </p>
                <div className='flex justify-between mb-10 '>

                  <h2 className="text-5xl font-bold text-left  animate-slide-in-left text-gray-600">Visit Our marble Display <br />Warehouse</h2>

                </div>

                <p className="text-2xl  pb-8 text-gray-600 border-b-2 ">At Suraj Marbles Private Limited, we specialize in premium imported and Italian marble, along with other high-quality natural stones. Our curated collection offers a wide variety of colors and finishes to suit any space. Visit our display warehouse to explore our range and find the perfect marble for your project.</p>
                
            <div className='flex justify-evenly items-center py-20 pr-20 '>
                <h1 className='text-4xl font-semibold text-gray-600  h-auto'>Italian Marble at a <br /> glance</h1>
                <ul className='text-xl font-normal space-y-6 list-disc'>
                  <li>Unparalleled luxury</li>
                  <li>Timeless</li>
                  <li>Seamless</li>
                  <li>Strength</li>
                </ul>
            </div>
              </div>

            </div>

    </section>
  );
};

export default Features;