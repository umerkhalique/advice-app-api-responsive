import React from 'react'
import './QuoteHead.css'

export default function QuoteHead(props) {
  return (
    <div className="main">
        <h6 className="head">Advice # <span className="head">{props.head}</span></h6>
    </div>
  )
}
