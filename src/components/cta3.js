import React from 'react'

import PropTypes from 'prop-types'

import './cta3.css'

const CTA3 = (props) => {
  return (
    <div className="cta3-container thq-section-padding">
      <div className="cta3-max-width thq-section-max-width">
        <div className="cta3-container1 thq-flex-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta3-placeholder-image thq-img-ratio-16-9"
          />
          <div className="cta3-column">
            <span className="thq-heading-2">{props.content1}</span>
            <p className="thq-body-small">{props.content2}</p>
            <div className="cta3-actions">
              <button type="button" className="cta3-button thq-button-outline">
                {props.action2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA3.defaultProps = {
  image1Alt: 'Image1Alt',
  action1: 'Action1',
  content2:
    "Si vous souhaitez exercer l'un de vos droits énoncés ci-dessus, ou la manière dont vos informations personnelles sont traitées, veuillez nous contacter via notre messagerie instantané sure notre boutique (2eme interface) ou bien via email ou nos résaux sociaux",
  content1: 'Contactez Nous !',
  action2: 'Contact',
  image1Src:
    'https://images.unsplash.com/photo-1509266145091-5e3e5ef88bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTMxMjU3OHw&ixlib=rb-4.0.3&q=80&w=1400',
}

CTA3.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
}

export default CTA3
