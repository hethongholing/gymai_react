import React from "react"; 

function Contact() {
  return (
    <>
        <div className="container-fluid bg-breadcrumb">
            <div
            className="container text-center py-5"
            style={{
                maxWidth: '900px'
            }}
            >
            <h4
                className="text-white display-4 mb-4 wow fadeInDown"
                data-wow-delay="0.1s"
            >
                Liên hệ
            </h4>
            <ol
                className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                data-wow-delay="0.3s"
            >
                <li className="breadcrumb-item">
                <a href="index.html">
                    Trang chủ
                </a>
                </li>
                <li className="breadcrumb-item active text-primary">
                Liên hệ
                </li>
            </ol>
            </div>
        </div>
        <div className="container-fluid contact py-5">
            <div className="container py-5">
            <div className="row g-5">
                <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay="0.2s"
                >
                <div className="mb-4">
                    <h4 className="text-primary">
                    Liên hệ với chúng tôi
                    </h4>
                    <h1 className="display-4 mb-4">
                    Liên hệ với đội ngũ chuyên gia
                    </h1>
                    <p className="mb-4">
                    Biểu mẫu liên hệ hiện chưa hoạt động. Bạn có thể nhận được một biểu mẫu liên hệ hoàn chỉnh với Ajax & PHP chỉ trong vài phút. Chỉ cần sao chép và dán các tệp, thêm một chút mã là xong.{' '}
                    <a
                        className="text-primary fw-bold"
                        href="https://htmlcodex.com/contact-form"
                    >
                        Tải về ngay
                    </a>
                    .
                    </p>
                    <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="bg-white d-flex">
                        <i className="fas fa-map-marker-alt fa-2x text-primary me-2" />
                        <div>
                            <h4>
                            Địa chỉ
                            </h4>
                            <p className="mb-0">
                            123 đường New York
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-white d-flex">
                        <i className="fas fa-envelope fa-2x text-primary me-2" />
                        <div>
                            <h4>
                            Email
                            </h4>
                            <p className="mb-0">
                            info@example.com
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-white d-flex">
                        <i className="fa fa-phone-alt fa-2x text-primary me-2" />
                        <div>
                            <h4>
                            Điện thoại
                            </h4>
                            <p className="mb-0">
                            (+012) 3456 7890 123
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-white d-flex">
                        <i className="fab fa-firefox-browser fa-2x text-primary me-2" />
                        <div>
                            <h4>
                            Trang web của bạn
                            </h4>
                            <p className="mb-0">
                            (+012) 3456 7890
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="d-flex ms-2 mb-5">
                    <a
                    className="btn btn-dark py-2 px-3 px-sm-4 me-2"
                    href="#"
                    >
                    {' '}
                    <span>
                        facebook
                    </span>
                    {' '}
                    <i className="fas fa-chevron-circle-right" />
                    </a>
                    <a
                    className="btn btn-dark py-2 px-3 px-sm-4 mx-2"
                    href="#"
                    >
                    {' '}
                    <span>
                        twitter
                    </span>
                    {' '}
                    <i className="fas fa-chevron-circle-right" />
                    </a>
                    <a
                    className="btn btn-dark py-2 px-3 px-sm-4 ms-2"
                    href="#"
                    >
                    {' '}
                    <span>
                        instagram
                    </span>
                    {' '}
                    <i className="fas fa-chevron-circle-right" />
                    </a>
                </div>
                <div className="contact-banner">
                    <div className="row g-0">
                    <div className="col-9">
                        <div className="p-4 pe-0">
                        <h4 className="display-5 mb-0">
                            Bạn muốn gia nhập đội ngũ tài năng của chúng tôi?
                        </h4>
                        <div className="d-flex align-items-center">
                            <a
                            className="h5 mb-0 me-3"
                            href="index.html"
                            >
                            Truy cập website của chúng tôi
                            </a>
                            <a
                            className="text-primary py-3"
                            href="./img/videos/Video của GYM NHẬT TÂN.mp4"
                            >
                            <i className="fas fa-play-circle me-2" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-6 wow fadeInRight"
                data-wow-delay="0.4s"
                >
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-4 text-white mb-4">
                    Get In touch
                    </h1>
                    <form>
                    <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                        <div className="form-floating form-section-col">
                            <input
                            className="form-control border-0"
                            id="name"
                            placeholder="Your Name"
                            type="text"
                            />
                            <label htmlFor="name">
                            Your Name
                            </label>
                        </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                        <div className="form-floating form-section-col">
                            <input
                            className="form-control border-0"
                            id="email"
                            placeholder="Your Email"
                            type="email"
                            />
                            <label htmlFor="email">
                            Your Email
                            </label>
                        </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                        <div className="form-floating form-section-col">
                            <input
                            className="form-control border-0"
                            id="phone"
                            placeholder="Phone"
                            type="phone"
                            />
                            <label htmlFor="phone">
                            Your Phone
                            </label>
                        </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                        <div className="form-floating form-section-col">
                            <input
                            className="form-control border-0"
                            id="project"
                            placeholder="Project"
                            type="text"
                            />
                            <label htmlFor="project">
                            Your Project
                            </label>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-floating form-section-col">
                            <input
                            className="form-control border-0"
                            id="subject"
                            placeholder="Subject"
                            type="text"
                            />
                            <label htmlFor="subject">
                            Subject
                            </label>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-floating">
                            <textarea
                            className="form-control border-0"
                            id="message"
                            placeholder="Leave a message here"
                            style={{
                                height: '160px'
                            }}
                            />
                            <label htmlFor="message">
                            Message
                            </label>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            defaultValue="#"
                            id="flexCheck"
                            type="checkbox"
                            />
                            <label
                            className="form-check-label"
                            htmlFor="flexCheck"
                            >
                            I agree with the site privacy policy
                            </label>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-section-col">
                            <button className="btn-primary w-100 py-3 px-5">
                            Send Message
                            </button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div
                className="col-12 wow fadeInUp"
                data-wow-delay="0.2s"
                >
                <div className="h-100 overflow-hidden">

                    <iframe
                    className="w-100"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.0492752633117!2d106.67788925964821!3d10.72712195326418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f004a7914ed%3A0xfcb9fc1fa81afba5!2zUGjDsm5nIEdZTSBOaOG6rXQgVMOibg!5e0!3m2!1svi!2s!4v1748331006865!5m2!1svi!2s"
                    style={{
                        height: '400px'
                    }}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default Contact;