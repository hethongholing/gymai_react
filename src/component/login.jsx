import React from "react"; 
import { Link } from "react-router-dom";
function Login() {
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
                    <h2 className="text-primary mb-2">Đăng nhập</h2>
                    <p className="text-muted">Chào mừng bạn đến với GYM.Ai</p>
                </div>
                <form>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="loginEmail">
                        Email
                    </label>
                    <input
                        className="form-control"
                        id="loginEmail"
                        placeholder="Nhập email"
                        required
                        type="email"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="loginPassword">
                        Mật khẩu
                    </label>
                    <input
                        className="form-control"
                        id="loginPassword"
                        placeholder="Nhập mật khẩu"
                        required
                        type="password"
                    />
                    </div>
                    <div className="mb-3 form-check">
                    <input className="form-check-input" id="rememberMe" type="checkbox" />
                    <label className="form-check-label" htmlFor="rememberMe">
                        Ghi nhớ đăng nhập
                    </label>
                    </div>
                    <button className="btn btn-primary w-100" type="submit">
                    Đăng nhập
                    </button>
                </form>
                <div className="text-center mt-3">
                    <a className="text-primary" href="register.html">
                    Chưa có tài khoản? Đăng ký
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

export default Login;