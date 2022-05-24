import React from 'react';
import { Fade } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { HeaderSection, NewsLetter, Banner } from '../../components/components.js';
import { carsImages, carsVideos } from '../../helpers/data.js';
import './AboutScreen.css';

const AboutScreen = () => {
  return (
    <div className="about-screen">
         <HeaderSection img={carsImages[1]}/>
         <Fade >
         <div className="info">
             <h1 className="heading">Who are we?</h1>
              <p>Car Rental USA - Cheap rental cars for your road trip in the United States
Looking for ways to spend your holiday? Why not go on a US car rental tour. The United States has some indefinable quality that makes it perfect for road trips. Cruising down the interstate with a USA car hire and the wind in your hair, your favorite tunes playing and miles of open road ahead has to be the ideal start to any adventure. The sheer diversity of landscapes and cultures within the continental United States alone makes for myriad tour opportunities, no matter what kind of journey you’re after.

You can’t go wrong with a car rental USA. There’s more to it than giving you the freedom to explore this colorful country at your leisure - once you set out, the whole of the United States is your oyster. It doesn’t matter whether you’re planning a coastal journey through the seaside towns of New England, traversing the vast plains of the Midwest, or cruising California’s Big Sur, when you rent a car in the US you’re bound for an unforgettable adventure.</p>
<p>A USA car rental is one of the easiest ways to begin your American journey, but if you’re trying to search through multiple websites to find the best rental deal, booking isn’t always an easy process. Airport Rentals cuts out all that hassle and presents you with all the best deals and exclusive offers from a wide array of American car rental companies in one easy-to-search place.

To get a car rental in the United States that’s perfect for your particular journey and budget, our simple search engine will serve up many options from a spectrum of car rental companies. all you need to do is enter a few basic details about your travel - like where you want to pick up your vehicle from, where you’re ultimately headed to and the dates of your journey. You can then scroll through a range of USA car hire options from a number of different suppliers and select the best car for you. Use our handy filters and you’ll find the perfect vehicle to take you away on another adventure.</p>
         </div>
         </Fade>
         <Banner />
         <HeaderSection img={carsImages[0]}/>
         <NewsLetter />
         <ReactPlayer url={carsVideos[0]} controls />
    </div>
  )
}

export default AboutScreen