import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  heading1: 'Testimonials',
  author4Src:
    'https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NDQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Rebecca Martinez',
  author2Name: 'Michael Thompson',
  content1:
    'I have found the perfect meditation tools at Godlygifts that have truly elevated my practice. The energy of the products is palpable and has enhanced my spiritual journey in ways I never imagined.',
  author4Name: 'David Lee',
  author1Position: 'Yoga Instructor',
  author4Alt: 'Image of David Lee',
  author2Alt: 'Image of Michael Thompson',
  author1Name: 'Sarah Johnson',
  review4:
    'The mystical powers infused in the products at Godlygifts are truly transformative. I have witnessed miracles unfold in my life since incorporating these divine energies into my daily rituals.',
  author3Src:
    'https://images.unsplash.com/photo-1599256621730-535171e28e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NDQwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Meditation Practitioner',
  author3Position: 'Spiritual Seeker',
  author2Src:
    'https://images.unsplash.com/photo-1508905475152-c325323ac955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NDQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'The sacred items from Godlygifts have become an integral part of my healing sessions. My clients have experienced profound shifts in their energy and well-being since incorporating these divine artifacts.',
  review2:
    'Godlygifts has a unique collection of spiritual treasures that have deepened my connection to the divine. Each item radiates a sense of peace and serenity that resonates with my soul.',
  author1Src:
    'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NDQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'I am grateful for the Christian articles and blessings from Godlygifts that keep me grounded in my faith. These products serve as constant reminders of the love and grace that surrounds me.',
  author2Position: 'Reiki Master',
  author1Alt: 'Image of Sarah Johnson',
  author3Alt: 'Image of Rebecca Martinez',
}

Testimonial17.propTypes = {
  heading1: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  author2Name: PropTypes.string,
  content1: PropTypes.string,
  author4Name: PropTypes.string,
  author1Position: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.string,
  review4: PropTypes.string,
  author3Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Position: PropTypes.string,
  author2Src: PropTypes.string,
  review1: PropTypes.string,
  review2: PropTypes.string,
  author1Src: PropTypes.string,
  review3: PropTypes.string,
  author2Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
}

export default Testimonial17
