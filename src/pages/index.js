import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.indexTitle}</h1>
      <h6>"You're pretty cool" -me</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut
        pharetra sit amet aliquam. Commodo ullamcorper a lacus vestibulum sed.
        Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Sit
        amet consectetur adipiscing elit pellentesque habitant morbi.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        indexTitle
      }
    }
  }
`
