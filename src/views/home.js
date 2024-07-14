import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar7 from '../components/navbar7'
import SectionHeading from '../components/section-heading'
import ItemCard from '../components/item-card'
import SectionHeading1 from '../components/section-heading1'
import CategoryCard from '../components/category-card'
import Banner2 from '../components/banner2'
import Hero172 from '../components/hero172'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Partial Bright Zebra</title>
        <meta property="og:title" content="Partial Bright Zebra" />
      </Helmet>
      <div className="home-container1">
        <div className="home-navbar">
          <Navbar7 rootClassName="navbar7-root-class-name6"></Navbar7>
        </div>
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container2">
                <div className="home-info">
                  <span className="home-text">
                    <span>Jean 3:16 (Louis Segond) :</span>
                    <br></br>
                    <span>
                      « Car Dieu a tant aimé le monde qu&apos;il a donné son
                      Fils unique, afin que quiconque croit en lui ne périsse
                      point, mais qu&apos;il ait la vie éternelle. »
                    </span>
                  </span>
                </div>
                <h1 className="home-text4 Heading-1">Godlygifts</h1>
                <div className="home-container3">
                  <span className="home-text5">LIVRAISON</span>
                  <span className="home-text6">
                    gratuite pour certains articles
                  </span>
                </div>
                <div className="home-btn-group">
                  <button className="home-button button">
                    Explorer la boutique
                  </button>
                </div>
              </div>
              <img
                alt="image"
                src="/external/q-600w-500w-500w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <header className="home-hero2">
          <div className="home-content">
            <h1 className="home-title">Trésors Sacrés à Votre Portée</h1>
            <span className="home-description">
              Explorez des artefacts divins et des trésors spirituels uniques
              chez DivineDelights. Apportez une touche de divinité et
              d&apos;inspiration céleste à votre quotidien avec nos collections
              sélectionnées.
            </span>
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2eceb5ed-f55f-463e-9d64-91ec7e302a47/100d920c-e367-4e27-863b-71089992c8e3?org_if_sml=11282&amp;force_format=original"
              className="home-image1"
            />
          </div>
          <div className="home-image2">
            <img
              alt="image"
              src="/external/jesusbc1-1400w-1400w.jpg"
              className="home-image3"
            />
            <img
              alt="image"
              src="/external/croixnobc1-removebg-preview-500h-500h.png"
              className="home-image4"
            />
          </div>
        </header>
        <section className="home-mission">
          <animate-on-reveal
            delay="0s"
            easing="ease"
            duration="400ms"
            animation="fadeOut"
            direction="reverse"
            iteration="1"
          >
            <animate-on-reveal>
              <h2 data-thq-animate-on-reveal="true" className="home-text7">
                Restez toujours connecté à votre foi avec nos articles
                chrétiens, remplis de bénédictions et d&apos;énergie divine.
              </h2>
            </animate-on-reveal>
          </animate-on-reveal>
          <button className="home-button1 button">
            <span className="home-text8">voire la boutique</span>
          </button>
        </section>
        <div className="home-max-width1 max-width-container">
          <SectionHeading></SectionHeading>
          <div className="home-gallery">
            <div className="home-left">
              <ItemCard
                name="bible verset"
                value="16.99"
                imageSrc="/external/0c0a7aa7-86fe-4aa3-b9df-647ec6431931-1500w-1500w.jpg"
                rootClassName="rootClassName4"
                className="home-component02"
              ></ItemCard>
            </div>
            <div className="home-right">
              <div className="home-top">
                <div className="home-left1">
                  <ItemCard
                    name="peluche jesus"
                    value="14.99"
                    imageSrc="/external/06667404-ad41-4750-9074-35949fcaf0ec-1500w-200h.jpg"
                    rootClassName="rootClassName2"
                    className="home-component03"
                  ></ItemCard>
                </div>
                <div className="home-right1">
                  <ItemCard
                    name="pendentif glande pinéal"
                    value="13.44"
                    imageSrc="/external/1615879298254-1500w-200h.jpg"
                    rootClassName="rootClassName3"
                    className="home-component04"
                  ></ItemCard>
                </div>
              </div>
              <div className="home-bottom">
                <div className="home-left2">
                  <ItemCard
                    name="tableau 5 pièce jesus"
                    value="27.99"
                    imageSrc="/external/1616657093632-1500w-200h.jpg"
                    rootClassName="item-card-root-class-name1"
                    className="home-component05"
                  ></ItemCard>
                </div>
                <div className="home-right2">
                  <ItemCard
                    name="coque fear of god"
                    value="9.99"
                    imageSrc="/external/839354572335-1500w-1500w.webp"
                    rootClassName="item-card-root-class-name6"
                    className="home-component06"
                  ></ItemCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-width-container">
          <SectionHeading1
            heading="SHOP BY CATEGORIES"
            subtitle="Start shopping based on the categories you are interested in"
          ></SectionHeading1>
          <div className="home-cards-container">
            <CategoryCard
              name="accessoires"
              categoryImg="/external/1420d022-50ed-4c7d-a1d6-ee979ad6cb7f-1500w-1500w.jpg"
              rootClassName="category-card-root-class-name"
              className="home-component08"
            ></CategoryCard>
            <CategoryCard
              name="vêtements"
              categoryImg="/external/a5b691bc-15ae-4fd3-ad02-060eb74be431-1500w-1500w.jpg"
              rootClassName="category-card-root-class-name1"
              className="home-component09"
            ></CategoryCard>
            <CategoryCard
              name="utilitaire "
              categoryImg="/external/0c0a7aa7-86fe-4aa3-b9df-647ec6431931-1500w-1500w.jpg"
              rootClassName="category-card-root-class-name2"
              className="home-component10"
            ></CategoryCard>
            <CategoryCard
              name="décorations "
              categoryImg="/external/5274332049025-1500w-200h.jpg"
              rootClassName="category-card-root-class-name3"
              className="home-component11"
            ></CategoryCard>
          </div>
        </div>
        <Banner2></Banner2>
        <Hero172
          image1Alt="t-shirt god trust god"
          image1Src="/external/5c7f11da-56cb-4378-bf8e-05e28e834b48-1500w-200h.jpg"
          image2Alt="pull god first"
          image2Src="/external/8cd0615a-0126-4c6b-bf59-0dccd97fef5c-1500w-200h.webp"
          image3Alt="coque jesus"
          image3Src="/external/79791212012-1500w-200h.jpg"
          image4Alt="t-shirt child god"
          image4Src="/external/96b9e76e-1344-440f-b5c2-6ff92e9e9be5-1500w-200h.jpg"
          image5Alt="décoration jesus"
          image5Src="/external/1616657093632-1500w-200h.jpg"
          image6Alt="pendentif glande pinéal"
          image6Src="/external/1615879298254-1500w-200h.jpg"
          image7Alt="pendentif vierge marie"
          image7Src="/external/839354572335-1500w-1500w.webp"
          image8Alt="bible verset in a jar"
          image8Src="/external/0c0a7aa7-86fe-4aa3-b9df-647ec6431931-1500w-1500w.jpg"
          image9Alt="peluche jesus"
          image9Src="/external/06667404-ad41-4750-9074-35949fcaf0ec-1500w-200h.jpg"
          image10Alt="short child god"
          image10Src="/external/eab358af-5c19-4970-925a-ea51628cba71-1500w-200h.jpg"
          image11Alt="pull child god"
          image11Src="/external/a5b691bc-15ae-4fd3-ad02-060eb74be431-1500w-1500w.jpg"
          image12Alt="bible led déco"
          image12Src="/external/5274332049025-1500w-200h.jpg"
        ></Hero172>
        <Footer1></Footer1>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<div class="visme_d" data-title="Untitled Project" data-url="6x0ex6nr-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="82478"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
