import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <a
              href={props.linkButton}
              target="_blank"
              rel="noreferrer noopener"
              className="hero9-link button"
            >
              {props.button1}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: 'Avis Clients de GodlyGifts',
  button: 'Explorer la boutique',
  action1: 'Shop Now',
  image1Alt: 'Image of divine artifacts and spiritual treasures',
  content1: 'Vos Avis Comptent pour Nous',
  action2: 'Explore Collections',
  image1Src:
    'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTEyNDYwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  linkButton: 'https://lovegod.wed2c.com/',
  button1: 'Boutique',
}

Hero9.propTypes = {
  heading1: PropTypes.string,
  button: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  linkButton: PropTypes.string,
  button1: PropTypes.string,
}

export default Hero9
