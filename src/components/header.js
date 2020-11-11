import React from "react"

export default function Header(props){
return <h1 style={{color: 'green',fontSize: '18px', fontWeight: 'lighter',fontFamily: 'Sans-Serif'}}>{props.headerText}</h1>
}