import "../css/Navmenu.css";

function Navmenu() {
    return (
        <nav className="header logo">
            <ul className="nav-links">
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

export default Navmenu;
