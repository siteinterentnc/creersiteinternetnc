import React from 'react'

import PropTypes from 'prop-types'

import './footer13.css'

const Footer13 = (props) => {
  return (
    <footer className="footer13-footer1 thq-section-padding">
      <div className="footer13-max-width thq-section-max-width">
        <div className="footer13-content">
          <div className="footer13-newsletter">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer13-image1"
            />
            <span className="thq-body-small">
              Subscribe to our newsletter for the latest updates on new features
              and product releases.
            </span>
            <div className="footer13-actions">
              <div className="footer13-form">
                <div className="footer13-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer13-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer13-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
              </div>
              <span className="footer13-content2 thq-body-small">
                {props.content2}
              </span>
            </div>
          </div>
          <div className="footer13-links">
            <div className="footer13-column1">
              <strong className="thq-body-large footer13-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer13-footer-links">
                <span className="footer13-link1 thq-body-small">
                  {props.link1}
                </span>
                <span className="footer13-link2 thq-body-small">
                  {props.link2}
                </span>
                <span className="footer13-link3 thq-body-small">
                  {props.link3}
                </span>
                <span className="footer13-link4 thq-body-small">
                  {props.link4}
                </span>
                <span className="footer13-link5 thq-body-small">
                  {props.link5}
                </span>
              </div>
            </div>
            <div className="footer13-column2">
              <strong className="footer13-column2-title thq-body-large">
                {props.column2Title}
              </strong>
              <div className="footer13-footer-links1">
                <span className="footer13-link6 thq-body-small">
                  {props.link6}
                </span>
                <span className="thq-body-small">{props.link7}</span>
                <span className="footer13-link8 thq-body-small">
                  {props.link8}
                </span>
                <span className="footer13-link9 thq-body-small">
                  {props.link9}
                </span>
                <span className="footer13-link10 thq-body-small">
                  {props.link10}
                </span>
              </div>
            </div>
            <div className="footer13-column3">
              <strong className="thq-body-large footer13-social-link1-title">
                {props.socialLinkTitleCategory}
              </strong>
              <div className="footer13-social-links">
                <div className="footer13-link">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="thq-body-small">Facebook</span>
                </div>
                <div className="footer13-link1">
                  <img
                    alt={props.platformTikTokColorOriginalAlt}
                    src={props.platformTikTokColorOriginalSrc}
                    className="footer13-platform-tik-tok-color-original"
                  />
                  <span className="thq-body-small">TikTok</span>
                </div>
                <div className="footer13-link2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="thq-body-small">Instagram</span>
                </div>
                <div className="footer13-link3">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <span className="thq-body-small">X</span>
                </div>
                <div className="footer13-link4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                  <span className="thq-body-small">Youtube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer13-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer13-row">
            <span className="thq-body-small">{props.content3}</span>
            <div className="footer13-footer-links2">
              <span className="footer13-link11 thq-body-small">
                {props.privacyLink}
              </span>
              <span className="footer13-link12 thq-body-small">
                {props.termsLink}
              </span>
              <span className="footer13-link13 thq-body-small">
                {props.cookiesLink}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer13.defaultProps = {
  privacyLink: '/privacy-policy',
  action1: 'Subscribe to our newsletter',
  platformTikTokColorNegativeAlt: 'PlatformTikTokColorNegative3162',
  cookiesLink: '/cookies-policy',
  link6: 'Vêtement',
  column2Title: 'Boutique',
  platformTikTokColorNegativeSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2eceb5ed-f55f-463e-9d64-91ec7e302a47/ebdc5d59-073d-4310-86cc-918d02b249c4?org_if_sml=1516&force_format=original',
  link4: 'Legal',
  link1: 'Home',
  link3: 'FAQ',
  platformTikTokColorOriginalAlt: 'PlatformTikTokColorOriginal3162',
  platformTikTokColorOriginalSrc:
    'https://play.teleporthq.io/static/svg/default-img.svg',
  link2: 'Avis',
  socialLinkTitleCategory: 'Follow Us',
  logoAlt: 'Divine Treasures Logo',
  link9: 'Utilitaire',
  link7: 'Accessoires',
  termsLink: '/terms-conditions',
  logoSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  column1Title: 'Navigation',
  link8: 'Décoration',
  content3: 'Designed with love by Divine Designs',
  link5: 'Boutique',
  link10: 'Contact',
  content2: '© 202 Godlygifts. All Rights Reserved.',
}

Footer13.propTypes = {
  privacyLink: PropTypes.string,
  action1: PropTypes.string,
  platformTikTokColorNegativeAlt: PropTypes.string,
  cookiesLink: PropTypes.string,
  link6: PropTypes.string,
  column2Title: PropTypes.string,
  platformTikTokColorNegativeSrc: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
  platformTikTokColorOriginalAlt: PropTypes.string,
  platformTikTokColorOriginalSrc: PropTypes.string,
  link2: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
  logoAlt: PropTypes.string,
  link9: PropTypes.string,
  link7: PropTypes.string,
  termsLink: PropTypes.string,
  logoSrc: PropTypes.string,
  column1Title: PropTypes.string,
  link8: PropTypes.string,
  content3: PropTypes.string,
  link5: PropTypes.string,
  link10: PropTypes.string,
  content2: PropTypes.string,
}

export default Footer13
