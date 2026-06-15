import React, { useEffect, useRef, useState } from "react";
import Image from "../../../public/images/ftlsection.png"
const HeroFTL = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      padding: "150px 95px 90px",
      boxSizing: "border-box",
      background:
        "linear-gradient(180deg, #ffffff 0%, #fafafa 55%, #ffffff 100%)",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    bgCircle: {
      position: "absolute",
      right: "-160px",
      top: "120px",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(255,196,0,0.12)",
      filter: "blur(4px)",
    },

    wrapper: {
      maxWidth: "1500px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "80px",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },

    content: {
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0)" : "translateX(-70px)",
      transition: "all .9s cubic-bezier(.22,1,.36,1)",
    },

    eyebrow: {
      color: "#ffc400",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: "2.5px",
      textTransform: "uppercase",
      marginBottom: "18px",
    },

    title: {
      fontSize: "56px",
      lineHeight: "1.1",
      fontWeight: "750",
      color: "#080808",
      margin: "0 0 28px",
    },

    titleAccent: {
      color: "#263b96",
    },

    para: {
      fontSize: "17px",
      lineHeight: "1.75",
      fontWeight: "500",
      color: "#222",
      margin: "0 0 20px",
      maxWidth: "780px",
    },

    points: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      marginTop: "34px",
      maxWidth: "780px",
    },

    point: {
      background: "#fff",
      border: "1px solid rgba(38,59,150,.12)",
      borderRadius: "16px",
      padding: "18px 16px",
      boxShadow: "0 12px 28px rgba(0,0,0,.045)",
      transition: "all .3s ease",
    },

    pointNum: {
      color: "#ffc400",
      fontSize: "22px",
      fontWeight: "800",
      marginBottom: "6px",
    },

    pointText: {
      fontSize: "13px",
      lineHeight: "1.45",
      fontWeight: "650",
      color: "#263b96",
    },

    actions: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "38px",
    },

    primaryBtn: {
      height: "52px",
      padding: "0 8px 0 24px",
      border: "none",
      borderRadius: "35px",
      background: "#ffc400",
      color: "#111",
      fontSize: "15px",
      fontWeight: "750",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      boxShadow: "0 16px 32px rgba(255,196,0,.25)",
      transition: "all .3s ease",
    },

    circle: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
    },

    secondaryBtn: {
      height: "52px",
      padding: "0 26px",
      borderRadius: "35px",
      border: "1px solid #263b96",
      background: "#fff",
      color: "#263b96",
      fontSize: "15px",
      fontWeight: "750",
      cursor: "pointer",
      transition: "all .3s ease",
    },

    imageArea: {
      position: "relative",
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0) scale(1)" : "translateX(70px) scale(.96)",
      transition: "all 1s cubic-bezier(.22,1,.36,1) .12s",
    },

    imageCard: {
      width: "100%",
      height: "560px",
      borderRadius: "26px",
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 30px 70px rgba(0,0,0,.16)",
      border: "8px solid #fff",
      background: "#eee",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
      transform: hover ? "scale(1.08)" : "scale(1)",
      transition: "transform .75s cubic-bezier(.22,1,.36,1)",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.20))",
    },

    badge: {
      position: "absolute",
      left: "-28px",
      bottom: "45px",
      background: "#263b96",
      color: "#fff",
      borderRadius: "18px",
      padding: "22px 26px",
      boxShadow: "0 22px 42px rgba(38,59,150,.25)",
    },

    badgeTop: {
      fontSize: "28px",
      fontWeight: "800",
      color: "#ffc400",
      marginBottom: "4px",
    },

    badgeText: {
      fontSize: "13px",
      fontWeight: "650",
      letterSpacing: ".4px",
    },

    yellowShape: {
      position: "absolute",
      right: "-26px",
      top: "-26px",
      width: "180px",
      height: "180px",
      background: "#ffc400",
      clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
      zIndex: -1,
      borderRadius: "0 24px 0 0",
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <style>
        {`
          .ftl-primary:hover {
            transform: translateY(-4px);
            box-shadow: 0 22px 42px rgba(255,196,0,.35);
          }

          .ftl-secondary:hover {
            background: #263b96 !important;
            color: #fff !important;
            transform: translateY(-4px);
          }

          .ftl-point:hover {
            transform: translateY(-6px);
            border-color: rgba(255,196,0,.75) !important;
            box-shadow: 0 20px 40px rgba(38,59,150,.10) !important;
          }
        `}
      </style>

      <div style={styles.bgCircle}></div>

      <div style={styles.wrapper}>
        <div style={styles.content}>
          <div style={styles.eyebrow}>Specialist in Import and Export</div>

          <h1 style={styles.title}>
            Full Truck <span style={styles.titleAccent}>Load</span>
          </h1>

          <p style={styles.para}>
            Asia Master enables trade through complete full truck load transport
            solutions, helping businesses move bulk cargo safely, directly, and
            efficiently across major routes.
          </p>

          <p style={styles.para}>
            Our strategic presence around key trade hubs and ports supports
            reliable import-export transportation, documentation coordination,
            and smooth port-to-door delivery.
          </p>

          <p style={styles.para}>
            With GPS monitoring, dedicated traffic control, and experienced
            handling teams, we ensure your cargo moves on schedule with complete
            visibility.
          </p>

          <div style={styles.points}>
            {[
              ["01", "Dedicated full vehicle"],
              ["02", "GPS enabled movement"],
              ["03", "Port-to-door support"],
            ].map((item) => (
              <div key={item[0]} className="ftl-point" style={styles.point}>
                <div style={styles.pointNum}>{item[0]}</div>
                <div style={styles.pointText}>{item[1]}</div>
              </div>
            ))}
          </div>

          <div style={styles.actions}>
            <button className="ftl-primary" style={styles.primaryBtn}>
              Get FTL Quote
              <span style={styles.circle}>→</span>
            </button>

            <button className="ftl-secondary" style={styles.secondaryBtn}>
              Track Shipment
            </button>
          </div>
        </div>

        <div style={styles.imageArea}>
          <div style={styles.yellowShape}></div>

          <div
            style={styles.imageCard}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={Image}
              alt="Asia Master FTL Logistics"
              style={styles.image}
            />
            <div style={styles.overlay}></div>
          </div>

          <div style={styles.badge}>
            <div style={styles.badgeTop}>FTL</div>
            <div style={styles.badgeText}>Dedicated truck movement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFTL;