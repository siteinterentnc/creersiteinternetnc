import React from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div
      className={`hero91-header30 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text thq-heading-1">{props.heading1}</h1>
          <p className="hero91-text1 thq-body-large">{props.content1}</p>
          <div className="hero91-actions">
            <button className="thq-button-outline hero91-button">
              <span className="thq-body-small">Boutique</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  rootClassName: '',
  action2: 'Explore Now',
  image1Alt: 'Divine Artifacts Image',
  content1: 'Protéger Votre Vie Privée et Vos Données Personnelles',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Politique de Confidentialité de GodlyGifts',
  action11: 'Subscribe to our newsletter',
  action1: 'Shop Now',
}

Hero91.propTypes = {
  rootClassName: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  action11: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero91
