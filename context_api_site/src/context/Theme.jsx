import {useContext,createContext} from 'react'

export const ThemeContext=createContext({
    ThemeMode:'light',
    darkMode:()=>{},
    lightMode:()=>{},

})

export const ThemeProvider =ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}