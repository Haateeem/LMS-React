import "./MenuPanel.css";
import { FaHome, FaBook, FaUsers, FaChartLine, FaCog } from "react-icons/fa";

function MenuPanel() {
  return (
    <>
      <div className="menu-panel">
        <div className="logo">
          <h2>LMS</h2>
        </div>
        <ul className="menu-items">
          <li>
            <a href="/dashboard">
              <FaHome /> Dashboard
            </a>
          </li>
          <li>
            <a href="/courses">
              <FaBook /> Courses
            </a>
          </li>
          <li>
            <a href="/students">
              <FaUsers /> Students
            </a>
          </li>
          <li>
            <a href="/analytics">
              <FaChartLine /> Analytics
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCog /> Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuPanel;
