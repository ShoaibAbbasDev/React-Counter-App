import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function App() {

  const[num,incr]=useState(0);
  const inc = (event)=>{
    incr(num+1);
  }
  
  const dec = ()=>{
    if(num>0)
incr(num-1);
  }
  
  return (
    <div className="con">
    <h1>{num}</h1>
    <div className='btn'>
    <Button variant="contained" color="primary" onClick={inc} className='in'>Increment</Button>
    <Button variant="contained" onClick={dec}>decrement</Button>
    </div>
    </div>
  );
}

export default App;
