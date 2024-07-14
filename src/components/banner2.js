import React from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div className="banner2-container thq-section-padding">
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container1">
          <h2 className="banner2-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner2-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="banner2-button thq-button-filled">
          Explore Now
        </button>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  video1Src:
    'https://videos.pexels.com/video-files/6013196/6013196-hd_1366_720_24fps.mp4',
  heading1: 'suivez vos commandes sure notre boutique',
  content1:
    "vous pouvez suivre l'avancement de vos commande sure notre 2eme interface (boutique)  vous verrez également ici les articles proposant la livraison gratuite, les réductions...",
  action1: 'Explore Now',
  video1Poster:
    'https://images.pexels.com/videos/6013196/pictures/preview-0.jpg',
}

Banner2.propTypes = {
  video1Src: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  video1Poster: PropTypes.string,
}

export default Banner2
