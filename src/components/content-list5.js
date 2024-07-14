import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './content-list5.css'

const ContentList5 = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <div className="content-list5-container thq-section-padding">
      <div className="content-list5-max-width thq-flex-column thq-section-max-width">
        <div className="content-list5-container1 thq-flex-column">
          {isTermsVisible && (
            <div className="content-list5-container2">
              <ul className="thq-flex-column">
                <li className="content-list5-li thq-flex-column list-item">
                  <h2 className="content-list5-heading7 thq-heading-2">
                    {props.heading7}
                  </h2>
                  <p className="thq-body-small">{props.content7}</p>
                  <ul className="content-list5-ul1 thq-flex-column">
                    <li className="list-item">
                      <h3 className="thq-heading-3">{props.heading8}</h3>
                      <p className="thq-body-small">{props.content2}</p>
                    </li>
                    <li className="list-item">
                      <h3 className="thq-heading-3">{props.heading9}</h3>
                      <p className="thq-body-small">{props.content9}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isPrivacyVisible && (
            <div className="content-list5-container3">
              <ul className="thq-flex-column">
                <li className="content-list5-li03 thq-flex-column list-item">
                  <h1 className="content-list5-heading1 thq-heading-2">
                    {props.heading1}
                  </h1>
                  <span className="thq-body-small">{props.content1}</span>
                  <ul className="content-list5-ul3 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading2}</h1>
                      <span className="thq-body-small">{props.content2}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading3}</h1>
                      <span className="thq-body-small">{props.content3}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading4}</h1>
                      <span className="thq-body-small">{props.content4}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading5}</h1>
                      <span className="thq-body-small">{props.content5}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading6}</h1>
                      <span className="thq-body-small">{props.content6}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible && (
            <div className="content-list5-container4">
              <ul className="thq-flex-column">
                <li className="content-list5-li09 thq-flex-column list-item">
                  <h1 className="content-list5-heading10 thq-heading-2">
                    {props.heading10}
                  </h1>
                  <span className="thq-body-small">{props.content10}</span>
                  <ul className="content-list5-ul5 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading11}</h1>
                      <span className="thq-body-small">{props.content11}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading12}</h1>
                      <span className="thq-body-small">{props.content12}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading13}</h1>
                      <span className="thq-body-small">{props.content13}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ContentList5.defaultProps = {
  heading4: 'Sharing your data with 3rd parties',
  heading10: 'Refund Policy',
  heading11: 'General',
  button1: 'Politique de confidentialité',
  content5:
    'Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis tempora et ullam quis qui fugiat necessitatibus qui quia dolorem 33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio 33 magni ratione ut odit rerum est nihil error et minus dolor quo harum fugiat. Eos quam assumenda id fugit optio aut magni sunt!  Ut iure aliquam vel velit modi sit voluptatibus atque ut corporis sint sit omnis enim a pariatur officiis aut nulla voluptate. In facere incidunt aut sapiente maxime qui quibusdam facilis non officia consectetur sit laboriosam libero aut cupiditate possimus ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed omnis maiores ut aliquid culpa vel nesciunt saepe.  Aut placeat aspernatur aut alias nihil vel neque recusandae et corrupti accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad sunt minus rem earum delectus hic officia iste qui sunt quos non officiis illo vel doloribus perspiciatis. Ab soluta eius sed quidem dolores rem necessitatibus minus 33 minus commodi. Nam repudiandae libero non laboriosam voluptate et saepe fuga vel repudiandae pariatur aut assumenda illo.',
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  heading3: 'Enhance Your Spiritual Journey',
  heading8: 'Comment collectons-nous les informations personnelles ?',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  heading7: 'Politique de confidentialité',
  heading13: 'Refunds',
  content3:
    'Immerse yourself in unique sacred items that will bring a touch of divinity to your daily life.',
  heading12:
    'Nous utilisons vos informations personnelles pour fournir et améliorer nos services, vous offrir une expérience personnalisée sur nos sites, vous contacter à propos de votre compte et de nos services, vous fournir un service client, vous proposer des publicités et du marketing personnalisés, et détecter, prévenir, atténuer et enquêter sur des activités frauduleuses ou illégales.',
  heading5: 'Campaign tracking',
  button2: 'Contact',
  heading2: 'Christian Articles Filled with Blessings',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  content2:
    "Tous vos données, notamment ceux pour procédé à l'achat son crypté !Lors de votre visite sur le site et de l'utilisation de nos services ou applications mobiles, il existe plusieurs façons dont nous pouvons collecter des informations personnelles, que ce soit explicitement en vous les demandant d'abord ou automatiquement. Tout d'abord, nous pouvons vous demander de fournir des informations personnelles dans le cadre de la fourniture des services demandés ou lors de correspondances avec vous. Cela peut inclure les situations suivantes : Lorsque vous vous inscrivez pour utiliser les services, nous collectons certaines informations sur les membres. Cela inclut votre adresse e-mail, adresse physique, numéro de téléphone (\"Informations de contact\") et le mot de passe créé pour pouvoir vous contacter, vérifier votre compte et vous permettre de vous connecter à votre compte lors de futures instances. Nous pouvons collecter d'autres informations automatiquement lorsque vous visitez notre site ; notre serveur web collecte et agrège automatiquement des informations concernant votre visite par l'utilisation de \"cookies\" et d'autres moyens. Ces informations peuvent inclure les sites de référence, le type de navigateur, la langue du navigateur, le système d'exploitation, les pages que vous consultez, votre adresse de protocole Internet (\"IP\") et les actions que vous effectuez sur notre site. La plupart des navigateurs web peuvent vous alerter de l'utilisation de cookies ou refuser d'accepter les cookies. Vous devez être conscient que si vous choisissez de ne pas accepter les cookies, certaines parties du site peuvent ne pas fonctionner correctement ou ne pas permettre l'accès.",
  content4:
    'Lorem ipsum dolor sit amet. Id galisum officiis rem quod internos qui provident quaerat hic minus eveniet est officiis galisum sit rerum dignissimos. Sit voluptatem alias et veniam rerum ea quod ipsam ut quam neque est nihil repellat est aspernatur voluptatem est voluptas ratione?  Ea vero tempore At soluta temporibus 33 galisum excepturi quo modi distinctio. Qui dolor soluta sit ipsam vitae et suscipit molestiae est consequatur galisum aut sapiente voluptatem sed quas eaque et minima minus?  Rem soluta consequatur et velit cupiditate sed eligendi laudantium rem pariatur galisum sit mollitia debitis eum delectus ipsum aut consequatur mollitia. Qui voluptatibus molestias ut totam Quis ea unde dolorem sit animi eveniet et galisum explicabo. Est culpa error ut voluptatibus voluptatem qui dignissimos dolorem quo laborum distinctio qui omnis perspiciatis ab facilis temporibus qui perspiciatis consectetur. Ab praesentium fugiat eos veritatis quam ex modi autem et sapiente dolorem?',
  heading1: 'Welcome to our Spiritual Artifacts Collection',
  content9:
    'Nous utilisons vos informations personnelles pour fournir et améliorer nos services, vous offrir une expérience personnalisée sur nos sites, vous contacter à propos de votre compte et de nos services, vous fournir un service client, vous proposer des publicités et du marketing personnalisés, et détecter, prévenir, atténuer et enquêter sur des activités frauduleuses ou illégales.',
  button: 'Boutique',
  heading9: 'Comment utilisons-nous vos informations personnelles ?',
  content1:
    'Discover a range of sacred items and divine treasures to elevate your spiritual journey and connect with higher realms.',
  content7:
    'Voici un avis de confidentialité qui explique notre collecte, utilisation, divulgation, conservation et protection de vos informations personnelles.',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading6: 'Cookies',
}

ContentList5.propTypes = {
  heading4: PropTypes.string,
  heading10: PropTypes.string,
  heading11: PropTypes.string,
  button1: PropTypes.string,
  content5: PropTypes.string,
  content6: PropTypes.string,
  heading3: PropTypes.string,
  heading8: PropTypes.string,
  content10: PropTypes.string,
  heading7: PropTypes.string,
  heading13: PropTypes.string,
  content3: PropTypes.string,
  heading12: PropTypes.string,
  heading5: PropTypes.string,
  button2: PropTypes.string,
  heading2: PropTypes.string,
  content12: PropTypes.string,
  content11: PropTypes.string,
  content2: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content9: PropTypes.string,
  button: PropTypes.string,
  heading9: PropTypes.string,
  content1: PropTypes.string,
  content7: PropTypes.string,
  content13: PropTypes.string,
  heading6: PropTypes.string,
}

export default ContentList5
