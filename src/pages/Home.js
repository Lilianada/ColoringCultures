import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{opacity: 0.5}}
      animate={{opacity: 1}}
      exist={{opacity: 0}}
      transition={{ duration: .3 }}
    >
      <main className='mainWrapper'>
        <Header />
        <Hero />
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home