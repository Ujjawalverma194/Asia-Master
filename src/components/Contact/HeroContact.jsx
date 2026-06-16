import React, { useEffect, useRef, useState } from "react";

const HeroContact = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      padding: "145px 95px 120px",
      background: "linear-gradient(135deg, #ffffff 0%, #f6f8ff 100%)",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      position: "relative",
      overflow: "hidden",
    },

    bgShape: {
      position: "absolute",
      right: "-130px",
      top: "160px",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(255,196,0,0.16)",
      filter: "blur(12px)",
    },

    header: {
      textAlign: "center",
      marginBottom: "70px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(40px)",
      transition: "all .8s cubic-bezier(.22,1,.36,1)",
      position: "relative",
      zIndex: 2,
    },

    eyebrow: {
      color: "#ffc400",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: "4px",
      textTransform: "uppercase",
      marginBottom: "16px",
    },

    title: {
      fontSize: "48px",
      lineHeight: "1.15",
      fontWeight: "750",
      margin: "0 0 18px",
      color: "#080808",
    },

    subtitle: {
      fontSize: "16px",
      color: "#555",
      fontWeight: "500",
      margin: 0,
      lineHeight: "1.6",
    },

    wrapper: {
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: "34px",
      alignItems: "stretch",
      position: "relative",
      zIndex: 2,
    },

    infoPanel: {
      background: "linear-gradient(135deg, #263b96 0%, #1d2f7b 100%)",
      borderRadius: "28px",
      padding: "42px",
      color: "#fff",
      boxShadow: "0 26px 60px rgba(38,59,150,.22)",
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0)" : "translateX(-60px)",
      transition: "all .9s cubic-bezier(.22,1,.36,1)",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
    },

    infoTitle: {
      fontSize: "30px",
      fontWeight: "700",
      margin: "0 0 14px",
      lineHeight: "1.25",
    },

    infoSub: {
      fontSize: "15px",
      lineHeight: "1.7",
      color: "rgba(255,255,255,.78)",
      margin: "0 0 32px",
    },

    detailCard: {
      background: "rgba(255,255,255,.10)",
      border: "1px solid rgba(255,255,255,.14)",
      borderRadius: "18px",
      padding: "20px",
      marginBottom: "16px",
      transition: "all .3s ease",
      boxSizing: "border-box",
    },

    detailTitle: {
      color: "#ffc400",
      fontSize: "16px",
      fontWeight: "800",
      margin: "0 0 9px",
    },

    detailText: {
      fontSize: "14px",
      lineHeight: "1.65",
      color: "rgba(255,255,255,.9)",
      margin: 0,
    },

    formBox: {
      background: "#fff",
      borderRadius: "28px",
      padding: "46px 50px",
      boxShadow: "0 28px 70px rgba(0,0,0,.10)",
      border: "1px solid rgba(38,59,150,.08)",
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0)" : "translateX(60px)",
      transition: "all .9s cubic-bezier(.22,1,.36,1) .12s",
      boxSizing: "border-box",
    },

    formTitle: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#111",
      margin: "0 0 30px",
      lineHeight: "1.25",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "24px",
    },

    input: {
      width: "100%",
      height: "54px",
      border: "1px solid rgba(0,0,0,.12)",
      borderRadius: "14px",
      padding: "0 16px",
      outline: "none",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "'Montserrat', Arial, sans-serif",
      boxSizing: "border-box",
      transition: "all .3s ease",
      background: "#fafafa",
    },

    textarea: {
      width: "100%",
      height: "130px",
      border: "1px solid rgba(0,0,0,.12)",
      borderRadius: "14px",
      padding: "16px",
      outline: "none",
      resize: "none",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "'Montserrat', Arial, sans-serif",
      boxSizing: "border-box",
      transition: "all .3s ease",
      background: "#fafafa",
      gridColumn: "1 / -1",
    },

    button: {
      marginTop: "30px",
      height: "54px",
      padding: "0 8px 0 26px",
      border: "none",
      borderRadius: "35px",
      background: "#ffc400",
      color: "#111",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: ".8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      boxShadow: "0 16px 34px rgba(255,196,0,.3)",
      transition: "all .3s ease",
    },

    btnCircle: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
    },
  };

  return (
    <section ref={ref} className="contact-section" style={styles.section}>
      <style>
        {`
          .contact-field:focus {
            border-color: #ffc400 !important;
            background: #fff !important;
            box-shadow: 0 0 0 4px rgba(255,196,0,.12);
          }

          .contact-detail:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,.16) !important;
          }

          .contact-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 22px 45px rgba(255,196,0,.42) !important;
          }

          @media (max-width: 1200px) {
            .contact-section {
              padding: 130px 55px 105px !important;
            }

            .contact-title {
              font-size: 42px !important;
            }

            .contact-wrapper {
              grid-template-columns: 1fr 1.2fr !important;
              gap: 28px !important;
            }

            .contact-info-panel {
              padding: 36px !important;
            }

            .contact-form-box {
              padding: 42px 40px !important;
            }
          }

          @media (max-width: 900px) {
            .contact-section {
              min-height: auto !important;
              padding: 115px 28px 90px !important;
            }

            .contact-bg-shape {
              width: 300px !important;
              height: 300px !important;
              right: -150px !important;
              top: 120px !important;
            }

            .contact-header {
              margin-bottom: 55px !important;
            }

            .contact-title {
              font-size: 38px !important;
              line-height: 1.2 !important;
            }

            .contact-subtitle {
              max-width: 520px !important;
              margin: 0 auto !important;
            }

            .contact-wrapper {
              grid-template-columns: 1fr !important;
              max-width: 680px !important;
              gap: 28px !important;
            }

            .contact-info-panel,
            .contact-form-box {
              transform: ${show ? "translateX(0)" : "translateY(50px)"} !important;
            }
          }

          @media (max-width: 600px) {
            .contact-section {
              padding: 95px 20px 75px !important;
            }

            .contact-header {
              margin-bottom: 45px !important;
            }

            .contact-eyebrow {
              font-size: 12px !important;
              letter-spacing: 3px !important;
              margin-bottom: 14px !important;
            }

            .contact-title {
              font-size: 34px !important;
              line-height: 1.25 !important;
            }

            .contact-subtitle {
              font-size: 15px !important;
              line-height: 1.6 !important;
            }

            .contact-info-panel {
              padding: 30px 24px !important;
              border-radius: 22px !important;
            }

            .contact-info-title {
              font-size: 27px !important;
            }

            .contact-info-sub {
              font-size: 14px !important;
              margin-bottom: 26px !important;
            }

            .contact-detail-card {
              padding: 18px !important;
              border-radius: 16px !important;
            }

            .contact-form-box {
              padding: 34px 24px !important;
              border-radius: 22px !important;
            }

            .contact-form-title {
              font-size: 25px !important;
              margin-bottom: 24px !important;
            }

            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 18px !important;
            }

            .contact-textarea {
              grid-column: auto !important;
              height: 120px !important;
            }

            .contact-btn {
              width: 100% !important;
              justify-content: center !important;
              padding: 0 8px 0 20px !important;
            }
          }

          @media (max-width: 360px) {
            .contact-section {
              padding: 82px 16px 65px !important;
            }

            .contact-title {
              font-size: 30px !important;
            }

            .contact-info-panel,
            .contact-form-box {
              padding: 28px 20px !important;
            }

            .contact-form-title {
              font-size: 23px !important;
            }
          }
        `}
      </style>

      <div className="contact-bg-shape" style={styles.bgShape}></div>

      <div className="contact-header" style={styles.header}>
        <div className="contact-eyebrow" style={styles.eyebrow}>
          Contact Us
        </div>

        <h1 className="contact-title" style={styles.title}>
          Let’s Move Your Shipment Together
        </h1>

        <p className="contact-subtitle" style={styles.subtitle}>
          Reach out for transport enquiries, shipment support, or business logistics solutions.
        </p>
      </div>

      <div className="contact-wrapper" style={styles.wrapper}>
        <div className="contact-info-panel" style={styles.infoPanel}>
          <h2 className="contact-info-title" style={styles.infoTitle}>
            Get in Touch
          </h2>

          <p className="contact-info-sub" style={styles.infoSub}>
            Our team is ready to help with PTL, FTL, tracking, and route-based logistics support.
          </p>

          <div className="contact-detail contact-detail-card" style={styles.detailCard}>
            <h3 style={styles.detailTitle}>Delhi Office</h3>
            <p style={styles.detailText}>
              HQ – 6 Rani Jhansi Road,<br />
              New Delhi 110055<br />
              9320459696, 7065001053
            </p>
          </div>

          <div className="contact-detail contact-detail-card" style={styles.detailCard}>
            <h3 style={styles.detailTitle}>Mumbai Office</h3>
            <p style={styles.detailText}>
              Gala 4 & 5, Sector 19, Truck Terminal,<br />
              Vashi, Navi Mumbai – 400705<br />
              7303882714, 7303882705
            </p>
          </div>

          <div className="contact-detail contact-detail-card" style={styles.detailCard}>
            <h3 style={styles.detailTitle}>Email</h3>
            <p style={styles.detailText}>info@asiamaster.co.in</p>
          </div>
        </div>

        <form className="contact-form-box" style={styles.formBox}>
          <h2 className="contact-form-title" style={styles.formTitle}>
            Send us your requirement
          </h2>

          <div className="contact-grid" style={styles.grid}>
            <input className="contact-field" style={styles.input} placeholder="Your Name" />
            <input className="contact-field" style={styles.input} placeholder="Email Id" />
            <input className="contact-field" style={styles.input} placeholder="Phone Number" />
            <input className="contact-field" style={styles.input} placeholder="Subject" />
            <textarea
              className="contact-field contact-textarea"
              style={styles.textarea}
              placeholder="Message"
            />
          </div>

          <button className="contact-btn" type="submit" style={styles.button}>
            Submit Request <span style={styles.btnCircle}>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroContact;