import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar7 from '../components/navbar7'
import Hero91 from '../components/hero91'
import ContentList5 from '../components/content-list5'
import ContentList2 from '../components/content-list2'
import CTA3 from '../components/cta3'
import Footer12 from '../components/footer12'
import './legal.css'

const Legal = (props) => {
  return (
    <div className="legal-container">
      <Helmet>
        <title>Legal - Partial Bright Zebra</title>
        <meta property="og:title" content="Legal - Partial Bright Zebra" />
      </Helmet>
      <div className="legal-container1">
        <div className="legal-navbar">
          <Navbar7 rootClassName="navbar7-root-class-name10"></Navbar7>
        </div>
        <Hero91 rootClassName="hero91-root-class-name"></Hero91>
        <ContentList5></ContentList5>
        <ContentList2></ContentList2>
        <CTA3></CTA3>
        <Footer12></Footer12>
      </div>
    </div>
  )
}

export default Legal
