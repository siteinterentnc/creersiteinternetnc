import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar7 from '../components/navbar7'
import Hero9 from '../components/hero9'
import Testimonial181 from '../components/testimonial181'
import FAQ11 from '../components/faq11'
import CTA261 from '../components/cta261'
import Footer13 from '../components/footer13'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Landing - Partial Bright Zebra</title>
        <meta property="og:title" content="Landing - Partial Bright Zebra" />
      </Helmet>
      <div className="landing-container1">
        <div className="landing-navbar">
          <Navbar7 rootClassName="navbar7-root-class-name9"></Navbar7>
        </div>
        <Hero9></Hero9>
        <Testimonial181></Testimonial181>
        <FAQ11></FAQ11>
        <CTA261></CTA261>
        <Footer13></Footer13>
      </div>
    </div>
  )
}

export default Landing
