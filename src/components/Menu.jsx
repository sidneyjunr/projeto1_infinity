import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>

            <li>
            <Link to={"/mmorpg"}>MMORPG</Link>
            </li>

            <li>
                <Link to={"/fps"}>FPS</Link>
            </li>

            <li>
            <Link to={"/moba"}>MOBA</Link>
            </li>

            <li>
            <Link to={"/page404"}>Page404</Link>
            </li>

        </ul>
    </nav>
  )
}
