import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <div>
        <Link to="/contact/">Contact</Link>
      </div>
      <div>
        <Link to="/about/">About</Link>
      </div>
      <Link to="/about-css-modules/">About CSS Modules</Link>
      <Header headerText="Hello Karina!"></Header>
      <Header headerText="You're pretty cool"></Header>
      <p>What a world</p>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      />
    </Container>
  )
}
