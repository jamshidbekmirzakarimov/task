import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="w-[100%] max-w-[1100px] mx-auto">
      <div className="max-w-[300px] mb-7 p-10 flex items-center flex-col border rounded gap-5">
      <h1 className="text-2xl font-medium">Counter</h1>
      <div className="flex items-center gap-5">
      <button className="bg-blue-800 rounded-md py-[10px] px-[15px] text-base text-white" onClick={increment}>Increment</button>
      <p>{counter}</p>
      <button className="bg-red-600 rounded-md py-[10px] px-[15px] text-base text-white" onClick={decrement}>Decrement</button>
     </div>
      </div>
    </div>
  );
};

export default Counter;
