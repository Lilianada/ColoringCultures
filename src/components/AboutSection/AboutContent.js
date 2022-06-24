import React from 'react';
import './AboutContent.css';
import GooglePlaystore from '../../assets/Google.svg';
import AppleStore from '../../assets/Apple.svg';

function AboutContent() {
  return (
    <section className='wrapper'>
        <h2 className='brownText'>About Us</h2>
        <article className='aboutText'>
           <p className='paragraph'>
                <span className='brownText'>Coloring Culture</span> is like no other color by number game! 
                A coloring book app that celebrates urban culture, from inner-city to modern-day art. 
                An app that allows the user to become the artist of their favourite art pieces and genres.
           </p>
           <p className='paragraph'>
                There are more than 300 color-by-number works of art to choose from including:
           </p>
           <ol className='para'>
                <li>
                    <p>
                        <span className='brownText'>Locations: </span>  
                        Find yourself coloring real places like New York, Chicago, Atlanta, and specific buildings that were exotically created in our app.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Music: </span>   
                        Color pieces of your favourite Hip-hop and R&B Artists, or favourite speakers during monumental eras. 
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Sporting Athletes: </span>  
                        Discover iconic images of your favourite sporting athletes, while also coloring empowering and encouraging messages.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Recreate: </span> 
                        Recreate your favourite art pieces by your favourite artist and become them.
                    </p>
                </li>
           </ol>
           <p className='paragraph'>
                When you open Culture Colors you will find art pieces categorized by People, Sport Athletes,
                Locations, HBCU’s, Music Artists, Mandala, Messages, Mosaics and more!
                Coloring made easy for the most advance pieces; all pictures are marked by numbers. Tap and open
                your color by number option and find yourself discovering a passion for art you never knew with the 
                simple relaxation and pleasure of coloring. Not only paint your artwork but also share your favorite pieces 
                with friends and family, let everyone see your fantastic coloring creation!
           </p>
           <ul style={{marginTop: '1rem'}}>
                <li>
                    <p>
                        <span className='brownText'>Audience: </span>  
                        Culture Colors mobile the app is rated for everyone aged four 3+.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Category: </span>   
                        Board, Entertainment, Educational, Casual.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Device Compatibility: </span>  
                        Compatible with Android and iOS.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Functional consistency: </span> 
                        Interactive elements in this app should work by touch with one finger in all parts of the app.
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Application File size: </span> 
                        200 MB – 250MB
                    </p>
                </li>
                <li>
                    <p>
                        <span className='brownText'>Contains Ads </span> 
                    </p>
                </li>
           </ul>
           <div className='downloadButtons'>
            <a href='/'><img src={GooglePlaystore} alt='download' /></a>
            <a href='/'><img src={AppleStore} alt='download' /></a>
          </div> 
        </article>
    </section>
  )
}

export default AboutContent

