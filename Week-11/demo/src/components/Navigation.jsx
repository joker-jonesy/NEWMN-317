import {useTheme} from "../context/ThemeContext.js";

function Navigation() {

    const {toggleTheme} = useTheme();
    return (
        <nav style={{background:"blue"}}>
            <h1>Im the Nav</h1>
            <button onClick={()=>toggleTheme()}>Change Theme</button>
        </nav>
    )
}

export default Navigation;