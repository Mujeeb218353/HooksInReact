import {useEffect, useState} from "react";


function UseEffect() {
    const [color, setColor] = useState('bg-red-500');
    const [update, setUpdate] = useState(0);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const setDivColor = (e) => {
        setUpdate(update+1);
        setColor(e.target.value);
    }
   

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <>
            <div className={'mx-10 shadow-md rounded-lg p-4 my-8 bg-gray-800'}>
                <h1 className='text-white text-center my-3 text-3xl font-serif'>UseEffect Hook</h1>
                <div className={` rounded p-5 flex flex-row justify-around ${color} flex-wrap`}>
                    <select onChange={setDivColor} className={`mt-2 focus:outline-none rounded p-5 drop-shadow-2xl`}>
                        <option value="bg-red-500">Red</option>
                        <option value="bg-green-500">Green</option>
                        <option value="bg-blue-500">Blue</option>
                        <option value="bg-yellow-500">Yellow</option>
                        <option value="bg-sky-500">Sky Blue</option>
                    </select>
                    <div className={`rounded flex items-center mt-2`}>
                        Color updated {update} time(s)
                    </div>
                </div>
                <div className='bg-blue-100 rounded p-5 flex flex-row justify-around mt-2'>
                    <div className={`rounded flex items-center`}>
                        Window Size: {windowSize}px
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseEffect;