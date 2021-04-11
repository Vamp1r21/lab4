/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const defaultKeywords = site.siteMetadata?.keywords


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      meta={[
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0,maximum-scale=1.0,shrink-to-fit=no, user-scalable=no`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: defaultKeywords,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `yandex-verification`,
          content: `a6922d2cad5d05d2`,
        },
      ].concat(meta)}

      script={[
                  {"src": "./yandex.js", "type": "text/javascript"},
                  {"type": "application/ld+json", innerHTML:  `{ "@context": "http://www.schema.org", "@type": "Organization", "name": "Рекламное агентство Dadve ", "url": "https://dadve.com/", "logo": "https://dadve.com/static/logo-69a80bb19aadac19c6b1619fcfb101a0.svg", "description": "Рекламное агентство полного цикла. Наша задача - за минимальное количество средств привести максимальное количество клиентов. SEO оптимизация, наружная реклама, раздача и печать промо-материала.", "address": { "@type": "PostalAddress", "postOfficeBoxNumber": "info@dadve.com" }}`},
              ]}

        img = {[

        {"src":"https://mc.yandex.ru/watch/73227934","style":"position:absolute; left:-9999px;"},
          ]}

        link={[
               {"rel": "icon", "href": "/favicon-32x32","type":"image/png"},
              ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
