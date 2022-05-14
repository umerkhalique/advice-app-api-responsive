import './App.css';
import QuoteHead from './QuoteHead'
import Quote from './Quote'
import axios from 'axios';
import React, { useState } from 'react';

function App() {
const [advice, setAdvice] = useState('');
const [id, setId] = useState('');

  function getAdvice(){
    axios.get('https://api.adviceslip.com/advice').then((response) =>{
    setAdvice(response.data.slip.advice);
    setId(response.data.slip.id)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <div className="card-main">
        <QuoteHead head={id}/>
        <Quote quote={advice}/>
      </div>
      <div>
        <button onClick={getAdvice}>click me</button>
      </div>
    </div>
  );
}

export default App;
