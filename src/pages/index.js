import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link> <Link to="/about/">About</Link>{" "}
      <Link to="/about-css-modules/">About CSS Modules</Link>
      <Container>
        <Header headerText="Hello Karina!"></Header>
        <Header headerText="You're pretty cool"></Header>

        <p>What a world</p>
      </Container>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      ></img>
    </div>
  )
}
