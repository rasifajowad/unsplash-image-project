import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ isDarkTheme, toggleDarkTheme }) => {
  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={() => toggleDarkTheme()}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <FaSun className="toggle-icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
