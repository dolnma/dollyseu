import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const PageContact = ({ data }) => (
  <Layout>
    <div className="projects__title p-1 text-center">
      <h1>My works</h1>
    </div>
    <div className="contact">
    {data.allWordpressWpContacts.edges.map(contact => (
    <div className="contact__info">
    <div className="contact__info__phone"><i class="fas fa-phone icon"></i> {contact.node.acf.phone}</div>
    <div className="contact__info__email"><i class="fas fa-envelope-square icon"></i> <span className="text--third">marek.dolnicek</span>@gmail.com</div>
    <div className="contact__info__ig"><i class="fab fa-instagram icon"></i>{contact.node.acf.instagram} (<a href="https://www.instagram.com/dollysdev/" className="text--third">link</a>)</div>
    <div className="contact__info__fb"><i class="fab fa-facebook icon"></i>{contact.node.acf.facebook} (<a href="https://www.facebook.com/mdolnicek" className="text--third">link</a>)</div>
    </div>
    ))};
    </div>
    </Layout>
)

export default PageContact

export const pageQuery = graphql`
  query PageContact {
    allWordpressWpContacts {
      edges {
        node {
          id
          title
          type
          content
          acf {
            phone
            email
            instagram
            facebook
          }
        }
      }
    }
  }
`
