import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

function Home() {
  return (
    <main className='mainWrapper'>
        <Header />
        <Hero />
        <Footer />
    </main>
  )
}

export default Home