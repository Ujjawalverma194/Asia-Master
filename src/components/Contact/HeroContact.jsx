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
    },

    infoTitle: {
      fontSize: "30px",
      fontWeight: "700",
      margin: "0 0 14px",
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
    },

    formTitle: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#111",
      margin: "0 0 30px",
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
    <section ref={ref} style={styles.section}>
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
        `}
      </style>

      <div style={styles.bgShape}></div>

      <div style={styles.header}>
        <div style={styles.eyebrow}>Contact Us</div>
        <h1 style={styles.title}>Let’s Move Your Shipment Together</h1>
        <p style={styles.subtitle}>
          Reach out for transport enquiries, shipment support, or business logistics solutions.
        </p>
      </div>

      <div style={styles.wrapper}>
        <div style={styles.infoPanel}>
          <h2 style={styles.infoTitle}>Get in Touch</h2>
          <p style={styles.infoSub}>
            Our team is ready to help with PTL, FTL, tracking, and route-based logistics support.
          </p>

          <div className="contact-detail" style={styles.detailCard}>
            <h3 style={styles.detailTitle}>Delhi Office</h3>
            <p style={styles.detailText}>
              HQ – 6 Rani Jhansi Road,<br />
              New Delhi 110055<br />
              9320459696, 7065001053
            </p>
          </div>

          <div className="contact-detail" style={styles.detailCard}>
            <h3 style={styles.detailTitle}>Mumbai Office</h3>
            <p style={styles.detailText}>
              Gala 4 & 5, Sector 19, Truck Terminal,<br />
              Vashi, Navi Mumbai – 400705<br />
              7303882714, 7303882705
            </p>
          </div>

          <div className="contact-detail" style={styles.detailCard}>
            <h3 style={styles.detailTitle}>Email</h3>
            <p style={styles.detailText}>info@asiamaster.co.in</p>
          </div>
        </div>

        <form style={styles.formBox}>
          <h2 style={styles.formTitle}>Send us your requirement</h2>

          <div style={styles.grid}>
            <input className="contact-field" style={styles.input} placeholder="Your Name" />
            <input className="contact-field" style={styles.input} placeholder="Email Id" />
            <input className="contact-field" style={styles.input} placeholder="Phone Number" />
            <input className="contact-field" style={styles.input} placeholder="Subject" />
            <textarea className="contact-field" style={styles.textarea} placeholder="Message" />
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