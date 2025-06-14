import React from "react"; 

function Features() {
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
                Lợi ích
            </h4>
            <ol
                className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                data-wow-delay="0.3s">
                <li className="breadcrumb-item">
                <a href="index.html">Trang chủ</a>
                </li>
                <li className="breadcrumb-item active text-primary">Lợi ích</li>
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
                <h4 className="text-primary">LỢI ÍCH CHUYÊN NGHIỆP</h4>
                <h1 className="display-4 mb-4">Tại sao nên sử dụng GYM.Ai?</h1>
                <p className="mb-0">
                GYM.Ai không chỉ là một phần mềm quản lý, mà là giải pháp chuyển đổi
                số toàn diện giúp chủ phòng GYM nâng cao hiệu quả kinh doanh, tối ưu
                vận hành và giữ chân hội viên lâu dài.
                </p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <i className="fas fa-cogs fa-3x text-primary" />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Vận hành tinh gọn, tiết kiệm chi phí
                    </h4>
                    <ul>
                    <li>Không cần đầu tư máy chủ hay thuê kỹ thuật viên quản trị.</li>
                    <li>
                        Phần mềm hoạt động hoàn toàn trên nền tảng web – không lo lỗi
                        phần cứng hay nâng cấp.
                    </li>
                    <li>
                        Tự động cập nhật và bảo trì – không mất thời gian xử lý lỗi hệ
                        thống.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <i className="fas fa-chart-line fa-3x text-success" />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Tăng doanh thu & giữ chân khách hàng
                    </h4>
                    <ul>
                    <li>Thu phí linh hoạt: theo giờ, theo buổi, theo gói tập.</li>
                    <li>
                        Chương trình loyalty: tích điểm, tặng buổi tập, ưu đãi sinh
                        nhật.
                    </li>
                    <li>
                        Nhắc lịch tự động qua app/Zalo/SMS – hạn chế hội viên “quên đi
                        tập”.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <i className="fas fa-chart-pie fa-3x text-warning" />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Ra quyết định dựa trên dữ liệu
                    </h4>
                    <ul>
                    <li>
                        Dashboard trực quan: thống kê khách đến, khách quay lại, doanh
                        thu theo giờ.
                    </li>
                    <li>
                        Phân tích khung giờ cao điểm, nhóm khách hàng hoạt động tích
                        cực.
                    </li>
                    <li>
                        Điều chỉnh giá, khuyến mãi kịp thời dựa trên dữ liệu thực tế.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <i className="fas fa-shield-alt fa-3x text-danger" />
                    </div>
                    <h4 className="mb-3 text-primary text-center">An toàn & bảo mật</h4>
                    <ul>
                    <li>
                        Dữ liệu lưu trữ đám mây tại trung tâm dữ liệu đạt chuẩn quốc tế.
                    </li>
                    <li>
                        Phân quyền rõ ràng cho từng vai trò (lễ tân, PT, quản lý, chủ
                        GYM).
                    </li>
                    <li>
                        Ghi log toàn bộ hoạt động: chỉnh sửa gói tập, điểm danh, thanh
                        toán.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-white p-4 h-100 shadow-sm rounded">
                    <div className="mb-3 text-center">
                    <i className="fas fa-mobile-alt fa-3x text-info" />
                    </div>
                    <h4 className="mb-3 text-primary text-center">
                    Giao diện thân thiện – dễ sử dụng
                    </h4>
                    <ul>
                    <li>
                        Thiết kế chuyên biệt cho ngành thể hình, dễ dùng với cả người
                        lớn tuổi.
                    </li>
                    <li>App hội viên: đặt lịch, tích điểm, xem lịch sử tập.</li>
                    <li>
                        App quản lý: theo dõi doanh thu, check-in, phân quyền nhân sự
                        mọi lúc.
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default Features;