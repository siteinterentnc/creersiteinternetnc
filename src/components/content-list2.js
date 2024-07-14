import React from 'react'

import PropTypes from 'prop-types'

import './content-list2.css'

const ContentList2 = (props) => {
  return (
    <div className="content-list2-container thq-section-padding">
      <div className="content-list2-max-width thq-flex-column thq-section-max-width">
        <div className="content-list2-content thq-flex-column">
          <ul>
            <li className="content-list2-li thq-flex-column list-item">
              <ul className="content-list2-ul1 thq-flex-column">
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
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list2-content1 thq-flex-column">
          <ul></ul>
        </div>
      </div>
    </div>
  )
}

ContentList2.defaultProps = {
  heading8: 'Customer Satisfaction Guaranteed',
  heading9: 'Start Your Spiritual Adventure',
  content2:
    "Nous ne vendons, n'échangeons ni ne transférons autrement vos informations personnelles à des tiers. Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site web, à mener nos activités, à effectuer des paiements, à livrer des produits ou services achetés, à vous envoyer des informations ou des mises à jour, ou à vous fournir d'autres services, tant que ces parties acceptent de garder ces informations confidentielles. Nous pouvons également divulguer vos informations lorsque nous croyons que leur divulgation est appropriée pour se conformer à la loi, faire respecter nos politiques de site, ou protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux d'autrui. Cependant, des informations non personnellement identifiables sur les visiteurs peuvent être fournies à d'autres parties à des fins de marketing, de publicité ou d'autres usages.",
  heading7: 'Join Our Community',
  heading5: 'À propos des modifications de notre politique de confidentialité',
  heading3: 'Comment stockons-nous vos informations ?',
  content6:
    "si vous avez une question ou une plainte concernant cette politique, ou la manière dont vos informations personnelles sont traitées, ou quel que soit d'autre, veuillez nous contacter sure notre messagerie instantanée visible sure la boutique (2eme interface) ou bien par email ou nos résaux sociaux",
  heading2: 'Comment pouvons-nous partager vos informations personnelles ?',
  content9:
    'Embark on a spiritual adventure with DivineDelights. Let our sacred items and spiritual treasures enrich your life and deepen your connection to the divine.',
  content4:
    "Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir les services que vous avez demandés ou à d'autres fins essentielles telles que la conformité à nos obligations légales, la résolution des litiges et l'application de nos politiques.",
  heading1: 'Welcome to DivineDelights',
  content3:
    "Nous intégrons des procédures physiques, électroniques et administratives pour protéger la confidentialité de vos informations personnelles, y compris le Secure Sockets Layer ('SSL') pour toutes les transactions financières via ce site. Nous utilisons le cryptage SSL pour protéger vos informations personnelles en ligne et prenons également plusieurs mesures pour protéger vos informations personnelles dans nos installations. L'accès à vos informations personnelles est restreint. Seuls les employés qui ont besoin d'accéder à vos informations personnelles pour accomplir un travail spécifique ont accès à vos informations personnelles. Enfin, nous comptons sur des fournisseurs de services tiers pour la sécurité physique de certains de nos équipements informatiques. Nous pensons que leurs procédures de sécurité sont adéquates. Par exemple, lorsque vous visitez le site, vous accédez à des serveurs situés dans un environnement physique sécurisé, derrière une cage verrouillée et un pare-feu électronique.",
  heading6: 'Contactez-nous',
  content7:
    'Become part of our community of spiritual seekers and believers. Share your journey, insights, and experiences with like-minded individuals.',
  content5:
    'Si nous décidons de modifier notre politique de confidentialité, nous publierons ces modifications sur cette page et/ou mettrons à jour la date de modification de la politique de confidentialité ci-dessous.',
  content1:
    'Explore our collection of sacred items and spiritual treasures at DivineDelights. Find unique products to enhance your spiritual journey and stay connected to your faith.',
  heading4: 'Combien de temps conservons-nous vos informations ?',
}

ContentList2.propTypes = {
  heading8: PropTypes.string,
  heading9: PropTypes.string,
  content2: PropTypes.string,
  heading7: PropTypes.string,
  heading5: PropTypes.string,
  heading3: PropTypes.string,
  content6: PropTypes.string,
  heading2: PropTypes.string,
  content9: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
  heading6: PropTypes.string,
  content7: PropTypes.string,
  content5: PropTypes.string,
  content1: PropTypes.string,
  heading4: PropTypes.string,
}

export default ContentList2
