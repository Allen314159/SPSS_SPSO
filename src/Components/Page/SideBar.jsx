import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPrint, FaCog, FaChevronDown } from 'react-icons/fa';
import './SideBar.scss';

function ASidebar({ expanded, toggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link-side" activeClassName="active-link">
          <FaHome className="icon" />
          <span>Tổng quan</span>
        </NavLink>

        <NavLink to="/thongtin" className="nav-link-side" activeClassName="active-link">
        <FaInfoCircle className="icon" />
          <span>Thông tin hệ thống</span>
        </NavLink>

        <NavLink to="/thongtin/baocao" className="nav-link-side" activeClassName="active-link">
        <FaInfoCircle className="icon" />
          <span>Báo cáo sử dụng</span>
        </NavLink>

        <NavLink to="/thongtin/mayin" className="nav-link-side" activeClassName="active-link">
        <FaInfoCircle className="icon" />
          <span>Thông tin máy in</span>
        </NavLink>

        <NavLink to="/lichsu" className="nav-link-side" activeClassName="active-link">
          <FaPrint className="icon" />
          <span>Lịch sử in ấn</span>
        </NavLink>

        <NavLink to="/quanlymayin" className="nav-link-side" activeClassName="active-link">
          <FaCog className="icon" />
          <span>Quản lý máy in</span>
        </NavLink>

        <NavLink to="/quanlytrangin" className="nav-link-side" activeClassName="active-link">
          <FaCog className="icon" />
          <span>Quản lý trang in</span>
        </NavLink>

        <NavLink to="/quanlytrangin/datlai" className="nav-link-side" activeClassName="active-link">
          <FaCog className="icon" />
          <span>Đặt lại trang in</span>
        </NavLink>

        <NavLink to="/quanlytrangin/caidat" className="nav-link-side" activeClassName="active-link">
          <FaCog className="icon" />
          <span>Cài đặt</span>
        </NavLink>

      </div>
    </div>
  );
}

export default ASidebar;
