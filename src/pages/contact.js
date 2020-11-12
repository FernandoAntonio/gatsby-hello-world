import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Contact Karina"></Header>
      <p>You can call +1 123123123.</p>
    </div>
  )
}
