import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact10-container2">
              <span className="thq-button-flat thq-body-small">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text5 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact10-container4">
              <span className="thq-button-flat thq-body-small">
                Get directions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1479107574602-b42882f52baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NDQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1489568685157-ec3bcd451894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NDQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: 'Email: info@godlygifts.com',
  location2: 'Phone: +1-123-456-7890',
  location2Description:
    'Give us a call during our business hours for immediate support.',
  location1ImageAlt: 'Email Icon',
  heading1: 'Contact Us',
  content1: 'Have a question or need assistance? Feel free to reach out to us.',
  location2ImageAlt: 'Phone Icon',
  location1Description:
    "Send us an email and we'll get back to you as soon as possible.",
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.string,
  location2: PropTypes.string,
  location2Description: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.string,
}

export default Contact10
