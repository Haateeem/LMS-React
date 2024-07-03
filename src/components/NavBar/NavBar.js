import React, { useEffect, useState } from "react";
import "./NavBar.css"; // Make sure you have the corresponding CSS file for styling

function NavBar() {
  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => setShowProfile(!showProfile);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid nav_custom">
        <button className="menu-btn">
          <img src="../images/more.png" alt="Menu Icon" />
        </button>
        <div className="nav_right">
          {/* Uncomment if you have a bell notification icon */}
          {/* <button onClick={() => toggleNotificationPanel()} className="bell-icon" id="bell-icon">
                        <img src="../images/bell2.png" alt="Notification Icon" width="40" />
                    </button> */}
          <button className="golayi-frame" onClick={toggleProfile}>
            <img
              className="golayi"
              id="auto-change-dp"
              src="../images/default.png"
              alt="Profile Button"
            />
          </button>
          {showProfile && (
            <div id="admin-profile" className="admin-profile">
              <p>
                <strong>Name:</strong> <span id="admin-name">Admin Name</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span id="admin-email">admin@example.com</span>
              </p>
              <p>
                <strong>Admin ID:</strong> <span id="admin-id">12345</span>
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                <span id="admin-contact">+1234567890</span>
              </p>
              <hr />
              <a className="dropdown-item" href="./LogIn.html">
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
