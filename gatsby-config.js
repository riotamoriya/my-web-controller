/**
 * @type {import('gatsby').GatsbyConfig}
 **/

module.exports = {
  pathPrefix: "/my-web-controller",
  siteMetadata: {
    title: `発火コントローラ`,
    author: `@riotamoriya`,
    siteUrl: `https://riotamoriya.github.io/my-web-controller/`,
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `発火コントローラ`,
        short_name: `発火コントローラ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2e2f41`,
        display: `standalone`,
        icon: `./favicon.jpg`, // このパスにはあなたのファビコンの画像へのパスを指定します。
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', Disallow: '/' }]
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inumaki_voices`,
        path: `${__dirname}/static/character-set/inumaki/voices/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inumaki_illusts`,
        path: `${__dirname}/static/character-set/inumaki/illusts/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
  ],
};

