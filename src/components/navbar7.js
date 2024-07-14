import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './navbar7.css'

const Navbar7 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className={`navbar7-container ${props.rootClassName} `}>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar7-container1"
        ></div>
      )}
      <header data-thq="thq-navbar" className="navbar7-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar7-image1"
        />
        {link5DropdownVisible && (
          <div className="navbar7-container2 thq-box-shadow">
            <div className="navbar7-menu-item">
              <img
                alt={props.page1ImageAlt}
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="navbar7-page1-image thq-img-ratio-1-1"
              />
              <div className="navbar7-content">
                <span className="navbar7-page1 thq-body-large">
                  {props.page11}
                </span>
                <span className="thq-body-small">{props.page1Description}</span>
              </div>
            </div>
            <div className="navbar7-menu-item1">
              <img
                alt={props.page2ImageAlt}
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="navbar7-page2-image thq-img-ratio-1-1"
              />
              <div className="navbar7-content1">
                <span className="navbar7-page2 thq-body-large">
                  {props.page2}
                </span>
                <span className="thq-body-small">{props.page2Description}</span>
              </div>
            </div>
            <div className="navbar7-menu-item2">
              <img
                alt={props.page3ImageAlt}
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="navbar7-page3-image thq-img-ratio-1-1"
              />
              <div className="navbar7-content2">
                <span className="navbar7-page3 thq-body-large">
                  {props.page3}
                </span>
                <span className="thq-body-small">{props.page3Description}</span>
              </div>
            </div>
            <div className="navbar7-menu-item3">
              <img
                alt={props.page4ImageAlt}
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="navbar7-page4-image thq-img-ratio-1-1"
              />
              <div className="navbar7-content3">
                <span className="navbar7-page4 thq-body-large">
                  {props.page4}
                </span>
                <span className="thq-body-small">{props.page4Description}</span>
              </div>
            </div>
          </div>
        )}
        <div data-thq="thq-navbar-nav" className="navbar7-desktop-menu">
          <nav className="navbar7-links">
            <nav className="navbar7-links1">
              <Player
                src="https://lottie.host/9fac23ca-0060-4d92-baa9-225521bc4664/SR5SW7H77c.json"
                speed="1"
                autoplay="true"
                background="transparent"
                className="navbar7-lottie-node"
              ></Player>
            </nav>
            <nav className="navbar7-links2">
              <Player
                src="https://lottie.host/36a16a05-8f8f-4a6c-aff9-ddc913f7e9d8/O6WcCqpWMJ.json"
                speed="1"
                autoplay="true"
                background="transparent"
                className="navbar7-lottie-node1 link thq-link"
              ></Player>
            </nav>
            <span className="navbar7-link1 thq-body-small thq-link">
              {props.link1}
            </span>
            <Link
              to="/landing"
              className="navbar7-link2 thq-body-small thq-link"
            >
              {props.link2}
            </Link>
            <Link
              to="/landing"
              className="navbar7-link3 thq-body-small thq-link"
            >
              {props.link3}
            </Link>
            <Link to="/legal" className="navbar7-link4 thq-body-small thq-link">
              {props.link4}
            </Link>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar7-link5-dropdown-trigger"
            >
              <span className="navbar7-link5 thq-body-small thq-link">
                {props.link5}
              </span>
              <div className="navbar7-icon-container">
                {link5DropdownVisible && (
                  <div className="navbar7-container3">
                    <svg viewBox="0 0 1024 1024" className="navbar7-icon">
                      <path d="M298 426h428l-214 214z" className=""></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar7-container4">
                    <svg viewBox="0 0 1024 1024" className="navbar7-icon02">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar7-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar7-icon04">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar7-mobile-menu">
          <div className="navbar7-nav">
            <div className="navbar7-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar7-logo"
              />
              <div data-thq="thq-close-menu" className="navbar7-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar7-icon06">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar7-links3">
              <nav className="navbar7-links4">
                <Player
                  src="https://lottie.host/9fac23ca-0060-4d92-baa9-225521bc4664/SR5SW7H77c.json"
                  speed="1"
                  autoplay="true"
                  background="transparent"
                  className="navbar7-lottie-node2"
                ></Player>
              </nav>
              <nav className="navbar7-links5">
                <Player
                  src="https://lottie.host/36a16a05-8f8f-4a6c-aff9-ddc913f7e9d8/O6WcCqpWMJ.json"
                  speed="1"
                  autoplay="true"
                  background="transparent"
                  className="navbar7-lottie-node3 link thq-link"
                ></Player>
              </nav>
              <span className="navbar7-link11 thq-body-small thq-link">
                {props.link1}
              </span>
              <span className="navbar7-link21 thq-body-small thq-link">
                {props.link2}
              </span>
              <span className="navbar7-link31 thq-body-small thq-link">
                {props.link3}
              </span>
              <span className="navbar7-link41 thq-body-small thq-link">
                {props.link4}
              </span>
              <div className="navbar7-link5-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar7-trigger"
                >
                  <span className="navbar7-link51 thq-body-small thq-link">
                    {props.link5}
                  </span>
                  <div className="navbar7-icon-container1">
                    {link5AccordionOpen && (
                      <div className="navbar7-container5">
                        <svg viewBox="0 0 1024 1024" className="navbar7-icon08">
                          <path d="M298 426h428l-214 214z" className=""></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar7-container6">
                        <svg viewBox="0 0 1024 1024" className="navbar7-icon10">
                          <path d="M426 726v-428l214 214z" className=""></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar7-container7">
                    <div className="navbar7-menu-item4">
                      <img
                        alt={props.page1ImageAlt}
                        src={props.page1ImageSrc}
                        className="navbar7-page1-image1"
                      />
                      <div className="navbar7-content4">
                        <span className="navbar7-page11 thq-body-large">
                          {props.page1}
                        </span>
                        <span className="thq-body-small">
                          {props.page1Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar7-menu-item5">
                      <img
                        alt={props.page2ImageAlt}
                        src={props.page2ImageSrc}
                        className="navbar7-page2-image1"
                      />
                      <div className="navbar7-content5">
                        <span className="navbar7-page21 thq-body-large">
                          {props.page2}
                        </span>
                        <span className="thq-body-small">
                          {props.page2Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar7-menu-item6">
                      <img
                        alt={props.page3ImageAlt}
                        src={props.page3ImageSrc}
                        className="navbar7-page3-image1"
                      />
                      <div className="navbar7-content6">
                        <span className="navbar7-page31 thq-body-large">
                          {props.page3}
                        </span>
                        <span className="thq-body-small">
                          {props.page3Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar7-menu-item7">
                      <img
                        alt={props.page4ImageAlt}
                        src={props.page4ImageSrc}
                        className="navbar7-page4-image1"
                      />
                      <div className="navbar7-content7">
                        <span className="navbar7-page41 thq-body-large">
                          {props.page4}
                        </span>
                        <span className="thq-body-small">
                          {props.page4Description}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div className="navbar7-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar7.defaultProps = {
  link4: 'Legal',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODg2NDQ0OXw&ixlib=rb-4.0.3&q=80&w=200',
  page3Description: 'Explorez notre catégorie de décoration',
  page3ImageAlt: 'image',
  page1Description: 'Explorez notre catégorie de vêtement',
  page2ImageAlt: 'image',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1591364046372-71769872bb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODg2NDQ1MHw&ixlib=rb-4.0.3&q=80&w=200',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  page1ImageAlt: 'image',
  link2: 'Avis',
  logoAlt: 'Company Logo',
  page4ImageAlt: 'image',
  page4: 'Catégorie utilitaire',
  page1ImageSrc:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  page1: 'Page One',
  imageAlt: 'image',
  logoSrc: '/external/logo1-1500h-1500h.png',
  link3: 'FAQ',
  rootClassName: '',
  link5: 'Boutique',
  page4Description: "Explorez notre catégorie d'article utilitaire",
  page4ImageSrc:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  page11: 'catégorie vêtement',
  page3: 'Catégorie décoration',
  page2: 'Catégorie accessoires',
  link1: 'Home',
  page2Description: "Explorez notre catégorie d'accessoires",
}

Navbar7.propTypes = {
  link4: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page3Description: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  page1Description: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page4: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page1: PropTypes.string,
  imageAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
  page4Description: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  page11: PropTypes.string,
  page3: PropTypes.string,
  page2: PropTypes.string,
  link1: PropTypes.string,
  page2Description: PropTypes.string,
}

export default Navbar7
