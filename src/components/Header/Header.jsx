import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => setNavOpen((prev) => !prev);
  const handleClose = () => setNavOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 991) {
        setNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="top-utility">
        <div className="top-utility-inner">
          <a href="#latest">Events</a>
          <a href="#footer">Contact us</a>
          <a href="#hero">
            ENG <i className="bi bi-chevron-down"></i>
          </a>
        </div>
      </div>
      <div className="header-bar">
        <a className="brand-lockup" href="#hero" aria-label="eGov Foundation home">
          <img src="/images/eGov-Foundation.png" alt="eGov Foundation" />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-controls="main-navigation"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <i className={`bi ${navOpen ? "bi-x-lg" : "bi-list"} fs-4`}></i>
        </button>
        <nav className={`main-nav${navOpen ? " open" : ""}`} id="main-navigation">
          <a href="#hero" onClick={handleClose}>
            About Us <i className="bi bi-chevron-down"></i>
          </a>
          <a href="#impact" onClick={handleClose}>
            Areas of work <i className="bi bi-chevron-down"></i>
          </a>
          <a href="#platform" onClick={handleClose}>
            Products &amp; Solutions <i className="bi bi-chevron-down"></i>
          </a>
          <a href="#stories" onClick={handleClose}>
            Our Platform <i className="bi bi-chevron-down"></i>
          </a>
          <a href="#supporters" onClick={handleClose}>
            Ecosystem <i className="bi bi-chevron-down"></i>
          </a>
          <a href="#latest" onClick={handleClose}>
            Resources <i className="bi bi-chevron-down"></i>
          </a>
        </nav>
        <a className="search-trigger" href="#latest" aria-label="Search">
          <i className="bi bi-search"></i>
        </a>
      </div>
    </header>
  );
}
