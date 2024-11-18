import React from 'react'

function NavMessage() {
  return (
    <li className="nav-item dropdown">
        <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-danger">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
            Notifications
            <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
            </a>
        </li>
        <li>
            <hr className="dropdown-divier" />
        </li>
        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-warning"></i>
            <div>
                <h4>Lorem</h4>
                <p>abc</p>
                <p>5 min, ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divier" />
        </li>
        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-danger"></i>
            <div>
                <h4>Lorem</h4>
                <p>abc</p>
                <p>5 min, ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divier" />
        </li>
        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-success"></i>
            <div>
                <h4>Lorem</h4>
                <p>abc</p>
                <p>5 min, ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divier" />
        </li>
        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-primary"></i>
            <div>
                <h4>Lorem</h4>
                <p>abc</p>
                <p>5 min, ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divier" />
        </li>
        <li className="notification-footer">
            <a href="#">Show all notifications</a>
        </li>

        </ul>
    </li>
  )
}

export default NavMessage