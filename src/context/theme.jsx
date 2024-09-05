import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const setDarkTheme = () => setTheme('dark');
    const setLightTheme = () => setTheme('light');

    return (
        <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 

export default ThemeProvider;