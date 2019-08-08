/** @jsx jsx */
import {jsx} from "@emotion/core"
import navbarStyles from "./styles"
function Navbar() {
    return (
        <nav css={navbarStyles}>
            <ul>
                <li>hooks+context</li>
                <li>react-tracked</li>
            
            </ul>
        </nav>
    )
}

export default Navbar
