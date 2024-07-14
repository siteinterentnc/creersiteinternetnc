import React from 'react'

import PropTypes from 'prop-types'

import './section-heading2.css'

const SectionHeading2 = (props) => {
  return (
    <div className={`section-heading2-section-heading ${props.rootClassName} `}>
      <h1 className="section-heading2-text Heading-2">{props.heading}</h1>
      <span className="section-heading2-text1">{props.subtitle}</span>
    </div>
  )
}

SectionHeading2.defaultProps = {
  heading: 'Produits les plus populaires',
  subtitle:
    'Nos articles les plus acheté et les mieux référencé (avec livraison gratuite)',
  rootClassName: '',
}

SectionHeading2.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading2
