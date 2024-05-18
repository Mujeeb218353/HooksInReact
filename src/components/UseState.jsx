import { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState(1);
  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(
        <tr key={i}>
          <td> {number? number : 0} x {i} = {i * number}</td> 
        </tr>
      );
    }
    return table;
  };
  return (
    <div className="mx-5 shadow-md rounded-lg p-4 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3 text-3xl font-serif">
        UseState Hook
      </h1>
      <div className={"bg-blue-100 rounded p-5 flex flex-col"}>
        <input
          className="mt-2 focus:outline-none p-2 rounded-sm"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <div className={"bg-blue-100 rounded p-5 flex flex-col mt-2"}>
        <table className="mx-auto">
          <tbody>{generateTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default UseState;
