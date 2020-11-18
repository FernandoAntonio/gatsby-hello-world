import { Link } from "gatsby"
import React from "react"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to} style={{ textShadow: "none" }}>
      {props.children}
    </Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div class="bg_image">
      <div style={{ margin: " 0 3rem ", maxWidth: 800, padding: "0 3rem" }}>
        <header style={{ marginBottom: "1.5rem" }}>
          <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
            <h3 style={{ display: "inline" }}>Karina's site</h3>
          </Link>
          <ul style={{ listStyle: "none", float: "right" }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/about-css-modules/">CSS Module</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children}
      </div>
    </div>
  )
}
