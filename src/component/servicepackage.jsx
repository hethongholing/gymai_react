import React from "react"; 

function Servicepackage() {
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
                Gói dịch vụ
            </h4>
            <ol
                className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                data-wow-delay="0.3s">
                <li className="breadcrumb-item">
                <a href="index.html">Trang chủ</a>
                </li>
                <li className="breadcrumb-item active text-primary">Gói dịch vụ</li>
            </ol>
            </div>
        </div>
        <div className="container-fluid py-5 bg-light">
            <div className="container py-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                maxWidth: "800px",
                }}>
                <h4 className="text-primary">GÓI DỊCH VỤ GYM.Ai</h4>
                <h1 className="display-4 mb-4">
                Linh hoạt & Hiệu quả cho mọi phòng tập
                </h1>
                <p className="mb-0">
                GYM.Ai cung cấp các gói dịch vụ phù hợp cho mọi quy mô phòng tập – từ
                phòng GYM mini đến chuỗi trung tâm thể hình chuyên nghiệp. Với mô hình
                SaaS, bạn không cần đầu tư máy chủ hay phần mềm cài đặt, mọi thứ đều
                hoạt động trực tuyến và liên tục được cập nhật.
                </p>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-white rounded shadow-sm p-4 h-100 border-top border-success border-4">
                    <div className="mb-3 text-center">
                    <span className="badge bg-success fs-6 py-2 px-4">Gói Basic</span>
                    </div>
                    <h2 className="text-center text-success mb-3">199K/tháng</h2>
                    <ul className="fs-5 mb-4">
                    <li>AI tư vấn bài tập cơ bản, theo dõi tư thế qua app.</li>
                    <li>Quản lý hội viên, check-in bằng mã QR</li>
                    <li>Theo dõi thẻ giờ và thời hạn</li>
                    <li>Báo cáo doanh thu cơ bản</li>
                    <li>Giao diện dễ sử dụng, không cần đào tạo</li>
                    </ul>
                    <div className="text-center">
                    <a className="btn btn-success px-4 py-2" href="contact.html">
                        Đăng ký ngay
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="bg-white rounded shadow-sm p-4 h-100 border-top border-primary border-4">
                    <div className="mb-3 text-center">
                    <span className="badge bg-primary fs-6 py-2 px-4">Gói Pro</span>
                    </div>
                    <h2 className="text-center text-primary mb-3">399K/tháng</h2>
                    <ul className="fs-5 mb-4">
                    <li>Gồm meal plan, voice coaching, phân tích bài nâng cao.</li>
                    <li>Tất cả tính năng gói Cơ Bản</li>
                    <li>Quản lý lịch làm việc và hoa hồng của PT</li>
                    <li>Tích điểm, chăm sóc khách hàng tự động</li>
                    <li>Gửi thông báo lịch tập qua app, SMS</li>
                    </ul>
                    <div className="text-center">
                    <a className="btn btn-primary px-4 py-2" href="contact.html">
                        Đăng ký ngay
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="bg-white rounded shadow-sm p-4 h-100 border-top border-danger border-4">
                    <div className="mb-3 text-center">
                    <span className="badge bg-danger fs-6 py-2 px-4">
                        Gói For Gym
                    </span>
                    </div>
                    <h2 className="text-center text-danger mb-3">Liên hệ</h2>
                    <ul className="fs-5 mb-4">
                    <li>Phiên bản dành cho phòng GYM – quản lý tập & AI đồng bộ.</li>
                    <li>Bao gồm mọi tính năng từ gói Tiêu Chuẩn</li>
                    <li>Quản lý nhiều chi nhánh cùng lúc</li>
                    <li>
                        Dashboard phân tích nâng cao (tỷ lệ giữ chân, khung giờ vàng…)
                    </li>
                    <li>Tích hợp API với phần mềm bên thứ 3 (CRM, kế toán…)</li>
                    </ul>
                    <div className="text-center">
                    <a className="btn btn-danger px-4 py-2" href="contact.html">
                        Đăng ký ngay
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                <div className="alert alert-warning text-center fs-5 py-4">
                    <span className="me-3">
                    🎁 <b>Ưu đãi đặc biệt:</b>
                    </span>
                    <span className="me-3">
                    Giảm ngay <b>%</b> khi thanh toán 6 tháng
                    </span>
                    <span className="me-3">
                    Tặng thêm <b>1 tháng</b> sử dụng khi giới thiệu khách hàng mới
                    </span>
                    <span>
                    Hỗ trợ kỹ thuật <b>24/7</b> – cập nhật tính năng liên tục miễn phí
                    </span>
                </div>
                </div>
            </div>
            <section className="py-20 bg-indigo-700 text-white text-center px-6">
                <h2 className="text-3xl font-bold mb-4">
                Sẵn sàng nâng cấp sức khoẻ cùng GYM.AI?
                </h2>
                <a
                className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold"
                href="#">
                Đăng ký dùng thử ngay
                </a>
            </section>
            </div>
        </div>
    </>

  );
}

export default Servicepackage;