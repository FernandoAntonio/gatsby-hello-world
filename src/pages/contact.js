import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"

export default function Contact() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Header headerText="Contact Karina"></Header>
      <p>You can call +1 123123123.</p>
    </Container>
  )
}
