import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default function Home() {

  return <div  >
    <Header headerText= 'Hello Karina!'></Header>
    <Header headerText= "You're pretty cool"></Header>
    <p>What a world</p>
    <Link to='/contact/'>Contact</Link>
    <Link to='/about/'>About</Link>
    <img src='https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'></img>
    </div>
}
