import SetList from "./pages/SetList.jsx";
import {Routes, Route} from "react-router-dom";
import Pokemon from "./pages/Pokemon.jsx";
function App() {
    return (
        <Routes>
            <Route exact path="/" element={<SetList />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>


    )
}

export default App;