import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from "./components/Navigation.jsx";
import Products from "./pages/Products.jsx"
import Settings from "./pages/Settings.jsx"
import Appearance from "./components/settings/Appearance.jsx"
import Profile from "./components/settings/Profile.jsx"

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/products/:id"} element={<Products/>}/>
                <Route path={"/settings"} element={<Settings/>}>
                  <Route path={"/settings/appearance"} element={<Appearance/>}/>
                  <Route path={"/settings/profile"} element={<Profile/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;