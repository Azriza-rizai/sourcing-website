import { Outlet } from "react-router";
import "../css/Layout.css";
import Navmenu from "./Navmenu.jsx";
function Layout() {
  return (
    <>
      <header>
        <Navmenu/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>2025 The EU-CHINA Sourcing Co. All rights reserved.</footer>
    </>
  );
}

export default Layout;
