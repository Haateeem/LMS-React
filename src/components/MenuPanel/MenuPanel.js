import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaChartLine,
  FaCog,
  FaBars,
} from "react-icons/fa";
import "./MenuPanel.css";

function MenuPanel() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`menu-panel ${collapsed ? "collapsed" : ""}`}>
      <div className="logo">
        {/* <h2>LMS</h2> */}
        <FaBars className="menu-icon" onClick={toggleCollapse} />
      </div>
      <ul className="menu-items">
        <li>
          <a href="/dashboard">
            <FaHome /> <span className="menu-text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/courses">
            <FaBook /> <span className="menu-text">Courses</span>
          </a>
        </li>
        <li>
          <a href="/students">
            <FaUsers /> <span className="menu-text">Students</span>
          </a>
        </li>
        <li>
          <a href="/analytics">
            <FaChartLine /> <span className="menu-text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <FaCog /> <span className="menu-text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuPanel;
