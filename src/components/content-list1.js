import React from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <p className="thq-body-small">{props.content1}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading2}</h3>
              <p className="thq-body-small">{props.content2}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading3}</h3>
              <p className="thq-body-small">{props.content3}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading4}</h3>
              <p className="thq-body-small">{props.content4}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading5}</h3>
              <p className="thq-body-small">{props.content5}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading6}</h3>
              <p className="thq-body-small">{props.content6}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  heading6: 'Divine Inspiration',
  content5:
    'Read our insightful Christian articles that offer guidance, inspiration, and wisdom to support you in your faith journey.',
  heading1: 'Sacred Items',
  content3:
    'Find spiritual treasures that resonate with your soul and inspire you on your spiritual journey towards enlightenment.',
  content4:
    'Stay connected to your faith with our selection of products designed to deepen your spiritual connection and strengthen your beliefs.',
  heading4: 'Stay Connected',
  heading5: 'Christian Articles',
  content2:
    'Explore our collection of divine artifacts imbued with mystical powers to bring blessings and protection into your life.',
  content1:
    'Discover a wide range of sacred items carefully curated to elevate your spiritual practices and connect you with divine energies.',
  heading2: 'Divine Artifacts',
  heading3: 'Spiritual Treasures',
  content6:
    'Immerse yourself in divine inspiration as you explore our unique products filled with divine energy to uplift your spirit.',
}

ContentList1.propTypes = {
  heading6: PropTypes.string,
  content5: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
  content4: PropTypes.string,
  heading4: PropTypes.string,
  heading5: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  content6: PropTypes.string,
}

export default ContentList1
