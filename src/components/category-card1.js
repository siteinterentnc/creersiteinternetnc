import React from 'react'

import PropTypes from 'prop-types'

import './category-card1.css'

const CategoryCard1 = (props) => {
  return (
    <div className={`category-card1-category-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.categoryImg}
        className="category-card1-image"
      />
      <span className="category-card1-text">{props.name}</span>
    </div>
  )
}

CategoryCard1.defaultProps = {
  rootClassName: '',
  name: 'Desks',
  imageAlt: 'image',
  categoryImg:
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500',
}

CategoryCard1.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  imageAlt: PropTypes.string,
  categoryImg: PropTypes.string,
}

export default CategoryCard1
