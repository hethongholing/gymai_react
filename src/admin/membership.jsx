import React from "react"; 

function Membership() {
  return (
    <>
      <main className="app-content">
  <div className="app-title d-flex justify-content-between align-items-center mb-4">
    <ul className="breadcrumb mb-0">
      <li className="breadcrumb-item active">
        <a href="#" className="text-primary fw-bold">Danh sách hội viên</a>
      </li>
    </ul>
    <div id="clock" className="text-muted small" />
  </div>

  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <div className="row g-3 mb-3">
        <div className="col-md-auto">
          <a className="btn btn-primary btn-sm" href="form-add-member.html">
            <i className="fas fa-user-plus me-1"></i> Thêm hội viên
          </a>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="fas fa-file-upload me-1"></i> Nhập từ file
          </button>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="fas fa-print me-1"></i> In danh sách
          </button>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="fas fa-copy me-1"></i> Sao chép
          </button>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-outline-success btn-sm">
            <i className="fas fa-file-excel me-1"></i> Xuất Excel
          </button>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-outline-danger btn-sm">
            <i className="fas fa-file-pdf me-1"></i> Xuất PDF
          </button>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-outline-dark btn-sm">
            <i className="fas fa-trash-alt me-1"></i> Xóa tất cả
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Mã hội viên</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Gói tập</th>
              <th scope="col">Ngày bắt đầu</th>
              <th scope="col">Ngày kết thúc</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>HV001</td>
              <td>Nguyễn Văn A</td>
              <td>Gói 1 tháng - Gym cơ bản</td>
              <td>01/06/2025</td>
              <td>30/06/2025</td>
              <td><span className="badge bg-success">Còn hiệu lực</span></td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-danger" title="Xóa">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-primary" title="Sửa">
                    <i className="fa fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>HV002</td>
              <td>Trần Thị B</td>
              <td>Gói 3 tháng - Gym + Yoga</td>
              <td>15/04/2025</td>
              <td>15/07/2025</td>
              <td><span className="badge bg-warning text-dark">Sắp hết hạn</span></td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-danger" title="Xóa">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-primary" title="Sửa">
                    <i className="fa fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>HV003</td>
              <td>Lê Văn C</td>
              <td>Gói 1 năm - All Access</td>
              <td>01/01/2025</td>
              <td>01/01/2026</td>
              <td><span className="badge bg-danger">Đã hết hạn</span></td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-danger" title="Xóa">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-primary" title="Sửa">
                    <i className="fa fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
    </>

  );
}

export default Membership;