import React from "react";
import profileImg from "../images/user.png";

function NavAva() {
  return (
    <li className="nav-item dropdown pe-3">
      <a
        href="#"
        className="nav-link nav-profile d-flex align-items-center pe-0"
        data-bs-toggle="dropdown"
      >
        <img src={profileImg} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toogle ps-2 ">Admin</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Admin</h6>
          <span>Wed developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a 
          href="users-profile.html" 
          className="dropdown-item d-flex algin-items-center"
          >
            <i className="bi bi-person"></i>
            <span>Hồ sơ của tôi</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a 
          href="users-profile.html" 
          className="dropdown-item d-flex algin-items-center"
          >
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a 
          href="#" 
          className="dropdown-item d-flex algin-items-center"
          >
            <i className="bi bi-box-arrow-right"></i>
            <span>Đăng xuất</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAva;
