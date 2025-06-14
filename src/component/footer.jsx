import React from "react";  
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
       <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
            <div className="row g-5 mb-5 align-items-center">
                <div className="col-lg-7">
                <div
                    className="position-relative d-flex"
                    style={{
                    transform: "skew(18deg)",
                    }}>
                    <input
                    className="form-control border-0 w-100 py-3 pe-5"
                    placeholder="Nhập email để nhận tin mới"
                    type="text"
                    />
                    <button className="btn-primary py-2 px-4 ms-3" type="button">
                    {" "}
                    <span>Đăng ký</span>
                    </button>
                </div>
                </div>
                <div className="col-lg-5">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                    <a className="btn btn-primary btn-md-square me-3" href="">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-primary btn-md-square me-3" href="">
                    <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-primary btn-md-square me-3" href="">
                    <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-primary btn-md-square me-0" href="">
                    <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item">
                    <h4 className="text-white mb-4">
                    <i className="fas fa-hand-rock text-primary me-2" /> GYM.Ai
                    Coaching
                    </h4>
                    <p className="mb-0">
                    Trung tâm thể hình hiện đại, trang thiết bị cao cấp, đội ngũ huấn
                    luyện viên chuyên nghiệp. Cam kết đồng hành cùng bạn trên hành
                    trình nâng cao sức khỏe và vóc dáng.
                    </p>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item">
                    <h4 className="text-white mb-4">Liên kết nhanh</h4>
                    <Link to="/"> Trang chủ</Link>
                    <Link to="/about"> Giới thiệu</Link>
                    <Link to="/benefit"> Tính năng</Link>
                    <Link to="/servicepackage"> Gói dịch vụ</Link>
                    <Link to="/features"> Lợi ích</Link>
                    <Link to="/contact"> Liên hệ</Link>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item">
                    <h4 className="text-white mb-4">Thông tin liên hệ</h4>
                    <div className="row g-2">
                    <div className="col-12">
                        <div className="d-flex">
                        <i className="fas fa-map-marker-alt text-primary me-2" />
                        <div>
                            <h5 className="text-white mb-2">Địa chỉ</h5>
                            <p className="mb-0">
                            C11/C12 Chanh, Đ. Phạm Hùng, Bình Hưng, Bình Chánh, TP Hồ
                            Chí Minh
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex">
                        <i className="fas fa-envelope text-primary me-2" />
                        <div>
                            <h5 className="text-white mb-2">Email</h5>
                            <p className="mb-0">support@saasgym.vn</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex">
                        <i className="fa fa-phone-alt text-primary me-2" />
                        <div>
                            <h5 className="text-white mb-2">Điện thoại</h5>
                            <p className="mb-0">(+84) 909 999 888</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item">
                    <h4 className="text-white mb-4">Hình ảnh hoạt động</h4>
                    <div className="row g-2">
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong9.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong10.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong11.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong12.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong1.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong2.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong3.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong4.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong5.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong6.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong7.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-item-img">
                        <a href="#">
                            <img
                            alt=""
                            className="img-fluid"
                            src="./src/assets/img/hoatdong/hoatdong8.jpg"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid copyright py-4">
            <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                    <a className="border-bottom text-white" href="#">
                    <i className="fas fa-copyright text-light me-2" />
                    GYM.Ai Coaching
                    </a>
                    , Đã đăng ký bản quyền.
                </span>
                </div>
                <div className="col-md-6 text-center text-md-end text-body">
                Thiết kế bởi{" "}
                <a className="border-bottom text-white" href="#">
                    Đội ngũ GYMAI
                </a>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Footer;
