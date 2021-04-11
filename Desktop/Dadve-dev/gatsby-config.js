module.exports = {
  siteMetadata: {
    title: `Рекламное агентство Dadve`,
    description: `Рекламное агентство полного цикла. Наша задача - за минимальное количество средств привести максимальное количество клиентов. SEO оптимизация, наружная реклама, раздача и печать промо-материала.`,
    author: `@IAndresI`,
    keywords:`Реклама, SEO, SMM, продвижение, баннер,листовки,клиенты,маркетинг,advertising,dadve, рекламное агентство,наружная реклама,SEO оптимизация,наружная реклама,раздача и печать промо-материала,Рекламное агентство полного цикла`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:500,600,700,900`,
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}