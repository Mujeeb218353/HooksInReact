import { useCallback, useState } from "react";
import Todo_s from "./Todo_s";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    return setTodo([...todo,'Todo:']);
  },[todo]);
  
  return (
    <div className="mx-10 shadow-md rounded-lg p-4 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3 text-3xl font-serif">
        Use Callback Hook
      </h1>
      <div className={"bg-blue-100 rounded p-5 flex flex-col"}>
       <Todo_s todo={todo} addTodo={addTodo} />
      </div>
      <div className={"bg-blue-100 rounded p-5 flex flex-col mt-2"}>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 "
        >
          Increment
        </button>
        <h1 className="text-center my-3 text-2xl">Count: {count}</h1>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 "
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseCallback;