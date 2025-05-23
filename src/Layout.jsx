import { Outlet } from "react-router";
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
      <footer>2025 The Sourcing Co. All rights reserved.</footer>
    </>
  );
}

export default Layout;
