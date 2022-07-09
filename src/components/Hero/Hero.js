import React from 'react';
import './Hero.css';
import AppleStore from '../../assets/Apple.svg';
import GooglePlaystore from '../../assets/Google.svg';
import GroupPhones from '../../assets/GroupPhone.svg';

export default function Hero() {
  return (
    <section className='heroWrapper'>
      <div className='flexWrap'>
        <article className='heroText'>
          <h1>Create your own art</h1>
          <p className='heroParagraph'>
            Coloring Cultures is like no other color by number game! A coloring book app that celebrates urban culture, from inner-city to modern day art. An app that allows the user to become the artist of their favorite art pieces and genres.
          </p>

          <div className='downloadText'>
            <h5>Download now</h5>
          </div>
          <div className='downloadButtons'>
            <a href='/'><img src={GooglePlaystore} alt='download' /></a>
            <a href='/'><img src={AppleStore} alt='download' /></a>
          </div> 
        </article>
        <figure className='heroImage'>
            <img src={GroupPhones} alt='Phones mockup' />
        </figure> 
      </div>
    </section>
  )
}
