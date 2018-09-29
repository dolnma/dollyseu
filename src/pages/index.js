import React from 'react'
import Link from 'gatsby-link'

import imgwp from '../img/wp.png' // Tell Webpack this JS file uses this image
import imgreact from '../img/react.png'
import imghtml from '../img/html.png'
import imgcss from '../img/css.png'
import imgnpm from '../img/npm.png'
import imgnodejs from '../img/nodejs.png'

import Layout from '../components/layout'

const HomePage = ({ data }) => (
<Layout>
  <div className="content content__wrap content__wrap--welcome">
    <div className="content__wrap__text row col-12">
      <div className="container text-center">
        <div className="avatar" />
        <h1>Hello! I'm Marek Dolníček.</h1>
        <h2>
          Freelancer frontend developer based in Czech republic. I love tech,
          sports, video games and almond drink. In my free time i always learn
          something from <span className="text--third">#React</span> or{' '}
          <span className="text--third">#VueJS</span> or do some leveldesign
          for{' '}
          <a className="text--third" href="https://steamcommunity.com/id/dolnma/">Steam community</a>.
        </h2>
        <p>Feel free to contact me about work or help :)</p>
        <div className="mt-2 mb-2 text--white"><a href="mailto:marek.dolnicek@gmail.com" className="btn btn-third">Contact me!</a></div>
      </div>
    </div>
  </div>

  <div className="content content__wrap content__wrap--skills">
    <div className="content__wrap__text p-sm-5">
      <div className="text-center row p-2 p-lg-4">
        <div className="col-12 col-lg-4">
          <div className="row content__wrap__progressbar text--primary">
            <b>HTML</b>
            <div className="progressbar">
              <span className="progressbar--primary" style={{ width: '90%' }} />
            </div>
          </div>
          <div className="row content__wrap__progressbar text--secondary">
            <b>CSS</b>
            <div className="progressbar">
              <span className="progressbar--secondary" style={{ width: '80%' }} />
            </div>
          </div>
          <div className="row content__wrap__progressbar text--third">
            <b>Javascript</b>
            <div className="progressbar">
              <span className="progressbar--third" style={{ width: '50%' }} />
            </div>
          </div>
          <div className="row content__wrap__progressbar text--fifth--darken">
            <b>PHP</b>
            <div className="progressbar">
              <span className="progressbar--fourth" style={{ width: '30%' }} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 p-sm-2">
          <h2 className="pt-2 pb-2 pt-lg-0">My Skills</h2>
          <p>
            Coding in Visual Studio Code or Atom is my basement for almost
            every project. I have over 5 years of experience with HTML and CSS
            and over one year experience with Javascript like jQuery or React.
          </p>
          <p>
            WordPress, OpenCart and Joomla are CMS, which i used to for my
            projects or works.
          </p>
          <div className="mt-2"><a href="https://drive.google.com/open?id=1Nxpf1eybbpP251mugnUZFyYgHQG7FzPR" className="btn btn-primary">Download resume</a></div>
        </div>
      </div>
    </div>
  </div>

  <div className="content content__wrap content__wrap--services">
    <div className="content__wrap__text">
      <div className="row flex-center pb-xs-10 pb-lg-4 mt-sm-2">
        <p className="content__wrap__text--services__title">I love coding with:</p>
      </div>
      <div className="row featurimg container text-center">
        <div className="col-6 col-sm-2">
          <img src={imgwp} />
        </div>
        <div className="col-6 col-sm-2">
          <img src={imgreact} />
        </div>
        <div className="col-6 col-sm-2">
          <img src={imgnodejs} />
        </div>
        <div className="col-6 col-sm-2">
          <img src={imgnpm} />
        </div>
        <div className="col-6 col-sm-2">
          <img src={imghtml} />
        </div>
        <div className="col-6 col-sm-2">
          <img src={imgcss} />
        </div>
      </div>
      <div className="row block--primary p-1 mt-lg-4 p-lg-4">
        <div className="block col-12 col-lg-4 p-lg-2">
          <h3 className="pb-1 pt-1">Coding</h3>
          <p>
            For creating websites im using <span className="text--fourth">HTML5,CSS3 </span> and <span className="text--fourth">jQuery</span>. As prerocess i
            prefer <span className="text--fourth">SASS</span> instead of LESS and im trying to keep simple
            structure using <span className="text--fourth">BEM technics</span>. Loading speed is also very important stuff during development.
          </p>
        </div>
        <div className="block col-12 col-lg-4 p-lg-2">
          <h3 className="pb-1 pt-1">E-Commerce</h3>
          <p>
            I made few ecommerce sites based on open CMS like <span className="text--fourth">OpenCart</span> or <span className="text--fourth">WooCommerce</span>. This is the best solution for stores with few items, because you can <span className="text--fourth">save money</span> for creating websites using tailored system. 

          </p>
        </div>
        <div className="block col-12 col-lg-4 p-lg-2">
          <h3 className="pb-1 pt-1">Progressive Web Apps</h3>
          <p>
            Future tech is probably all about <span className="text--fourth">JavaScript</span>. Im still learning, how to use <span className="text--fourth">ReactJs</span> or <span className="text--fourth">Vue.js</span> on production sites. But i think, thats actually the only way for the best webdevelopment.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* <div className="footer">
    <div className="row p-1 text-center block-center">
    <div className="footer__icon p-1"><a href="https://www.facebook.com/mdolnicek"><img height="30" src={svgFb} /></a></div>
    <div className="footer__icon p-1"><a href="https://www.instagram.com/dollysdev"><img height="30" src={svgIg} /></a></div>
    <div className="footer__icon p-1"><a href="https://www.linkedin.com/in/marek-doln%C3%AD%C4%8Dek-79482561/"><img height="30" src={svgLinkedin} /></a></div>
    </div>
  </div> */}

  {/* {data.allWordpressPage.edges.map(document => (
  <div key={document.node.id} dangerouslySetInnerHTML={{ __html: document.node.content }} />
  ))} */}
</Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage {
    allWordpressPage(
      filter: { id: { eq: "0de4eebf-a649-5a56-84c0-cd76f029a067" } }
    ) {
      edges {
        node {
          id
          title
          content
          excerpt
          date
          modified
          slug
          status
        }
      }
    }
  }
`
