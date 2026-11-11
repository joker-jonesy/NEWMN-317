import Navigation from "./components/Navigation.jsx";
import {useTheme} from "./context/ThemeContext.js";
import Main from "./components/Main.jsx";


function App() {
    const {theme} = useTheme();


    let style = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    }

    return (
        <div style={style}>
            <Navigation/>
            <div className="App">
                <Main/>
            </div>
        </div>

    )
}

export default App;