import React from 'react'
import "./nav.css";

function NavNotice() {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
            Bảng thông báo
            <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
            </a>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
            <i className="bi bi-exclamation-circle text-primary"></i>
            <div>
                <h4>Yêu cầu in ấn</h4>
                <p>Bạn có một yêu in ấn mới.</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
            <i className="bi bi-exclamation-circle text-primary"></i>
            <div>
                <h4>Yêu cầu in ấn</h4>
                <p>Bạn có một yêu in ấn mới.</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
            <i className="bi bi-exclamation-circle text-primary"></i>
            <div>
                <h4>Yêu cầu in ấn</h4>
                <p>Bạn có một yêu in ấn mới.</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
            <i className="bi bi-exclamation-circle text-primary"></i>
            <div>
                <h4>Yêu cầu in ấn</h4>
                <p>Bạn có một yêu in ấn mới.</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>
        <li className="notifications-footer">
            <a href="#"> Hiển thị tất cả thông báo </a>
        </li>

        </ul>
    </li>
  )
}

export default NavNotice