import Nav from "./Nav"
import { Link } from "react-router-dom"

export default function Header() {
    // JS comment
    return(
        <header id="header">
                    <div className="logo">
                        <Link to="/">
                        <h2 className="site-name">Portfolio: Maria Alejandra.</h2>
                        </Link>
                </div>
            <Nav/>
        </header>
    )
}