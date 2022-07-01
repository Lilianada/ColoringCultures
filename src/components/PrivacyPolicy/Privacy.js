import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <section className='wrapper'>
        <h2 className='brownText'>Privacy Policy</h2>
        <p className='paragraph'>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. 
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
        <article className='accordion'>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab1' />
                <label for='Tab1' className='title'><h3>Interpretation and Definitions</h3></label>
                <div className='content'>
                    <p></p>
                </div>
            </div>
        </article>
    </section> 
  )
}

export default Privacy