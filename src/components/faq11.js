import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq11.css'

const FAQ11 = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <div className="faq11-faq8 thq-section-padding">
      <div className="faq11-max-width thq-section-max-width">
        <div className="thq-flex-column thq-section-max-width faq11-container">
          <div className="faq11-section-title">
            <div className="faq11-content">
              <h2 className="faq11-text thq-heading-2">{props.heading1}</h2>
            </div>
          </div>
          <div className="faq11-list">
            <div className="faq11-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq11-trigger"
              >
                <p className="faq11-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq11-icons-container">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon02">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq11-container03">
                  <span className="thq-body-small">{props.text2}</span>
                </div>
              )}
            </div>
            <div className="faq11-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq11-trigger1"
              >
                <p className="faq11-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq11-icons-container1">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon04">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon06">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq11-container06">
                  <span className="thq-body-small">{props.text6}</span>
                </div>
              )}
            </div>
            <div className="faq11-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq11-trigger2"
              >
                <p className="faq11-faq2-question1 thq-body-large">
                  {props.faq3Question}
                </p>
                <div className="faq11-icons-container2">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon08">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon10">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq11-container09">
                  <span className="thq-body-small">{props.text1}</span>
                </div>
              )}
            </div>
            <div className="faq11-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq11-trigger3"
              >
                <p className="faq11-faq2-question2 thq-body-large">
                  {props.faq4Question}
                </p>
                <div className="faq11-icons-container3">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon12">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon14">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq11-container12">
                  <span className="thq-body-small">{props.text7}</span>
                </div>
              )}
            </div>
            <div className="faq11-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq11-trigger4"
              >
                <p className="faq11-faq1-question1 thq-body-large">
                  {props.faq1Question1}
                </p>
                <div className="faq11-icons-container4">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon16">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon18">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq11-container15">
                  <span className="thq-body-small">{props.text8}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="faq11-content1 thq-flex-column">
          <div className="faq11-content2">
            <animate-on-reveal
              delay="0s"
              easing="ease"
              duration="300ms"
              animation="fadeOut"
              direction="normal"
              iteration="1"
            >
              <animate-on-reveal>
                <h2
                  data-thq-animate-on-reveal="true"
                  className="faq11-text6 thq-heading-2"
                >
                  {props.heading2}
                </h2>
              </animate-on-reveal>
            </animate-on-reveal>
            <p className="faq11-text7 thq-body-large">{props.content2}</p>
          </div>
          <animate-on-reveal
            delay="0s"
            easing="ease"
            duration="300ms"
            animation="fadeIn"
            direction="normal"
            iteration="1"
          >
            <animate-on-reveal>
              <button
                data-thq-animate-on-reveal="true"
                className="faq11-button thq-button-filled"
              >
                <span className="thq-body-small">{props.action}</span>
              </button>
            </animate-on-reveal>
          </animate-on-reveal>
        </div>
      </div>
    </div>
  )
}

FAQ11.defaultProps = {
  faq1Question: 'Quels types de produits proposez-vous ?',
  heading1: 'FAQ',
  faq4Question: "Puis-je suivre ma commande une fois qu'elle a été expédiée ?",
  action: 'Contact',
  text2:
    'Chez GodlyGifts, nous proposons une large gamme de produits spirituels, notamment des artefacts sacrés, des objets de décoration céleste, des bijoux spirituels et des articles pour la méditation et la prière, également désormais des vêtements',
  content2:
    "Si vous avez la moindre questions n'hésitez surtout pas à nous contacter sure notre messagerie instantané prévue pour, elle se situe sure votre écran dans notre boutique (2eme interface)",
  faq3Question: "Livrez-vous à l'international ?",
  text7:
    "Oui, dès que votre commande est expédiée, vous recevrez un email avec un numéro de suivi. Vous pouvez également suivre l'état de votre livraison en ligne, sure notre boutique dans la section compte.",
  faq1Question1: 'Comment puis-je contacter le service client ?',
  text8:
    'Vous pouvez nous contacter par email à support@divinedelights.com, via nos résaux sociaux ou par notre messagerie instantanée visible sure notre boutique (2eme interface) Notre équipe est disponible pour répondre à toutes vos questions et préoccupations.',
  text1:
    'Oui, nous livrons dans le monde entier. Peu importe où vous vous trouvez. Les frais et délais de livraison varient selon la destination et la méthode de livraison choisie.',
  heading2: 'Une question ?',
  faq2Question: 'Proposez-vous des réductions pour les achats en gros ?',
  text6:
    'Oui, nous offrons des réductions pour les commandes en gros. lorsque vous créez votre panier, si votre panier est volumineux nous vous offrirons une réduction',
}

FAQ11.propTypes = {
  faq1Question: PropTypes.string,
  heading1: PropTypes.string,
  faq4Question: PropTypes.string,
  action: PropTypes.string,
  text2: PropTypes.string,
  content2: PropTypes.string,
  faq3Question: PropTypes.string,
  text7: PropTypes.string,
  faq1Question1: PropTypes.string,
  text8: PropTypes.string,
  text1: PropTypes.string,
  heading2: PropTypes.string,
  faq2Question: PropTypes.string,
  text6: PropTypes.string,
}

export default FAQ11
