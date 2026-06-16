import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Door-to-Door Delivery",
    text: "Complete pickup and delivery solutions ensuring safe handling from origin to final destination.",
    icon: "https://abctransport.co.in/images/icons/erp.png",
  },
  {
    title: "Import–Export Solutions",
    text: "Seamless domestic transportation for imported and export-ready cargo across India.",
    icon: "https://abctransport.co.in/images/icons/monitoring.png",
  },
  {
    title: "Full Truck & Part Truck Load",
    text: "Flexible transport options for both full-load and partial-load shipment requirements.",
    icon: "https://abctransport.co.in/images/icons/analysis.png",
  },
  {
    title: "24×7 Shipment Tracking",
    text: "Live tracking access to monitor shipment movement, status updates, and delivery timelines.",
    icon: "https://abctransport.co.in/images/icons/notifications.png",
  },
  {
    title: "Internal ERP System",
    text: "Centralised logistics management for accuracy, coordination, and seamless operational control.",
    icon: "https://abctransport.co.in/images/icons/erp.png",
  },
  {
    title: "Data Analytics",
    text: "Performance insights and reporting to improve efficiency, planning, and logistics decision-making.",
    icon: "https://abctransport.co.in/images/icons/notifications.png",
  },
];

const ServiceGlance = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.18 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      background: "#fff",
      padding: "120px 90px 130px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    softBg: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 8% 18%, rgba(255,196,0,0.11), transparent 28%), radial-gradient(circle at 92% 78%, rgba(38,59,150,0.06), transparent 30%)",
      pointerEvents: "none",
    },

    header: {
      textAlign: "center",
      marginBottom: "70px",
      position: "relative",
      zIndex: 2,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(45px)",
      transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
    },

    title: {
      fontSize: "46px",
      fontWeight: "850",
      color: "#070707",
      margin: "0 0 22px",
      letterSpacing: "-0.8px",
    },

    subtitle: {
      fontSize: "17px",
      color: "#6b7280",
      margin: 0,
      fontWeight: "500",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "32px",
      maxWidth: "1500px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    card: (index) => {
      const active = hovered === index;

      return {
        minHeight: "255px",
        background: active ? "#fff8dc" : "#f6f6f6",
        borderRadius: "18px",
        padding: "42px 38px",
        boxSizing: "border-box",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        border: active
          ? "1px solid rgba(255,196,0,0.55)"
          : "1px solid rgba(0,0,0,0.04)",
        opacity: show ? 1 : 0,
        transform: show
          ? active
            ? "translateY(-10px)"
            : "translateY(0)"
          : "translateY(80px)",
        transition: `all 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${
          index * 0.08
        }s`,
        boxShadow: active
          ? "0 22px 45px rgba(255,196,0,0.22)"
          : "0 10px 28px rgba(0,0,0,0.05)",
      };
    },

    topLine: (active) => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: active ? "100%" : "0%",
      height: "4px",
      background: "#ffc400",
      transition: "width 0.35s ease",
    }),

    shine: (active) => ({
      position: "absolute",
      top: 0,
      left: active ? "125%" : "-80%",
      width: "55%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent)",
      transform: "skewX(-20deg)",
      transition: "left 0.7s ease",
    }),

    iconWrap: (active) => ({
      width: "72px",
      height: "72px",
      borderRadius: "20px",
      margin: "0 auto 24px",
      background: active ? "#fff3bf" : "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: active
        ? "0 12px 25px rgba(255,196,0,0.24)"
        : "0 8px 18px rgba(0,0,0,0.06)",
      transition: "all 0.35s ease",
      transform: active ? "translateY(-3px) rotate(-3deg)" : "translateY(0)",
    }),

    icon: {
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      objectFit: "cover",
      filter: "grayscale(100%) contrast(1.1)",
    },

    cardTitle: {
      fontSize: "22px",
      fontWeight: "800",
      color: "#111",
      margin: "0 0 16px",
      lineHeight: "1.3",
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.65",
      color: "#2a2a2a",
      fontWeight: "500",
      margin: 0,
    },
  };

  return (
    <section ref={sectionRef} className="service-glance" style={styles.section}>
      <style>
        {`
          @media (max-width: 1024px) {
            .service-glance {
              padding: 95px 45px 105px !important;
            }

            .service-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 26px !important;
            }

            .service-title {
              font-size: 40px !important;
            }
          }

          @media (max-width: 768px) {
            .service-glance {
              padding: 70px 20px 80px !important;
            }

            .service-header {
              margin-bottom: 45px !important;
            }

            .service-title {
              font-size: 38px !important;
              line-height: 1.2 !important;
              margin-bottom: 18px !important;
            }

            .service-subtitle {
              font-size: 17px !important;
              line-height: 1.6 !important;
              max-width: 280px !important;
              margin: 0 auto !important;
            }

            .service-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }

            .service-card {
              min-height: auto !important;
              padding: 34px 24px 36px !important;
              border-radius: 14px !important;
            }

            .service-icon-wrap {
              width: 78px !important;
              height: 78px !important;
              margin-bottom: 22px !important;
              border-radius: 18px !important;
            }

            .service-icon {
              width: 52px !important;
              height: 52px !important;
            }

            .service-card-title {
              font-size: 24px !important;
              line-height: 1.35 !important;
              margin-bottom: 18px !important;
            }

            .service-text {
              font-size: 18px !important;
              line-height: 1.55 !important;
            }
          }

          @media (max-width: 480px) {
            .service-glance {
              padding: 62px 20px 70px !important;
            }

            .service-title {
              font-size: 36px !important;
            }

            .service-card {
              padding: 32px 22px 34px !important;
            }

            .service-card-title {
              font-size: 23px !important;
            }

            .service-text {
              font-size: 18px !important;
            }
          }
        `}
      </style>

      <div style={styles.softBg}></div>

      <div className="service-header" style={styles.header}>
        <h2 className="service-title" style={styles.title}>
          Service at a Glance
        </h2>
        <p className="service-subtitle" style={styles.subtitle}>
          End-to-end logistics solutions designed for speed, safety, and
          reliability.
        </p>
      </div>

      <div className="service-grid" style={styles.grid}>
        {services.map((item, index) => {
          const active = hovered === index;

          return (
            <div
              key={index}
              className="service-card"
              style={styles.card(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.topLine(active)}></div>
              <div style={styles.shine(active)}></div>

              <div className="service-icon-wrap" style={styles.iconWrap(active)}>
                <img
                  className="service-icon"
                  src={item.icon}
                  alt={item.title}
                  style={styles.icon}
                />
              </div>

              <h3 className="service-card-title" style={styles.cardTitle}>
                {item.title}
              </h3>
              <p className="service-text" style={styles.text}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceGlance;