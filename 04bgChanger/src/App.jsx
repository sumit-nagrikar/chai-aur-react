import { useState } from "react"


function App() {
  //state variable to save initial bg-color and set method to update color
  const [color, setColor] = useState("olive")  

  return (
    //main screen size div
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      //div for creating a block there we are adding button elements
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        //button elements
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button//here we changed / updated the initial color by using setmethod
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
