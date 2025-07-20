import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Productsoffer';
import AnimatedSection from '../components/AnimatedSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Discover from '../components/Discover';

const Home = () => {
  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AnimatedSection delay={0.3}>
        <Hero />
      </AnimatedSection> 
      <AnimatedSection delay={0.3}>
      <Products />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
      <Features />
      </AnimatedSection>
      
      <AnimatedSection delay={0.3}>
      <Discover />
      </AnimatedSection>
      <Footer />
    </div>
  )
}

export default Home
