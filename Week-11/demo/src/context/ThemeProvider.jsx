import {ThemeContext} from "./ThemeContext.js"
import { useState} from "react";

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");


    return <ThemeContext value={{theme, toggleTheme}}>{children}</ThemeContext>
}