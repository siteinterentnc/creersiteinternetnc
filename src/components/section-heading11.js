import React from 'react'

import PropTypes from 'prop-types'

import './section-heading11.css'

const SectionHeading11 = (props) => {
  return (
    <div
      className={`section-heading11-section-heading ${props.rootClassName} `}
    >
      <h1 className="section-heading11-text Heading-2">{props.heading}</h1>
    </div>
  )
}

SectionHeading11.defaultProps = {
  heading: 'Acheter par catégorie',
  subtitle:
    'Explore our monthly most trending products, new items and the best Mobilio offers you can buy',
  rootClassName: '',
}

SectionHeading11.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading11
