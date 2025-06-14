import React from "react";

function Home() {
  return (
    <>
        <div className="header-carousel owl-carousel overflow-hidden bg-dark">
            <div className="header-carousel-item hero-section">
            <div className="hero-bg-half-1" />
            <div className="carousel-caption">
                <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-start">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Giải pháp SaaS thông minh cho phòng GYM
                        </h4>
                        <h1 className="display-1 text-white mb-4">
                        Tối ưu vận hành, tăng doanh thu, giữ chân khách hàng
                        </h1>
                        <p className="mb-5 fs-5">
                        Phần mềm quản lý phòng GYM theo mô hình SaaS hiện đại, linh
                        hoạt với thanh toán theo giờ, check-in QR, loyalty, và
                        marketing tự động.
                        <br />
                        Tất cả trong một nền tảng – không cần đầu tư phần cứng, không
                        lo vận hành.
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                        <a
                            className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                            href="#features">
                            <span>Khám phá ngay</span>
                        </a>
                        <a
                            className="btn btn-dark py-3 px-4 px-md-5 me-2"
                            href="mailto:support@saasgym.vn">
                            <i className="fas fa-envelope me-2" />
                            Liên hệ tư vấn
                        </a>
                        </div>
                        <div className="mt-3">
                        <span className="badge bg-success fs-6">
                            Bắt đầu chỉ từ 2,5 triệu/tháng
                        </span>
                        <span className="badge bg-warning text-dark fs-6 ms-2">
                            Chiết khấu 30% khi giới thiệu khách hàng mới!
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid about pt-5">
            <div className="container pt-5">
            <div className="row g-5">
                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-content h-100">
                    <h4 className="text-primary">Về Trung tâm Thể hình</h4>
                    <h1 className="display-4 text-white mb-4">
                    Chúng tôi là nơi tốt nhất để bạn phát huy tiềm năng và đạt được
                    mục tiêu.
                    </h1>
                    <p className="mb-4" />
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
                            Sứ mệnh của chúng tôi
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
                            Tầm nhìn của chúng tôi
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
                            Mục tiêu của chúng tôi
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
                                <p className="mb-0" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade show p-0" id="tab-2">
                        <div className="row">
                            <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                                <span className="fas fa-rocket text-white fa-4x me-4" />
                                <p className="mb-0" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade show p-0" id="tab-3">
                        <div className="row">
                            <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                                <span className="fas fa-rocket text-white fa-4x me-4" />
                                <p className="mb-0" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row g-4 align-items-center">
                    <div className="col-sm-6">
                        <a className="btn btn-primary py-3 px-5" href="#">
                        {" "}
                        <span>Đặt lịch hẹn</span>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex flex-shrink-0 ps-4">
                        <a
                            className="btn btn-light btn-lg-square position-relative wow tada"
                            data-wow-delay=".9s"
                            href="#">
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
                            <span>Gọi cho chuyên gia của chúng tôi</span>
                            <a href="tel:+ 0123 456 7890">
                            <span className="text-white">
                                Miễn phí: + 0123 456 7890
                            </span>
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
                        alt=""
                        className="img-fluid w-100"
                        src="./src/assets/img/about-2.png"
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
                    Hoàn thiện khả năng của bạn, đạt được mục tiêu thể hình.
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
                        <h4>Huấn luyện thể hình miễn phí</h4>
                        <p className="text-white mb-0" />
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
                        <h4>Cardio và Sức mạnh</h4>
                        <p className="text-white mb-0" />
                    </div>
                    </div>
                    <div className="ms-1">
                    <a className="btn btn-primary py-3 px-5 ms-2" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="h-100">
                    <img
                    alt=""
                    className="img-fluid h-100"
                    src="./src/assets/img/fitness-goal-banner.png"
                    style={{
                        objectFit: "cover",
                    }}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid feature bg-light py-5" id="features">
            <div className="container py-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                maxWidth: "900px",
                }}>
                <h4 className="text-primary"> Vì sao nên chọn SaaS GYM?</h4>
                <ul
                className="list-unstyled fs-5 text-start mx-auto"
                style={{
                    maxWidth: "700px",
                }}>
                <li className="mb-3">
                    <b> Tăng Doanh Thu:</b> Tận dụng mô hình thanh toán theo giờ để thu
                    hút khách hàng không thường xuyên. Không còn tình trạng thẻ tập bị
                    bỏ phí.
                </li>
                <li className="mb-3">
                    <b> Tiết Kiệm Chi Phí:</b> Không cần đầu tư máy chủ, phần mềm cài
                    đặt phức tạp. Hoàn toàn trên nền tảng web, cập nhật tự động.
                </li>
                <li className="mb-3">
                    <b> Trải Nghiệm Khách Hàng Tối Ưu:</b> Đặt lịch trước, check-in
                    nhanh, tích điểm đổi ưu đãi. Giao diện thân thiện cho người tập và
                    chủ GYM.
                </li>
                <li className="mb-3">
                    <b> Quản Lý Hiệu Quả:</b> Theo dõi thành viên, lịch tập, huấn luyện
                    viên, doanh thu – mọi lúc, mọi nơi.
                </li>
                </ul>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                <div
                    className="feature-item wow fadeInUp h-100"
                    data-wow-delay="0.2s">
                    <div className="feature-content p-4">
                    <h4 className="mb-3"> Tính năng nổi bật</h4>
                    <ul className="mb-4">
                        <li>Quản lý thành viên và thẻ giờ</li>
                        <li>Thanh toán linh hoạt theo giờ</li>
                        <li>Check-in bằng mã QR</li>
                        <li>Tích điểm, khuyến mãi, loyalty</li>
                        <li>Báo cáo doanh thu & phân tích hành vi</li>
                        <li>Tự động nhắc nhở lịch tập & gia hạn thẻ</li>
                        <li>Quản lý huấn luyện viên cá nhân (PT)</li>
                    </ul>
                    <a className="btn btn-primary py-2 px-4" href="#pricing">
                        Xem bảng giá
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4">
                <div
                    className="feature-item wow fadeInUp h-100"
                    data-wow-delay="0.4s">
                    <div className="feature-content p-4">
                    <h4 className="mb-3"> Gói dịch vụ linh hoạt</h4>
                    <ul>
                        <li>
                        <b>Gói Basic:</b> AI tư vấn bài tập cơ bản, theo dõi tư thế
                        qua app.
                        </li>
                        <li>
                        <b>Gói Pro:</b> Gồm meal plan, voice coaching, phân tích bài
                        nâng cao.
                        </li>
                        <li>
                        <b>Gói For Gym:</b> Phiên bản dành cho phòng GYM – quản lý tập
                        & AI đồng bộ.
                        </li>
                    </ul>
                    <div className="mt-3">
                        <span className="badge bg-success fs-6">Chỉ từ 199k/tháng</span>
                    </div>
                    <div className="mt-2">
                        <span className="badge bg-warning text-dark fs-6">
                        Chiết khấu 30% khi giới thiệu khách hàng mới!
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-lg-4">
                <div
                    className="feature-item wow fadeInUp h-100"
                    data-wow-delay="0.6s">
                    <div className="feature-content p-4">
                    <h4 className="mb-3"> App di động tiện lợi</h4>
                    <ul>
                        <li>Dành cho chủ GYM và người tập</li>
                        <li>
                        Đặt lịch, theo dõi buổi tập, check-in, nhận thông báo khuyến
                        mãi
                        </li>
                    </ul>
                    <a className="btn btn-dark py-2 px-4" href="#contact">
                        Đặt lịch demo miễn phí
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid courses overflow-hidden py-5">
            <div className="container py-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                maxWidth: "800px",
                }}>
                <h4 className="text-primary">Các Khóa Học Nổi Bật</h4>
                <h1 className="display-4 text-white mb-4">
                Khám phá chương trình tập luyện đa dạng
                </h1>
                <p className="text-white mb-0">
                Trung tâm cung cấp nhiều khóa học phù hợp cho mọi đối tượng: từ người
                mới bắt đầu đến vận động viên chuyên nghiệp. Đội ngũ huấn luyện viên
                tận tâm sẽ đồng hành cùng bạn trên hành trình chinh phục sức khỏe và
                hình thể lý tưởng.
                </p>
            </div>
            <div className="row gy-4 gx-0 justify-content-center">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="courses-item">
                    <div className="courses-item-inner p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="courses-icon-img p-3">
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-1.png" />
                        </div>
                        <div className="data-info d-flex flex-column">
                        <div className="courses-trainer d-flex align-items-center mb-1">
                            <div
                            className="me-2"
                            style={{
                                height: "25px",
                                width: "25px",
                            }}>
                            <img
                                alt=""
                                className="img-fluid"
                                src="./src/assets/img/testimonial-3.jpg"
                            />
                            </div>
                            <p className="mb-0">HLV Nguyễn Văn An</p>
                        </div>
                        <div className="courses-date">
                            <p className="mb-1">Thứ 2, 4, 6</p>
                            <p className="mb-0">06:00 - 07:00</p>
                        </div>
                        </div>
                    </div>
                    <a className="d-inline-block h4 mb-3" href="#">
                        Lớp Gym Cơ Bản
                    </a>
                    <p className="mb-4">
                        Dành cho người mới bắt đầu, giúp làm quen với các bài tập và
                        thiết bị, xây dựng nền tảng sức khỏe vững chắc.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="courses-item">
                    <div className="courses-item-inner p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="courses-icon-img p-3">
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-2.png" />
                        </div>
                        <div className="data-info d-flex flex-column">
                        <div className="courses-trainer d-flex align-items-center mb-1">
                            <div
                            className="me-2"
                            style={{
                                height: "25px",
                                width: "25px",
                            }}>
                            <img
                                alt=""
                                className="img-fluid"
                                src="./src/assets/img/testimonial-3.jpg"
                            />
                            </div>
                            <p className="mb-0">HLV Trần Thị Bích</p>
                        </div>
                        <div className="courses-date">
                            <p className="mb-1">Thứ 3, 5, 7</p>
                            <p className="mb-0">18:00 - 19:00</p>
                        </div>
                        </div>
                    </div>
                    <a className="d-inline-block h4 mb-3" href="#">
                        Lớp Power Lifting
                    </a>
                    <p className="mb-4">
                        Tập trung phát triển sức mạnh tối đa với các bài tập tạ chuyên
                        sâu, phù hợp cho người muốn nâng cao thành tích cá nhân.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="courses-item">
                    <div className="courses-item-inner p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="courses-icon-img p-3">
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-3.png" />
                        </div>
                        <div className="data-info d-flex flex-column">
                        <div className="courses-trainer d-flex align-items-center mb-1">
                            <div
                            className="me-2"
                            style={{
                                height: "25px",
                                width: "25px",
                            }}>
                            <img
                                alt=""
                                className="img-fluid"
                                src="./src/assets/img/testimonial-3.jpg"
                            />
                            </div>
                            <p className="mb-0">HLV Lê Văn Cảnh</p>
                        </div>
                        <div className="courses-date">
                            <p className="mb-1">Thứ 2 - Thứ 7</p>
                            <p className="mb-0">17:00 - 18:00</p>
                        </div>
                        </div>
                    </div>
                    <a className="d-inline-block h4 mb-3" href="#">
                        Lớp Body Building
                    </a>
                    <p className="mb-4">
                        Chương trình tăng cơ, giảm mỡ, xây dựng hình thể cân đối và săn
                        chắc dưới sự hướng dẫn của HLV chuyên nghiệp.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="courses-item">
                    <div className="courses-item-inner p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="courses-icon-img p-3">
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-4.png" />
                        </div>
                        <div className="data-info d-flex flex-column">
                        <div className="courses-trainer d-flex align-items-center mb-1">
                            <div
                            className="me-2"
                            style={{
                                height: "25px",
                                width: "25px",
                            }}>
                            <img
                                alt=""
                                className="img-fluid"
                                src="./src/assets/img/testimonial-3.jpg"
                            />
                            </div>
                            <p className="mb-0">HLV Nguyễn Thị Duyên</p>
                        </div>
                        <div className="courses-date">
                            <p className="mb-1">Chủ nhật</p>
                            <p className="mb-0">08:00 - 09:00</p>
                        </div>
                        </div>
                    </div>
                    <a className="d-inline-block h4 mb-3" href="#">
                        Lớp Aerobic & Nhảy dây
                    </a>
                    <p className="mb-4">
                        Tăng cường sức khỏe tim mạch, đốt cháy calo hiệu quả với các bài
                        tập nhịp điệu sôi động, phù hợp mọi lứa tuổi.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="courses-item">
                    <div className="courses-item-inner p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="courses-icon-img p-3">
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-5.png" />
                        </div>
                        <div className="data-info d-flex flex-column">
                        <div className="courses-trainer d-flex align-items-center mb-1">
                            <div
                            className="me-2"
                            style={{
                                height: "25px",
                                width: "25px",
                            }}>
                            <img
                                alt=""
                                className="img-fluid"
                                src="./src/assets/img/testimonial-3.jpg"
                            />
                            </div>
                            <p className="mb-0">HLV Phạm Văn Én</p>
                        </div>
                        <div className="courses-date">
                            <p className="mb-1">Thứ 7</p>
                            <p className="mb-0">15:00 - 16:00</p>
                        </div>
                        </div>
                    </div>
                    <a className="d-inline-block h4 mb-3" href="#">
                        Lớp Boxing
                    </a>
                    <p className="mb-4">
                        Rèn luyện sức bền, phản xạ và kỹ năng tự vệ với các bài tập
                        boxing chuyên nghiệp, phù hợp cả nam và nữ.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="courses-item">
                    <div className="courses-item-inner p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="courses-icon-img p-3">
                        <img alt="" className="img-fluid" src="./src/assets/img/icon-6.png" />
                        </div>
                        <div className="data-info d-flex flex-column">
                        <div className="courses-trainer d-flex align-items-center mb-1">
                            <div
                            className="me-2"
                            style={{
                                height: "25px",
                                width: "25px",
                            }}>
                            <img
                                alt=""
                                className="img-fluid"
                                src="./src/assets/img/testimonial-3.jpg"
                            />
                            </div>
                            <p className="mb-0">HLV Đặng Thị Du</p>
                        </div>
                        <div className="courses-date">
                            <p className="mb-1">Thứ 2 - Thứ 6</p>
                            <p className="mb-0">19:00 - 20:00</p>
                        </div>
                        </div>
                    </div>
                    <a className="d-inline-block h4 mb-3" href="#">
                        Lớp Cardio
                    </a>
                    <p className="mb-4">
                        Đốt mỡ, tăng sức bền, cải thiện vóc dáng với các bài tập cardio
                        đa dạng, phù hợp mọi trình độ.
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="#">
                        {" "}
                        <span>Xem chi tiết</span>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                <a className="btn btn-primary py-3 px-5" href="#">
                    {" "}
                    <span>Xem tất cả khóa học</span>
                </a>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default Home;
