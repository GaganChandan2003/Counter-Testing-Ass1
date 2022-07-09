import {useState} from 'react'
import './App.css';
import Counter from './components/Counter';

function App() {
  const [count, setcount] = useState(0);
  const handleInc=()=>
  {
    setcount(count+5);
  }
  const handleDec=()=>
  {
    setcount(count-5);
  }
  return (
    <div className="App">
     <h2 data-testid="count">Counter : {count}</h2>
     <Counter data-testid="btn" Inc={()=>handleInc()}>INC</Counter>
     <Counter data-testid="btn" Dec={()=>handleDec()}>DEC</Counter>
    </div>
  );
}

export default App;
