import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/images/asiamasterlogo.png";

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
    <footer ref={ref} className="footer" style={styles.footer}>
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

          @media (max-width: 1100px) {
            .footer-top {
              padding: 18px 45px 0 !important;
            }

            .footer-main {
              grid-template-columns: 1fr 1fr !important;
              padding: 45px 45px 55px !important;
              gap: 45px !important;
            }

            .footer-third {
              grid-column: 1 / -1;
            }

            .footer-bottom {
              padding: 24px 45px !important;
            }
          }

          @media (max-width: 768px) {
            .footer {
              margin-top: 0 !important;
            }

            .footer-watermark {
              display: none !important;
            }

            .footer-top {
              padding: 44px 22px 0 !important;
            }

            .footer-logo {
              width: 210px !important;
              margin-bottom: 8px !important;
            }

            .footer-main {
              display: block !important;
              padding: 48px 22px 42px !important;
            }

            .footer-col {
              border-right: none !important;
              padding-right: 0 !important;
              border-bottom: 1px solid rgba(255,255,255,0.18);
              padding-bottom: 38px !important;
              margin-bottom: 42px !important;
            }

            .footer-col:last-child {
              border-bottom: none !important;
              padding-bottom: 0 !important;
              margin-bottom: 0 !important;
            }

            .footer-city {
              font-size: 22px !important;
              margin-bottom: 16px !important;
            }

            .footer-address {
              font-size: 15px !important;
              line-height: 1.65 !important;
              margin-bottom: 22px !important;
            }

            .footer-phone {
              font-size: 20px !important;
              line-height: 1.5 !important;
              margin-bottom: 34px !important;
            }

            .footer-heading {
              font-size: 24px !important;
              margin-bottom: 24px !important;
            }

            .footer-links-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 18px 28px !important;
            }

            .footer-link {
              font-size: 15px !important;
              line-height: 1.3 !important;
            }

            .footer-right-wrap {
              display: grid !important;
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }

            .footer-app-btns {
              min-width: 0 !important;
              width: 175px !important;
              position: absolute;
              right: 10px;
              top: 610px;
            }

            .footer-app {
              font-size: 12px !important;
              padding: 8px 10px !important;
              border-radius: 7px !important;
            }

            .footer-note {
              font-size: 15px !important;
              max-width: 190px !important;
              margin-bottom: 26px !important;
            }

            .footer-social {
              width: 38px !important;
              height: 38px !important;
            }

            .footer-bottom {
              padding: 25px 22px 30px !important;
              font-size: 13px !important;
            }
          }

          @media (max-width: 480px) {
            .footer-top {
              padding: 42px 21px 0 !important;
            }

            .footer-logo {
              width: 205px !important;
            }

            .footer-main {
              padding: 45px 21px 36px !important;
            }

            .footer-city {
              font-size: 22px !important;
            }

            .footer-address {
              font-size: 15px !important;
            }

            .footer-phone {
              font-size: 20px !important;
            }

            .footer-heading {
              font-size: 24px !important;
            }

            .footer-links-grid {
              gap: 18px 24px !important;
            }

            .footer-app-btns {
              width: 160px !important;
              right: 0px;
              top: 620px;
            }

            .footer-bottom {
              padding: 24px 21px 28px !important;
            }
          }

          @media (max-width: 360px) {
            .footer-app-btns {
              width: 150px !important;
              right: -8px;
              top: 635px;
            }

            .footer-link {
              font-size: 14px !important;
            }
          }
        `}
      </style>

      <div style={styles.glow}></div>
      <div className="footer-watermark" style={styles.watermark}>ABC</div>

      <div className="footer-top" style={styles.top}>
        <img
          className="footer-logo"
          src={logo}
          alt="Asia Master"
          style={styles.logo}
        />
        <div style={styles.divider}></div>
      </div>

      <div className="footer-main" style={styles.main}>
        <div
          className="footer-col"
          style={{ ...styles.col(0), ...styles.borderCol }}
        >
          <h3 className="footer-city" style={styles.city}>Delhi:</h3>
          <p className="footer-address" style={styles.address}>
            HQ – 6 Rani Jhansi Road,
            <br />
            New Delhi 110055
          </p>
          <p className="footer-phone" style={styles.phone}>
            7065001053, 9320459696
          </p>

          <h3 className="footer-city" style={styles.city}>Mumbai</h3>
          <p className="footer-address" style={styles.address}>
            Gala 4 &amp; 5, Sector 19, Truck Terminal,
            <br />
            Vashi, Navi Mumbai – 400705
          </p>
          <p className="footer-phone" style={styles.phone}>
            7303882714, 7303882705
          </p>
        </div>

        <div
          className="footer-col"
          style={{ ...styles.col(0.12), ...styles.borderCol }}
        >
          <h3 className="footer-heading" style={styles.heading}>Quick Links</h3>

          <div className="footer-links-grid" style={styles.linksGrid}>
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

        <div className="footer-col footer-third" style={styles.col(0.24)}>
          <div className="footer-right-wrap" style={styles.rightWrap}>
            <div>
              <h3 className="footer-heading" style={styles.heading}>Others</h3>

              <p className="footer-note" style={styles.note}>
                Asia Master was honored with a Transport Ratna.
              </p>

              <h3 className="footer-heading" style={styles.heading}>Follow Us</h3>

              <div style={styles.socialRow}>
                <a href="#" className="footer-social" style={styles.social}>
                  ◎
                </a>
                <a href="#" className="footer-social" style={styles.social}>
                  in
                </a>
              </div>
            </div>

            <div className="footer-app-btns" style={styles.appBtns}>
              <div className="footer-app" style={styles.appBtn}>
                 App Store
              </div>
              <div className="footer-app" style={styles.appBtn}>
                ▶ Google Play
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={styles.bottom}>
        <span>© 2026 Asia Master. All Rights Reserved</span>
        <span style={{ fontSize: "26px", fontWeight: "900" }}>db</span>
      </div>
    </footer>
  );
};

export default Footer;