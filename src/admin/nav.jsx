import React from "react"; 

function Nav() {
  return (
<nav className="navbar navbar-expand-lg bg-dark text-white px-4 py-2 shadow-sm">
  <a className="navbar-brand fw-bold fs-5 text-white" href="#">
    GYMAI Admin
  </a>
  <div className="ms-auto d-flex align-items-center gap-3">
    <span className="fw-semibold small">Xin chào, <span className="fw-bold">Admin</span></span>
    <a className="btn btn-outline-light btn-sm d-flex align-items-center gap-1 py-1 px-2 rounded-pill" href="/index.html">
      <i className="fas fa-sign-out-alt" />
      <span className="small">Đăng xuất</span>
    </a>
  </div>
</nav>

  );
}

export default Nav;