import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'


import Layout from '../components/layout'

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const resolutions = (post.featured_media) ? post.featured_media.localFile.childImageSharp.resolutions : null


        console.log(resolutions)

        return (
            <Layout>
                <div className="container post p-1 pb-2">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {/* <img src={post.acf.image.source_url} /> */}

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            acf {
                image {
                  id
                   source_url
                }
              }
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`