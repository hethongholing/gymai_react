import React from "react"; 
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
        <div className="bg-light">
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{
                minHeight: "100vh",
                }}>
                <div
                className="card shadow p-4"
                style={{
                    maxWidth: "400px",
                    width: "100%",
                }}>
                <div className="text-center mb-4">
                    <h2 className="text-primary mb-2">Đăng ký</h2>
                    <p className="text-muted">Tạo tài khoản mới tại GYM.Ai</p>
                </div>
                <form>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="registerName">
                        Họ và tên
                    </label>
                    <input
                        className="form-control"
                        id="registerName"
                        placeholder="Nhập họ và tên"
                        required
                        type="text"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="registerEmail">
                        Email
                    </label>
                    <input
                        className="form-control"
                        id="registerEmail"
                        placeholder="Nhập email"
                        required
                        type="email"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="registerPassword">
                        Mật khẩu
                    </label>
                    <input
                        className="form-control"
                        id="registerPassword"
                        placeholder="Nhập mật khẩu"
                        required
                        type="password"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="registerPassword2">
                        Nhập lại mật khẩu
                    </label>
                    <input
                        className="form-control"
                        id="registerPassword2"
                        placeholder="Nhập lại mật khẩu"
                        required
                        type="password"
                    />
                    </div>
                    <button className="btn btn-primary w-100" type="submit">
                    Đăng ký
                    </button>
                </form>
                <div className="text-center mt-3">
                    <a className="text-primary" href="login.html">
                    Đã có tài khoản? Đăng nhập
                    </a>
                </div>
                <div className="text-center mt-2">
                    <Link className="btn btn-link" to="/">
                    ← Quay lại trang chủ
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Register;