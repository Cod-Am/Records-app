import './App.css';
import Header from './Components/Header';
import React,{useState} from 'react';

function App() {
  const [num,setnum]=useState(1)
  function inc(){
    setnum(num+1)
  }
  function dec(){
    setnum(num-1)
  }
  return (
    <div>
      <Header />
      <div className='main'>
        <h1 className='heading' >{num}</h1>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
      </div>
    </div>
  );
}

export default App;