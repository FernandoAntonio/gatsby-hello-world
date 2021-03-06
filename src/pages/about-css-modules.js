import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function AboutCssModules({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.aboutCssModulesTitle}</h1>
      <p>They're something</p>
      <User
        username="Fernando Antonio"
        avatar="https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754"
        excerpt="I'm Fernando.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <User
        username="Karina Dirane"
        avatar="https://www.mytalk1071.com/wp-content/uploads/2016/01/image_galleryuuidc59219cd-c8b3-45d8-bf2a-98277eed738agroupId10139t1452293593899"
        excerpt="I'm Karina. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in. Lobortis mattis aliquam faucibus purus in massa tempor. Bibendum ut tristique et egestas. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Interdum velit laoreet id donec ultrices tincidunt. Diam ut venenatis tellus in. Arcu non sodales neque sodales ut etiam. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.
        Vel pretium lectus quam id leo in vitae. Id eu nisl nunc mi. Nulla facilisi etiam dignissim diam quis. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Ullamcorper sit amet risus nullam eget. Suspendisse sed nisi lacus sed. Fames ac turpis egestas maecenas pharetra convallis posuere. Dui vivamus arcu felis bibendum ut tristique et egestas. Eget nulla facilisi etiam dignissim."
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        aboutCssModulesTitle
      }
    }
  }
`
