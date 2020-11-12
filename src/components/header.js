import React from "react"

export default function Header(props) {
  return (
    <h1
      style={{
        color: "green",
        fontSize: "32px",
        fontWeight: "bolder",
        fontFamily: "Georgia",
      }}
    >
      {props.headerText}
    </h1>
  )
}
