import React from 'react'

import PropTypes from 'prop-types'

import './section-heading.css'

const SectionHeading = (props) => {
  return (
    <div className={`section-heading-section-heading ${props.rootClassName} `}>
      <h1 className="section-heading-text Heading-2">{props.heading}</h1>
      <span className="section-heading-text1">{props.subtitle}</span>
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'Produits les plus populaires',
  rootClassName: '',
  subtitle:
    'Nos articles les plus acheté et les mieux référencé (avec livraison gratuite)',
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SectionHeading
