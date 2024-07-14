import React from 'react'

import PropTypes from 'prop-types'

import './section-heading1.css'

const SectionHeading1 = (props) => {
  return (
    <div className={`section-heading1-section-heading ${props.rootClassName} `}>
      <h1 className="section-heading1-text Heading-2">{props.heading}</h1>
    </div>
  )
}

SectionHeading1.defaultProps = {
  rootClassName: '',
  heading: 'Acheter par catégorie',
  subtitle:
    'Explore our monthly most trending products, new items and the best Mobilio offers you can buy',
}

SectionHeading1.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SectionHeading1
