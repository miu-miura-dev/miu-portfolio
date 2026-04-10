import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        
        {/* ロゴ */}
        <h1 className="header__logo">MIU MIURA</h1>

        {/* 🔥 右側まとめる */}
        <div className="header__right">
          
          {/* ナビ（PC） */}
          <nav className="header__nav">
            <a href="#works">WORKS</a>
            <a href="#skill">SKILL</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>

          {/* ハンバーガー */}
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#works" onClick={() => setIsOpen(false)}>WORKS</a>
          <a href="#skill" onClick={() => setIsOpen(false)}>SKILL</a>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
    </header>
  );
};

export default Header;