import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ 
  title, 
  description, 
  pathname, 
  children,
  article = false,
  image,
  datePublished,
  dateModified 
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
        }
      }
    }
  `)

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
    keywords
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: image ? `${siteUrl}${image}` : null,
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "WebSite",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    ...(article && {
      author: {
        "@type": "Organization",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: author,
      },
      datePublished,
      dateModified,
    }),
    ...(seo.image && {
      image: seo.image,
    }),
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {children}
    </>
  )
}

export default SEO