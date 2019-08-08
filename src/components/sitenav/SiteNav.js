/** @jsx jsx */
import {jsx} from "@emotion/core"
import navbarStyles from "./styles"
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav css={navbarStyles}>
            <ul>
                <li><Link to="/">hooks</Link></li>
                <li><Link to="/tracked">react-tracked</Link></li>
            
            </ul>
        </nav>
    )
}

export default Navbar
