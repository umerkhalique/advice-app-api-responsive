import './App.css';
import QuoteHead from './QuoteHead'
import Quote from './Quote'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
const [advice, setAdvice] = useState('');
const [id, setId] = useState('');

useEffect(() => {
  getAdvice();
}, [])
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
      <div className="btn-div">
        <button className="btn" onClick={getAdvice}><i class="fa-solid fa-dice-five dicee"></i></button>
      </div>
    </div>
  );
}

export default App;
