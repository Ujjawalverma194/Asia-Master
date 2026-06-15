import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/images/asiamasterlogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      padding: "0 105px",
      boxSizing: "border-box",
      background: scrolled ? "#ffffff" : "transparent",
      boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
      transition: "all .35s ease",
      fontFamily: "'Montserrat', Arial, sans-serif",
    },

    logo: {
      width: "275px",
      height: "auto",
      display: "block",
      flexShrink: 0,
      cursor: "pointer",
    },

    menu: {
      display: "flex",
      alignItems: "center",
      gap: "34px",
      marginLeft: "90px",
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
      gap: "24px",
      flexShrink: 0,
    },

    trackBtn: {
      width: "175px",
      height: "40px",
      border: "none",
      borderRadius: "25px",
      background: "#263b96",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.6px",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all .3s ease",
    },

    portalBtn: {
      width: "190px",
      height: "40px",
      border: "none",
      borderRadius: "25px",
      background: "#ffc400",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.6px",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all .3s ease",
    },
  };

  const navLinkStyle = ({ isActive }) => ({
    ...styles.link,
    color: isActive ? "#ffc400" : "#111",
  });

  return (
    <>
      <style>
        {`
          .nav-link:hover{
            color:#ffc400 !important;
          }

          .nav-link::after{
            content:'';
            position:absolute;
            left:0;
            bottom:-6px;
            width:0;
            height:2px;
            background:#ffc400;
            transition:width .3s ease;
          }

          .nav-link:hover::after{
            width:100%;
          }

          .track-btn:hover{
            transform:translateY(-2px);
            box-shadow:0 10px 20px rgba(38,59,150,.25);
          }

          .portal-btn:hover{
            transform:translateY(-2px);
            box-shadow:0 10px 20px rgba(255,196,0,.3);
          }
        `}
      </style>

      <header style={styles.navbar}>
        <NavLink to="/">
          <img src={logo} alt="Asia Master Logistics" style={styles.logo} />
        </NavLink>

        <nav style={styles.menu}>
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
        </nav>

        <div style={styles.buttons}>
          <button className="track-btn" style={styles.trackBtn}>
            Track Shipment
          </button>

          <button className="portal-btn" style={styles.portalBtn}>
            Customer Portal
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;