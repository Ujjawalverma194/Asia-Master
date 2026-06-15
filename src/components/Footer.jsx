import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/images/asiamasterlogo.png"
const Footer = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.18 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    footer: {
      width: "100%",
      background: "linear-gradient(135deg, #233f98 0%, #243b8f 100%)",
      color: "#fff",
      fontFamily: "'Montserrat', Arial, sans-serif",
      position: "relative",
      overflow: "hidden",
    },

    glow: {
      position: "absolute",
      right: "-120px",
      top: "-120px",
      width: "330px",
      height: "330px",
      borderRadius: "50%",
      background: "rgba(255,196,0,0.14)",
      filter: "blur(70px)",
    },

    watermark: {
      position: "absolute",
      right: "-40px",
      bottom: "20px",
      fontSize: "150px",
      fontWeight: "900",
      color: "rgba(255,255,255,0.035)",
      pointerEvents: "none",
    },

    top: {
      padding: "10px 75px 0",
      boxSizing: "border-box",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(35px)",
      transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
    },

    logo: {
      width: "235px",
      // height:"200px"
      // marginBottom: "18px",
    },

    divider: {
      height: "1px",
      background: "rgba(255,255,255,0.18)",
      width: "100%",
    },

    main: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr 1fr",
      gap: "58px",
      padding: "55px 105px 62px",
      boxSizing: "border-box",
    },

    col: (delay = 0) => ({
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(45px)",
      transition: `all 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }),

    borderCol: {
      borderRight: "1px solid rgba(255,255,255,0.16)",
      paddingRight: "55px",
    },

    city: {
      fontSize: "20px",
      fontWeight: "600",
      margin: "0 0 18px",
    },

    address: {
      fontSize: "16px",
      lineHeight: "1.7",
      color: "rgba(255,255,255,0.72)",
      margin: "0 0 22px",
      fontWeight: "500",
    },

    phone: {
      fontSize: "18px",
      fontWeight: "600",
      margin: "0 0 34px",
      color: "#fff",
    },

    heading: {
      fontSize: "22px",
      fontWeight: "800",
      color: "#ffc400",
      margin: "0 0 30px",
    },

    linksGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "17px 45px",
    },

    link: {
      color: "rgba(255,255,255,0.74)",
      fontSize: "16px",
      fontWeight: "600",
      textDecoration: "none",
      transition: "all .3s ease",
      width: "fit-content",
    },

    note: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "rgba(255,255,255,0.72)",
      fontWeight: "600",
      margin: "0 0 26px",
      maxWidth: "320px",
    },

    rightWrap: {
      display: "flex",
      justifyContent: "space-between",
      gap: "36px",
      alignItems: "flex-start",
    },

    appBtns: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "8px",
      minWidth: "180px",
    },

    appBtn: {
      background: "#fff",
      color: "#111",
      borderRadius: "8px",
      padding: "10px 14px",
      fontSize: "13px",
      fontWeight: "800",
      textAlign: "center",
      boxShadow: "0 10px 22px rgba(0,0,0,0.14)",
      transition: "all .3s ease",
    },

    socialRow: {
      display: "flex",
      gap: "15px",
      marginTop: "18px",
    },

    social: {
      width: "40px",
      height: "40px",
      border: "1px solid rgba(255,255,255,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "800",
      textDecoration: "none",
      transition: "all .3s ease",
    },

    bottom: {
      borderTop: "1px solid rgba(255,255,255,0.18)",
      padding: "28px 105px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "rgba(255,255,255,0.65)",
      fontSize: "15px",
      fontWeight: "600",
      boxSizing: "border-box",
      opacity: show ? 1 : 0,
      transition: "opacity .8s ease .35s",
    },
  };

  return (
    <footer ref={ref} style={styles.footer}>
      <style>
        {`
          .footer-link:hover {
            color: #ffc400 !important;
            transform: translateX(7px);
          }

          .footer-social:hover {
            background: #ffc400;
            color: #111 !important;
            border-color: #ffc400 !important;
            transform: translateY(-4px);
          }

          .footer-app:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px rgba(0,0,0,0.18);
          }
        `}
      </style>

      <div style={styles.glow}></div>
      <div style={styles.watermark}>ABC</div>

      <div style={styles.top}>
        <img
          src={logo}
          alt="ABC Express"
          style={styles.logo}
        />
        <div style={styles.divider}></div>
      </div>

      <div style={styles.main}>
        <div style={{ ...styles.col(0), ...styles.borderCol }}>
          <h3 style={styles.city}>Delhi:</h3>
          <p style={styles.address}>
            HQ – 6 Rani Jhansi Road,
            <br />
            New Delhi 110055
          </p>
          <p style={styles.phone}>7065001053, 9320459696</p>

          <h3 style={styles.city}>Mumbai</h3>
          <p style={styles.address}>
            Gala 4 &amp; 5, Sector 19, Truck Terminal,
            <br />
            Vashi, Navi Mumbai – 400705
          </p>
          <p style={styles.phone}>7303882714, 7303882705</p>
        </div>

        <div style={{ ...styles.col(0.12), ...styles.borderCol }}>
          <h3 style={styles.heading}>Quick Links</h3>

          <div style={styles.linksGrid}>
            {[
              "About",
              "ERP Login",
              "Part Truck Load",
              "Career",
              "Full Truck Load",
              "Blog",
              "Track Shipment",
              "Contact Us",
              "Vehicles For Sale",
              "Service Areas",
            ].map((item) => (
              <a href="#" key={item} className="footer-link" style={styles.link}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div style={styles.col(0.24)}>
          <div style={styles.rightWrap}>
            <div>
              <h3 style={styles.heading}>Others</h3>
              <p style={styles.note}>
                ABC was honored with a Transport Ratna.
              </p>

              <h3 style={styles.heading}>Follow Us</h3>
              <div style={styles.socialRow}>
                <a href="#" className="footer-social" style={styles.social}>◎</a>
                <a href="#" className="footer-social" style={styles.social}>in</a>
              </div>
            </div>

            <div style={styles.appBtns}>
              <div className="footer-app" style={styles.appBtn}> App Store</div>
              <div className="footer-app" style={styles.appBtn}>▶ Google Play</div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <span>© 2026 ABC Express. All Rights Reserved</span>
        <span style={{ fontSize: "26px", fontWeight: "900" }}>db</span>
      </div>
    </footer>
  );
};

export default Footer;