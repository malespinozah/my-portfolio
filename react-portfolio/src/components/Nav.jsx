import { NavLink } from "react-router-dom"
export default function Nav() {
    return(
        <nav id="main-navigation">
            <ul>
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}