import React from 'react';
import AboutContent from '../components/AboutSection/AboutContent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{opacity: 0.5}}
      animate={{opacity: 1}}
      exist={{opacity: 0}}
      transition={{ duration: .3 }}
    >
      <main className='mainWrapper'>
        <Header />
        <AboutContent />
      </main>
      <Footer />
    </motion.div>
  )
}

export default About