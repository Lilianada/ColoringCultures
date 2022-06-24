import React from 'react';
import AboutContent from '../components/AboutSection/AboutContent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function About() {
  return (
    <>
      <main className='mainWrapper'>
          <Header />
          <AboutContent />
      </main>
      <Footer />
    </>
  )
}

export default About