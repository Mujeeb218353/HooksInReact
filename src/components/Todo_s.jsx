import { memo } from "react";

// eslint-disable-next-line react/prop-types
const Todo_s = ({ todo, addTodo }) => {
  console.log("Child render");
  return (
    <div className={"bg-blue-100 rounded p-5 flex flex-col"}>
      <button
        onClick={() => {
          addTodo();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto mt-1"
      >
        Add Todo
      </button>
      {
        // eslint-disable-next-line react/prop-types
        todo.map((todo, index) => {
          return (
            <p
              className="bg-white text-center my-2 text-2xl shadow-md rounded p-2"
              key={index}
            >
              {todo}
              {index + 1}
            </p>
          );
        })
      }
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Todo_s);
