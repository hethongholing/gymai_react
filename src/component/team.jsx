import React from "react"; 

function Team() {
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
                Đội ngũ của chúng tôi
            </h4>
            <ol
                className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                data-wow-delay="0.3s">
                <li className="breadcrumb-item">
                <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active text-primary">
                Đội ngũ của chúng tôi
                </li>
            </ol>
            </div>
        </div>
        <div className="container-fluid py-5 bg-white">
            <div className="container py-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                maxWidth: "800px",
                }}>
                <h4 className="text-primary">ĐỘI NGŨ CHÚNG TÔI</h4>
                <h1 className="display-4 mb-4">Những người tạo ra GYM.Ai</h1>
                <p className="mb-0">
                Chúng tôi không chỉ là những lập trình viên hay marketer đơn thuần.
                GYM.Ai được kiến tạo bởi một đội ngũ dày dạn kinh nghiệm trong chuyển
                đổi số, công nghệ, tài chính và vận hành chuỗi phòng tập GYM thực tế.
                </p>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item bg-light p-4 h-100 shadow-sm rounded text-center">
                    <div className="mb-3">
                    <img
                        alt="Nguyễn Văn Hùng"
                        className="img-fluid rounded-circle"
                        src="./src/assets/img/team/ceo.jpg"
                        style={{
                        height: "100px",
                        objectFit: "cover",
                        width: "100px",
                        }}
                    />
                    </div>
                    <h4 className="mb-2">Nguyễn Văn Hùng</h4>
                    <p className="text-primary mb-1">CEO & Co-founder</p>
                    <ul className="text-start mb-0">
                    <li>
                        10+ năm kinh nghiệm triển khai ERP, SaaS cho doanh nghiệp vừa và
                        nhỏ.
                    </li>
                    <li>
                        Từng là trưởng nhóm giải pháp tại các công ty công nghệ hàng đầu
                        khu vực.
                    </li>
                    <li>
                        Định hình chiến lược sản phẩm GYM.Ai – linh hoạt, thực tiễn, dễ
                        triển khai.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-item bg-light p-4 h-100 shadow-sm rounded text-center">
                    <div className="mb-3">
                    <img
                        alt="Trần Thị Mai"
                        className="img-fluid rounded-circle"
                        src="./src/assets/img/team/cto.jpg"
                        style={{
                        height: "100px",
                        objectFit: "cover",
                        width: "100px",
                        }}
                    />
                    </div>
                    <h4 className="mb-2">Trần Thị Mai</h4>
                    <p className="text-success mb-1">CTO & Kiến trúc sư hệ thống</p>
                    <ul className="text-start mb-0">
                    <li>
                        Chuyên gia SaaS, microservices, cloud-native, bảo mật dữ liệu.
                    </li>
                    <li>Tham gia xây dựng các nền tảng e-learning, CRM lớn.</li>
                    <li>
                        Phụ trách vận hành server, uptime 99,99%, đảm bảo trải nghiệm
                        mượt mà.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item bg-light p-4 h-100 shadow-sm rounded text-center">
                    <div className="mb-3">
                    <img
                        alt="Lê Quốc Bảo"
                        className="img-fluid rounded-circle"
                        src="./src/assets/img/team/marketing.jpg"
                        style={{
                        height: "100px",
                        objectFit: "cover",
                        width: "100px",
                        }}
                    />
                    </div>
                    <h4 className="mb-2">Lê Quốc Bảo</h4>
                    <p className="text-warning mb-1">Trưởng phòng Marketing</p>
                    <ul className="text-start mb-0">
                    <li>
                        Triển khai hàng trăm chiến dịch truyền thông số lĩnh vực
                        fitness, làm đẹp, bán lẻ.
                    </li>
                    <li>Kết nối GYM.Ai với cộng đồng PT, HLV, chủ phòng tập.</li>
                    <li>
                        Xây dựng hợp tác với KOLs, tổ chức workshop hướng dẫn sử dụng
                        phần mềm.
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="team-item bg-light p-4 h-100 shadow-sm rounded text-center">
                    <div className="mb-3">
                    <img
                        alt="Phạm Hồng Loan"
                        className="img-fluid rounded-circle"
                        src="./src/assets/img/team/advisor.jpg"
                        style={{
                        height: "100px",
                        objectFit: "cover",
                        width: "100px",
                        }}
                    />
                    </div>
                    <h4 className="mb-2">Phạm Hồng Loan</h4>
                    <p className="text-danger mb-1">Cố vấn vận hành & đào tạo</p>
                    <ul className="text-start mb-0">
                    <li>
                        Cựu giảng viên đại học chuyên ngành quản trị & vận hành doanh
                        nghiệp nhỏ.
                    </li>
                    <li>
                        Thiết kế tài liệu đào tạo, video hướng dẫn, chương trình
                        onboarding.
                    </li>
                    <li>
                        Xây dựng lộ trình chuyển giao công nghệ, hỗ trợ từ xa và tại
                        chỗ.
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                <div className="alert alert-primary text-center fs-5 py-4">
                    <img
                    alt="Cam kết hỗ trợ"
                    className="me-2 align-middle"
                    src="./src/assets/img/team/support.png"
                    style={{
                        height: "40px",
                        width: "40px",
                    }}
                    />
                    <b>Cam kết của chúng tôi:</b> <br />
                    Chúng tôi hiểu rằng không phải chủ GYM nào cũng rành về công nghệ.
                    Vì vậy, GYM.Ai luôn đi kèm với đội ngũ hỗ trợ tận tâm, sẵn sàng tư
                    vấn từ lúc bạn bắt đầu dùng thử, đến khi triển khai thực tế và nâng
                    cấp quy mô.
                    <br />
                    <span className="fst-italic mt-2 d-block">
                    “Thành công của bạn là sứ mệnh của chúng tôi.”
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>

  );
}

export default Team;