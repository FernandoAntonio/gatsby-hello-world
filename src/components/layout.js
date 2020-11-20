import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const ListLink = props => (
  <li style={{ display: "inline-flex", marginRight: "1rem" }}>
    <Link to={props.to} style={{ textShadow: "none" }}>
      {props.children}
    </Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            indexLink
            contactLink
            pandasLink
            aboutLink
            aboutCssModulesLink
          }
        }
      }
    `
  )

  return (
    <div class="bg_image">
      <div style={{ margin: "0 3rem ", padding: " 1rem" }}>
        <header style={{ marginBottom: "1.5rem" }}>
          <ul style={{ display: "inline" }}>
            <ListLink to="/">{data.site.siteMetadata.indexLink}</ListLink>

            <ListLink to="/about-css-modules/">
              {data.site.siteMetadata.aboutCssModulesLink}
            </ListLink>
            <ListLink to="/pandas/">
              {data.site.siteMetadata.pandasLink}
            </ListLink>
            <ListLink to="/contact/">
              {data.site.siteMetadata.contactLink}
            </ListLink>
            <ListLink to="/about/">{data.site.siteMetadata.aboutLink}</ListLink>
          </ul>
        </header>
        {children}
      </div>
    </div>
  )
}
