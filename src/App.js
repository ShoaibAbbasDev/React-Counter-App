import React, {useState} from 'react'; //using react useState hooks in funtional component
import './App.css';

function App() {
  let [count,setcount]=useState(1);
  
 
  return (
    <div className="night"> 
      <div className='box'>
      <h1>Increment Operation</h1>
      <form>
        <input type="number" value={count}></input>
       
      </form>
      <button onClick={()=> setcount(count=count+1) // adding count=count+1
      } >Increment</button>
      </div>

    </div>
  );
}

export default App;
