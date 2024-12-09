import React from 'react';
import { Achievement, CTA, Categories, Companies, Courses, Feedback, Footers, Hero, Navbar } from './Components';

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Companies/>
      <Courses/>
      <Achievement/>
      <Categories/>
      <Feedback/>
      <CTA/>
      <Footers/>
    </div>
  )
}

export default Home;