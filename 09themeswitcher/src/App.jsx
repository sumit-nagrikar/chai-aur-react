
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  //actual varible and method to show changes in state
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    //find the element and remove the classmname light and dark cause we need to make it empty so that we can apply the mode we want that mensa the class we want
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  //dependency array 

  return (
    //wrapped the jsx with ThemeProvider so now the access is taken
    //But these are empty methods we declared inside components and we can define them here and definition will directly go to the actual method
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
