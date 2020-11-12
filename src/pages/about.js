import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"

export default function About() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Header headerText="About Karina"></Header>
      <p>Such wow. Very pretty.</p>
    </Container>
  )
}
