import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import logo from "../images/logo.png"
function SEO({ description, meta, title }) {
  
  const titles= "TA ECOM CONTENTFUL STUDY KASUS 2"
  const metaDescription = description || "Halaman web tentang ta ecom contentful study kasus ke 2. Halaman ini merupakan marketplace yang datanya diambil dari contentful CMS. Untuk Auth dari page ini tidak bisa karena dihosting melalui netlify. Netlify tidak mendukung redirect ke halaman library auth."
  const keywords=`TA TOP SELLING LIVIDEAS HEADSET GAMING LAPTOP `

  return (
    <Helmet
      htmlAttributes={{
        lang:"id"
      }}
      title={titles}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titles,
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
    <link rel="icon" src={logo}/>
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


