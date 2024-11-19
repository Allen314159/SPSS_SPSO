import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaHistory, FaPrint } from 'react-icons/fa';
import './SideBar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav-links">
        {/* Overview */}
        <NavLink to="/tongquan" className="nav-link-side" activeClassName="active-link">
          <FaHome className="icon" />
          <span className="link-text">Tổng quan</span>
        </NavLink>

        {/* System Info */}
        <NavLink to="/thongtin" className="nav-link-side" activeClassName="active-link">
          <FaInfoCircle className="icon" />
          <span className="link-text">Thông tin hệ thống</span>
        </NavLink>

        {/* History */}
        <NavLink to="/toanbo" className="nav-link-side" activeClassName="active-link">
          <FaHistory className="icon" />
          <span className="link-text">Toàn bộ lịch sử</span>
        </NavLink>

        {/* Print Requests */}
        <NavLink to="/yeucau" className="nav-link-side" activeClassName="active-link">
          <FaPrint className="icon" />
          <span className="link-text">Yêu cầu in ấn</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
