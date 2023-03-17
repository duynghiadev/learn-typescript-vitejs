import { useState } from 'react';
import './App.css';

// pure function
// impure function
let run = 0;
function calcCount() {
  run += 5;
  console.log('calc count: ', run);
  return 10;
}

function App() {
  let i = 0;

  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(calcCount);
  const [name, setName] = useState('duynghiadev');

  function handleIncreaseClick() {
    const newCount = count + 1;
    setCount(count + 1); // những hàm setState là async function
    console.log('after setting count is old value: ', count); // old value
    console.log('after setting count is new value: ', newCount); // new value

    i += 5;
  }

  console.log({ count, i });

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={handleIncreaseClick}>Increase count</button>

      {showMore && <p>{name} </p>}
    </div>
  );
}

export default App;
