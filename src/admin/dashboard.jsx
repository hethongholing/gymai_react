import React from "react"; 

function Dashboard() {
  return (
    <>
    <main
          className="p-4"
          style={{
            flex: "1",
          }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">Bảng điều khiển</h4>
            <div id="clock" />
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm border-primary">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">Tổng khách hàng</h5>
                    <h6 className="fw-bold">56 khách hàng</h6>
                    <small className="text-muted">
                      Tổng số khách hàng được quản lý
                    </small>
                  </div>
                  <i className="fas fa-users fa-2x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm border-info">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">Tổng sản phẩm</h5>
                    <h6 className="fw-bold">1850 sản phẩm</h6>
                    <small className="text-muted">
                      Tổng số sản phẩm được quản lý
                    </small>
                  </div>
                  <i className="fas fa-boxes fa-2x text-info" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h5 className="fw-bold mb-3">Tình trạng đơn hàng</h5>
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Khách hàng</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AL3947</td>
                  <td>Phạm Thị Ngọc</td>
                  <td>19.770.000 đ</td>
                  <td>
                    <span className="badge bg-info">Chờ xử lý</span>
                  </td>
                </tr>
                <tr>
                  <td>ER3835</td>
                  <td>Nguyễn Thị Mỹ Yến</td>
                  <td>16.770.000 đ</td>
                  <td>
                    <span className="badge bg-warning">Đang vận chuyển</span>
                  </td>
                </tr>
                <tr>
                  <td>MD0837</td>
                  <td>Triệu Thanh Phú</td>
                  <td>9.400.000 đ</td>
                  <td>
                    <span className="badge bg-success">Đã hoàn thành</span>
                  </td>
                </tr>
                <tr>
                  <td>MT9835</td>
                  <td>Đặng Hoàng Phúc</td>
                  <td>40.650.000 đ</td>
                  <td>
                    <span className="badge bg-danger">Đã hủy</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <footer className="text-center mt-5 small">
            <p>
              © <span id="year" /> Phần mềm quản lý phòng tập gym | Dev By Gym
            </p>
          </footer>
        </main>
    </>

  );
}

export default Dashboard;