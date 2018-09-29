import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import SEO from './SEO'

import '../styles/index.scss'

import MainMenu from './Menu/MainMenu'

import svgFb from '../img/fb.svg'
import svgIg from '../img/ig.svg'
import svgLinkedin from '../img/linkedin.svg'

const Layout = ({ children, data }) => (
  <div className="wrapper">
  <SEO />
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Frontend developer and coder. I like CSS, Javascript and Wordpress."
      />
      <meta
        name="keywords"
        content="coder, developer, wordpress, woocommerce, freelancer"
      />
      <title>
        Dollys.eu - freelance coder and frontend developer from Czech republic
      </title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      />
      <link href="https://fonts.googleapis.com/css?family=Oswald:400,700&amp;subset=latin-ext" rel="stylesheet" />
    </Helmet>
    <div className="header block--shadow">
      <div className="header__wrap container">
        <div className="header__wrap__left">
          <Header />
        </div>
        <div className="header__wrap__right">
          <MainMenu menu={data} />
        </div>
      </div>
    </div>
    {children}
    
    <div className="footer">
        <div className="row p-1 text-center block-center">
            <div className="footer__icon p-1"><a href="https://www.facebook.com/mdolnicek"><img height="30" alt="Facebook" src={svgFb} /></a></div>
            <div className="footer__icon p-1"><a href="https://www.instagram.com/dollysdev"><img height="30" alt="Facebook" src={svgIg} /></a></div>
            <div className="footer__icon p-1"><a href="https://www.linkedin.com/in/marek-doln%C3%AD%C4%8Dek-79482561/"><img height="30" alt="Facebook" src={svgLinkedin} /></a></div>
        </div>
    </div>
  </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Layout

export const query = graphql`
  query LayoutQuery {
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          id
          name
          items {
            title
            url
            object_slug
          }
        }
      }
    }
  }
`