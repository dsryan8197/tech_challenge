//imports
import React from 'react';
import { Link } from 'react-router-dom'

//landing page
const Home: React.FC = () => {
  return (
    <div className='homeDiv'>
      <p className="homePtag">Welcome To My Take Home Assessment.</p>
      <p className="homePtag">You're on the home page.</p> 
      <p className="homePtag">Check out the Data tab to see thousands of songs</p>
      <p className="homePtag">When you're done, check out my personal page to learn a little about me</p>
    </div>
  );
}

export default Home;
