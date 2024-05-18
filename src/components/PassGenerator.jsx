import { useCallback, useEffect, useRef, useState } from "react";

function PassGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "@$";
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  const passwordRef = useRef(null);
  const copyPassOnClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className=" mx-5 shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 text-3xl font-serif">
          Password Generator
        </h1>
        <h3 className="text-white text-center my-3 text-2xl">using</h3>
        <h3 className="text-white text-center my-3 text-2xl">
          useState, useCallback, useEffect, useRef
        </h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-2"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-sky-600 text-white px-4 py-2"
            onClick={copyPassOnClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm flex-col">
          <div className="flex gap-x-1 items-center">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <label>Length: {length}</label>
          <div className="flex gap-x-1 items-center">
            Numbers
            <input
              type="checkbox"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>
          <div className="flex gap-x-1 items-center">
            Characters
            <input
              type="checkbox"
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGenerator;