import React from 'react'
import './Quote.css'

export default function Quote(props) {
  return (
      <div>
    <h1 className="quote">
        "{props.quote}"
    </h1>
    <div className="hrdiv">
        <hr></hr>
        <div></div>
        <div className="hrdivv"></div>
        <div className="hrdivv"></div>
        <div></div>
        <hr></hr>
    </div>
    </div>
  )
}
