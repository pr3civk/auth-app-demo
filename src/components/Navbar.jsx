import { useState } from "react";

import "../styles/App.css";
import LoginModal from "./login-modal";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsOpen(true);
  }

  const handleRefresh = () => {
    window.location.href = "/";
  };

  const handleProfile = () => {
    window.location.href = "/profile";
  }

  return (
    <div className="navbar">
      <div id="frog" onClick={handleRefresh}>
        TestWebAPP🐸
      </div>
      {user ? (
        <div className="profile-values">
          <img src={user.photos[0].value} alt="avatar" className="avatar" onClick={handleProfile} />
          <span> {user.displayName}</span>
          <button className="logoutBtn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="loginBtn" onClick={handleOpenLoginModal}>
          Login
        </button>
      )}

      {isOpen && <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
