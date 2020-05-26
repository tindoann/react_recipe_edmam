import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = '03d93cf5'; 
  const APP_KEY = '9948c5638b7f38a81cc4f0132b996751'
  const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}`

  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    console.log('Effect has been run'); 
  }); 

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  ); 
}; 

export default App; 
