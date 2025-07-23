import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import Products from '../components/Productsoffer';
import AnimatedSection from '../components/AnimatedSection';


const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: 'url("https://picsum.photos/400/300?random=7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-[70vh] w-full flex items-center justify-center text-white"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-2">About Us</h1>
          <p className="text-xl font-medium"><Link href="/">Home</Link> / About</p>
        </div>
      </section>

      {/* Main Content */}
      <section className=" mx-auto p-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Images */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img src='https://picsum.photos/400/300?random=4' alt="Kitchen Marble" className="rounded-md" />
            
          </div>
          <div className="absolute left-16 -bottom-20  rounded-lg overflow-hidden shadow-xl hidden md:block">
            <img src='https://picsum.photos/400/300?random=2' alt="Bathroom Marble" className="rounded-md" />
          </div>
        </div>

        {/* Text Content */}
        <div className="h-[80vh] pt-20 md:pt-0">
          <p className="text-xl font-medium text-orange-500 tracking-widest mb-2">— ABOUT US</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
          Estd. since 2021, has grown over the years into a renowned identity that prioritizes marble quality and ensures the best taste
           in marble to its buyers. Specializing in pink Alaska quartz, feldspar directly from Rajsamand mines, and a variety of white, 
           black, pink, multicolored options including Kumari (Makrana marble), Albeta white marble, and granite, we have become a trusted
            name. This has led us to be considered among the most reliable stone production units in India. As a pioneer in the marble 
            industry with 18 years of experience in this field, we believe in quality as evidenced by our MSME certificate (Laghu Udhyog).
             We leverage our expertise to handpick the best stones from nature’s most exotic locations, combining it with our expert
              technological acumen and state-of-the-art machinery to transform them into prolific creations with finished perfection.
               Our export office is based in Jaipur, with packaging and loading handled from Kishangarh, Rajasthan.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li className="text-gray-800">
              <span className="text-gray-700">Perfection that enhances the vision of your spaces.</span>
            </li>
            <li className="text-gray-800">
              <span className="text-gray-700">Making them timelessly beautiful.</span>
            </li>
            <li className="text-gray-800">
              {/* <span className="text-yellow-500 mr-2">•</span> */}
              <span className="text-gray-700">Also as unique as you.</span>
            </li>
          </ul>
          <Link to="/Contectus">
            <button className="mt-8 px-6 py-2 bg-gray-900 text-white text-lg tracking-wide uppercase hover:bg-gray-700 transition">
              Contect Us →
            </button>
          </Link>
        </div>
      </section>
        
      <AnimatedSection delay={0.3}>
      <Products />
      </AnimatedSection>

      <Footer />
    </>
  );
};

export default About;
