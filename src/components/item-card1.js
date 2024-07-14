import React from 'react'

import PropTypes from 'prop-types'

import './item-card1.css'

const ItemCard1 = (props) => {
  return (
    <div className={`item-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="item-card1-image"
      />
      <div className="item-card1-container">
        <h3 className="item-card1-text">{props.name}</h3>
        <div className="item-card1-container1">
          <svg viewBox="0 0 1024 1024" className="item-card1-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="item-card1-container2">
          <span className="item-card1-currency">{props.currency}</span>
          <span className="item-card1-value">{props.value}</span>
        </div>
      </div>
    </div>
  )
}

ItemCard1.defaultProps = {
  currency: '$',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  rootClassName: '',
  name: 'Project Title',
  value: '429',
}

ItemCard1.propTypes = {
  currency: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
}

export default ItemCard1
