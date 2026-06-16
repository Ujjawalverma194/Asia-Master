import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/images/asiamasterlogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const styles = {
    navbar: {
      width: "100%",
      height: "88px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      padding: "0 65px",
      boxSizing: "border-box",
      background: scrolled || menuOpen ? "#ffffff" : "transparent",
      boxShadow:
        scrolled || menuOpen ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
      transition: "all .35s ease",
      fontFamily: "'Montserrat', Arial, sans-serif",
    },

    logo: {
      width: "275px",
      height: "auto",
      display: "block",
      flexShrink: 0,
      cursor: "pointer",
      margin: "10px 0 0 0",
    },

    menu: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      marginLeft: "50px",
      flex: 1,
      whiteSpace: "nowrap",
    },

    link: {
      textDecoration: "none",
      color: "#111",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      transition: "all .3s ease",
      position: "relative",
    },

    buttons: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexShrink: 0,
    },

    trackBtn: {
      width: "145px",
      height: "40px",
      border: "none",
      borderRadius: "25px",
      background: "#263b96",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "0.6px",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all .3s ease",
    },

    portalBtn: {
      width: "155px",
      height: "40px",
      border: "none",
      borderRadius: "25px",
      background: "#ffc400",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "0.6px",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all .3s ease",
    },

    hamburger: {
      display: "none",
      width: "34px",
      height: "28px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      marginLeft: "auto",
      position: "relative",
      zIndex: 1100,
    },
  };

  const navLinkStyle = ({ isActive }) => ({
    ...styles.link,
    color: isActive ? "#ffc400" : "#111",
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>
        {`
          .nav-link:hover {
            color: #ffc400 !important;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0;
            height: 2px;
            background: #ffc400;
            transition: width .3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .track-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(38,59,150,.25);
          }

          .portal-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255,196,0,.3);
          }

          .hamburger-line {
            width: 100%;
            height: 2px;
            background: #111;
            display: block;
            position: absolute;
            left: 0;
            transition: all .3s ease;
          }

          .hamburger-line:nth-child(1) {
            top: 3px;
            transform: ${menuOpen ? "rotate(45deg) translate(7px, 7px)" : "none"};
          }

          .hamburger-line:nth-child(2) {
            top: 13px;
            opacity: ${menuOpen ? 0 : 1};
          }

          .hamburger-line:nth-child(3) {
            top: 23px;
            transform: ${menuOpen ? "rotate(-45deg) translate(7px, -7px)" : "none"};
          }

          .mobile-menu {
            display: none;
          }

          @media (max-width: 1100px) {
            .desktop-menu,
            .desktop-buttons {
              display: none !important;
            }

            .hamburger-btn {
              display: block !important;
            }

            .navbar-main {
              height: 78px !important;
              padding: 0 24px !important;
              background: #fff !important;
            }

            .navbar-logo {
              width: 230px !important;
              margin-top: 6px !important;
            }

            .mobile-menu {
              display: block;
              position: fixed;
              top: 78px;
              left: 0;
              width: 100%;
              background: #fff;
              z-index: 999;
              padding: 28px 24px 28px;
              box-sizing: border-box;
              transform: translateY(${menuOpen ? "0" : "-120%"});
              opacity: ${menuOpen ? 1 : 0};
              pointer-events: ${menuOpen ? "auto" : "none"};
              transition: all .35s cubic-bezier(.22,1,.36,1);
              box-shadow: 0 18px 40px rgba(0,0,0,.12);
            }

            .mobile-menu a {
              display: block;
              text-decoration: none;
              color: #111;
              font-size: 14px;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 28px;
            }

            .mobile-menu a.active {
              color: #ffc400;
            }

            .mobile-menu .mobile-track,
            .mobile-menu .mobile-portal {
              width: 180px;
              height: 42px;
              border: none;
              border-radius: 24px;
              color: #fff;
              font-size: 13px;
              font-weight: 800;
              text-transform: uppercase;
              margin-bottom: 16px;
              display: block;
            }

            .mobile-track {
              background: #263b96;
            }

            .mobile-portal {
              background: #ffc400;
            }
          }

          @media (max-width: 480px) {
            .navbar-main {
              height: 72px !important;
              padding: 0 20px !important;
            }

            .navbar-logo {
              width: 210px !important;
            }

            .mobile-menu {
              top: 72px;
              padding: 26px 22px 24px;
            }
          }
        `}
      </style>

      <header className="navbar-main" style={styles.navbar}>
        <NavLink to="/" onClick={closeMenu}>
          <img
            className="navbar-logo"
            src={logo}
            alt="Asia Master Logistics"
            style={styles.logo}
          />
        </NavLink>

        <nav className="desktop-menu" style={styles.menu}>
          <NavLink to="/" end className="nav-link" style={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" style={navLinkStyle}>
            About Us
          </NavLink>

          <NavLink to="/ptl" className="nav-link" style={navLinkStyle}>
            PTL
          </NavLink>

          <NavLink to="/ftl" className="nav-link" style={navLinkStyle}>
            FTL
          </NavLink>

          <NavLink to="/career" className="nav-link" style={navLinkStyle}>
            Career
          </NavLink>

          <NavLink to="/contact" className="nav-link" style={navLinkStyle}>
            Contact Us
          </NavLink>

          <NavLink to="/branch" className="nav-link" style={navLinkStyle}>
            Branch Finder
          </NavLink>
        </nav>

        <div className="desktop-buttons" style={styles.buttons}>
          <NavLink to="/track-shipment" target="_blank">
            <button className="track-btn" style={styles.trackBtn}>
              Track Shipment
            </button>
          </NavLink>

          <button className="portal-btn" style={styles.portalBtn}>
            Customer Portal
          </button>
        </div>

        <button
          className="hamburger-btn"
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      <div className="mobile-menu">
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/ptl" onClick={closeMenu}>
          PTL
        </NavLink>

        <NavLink to="/ftl" onClick={closeMenu}>
          FTL
        </NavLink>

        <NavLink to="/career" onClick={closeMenu}>
          Career
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>

        <NavLink to="/branch" onClick={closeMenu}>
          Branch Finder
        </NavLink>

        <button
          className="mobile-track"
          onClick={() => {
            closeMenu();
            window.open("/track-shipment", "_blank");
          }}
        >
          Track Shipment
        </button>

        <button className="mobile-portal" onClick={closeMenu}>
          Customer Portal
        </button>
      </div>
    </>
  );
};

export default Navbar;