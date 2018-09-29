module.exports = {
    siteMetadata: {
        title: 'Frontend developer and coder. I like CSS, Javascript and Wordpress.',
        subtitle: `coder, developer, wordpress, woocommerce, freelancer`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "wordpress.dollys.eu",
                protocol: "https",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages/`,
            },
          },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-image',
        `gatsby-plugin-sass`
    ]
};
