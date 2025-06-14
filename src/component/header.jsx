import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const getNavClass = ({ isActive }) =>
        isActive ? "nav-item nav-link active" : "nav-item nav-link";

  return (
            <div className="container-fluid header-top">
            <div className="nav-shaps-2" />
            <div className="container d-flex align-items-center">
            <div className="d-flex align-items-center h-100">
                <Link
                className="navbar-brand"
                to="/"
                style={{
                    height: "125px",
                }}>
                <h1 className="text-primary mb-0">GYMAI</h1>
                </Link>
            </div>
            <div className="w-100 h-100">
                <div
                className="topbar px-0 py-2 d-none d-lg-block"
                style={{
                    height: "45px",
                }}>
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <div className="pe-4">
                        <a
                            className="text-muted small"
                            href="mailto:example@gmail.com">
                            <i className="fas fa-envelope text-primary me-2" />
                            example@gmail.com
                        </a>
                        </div>
                        <div className="pe-0">
                        <a
                            className="text-muted small"
                            href="mailto:example@gmail.com">
                            <i className="fa fa-clock text-primary me-2" />
                            Mon - Sat: 8.00 am-7.00 pm
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-flex justify-content-end">
                        <div className="d-flex align-items-center small">
                        <Link
                            className="login-btn text-body me-3 pe-3" to={"/login"}>
                            {" "}
                            <span>Đăng nhập</span>
                        </Link>
                        <Link className="text-body me-3" to={"/register"}>
                            {" "}
                            Đăng Ký
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="nav-bar px-0 py-lg-0"
                style={{
                    height: "80px",
                }}>
                <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                    <a className="navbar-brand-2" href="#">
                    <h1 className="text-primary mb-0"> GYMAI</h1>
                    </a>
                    <button
                    className="navbar-toggler"
                    data-bs-target="#navbarCollapse"
                    data-bs-toggle="collapse"
                    type="button">
                    <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-0 mx-lg-auto">
                        <NavLink className={getNavClass} to="/home">Trang Chủ</NavLink>
                        <NavLink className={getNavClass} to="/about">Giới Thiệu</NavLink>
                        <NavLink className={getNavClass} to="/benefit">Tính năng</NavLink>
                        <NavLink className={getNavClass} to="/servicepackage">Gói dịch vụ</NavLink>
                        <NavLink className={getNavClass} to="/features">Lợi ích</NavLink>
                        <NavLink className={getNavClass} to="/team">Đội ngũ của chúng tôi</NavLink>
                        <NavLink className={getNavClass} to="/contact">Liên hệ</NavLink>
                        <div className="d-lg-none d-flex flex-column ps-3 mt-2">
                        <Link className="login-btn text-body mb-2" to="/login">
                        <span>Đăng nhập</span>
                        </Link>
                        <Link className="text-body" to="/register">
                        Đăng ký
                        </Link>
                    </div>
                        <div className="nav-btn ps-3">
                            
                        <button
                            className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                            data-bs-target="#searchModal"
                            data-bs-toggle="modal">
                            <i className="fas fa-search" />
                        </button>
                        </div>
                        <div className="nav-shaps-1" />
                    </div>
                    </div>
                </nav>
                </div>
            </div>
            </div>
        </div>
  );
}

export default Header;
