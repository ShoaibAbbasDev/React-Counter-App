import React, {useState} from 'react'; //using react useState hook
import './App.css';

function App() {
  let [count,setcount]=useState(1);
 
  return (
    <div className="night"> 
      <div className='box'>
      <h2>Increment Operation</h2>
      <form>
        <input type="number" value={count}></input>
       
      </form>
      <button onClick={()=> setcount(++count) // adding ++count
      } >Increment</button>
      
      </div>

    </div>
  );
}

export default App;
