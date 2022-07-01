import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Privacy from '../components/PrivacyPolicy/Privacy';

function PrivacyPolicy() {
  return (
    <>
      <main className='mainWrapper'>
          <Header />
      <Privacy />
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy