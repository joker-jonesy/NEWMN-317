import {Outlet, Link} from "react-router-dom";

function Settings() {
    return (
        <>
            <h1>Im settings</h1>
            <Link to="/settings/profile">Profile</Link>
            <Link to="/settings/appearance">Appearance</Link>
            <Outlet/>
        </>
    )
}

export default Settings;