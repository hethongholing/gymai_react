import React from "react";  

function About () {
  return (
    <>
        <div className="container-fluid bg-breadcrumb">
            <div
            className="container text-center py-5"
            style={{
                maxWidth: "900px",
            }}>
            <h4
                className="text-white display-4 mb-4 wow fadeInDown"
                data-wow-delay="0.1s">
                Giới Thiệu
            </h4>
            <ol
                className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                data-wow-delay="0.3s">
                <li className="breadcrumb-item">
                <a href="index.html">Trang chủ</a>
                </li>
                <li className="breadcrumb-item active text-primary">Giới thiệu</li>
            </ol>
            </div>
        </div>
        <div className="container-fluid about pt-5">
            <div className="container pt-5">
            <div className="row g-5">
                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-content h-100">
                    <h4 className="text-primary">Về GYM.Ai</h4>
                    <h1 className="display-4 text-white mb-4">
                    Nền tảng quản lý phòng tập thông minh, tối ưu vận hành
                    </h1>
                    <p className="mb-4">
                    <b>Tầm nhìn:</b> Trở thành nền tảng quản lý phòng tập thể hình
                    hàng đầu Đông Nam Á, giúp các chủ phòng tập tối ưu vận hành, tăng
                    trưởng doanh thu và nâng cao trải nghiệm khách hàng.
                    <br />
                    <br />
                    <b>Sứ mệnh:</b> Số hóa toàn bộ hoạt động của phòng GYM – từ
                    check-in, bán gói dịch vụ, quản lý huấn luyện viên, đến marketing
                    và chăm sóc khách hàng – tất cả trong một nền tảng duy nhất, dễ
                    dùng, không cần phần cứng phức tạp.
                    </p>
                    <div className="tab-class pb-4">
                    <ul className="nav d-flex mb-2">
                        <li className="nav-item mb-3">
                        <a
                            className="d-flex py-2 active"
                            data-bs-toggle="pill"
                            href="#tab-1">
                            <span
                            style={{
                                width: "150px",
                            }}>
                            Giới thiệu
                            </span>
                        </a>
                        </li>
                        <li className="nav-item mb-3">
                        <a
                            className="d-flex py-2 mx-3"
                            data-bs-toggle="pill"
                            href="#tab-2">
                            <span
                            style={{
                                width: "150px",
                            }}>
                            Khách hàng mục tiêu
                            </span>
                        </a>
                        </li>
                        <li className="nav-item mb-3">
                        <a
                            className="d-flex py-2"
                            data-bs-toggle="pill"
                            href="#tab-3">
                            <span
                            style={{
                                width: "150px",
                            }}>
                            Lợi ích
                            </span>
                        </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show p-0 active" id="tab-1">
                        <div className="row">
                            <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                                <span className="fas fa-rocket text-white fa-4x me-4" />
                                <p className="mb-0">
                                <b>GYM.Ai là gì?</b>
                                <br />
                                GYM.Ai là phần mềm quản lý phòng tập hoạt động trên
                                nền tảng đám mây (SaaS), cho phép các phòng tập dễ
                                dàng triển khai mà không cần cài đặt phần mềm hay đầu
                                tư hạ tầng máy chủ.
                                <br />
                                <b>Nền tảng hỗ trợ:</b>
                                </p>
                                <ul>
                                <li>Quản lý hội viên, thẻ giờ, check-in bằng QR</li>
                                <li>Ghi log tập luyện, theo dõi hiệu suất cá nhân</li>
                                <li>
                                    Tự động nhắc nhở, chăm sóc khách hàng, marketing qua
                                    SMS/Email
                                </li>
                                <li>
                                    Tích điểm, tạo khuyến mãi, chương trình hội viên
                                    trung thành (loyalty)
                                </li>
                                </ul>
                                <p />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade show p-0" id="tab-2">
                        <div className="row">
                            <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                                <span className="fas fa-users text-white fa-4x me-4" />
                                <ul className="mb-0">
                                <li>
                                    Phòng tập GYM cá nhân, gia đình: quy mô vừa & nhỏ,
                                    muốn số hóa hoạt động cơ bản.
                                </li>
                                <li>
                                    Chuỗi phòng tập chuyên nghiệp: cần hệ thống quản trị
                                    đa chi nhánh, báo cáo doanh thu, kiểm soát chất
                                    lượng dịch vụ.
                                </li>
                                <li>
                                    Huấn luyện viên cá nhân (PT): theo dõi lịch tập,
                                    nhắc lịch, quản lý nhóm học viên.
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade show p-0" id="tab-3">
                        <div className="row">
                            <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                                <span className="fas fa-gift text-white fa-4x me-4" />
                                <ul className="mb-0">
                                <li>
                                    Không cần đầu tư phần cứng, triển khai nhanh, dùng
                                    trên mọi thiết bị có Internet.
                                </li>
                                <li>
                                    Giao diện tiếng Việt thân thiện, dễ dùng, đào tạo
                                    nhanh.
                                </li>
                                <li>
                                    Hỗ trợ 24/7, cập nhật liên tục không tốn chi phí
                                    thêm.
                                </li>
                                <li>
                                    Tăng doanh thu nhờ mô hình trả theo giờ, bán gói
                                    linh hoạt.
                                </li>
                                <li>
                                    Giữ chân khách hàng nhờ hệ thống loyalty, tặng điểm
                                    – giảm giá.
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row g-4 align-items-center">
                    <div className="col-sm-6">
                        <a className="btn btn-primary py-3 px-5" href="contact.html">
                        {" "}
                        <span>Đặt lịch demo miễn phí</span>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex flex-shrink-0 ps-4">
                        <a
                            className="btn btn-light btn-lg-square position-relative wow tada"
                            data-wow-delay=".9s"
                            href="tel:0909999888">
                            <i className="fa fa-phone-alt fa-2x" />
                            <div
                            className="position-absolute"
                            style={{
                                right: "5px",
                                top: "5px",
                            }}>
                            <span>
                                <i className="fa fa-comment-dots text-dark" />
                            </span>
                            </div>
                        </a>
                        <div className="d-flex flex-column ms-3">
                            <span>Hotline tư vấn</span>
                            <a href="tel:0909999888">
                            <span className="text-white">0909 999 888</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="about-img h-100">
                    <div className="about-img-inner d-flex h-100">
                    <img
                        alt="GYM.Ai"
                        className="img-fluid w-100"
                        src="./src/assets/img/hoatdong/hoatdong16.jpg"
                        style={{
                        objectFit: "cover",
                        }}
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid goal pt-5">
            <div className="container pt-5">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="goal-content">
                    <h4 className="text-primary">Mục tiêu thể hình</h4>
                    <h1 className="display-4 mb-4">
                    Chinh phục giới hạn, đạt mục tiêu sức khỏe cùng GYM.Ai
                    </h1>
                    <div className="goal-item d-flex p-4">
                    <div className="d-flex me-4">
                        <div
                        className="bg-primary d-inline p-3"
                        style={{
                            height: "80px",
                            width: "80px",
                        }}>
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-1.png" />
                        </div>
                    </div>
                    <div>
                        <h4>Huấn luyện cá nhân miễn phí</h4>
                        <p className="text-white mb-0">
                        Được hướng dẫn bởi HLV chuyên nghiệp, xây dựng lộ trình tập
                        luyện phù hợp từng cá nhân.
                        </p>
                    </div>
                    </div>
                    <div className="goal-item d-flex p-4 mb-4">
                    <div className="d-flex me-4">
                        <div
                        className="bg-primary d-inline p-3"
                        style={{
                            height: "80px",
                            width: "80px",
                        }}>
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-6.png" />
                        </div>
                    </div>
                    <div>
                        <h4>Cardio & Sức mạnh</h4>
                        <p className="text-white mb-0">
                        Kết hợp các bài tập cardio và tăng sức mạnh, giúp cải thiện
                        thể lực, vóc dáng và sức khỏe tim mạch.
                        </p>
                    </div>
                    </div>
                    <div className="goal-item d-flex p-4 mb-4">
                    <div className="d-flex me-4">
                        <div
                        className="bg-primary d-inline p-3"
                        style={{
                            height: "80px",
                            width: "80px",
                        }}>
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-2.png" />
                        </div>
                    </div>
                    <div>
                        <h4>Chế độ dinh dưỡng khoa học</h4>
                        <p className="text-white mb-0">
                        Tư vấn thực đơn, theo dõi calo, hỗ trợ xây dựng chế độ ăn phù
                        hợp mục tiêu tập luyện.
                        </p>
                    </div>
                    </div>
                    <div className="ms-1">
                    <a className="btn btn-primary py-3 px-5 ms-2" href="contact.html">
                        {" "}
                        <span>Đăng ký tư vấn</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="h-100">
                    <img
                    alt=""
                    className="img-fluid h-100"
                    src="./src/assets/img/hoatdong/hoatdong13.jpg"
                    style={{
                        objectFit: "cover",
                    }}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid feature bg-light py-5">
            <div className="container py-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                maxWidth: "800px",
                }}>
                <h4 className="text-primary">Vì sao chọn GYM.Ai?</h4>
                <h1 className="display-4 mb-4">Những điểm nổi bật của chúng tôi</h1>
                <p className="mb-0">
                GYM.Ai không chỉ là phần mềm quản lý, mà còn là người bạn đồng hành
                giúp phòng tập phát triển bền vững, tối ưu vận hành và nâng cao trải
                nghiệm khách hàng.
                </p>
            </div>
            <div className="feature-carousel owl-carousel">
                <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-img">
                    <img
                    alt=""
                    className="img-fluid w-100"
                    src="./src/assets/img/hoatdong/hoatdong14.jpg"
                    />
                </div>
                <div className="feature-content p-4">
                    <h4 className="mb-3">Quản lý hội viên thông minh</h4>
                    <p className="mb-4">
                    Theo dõi lịch sử tập luyện, điểm danh QR, nhắc nhở tự động, chăm
                    sóc khách hàng cá nhân hóa.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="contact.html">
                    {" "}
                    <span>Xem chi tiết</span>
                    </a>
                </div>
                </div>
                <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-img">
                    <img
                    alt=""
                    className="img-fluid w-100"
                    src="./src/assets/img/hoatdong/hoatdong19.jpg"
                    />
                </div>
                <div className="feature-content p-4">
                    <h4 className="mb-3">Báo cáo doanh thu & quản lý chi nhánh</h4>
                    <p className="mb-4">
                    Hệ thống báo cáo trực quan, quản lý đa chi nhánh, kiểm soát chất
                    lượng dịch vụ mọi lúc mọi nơi.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="contact.html">
                    {" "}
                    <span>Xem chi tiết</span>
                    </a>
                </div>
                </div>
                <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-img">
                    <img
                    alt=""
                    className="img-fluid w-100"
                    src="./src/assets/img/hoatdong/hoatdong1.jpg"
                    />
                </div>
                <div className="feature-content p-4">
                    <h4 className="mb-3">Marketing & chăm sóc khách hàng</h4>
                    <p className="mb-4">
                    Tích hợp SMS/Email, chương trình tích điểm, khuyến mãi, giữ chân
                    khách hàng hiệu quả.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="contact.html">
                    {" "}
                    <span>Xem chi tiết</span>
                    </a>
                </div>
                </div>
                <div className="feature-item">
                <div className="feature-img">
                    <img
                    alt=""
                    className="img-fluid w-100"
                    src="./src/assets/img/hoatdong/hoatdong17.jpg"
                    />
                </div>
                <div className="feature-content p-4">
                    <h4 className="mb-3">Hỗ trợ 24/7 & cập nhật liên tục</h4>
                    <p className="mb-4">
                    Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ, cập nhật tính năng mới miễn
                    phí, không phát sinh chi phí ẩn.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="contact.html">
                    {" "}
                    <span>Xem chi tiết</span>
                    </a>
                </div>
                </div>
            </div>
            <div className="feature-shaps" />
            </div>
        </div>
        <div
            className="container-fluid explore py-5 wow zoomIn"
            data-wow-delay="0.2s">
            <div className="container py-5 text-center">
            <h1 className="display-1 text-white mb-0">Khám phá GYM.Ai</h1>
            <a
                className="btn btn-primary py-3 px-4 px-md-5 me-2"
                href="./src/assets/img/videos/Video của GYM NHẬT TÂN.mp4">
                <i className="fas fa-play-circle me-2" />{" "}
                <span>Xem video giới thiệu</span>
            </a>
            </div>
        </div>
        <div className="container-fluid team py-5">
            <div className="container py-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                maxWidth: "800px",
                }}>
                <h4 className="text-primary">Đội ngũ huấn luyện viên</h4>
                <h1 className="display-4 mb-4">Gặp gỡ các chuyên gia của chúng tôi</h1>
                <p className="mb-0">
                Đội ngũ HLV của GYM.Ai là những người giàu kinh nghiệm, tận tâm và
                luôn đồng hành cùng học viên trên hành trình thay đổi bản thân.
                </p>
            </div>
            <div className="row gy-5 gy-lg-4 gx-4">
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-item">
                    <div className="team-img">
                    <img
                        alt="HLV Nguyễn Văn An"
                        className="img-fluid w-100"
                        src="./src/assets/img/team-1.jpg"
                    />
                    <div className="team-icon">
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-instagram" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </div>
                    <div className="team-content">
                    <h4>Nguyễn Văn An</h4>
                    <p className="mb-0">Chuyên gia thể hình & dinh dưỡng</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="team-item">
                    <div className="team-img">
                    <img
                        alt="HLV Trần Thị Bích"
                        className="img-fluid w-100"
                        src="./src/assets/img/team-2.jpg"
                    />
                    <div className="team-icon">
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-instagram" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </div>
                    <div className="team-content">
                    <h4>Trần Thị Bích</h4>
                    <p className="mb-0">HLV Yoga & Cardio</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                <div className="team-item">
                    <div className="team-img">
                    <img
                        alt="HLV Lê Văn Cảnh"
                        className="img-fluid w-100"
                        src="./src/assets/img/team-3.jpg"
                    />
                    <div className="team-icon">
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-instagram" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </div>
                    <div className="team-content">
                    <h4>Lê Văn Cảnh</h4>
                    <p className="mb-0">HLV Powerlifting & Bodybuilding</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                <div className="team-item">
                    <div className="team-img">
                    <img
                        alt="HLV Nguyễn Thị Duyên"
                        className="img-fluid w-100"
                        src="./src/assets/img/team-4.jpg"
                    />
                    <div className="team-icon">
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-instagram" />
                        </a>
                        <a className="btn btn-primary btn-sm-square" href="#">
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </div>
                    <div className="team-content">
                    <h4>Nguyễn Thị Duyên</h4>
                    <p className="mb-0">HLV Aerobic & Nhảy dây</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid py-5 bg-primary text-white">
            <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                <h2 className="mb-4">Giá trị cốt lõi của GYM.Ai</h2>
                <ul className="fs-5">
                    <li>
                    <b>Khách hàng là trung tâm:</b> Luôn lắng nghe, đồng hành và hỗ
                    trợ khách hàng tối đa.
                    </li>
                    <li>
                    <b>Đổi mới sáng tạo:</b> Không ngừng cập nhật công nghệ, cải tiến
                    sản phẩm.
                    </li>
                    <li>
                    <b>Chuyên nghiệp & tận tâm:</b> Đội ngũ giàu kinh nghiệm, hỗ trợ
                    24/7.
                    </li>
                    <li>
                    <b>Minh bạch & hiệu quả:</b> Báo cáo rõ ràng, tối ưu chi phí vận
                    hành.
                    </li>
                </ul>
                </div>
                <div className="col-lg-6 text-center">
                <img
                    alt="Giá trị GYM.Ai"
                    className="img-fluid rounded"
                    src="./src/assets/img/core-value.png"
                    style={{
                    maxWidth: "400px",
                    }}
                />
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid py-5 bg-light">
            <div className="container py-5">
            <div className="text-center mb-5">
                <h2 className="text-primary mb-3">Đối tác & Khách hàng tiêu biểu</h2>
                <p className="mb-0">
                Hàng trăm phòng tập, huấn luyện viên và chuỗi GYM đã tin tưởng lựa
                chọn GYM.Ai để phát triển bền vững.
                </p>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-6 col-md-3 mb-4">
                <img alt="Đối tác 1" className="img-fluid" src="./src/assets/img/partner1.png" />
                </div>
                <div className="col-6 col-md-3 mb-4">
                <img alt="Đối tác 2" className="img-fluid" src="./src/assets/img/partner2.png" />
                </div>
                <div className="col-6 col-md-3 mb-4">
                <img alt="Đối tác 3" className="img-fluid" src="./src/assets/img/partner3.png" />
                </div>
                <div className="col-6 col-md-3 mb-4">
                <img alt="Đối tác 4" className="img-fluid" src="./src/assets/img/partner4.png" />
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default About;