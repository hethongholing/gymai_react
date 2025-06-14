import React from "react"; 
import { Link, NavLink } from "react-router-dom";
function Sidebar() {
      const getNavClass = ({ isActive }) =>
        isActive ? "nav-link text-white " : "nav-link text-white fw-bold";
  return (
        <aside
          className="text-white p-3"
          style={{
            minHeight: "100vh",
            width: "250px",
          }}>
          <div className="text-center mb-4">
            <img
              alt="Avatar"
              className="rounded-circle mb-2"
              src="/images/hay.jpg"
              width="60"
            />
            <h6 className="fw-bold mb-0">Admin</h6>
            <small className="text-muted">Chào mừng bạn trở lại</small>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin">
                Tổng quan
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="/admin/dashboard">
                Bảng điều khiển
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="/admin/membership">
                Quản lý hội viên
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Quản lý gói tập
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Quản lý mã giảm giá
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Quản lý Checkin/Checkout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Quản lý nội bộ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Bảng quản lý thu chi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Báo cáo doanh thu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Lịch luyện tập
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="#">
                Cài đặt hệ thống
              </NavLink>
            </li>
          </ul>
        </aside>
  );
}

export default Sidebar;