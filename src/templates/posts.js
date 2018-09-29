import React, { Component } from "react";
import Link from "gatsby-link";
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
        <Layout>
        <div className="posts">
            <div className="projects__title p-1 text-center">
            <h4>{pageCount} posts</h4>
    </div>
    <div className="container p-1">
    <div className="col-lg-6 mt-3 p-1 block--shadow block--white">

            {group.map(({ node }) => (
                <div key={node.slug} className={"post"}>

                <img alt="post image" src={node.acf.image.source_url} />


                    <Link to={'/post/' + node.slug}>
                        <h3 className="pt-1 pb-1 text--third">{node.title}</h3>
                    </Link>

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
            ))}
                        </div>
            <div className="previousLink">
                <NavLink test={first} url={"/posts/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={"/posts/" + nextUrl} text="Go to Next Page" />
            </div>
            </div>
            </div>
            </Layout>
    );
};
export default IndexPage;