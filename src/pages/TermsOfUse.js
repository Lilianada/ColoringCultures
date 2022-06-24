import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Terms from '../components/TermsOfUse/Terms';

function TermsOfUse() {
  return (
    <>
      <main className='mainWrapper'>
          <Header />
          <Terms />
      </main>
      <Footer />
    </>
  )
}

export default TermsOfUse