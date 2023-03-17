import { useState } from 'react';
import './App.css';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('duynghiadev');

  function handleIncreaseClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={handleIncreaseClick}>Increase count</button>

      {showMore && <p>{name} </p>}
    </div>
  );
}

export default App;
