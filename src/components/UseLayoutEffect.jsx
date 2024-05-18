import { useState, useLayoutEffect } from "react";

const UseLayOutEffect = () => {
  const [num, setNum] = useState(0);
  useLayoutEffect(() => {
    if(num === 0){
      setNum(num+(Math.ceil(Math.random()*1000)));
    }
  },[num])
  return (
    <div className="mx-5 shadow-md rounded-lg p-4 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3 text-3xl font-serif">
        Use Layout Effect Hook
      </h1>
      <div className={"bg-blue-100 rounded p-5 flex flex-col"}>
        <p className="text-center my-3 text-2xl mx-auto">{num}</p>
        <button
          onClick={() => setNum(0)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 "
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default UseLayOutEffect;
