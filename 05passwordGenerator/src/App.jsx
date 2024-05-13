import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  //This is declared state variables and set methods for storing initial state and update them
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook , We created a ref using the useRef hook and assign it to the passwordRef variable.
  const passwordRef = useRef(null)

  //Here we are creating password
  //useCallback is used to optimization, this hook memomize the fn whole or a require amount
  //it avoid unnecessary ee-render by memoising the result of function calls
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
/*In React, useCallback is used to memoize functions. It returns a memoized version of the callback function
    that only changes if one of the dependencies has changed. This can be useful when passing callbacks to child 
      components to prevent unnecessary re-renders.*/

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    //this will give use the access of window and clipboard in react and using write text we can select and copy the input
    window.navigator.clipboard.writeText(password)
  }, [password])

  /*It performs side effects in function components.
The callback function inside useEffect is executed after every render if any of its dependencies change.
It's useful for handling side effects like data fetching, subscriptions, or manually changing the DOM in React components.*/
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          //now we can use this reffence wherever we want
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>

        //creatd one cursor pointer which will range from
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>

      //number allowed check box to take input as numbers will be allowed im the password or not
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            //when the change will happen this meyhod reverse the value
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      //char allowed check box to take input as char will be allowed im the password or not
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
