import { useReducer } from 'react';

const UseReducer = () => {
    const reducer = (state, action) => {
        switch (action) {
          case 'increment':
            return state + 1;
          case 'decrement':
            return state >= 1 ? state - 1 : 0;
          default:
            throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="mx-5 shadow-md rounded-lg p-4 my-8 bg-gray-800">
      <h1 className='text-white text-center my-3 text-3xl font-serif'>UseReducer Hook</h1>
      <div  className={'bg-blue-100 rounded p-5 flex flex-col'}>
        <button onClick={() => dispatch('increment')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 '>Increment</button>
        <h1 className='text-center my-3 text-2xl'>Count: {state}</h1>
        <button onClick={() => dispatch('decrement')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-50 '>Decrement</button>
      </div>
    </div>
  )
}

export default UseReducer;