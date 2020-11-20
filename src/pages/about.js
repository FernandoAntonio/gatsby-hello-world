import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.aboutTitle}</h1>
      <p>Such wow. Very pretty.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut
        pharetra sit amet aliquam. Commodo ullamcorper a lacus vestibulum sed.
        Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Sit
        amet consectetur adipiscing elit pellentesque habitant morbi. Commodo
        ullamcorper a lacus vestibulum sed arcu non. Neque volutpat ac tincidunt
        vitae semper quis lectus nulla at. Nascetur ridiculus mus mauris vitae
        ultricies leo integer malesuada nunc. Facilisi nullam vehicula ipsum a
        arcu cursus vitae congue mauris. Fames ac turpis egestas integer eget
        aliquet nibh praesent tristique. Orci eu lobortis elementum nibh tellus.
        Sed enim ut sem viverra. Tempus iaculis urna id volutpat lacus laoreet
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        aboutTitle
      }
    }
  }
`
