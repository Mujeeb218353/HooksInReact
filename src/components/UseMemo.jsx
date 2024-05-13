import { useMemo, useState } from "react";

function UseMemo() {
  const [show, setShow] = useState(false);
  const [myNum, setMyNum] = useState(0);
  const findNumber = (num) => {
    console.log("Calculating...");
    for (let i = 0; i <= 300000000; i++) {
    //   console.log(num);
    }
    return num;
  };
  const CheckData = useMemo(() => {
    return findNumber(myNum);
  },[myNum]);
  return (
    <div className="mx-10 shadow-md rounded-lg p-4 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3 text-3xl font-serif">
        UseMemo Hook
      </h1>
      <div className={"bg-blue-100 rounded p-5 flex flex-col"}>
        <p className="text-center my-3 text-2xl">
          My new number is : {CheckData}
        </p>
        <button
          onClick={() => {
            setMyNum(myNum + 1);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 "
        >
          Increment
        </button>
      </div>
      <div
        className={"bg-blue-100 rounded p-5 flex flex-row justify-around mt-2"}
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 "
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Click Me Please..." : "You clicked me!"}
        </button>
      </div>
    </div>
  );
}

export default UseMemo;
