import { createContext, useContext } from "react";

created context and provided it with a object
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// created provider and exported it with a variable
export const ThemeProvider = ThemeContext.Provider

//exported a function by using this fn we use the context everywhere we want
//just need to import this useTheme and we can use the insider variables and methods
export default function useTheme(){
    return useContext(ThemeContext)
}
