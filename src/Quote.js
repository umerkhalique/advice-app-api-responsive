import React from 'react'
import './Quote.css'

export default function Quote(props) {
  return (
      <div>
    <h1 className="quote">
        "{props.quote}"
    </h1>
    
    </div>
  )
}
