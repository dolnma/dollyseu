import React from 'react'
import Link from 'gatsby-link'

import imgwp from '../img/wp.png' // Tell Webpack this JS file uses this image
import imgwoo from '../img/woocommerce.png'
import imgreact from '../img/react.png'
import imghtml from '../img/html.png'
import imgcss from '../img/css.png'
import imgnpm from '../img/npm.png'
import imgnodejs from '../img/nodejs.png'

import svgFb from '../img/fb.svg'
import svgIg from '../img/ig.svg'
import svgLinkedin from '../img/linkedin.svg'

const SecondPage = ({ data }) => (
<div>
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
          <a href="https://steamcommunity.com/id/dolnma/">Steam community</a>.
        </h2>
        <p>Feel free to contact me about work or help :)</p>
        <a href="mailto:marek.dolnicek@gmail.com" className="btn btn-primary text--white">Contact me!</a>
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
          <button className="btn btn-primary">Download resume</button>
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
            For creating websites im using HTML5 and CSS3. As preprocess i
            prefer SASS instead of LESS and im trying to keep simple
            structure using BEM technics.
          </p>
        </div>
        <div className="block col-12 col-lg-4 p-lg-2">
          <h3 className="pb-1 pt-1">e-commerce</h3>
          <p>
            For creating websites im using HTML5 and CSS3. As preprocess i
            prefer SASS instead of LESS and im trying to keep simple
            structure using BEM technics.
          </p>
        </div>
        <div className="block col-12 col-lg-4 p-lg-2">
          <h3 className="pb-1 pt-1">Progressive Web Apps</h3>
          <p>
            For creating websites im using HTML5 and CSS3. As preprocess i
            prefer SASS instead of LESS and im trying to keep simple
            structure using BEM technics.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="footer">
    <div className="row p-1 text-center block-center">
    <div className="footer__icon p-1"><a href="https://www.facebook.com/mdolnicek"><img height="30" src={svgFb} /></a></div>
    <div className="footer__icon p-1"><a href="https://www.facebook.com/mdolnicek"><img height="30" src={svgIg} /></a></div>
    <div className="footer__icon p-1"><a href="https://www.facebook.com/mdolnicek"><img height="30" src={svgLinkedin} /></a></div>
    </div>
  </div>

  {/* {data.allWordpressPage.edges.map(document => (
  <div key={document.node.id} dangerouslySetInnerHTML={{ __html: document.node.content }} />
  ))} */}
</div>
)

export default SecondPage

export const pageQuery = graphql`
  query PageTwo {
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
