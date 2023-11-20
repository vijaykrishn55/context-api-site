import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import Card from "./components/Card";
import Btn from "./components/Btn";

export default function App() {
  const [ThemeMode,setThemeMode]=useState("light")
  const darkMode=()=>{
    setThemeMode("light")
  }
  const lightMode=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    const html=document.querySelector("html")
    html.classList.remove("dark","light")
    html.classList.add(ThemeMode)
  },[ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
