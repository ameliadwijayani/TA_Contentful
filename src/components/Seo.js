import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, meta, title }) {
  
 
  const metaDescription = description || "Halaman web tentang ta ecom contentful"
  const defaultTitle = `TA ECOM CONTENTFUL`
  const keywords=`TA ECOM CONTENTFUL TOP SELLING LIVIDEAS HEADSET GAMING`

  return (
    <Helmet
      htmlAttributes={{
        lang:"id"
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `author`,
          content: "CONTENTFUL",
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
          content: "@TA-COM-CONTENTFUL" || ``,
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
          name: `google-site-verification`,
          content: "Hp0t1O2HuU3-AI298ARQ_S13lbJMyUymz5RWHMtw6DE",
        },
      ].concat(meta)}
    >
    <link rel="icon" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `id`,
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


