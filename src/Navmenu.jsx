
import "./Order.css";
import NavManu from "./Navmenu";       

function NavManu() {    
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/order">Order</a>
                </li>
                <li>
                    <a href="/partners">Partners</a>
                </li>
            </ul>
        </nav>
    );
}
export default NavManu;
// This component is a simple navigation menu with links to Home, About, and Contact pages.