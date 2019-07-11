const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Ali T. Atici",
    description:
      "A personal, informational website and design/development playground for Ali Talha Atici"
  },
  pathPrefix: "/blog",
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ali Talha Atici Personal website",
        short_name: "AliTAtici",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#353535",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "minimal-ui",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Add any options here
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images")
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        //SPACE_ID build environment variable from Netlify or Gatsby?
        spaceId: "oghc6wtiomc3",
        //DELIVERY_API_TOKEN build environment variable from Netlify or Gatsby?
        accessToken:
          "9f37d0ec8416ebe8c9c11b5db58b1a85d39c0f369f15fcc863b47f53c32179e7"
      }
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jacob D. Castro Personal Website",
        short_name: "personal",
        start_url: "/",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-130258530-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',

        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10
        // cookieDomain: 'jacobdcastro.com',
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-lodash"
  ]
};
