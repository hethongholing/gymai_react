import React from "react"; 

function Benefit() {
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
                Tính năng
            </h4>
            <ol
                className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                data-wow-delay="0.3s">
                <li className="breadcrumb-item">
                <a href="index.html">Trang chủ</a>
                </li>
                <li className="breadcrumb-item active text-primary">Tính năng</li>
            </ol>
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
                <h4 className="text-primary">TÍNH NĂNG NỔI BẬT</h4>
                <h1 className="display-4 mb-4">Tại sao nên chọn GYM.Ai?</h1>
                <p className="mb-0">
                GYM.Ai cung cấp giải pháp quản lý phòng tập toàn diện, hiện đại, giúp
                tối ưu vận hành, tăng doanh thu và nâng cao trải nghiệm khách hàng.
                </p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <img
                        alt="Quản lý hội viên"
                        src="./src/assets/img/icon-1.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Quản lý hội viên thông minh
                    </h4>
                    <ul>
                    <li>
                        Theo dõi chi tiết thông tin, lịch sử tập luyện, điểm tích lũy.
                    </li>
                    <li>Check-in bằng mã QR, không cần thẻ vật lý.</li>
                    <li>Tự động khóa quyền truy cập khi hết hạn thẻ.</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <img
                        alt="Thẻ giờ & thanh toán"
                        src="./src/assets/img/icon-2.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Thẻ giờ & thanh toán linh hoạt
                    </h4>
                    <ul>
                    <li>Hỗ trợ thanh toán theo giờ, phù hợp khách lẻ.</li>
                    <li>Tự động trừ giờ sau mỗi lần check-in.</li>
                    <li>Quản lý minh bạch, không cần mua thẻ tháng.</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <img
                        alt="Quản lý PT"
                        src="./src/assets/img/icon-3.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Quản lý huấn luyện viên (PT)
                    </h4>
                    <ul>
                    <li>Tạo lịch làm việc, theo dõi hiệu suất từng PT.</li>
                    <li>Quản lý số lượng hội viên phụ trách.</li>
                    <li>Chia doanh thu theo từng lớp/ca dạy.</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <img
                        alt="Báo cáo tài chính"
                        src="./src/assets/img/icon-4.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Báo cáo tài chính & phân tích hành vi
                    </h4>
                    <ul>
                    <li>
                        Dashboard thống kê doanh thu, lượt check-in, tỷ lệ giữ chân
                        khách hàng.
                    </li>
                    <li>Gợi ý khung giờ cao điểm, lớp học phổ biến.</li>
                    <li>Ra quyết định dựa trên dữ liệu (data-driven).</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <img
                        alt="Tích điểm & loyalty"
                        src="./src/assets/img/icon-5.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Tích điểm, khuyến mãi & loyalty
                    </h4>
                    <ul>
                    <li>Tự động tích điểm theo số giờ tập/lần ghé thăm.</li>
                    <li>
                        Gửi mã khuyến mãi, quà tặng sinh nhật, giảm giá khi mời bạn bè.
                    </li>
                    <li>Tích hợp SMS/Email marketing dễ dàng.</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <img
                        alt="Ứng dụng di động"
                        src="./src/assets/img/icon-6.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Ứng dụng di động hiện đại
                    </h4>
                    <ul>
                    <li>Dành cho cả chủ GYM và hội viên.</li>
                    <li>Xem lịch, đặt lớp, gia hạn thẻ, nhận khuyến mãi trên app.</li>
                    <li>Hỗ trợ thông báo đẩy nhắc lịch tập, chăm sóc khách hàng.</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.7s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded text-center">
                    <div className="mb-3">
                    <img
                        alt="Đa nền tảng"
                        src="./src/assets/img/icon-browser.png"
                        style={{
                        width: "60px",
                        }}
                    />
                    </div>
                    <h4 className="mb-3 text-primary">
                    Đa nền tảng, không cần cài đặt
                    </h4>
                    <ul
                    className="d-inline-block text-start"
                    style={{
                        maxWidth: "600px",
                    }}>
                    <li>Hoạt động hoàn toàn trên trình duyệt.</li>
                    <li>
                        Tương thích tốt trên máy tính, máy tính bảng và điện thoại.
                    </li>
                    <li>Cập nhật tự động, không gián đoạn hoạt động kinh doanh.</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>

  );
}

export default Benefit;