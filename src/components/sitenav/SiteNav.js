/** @jsx jsx */
import {jsx} from "@emotion/core"
import navbarStyles from "./styles"
function Navbar() {
    return (
        <nav css={navbarStyles}>
            <ul>
                <li>react-tracked</li>
                <li>react-hooks</li>
                <li>react-hooks-redux</li>
                <li>reactive-react-redux</li>
            </ul>
        </nav>
    )
}

export default Navbar
