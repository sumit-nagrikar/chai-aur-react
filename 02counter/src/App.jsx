import { useState } from 'react'//usestate hook
import './App.css'

function App() {
//created state variable and set method/update method
  const [counter, setCounter]  = useState(15)// 15 is a initial state value

  const addValue = () => {
    //counter = counter + 1
    //set method takes a callback function in usestate, like this callback give use previously updated value and we can work with that in next step
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    //if we directly wrote like this always work with the initial state value
    setCounter(counter - 1)
  }
  
  return (//here we are returnig a html which will renderd on the webpage in div root
    <>       //fragments
      //heading
      <h1>Chai aur react</h1>

      //cuurrent counter value
      <h2>Counter value: {counter}</h2>

      //addValue button which will increase the counter value 
      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
