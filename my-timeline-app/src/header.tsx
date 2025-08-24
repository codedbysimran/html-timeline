import React from "react";

type Props = {
  dark: boolean;
  onToggle: () => void;
};

const Header: React.FC<Props> = ({ dark, onToggle }) => {
  return (
    <header className="header">
      <h1>Timeline of Major Festivals Celebrated in India</h1>
      <button className="btn" onClick={onToggle}>
        {dark ? "Light Theme" : "Dark Theme"}
      </button>
    </header>
  );
};

export default Header;