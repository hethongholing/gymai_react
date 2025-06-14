import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import Sidebar from "./Sidebar";
function Main() {
  return (
    <>
      <Nav />
      <div className="d-flex">
        <Sidebar />
        <div style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Main;
