import React, { useState } from "react";

const UseStateCounter = () => {

  const [counter, setCounter] = useState(0);

  const incrementCount = ()=>{
    setCounter(counter+1);
  }

  const decrementCount = ()=>{
    setCounter(counter-1);
  }

  const resetCount = ()=>{
    setCounter(0);
  }

  const incrementLaterCount = ()=>{
    setTimeout(()=>{
      setCounter((counter)=>{
        return counter + 1;
      });
    },2000);
  }

  return <>
      <h2>useState counter example</h2>;
      <section style = {{margin :'4rem 0'}}>
          <h2>Regular Counter</h2>
          <h1>{counter}</h1>
          <button className='btn' onClick={incrementCount}>Increment</button>
          <button className='btn' onClick={resetCount}>Reset</button>
          <button className='btn' onClick={decrementCount}>Decrement</button>
      </section>

    <section style={{ margin: '4rem 0' }}>
      <h2>Complex Counter</h2>
      <h1>{counter}</h1>
      <button className='btn' onClick={incrementLaterCount}>Increment Later</button>
    </section>
    </>
};

export default UseStateCounter;
