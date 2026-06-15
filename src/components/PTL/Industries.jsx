import React, { useEffect, useRef, useState } from "react";

const industries = [
  "Automotive",
  "Apparel and Lifestyle",
  "Healthcare",
  "FMCG",
  "Hi Tech Electronics & Engineering",
  "Publishing",
  "Chemicals, Lubricants and Grease",
  "IT Hardware & Software Products",
];

const steps = [
  {
    title: "Share Details",
    text: "Provide pickup and delivery locations, cargo type, and shipment volume.",
  },
  {
    title: "Get a Quote",
    text: "Receive a transparent and competitive price with clear service details.",
  },
  {
    title: "Schedule Pickup",
    text: "We assign the nearest vehicle and optimize the route for faster movement.",
  },
  {
    title: "Track & Deliver",
    text: "Get shipment updates until your goods arrive safely at the destination.",
  },
];

const Industries = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.16 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      background: "linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)",
      padding: "110px 95px 115px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    glow: {
      position: "absolute",
      left: "-120px",
      top: "80px",
      width: "310px",
      height: "310px",
      borderRadius: "50%",
      background: "rgba(255,196,0,0.12)",
      filter: "blur(50px)",
    },

    wrapper: {
      maxWidth: "1500px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    topGrid: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "70px",
      alignItems: "start",
      marginBottom: "75px",
    },

    card: (delay) => ({
      background: "#fff",
      borderRadius: "26px",
      padding: "44px",
      boxSizing: "border-box",
      boxShadow: "0 18px 48px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.05)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(70px)",
      transition: `all .85s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }),

    heading: {
      fontSize: "34px",
      lineHeight: "1.25",
      fontWeight: "700",
      color: "#090909",
      margin: "0 0 26px",
    },

    subText: {
      fontSize: "17px",
      lineHeight: "1.65",
      fontWeight: "500",
      color: "#222",
      margin: "0 0 22px",
    },

    industryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "14px",
      marginTop: "28px",
    },

    industryItem: {
      background: "#f7f8fb",
      borderRadius: "14px",
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#1f1f1f",
      fontSize: "15px",
      fontWeight: "600",
      transition: "all .3s ease",
      border: "1px solid transparent",
    },

    bullet: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      background: "#ffc400",
      flexShrink: 0,
    },

    stepsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "18px",
      marginTop: "8px",
    },

    step: (index) => {
      const active = hoveredStep === index;

      return {
        background: active
          ? "linear-gradient(135deg, #263b96 0%, #2aa9e6 100%)"
          : "#f7f8fb",
        borderRadius: "18px",
        padding: "24px",
        border: active
          ? "1px solid rgba(255,196,0,0.75)"
          : "1px solid rgba(38,59,150,0.08)",
        boxShadow: active
          ? "0 22px 42px rgba(38,59,150,.18)"
          : "none",
        transform: active ? "translateY(-7px)" : "translateY(0)",
        transition: "all .35s ease",
        cursor: "pointer",
      };
    },

    stepNo: (active) => ({
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: active ? "#ffc400" : "#263b96",
      color: active ? "#263b96" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "15px",
      fontWeight: "800",
      marginBottom: "14px",
    }),

    stepTitle: (active) => ({
      fontSize: "17px",
      fontWeight: "750",
      color: active ? "#fff" : "#111",
      margin: "0 0 8px",
    }),

    stepText: (active) => ({
      fontSize: "14px",
      lineHeight: "1.6",
      color: active ? "rgba(255,255,255,.9)" : "#444",
      margin: 0,
      fontWeight: "500",
    }),

    cta: {
      background:
        "linear-gradient(135deg, #263b96 0%, #1f3a91 60%, #173079 100%)",
      borderRadius: "28px",
      padding: "42px 48px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      boxShadow: "0 24px 55px rgba(38,59,150,.22)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(70px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1) .22s",
      position: "relative",
      overflow: "hidden",
    },

    ctaTitle: {
      fontSize: "34px",
      lineHeight: "1.25",
      fontWeight: "700",
      margin: "0 0 14px",
    },

    ctaText: {
      fontSize: "16px",
      lineHeight: "1.65",
      fontWeight: "500",
      color: "rgba(255,255,255,.82)",
      margin: 0,
      maxWidth: "930px",
    },

    phone: {
      color: "#ffc400",
      fontWeight: "800",
      textDecoration: "none",
    },

    btn: {
      height: "54px",
      minWidth: "180px",
      borderRadius: "34px",
      border: "none",
      background: "#ffc400",
      color: "#111",
      fontSize: "15px",
      fontWeight: "750",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px",
      boxShadow: "0 16px 35px rgba(255,196,0,.3)",
      transition: "all .3s ease",
      flexShrink: 0,
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <style>
        {`
          .industry-item:hover {
            background: #fff8dc !important;
            border-color: rgba(255,196,0,.75) !important;
            transform: translateX(6px);
          }

          .ptl-cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 22px 42px rgba(255,196,0,.38) !important;
          }
        `}
      </style>

      <div style={styles.glow}></div>

      <div style={styles.wrapper}>
        <div style={styles.topGrid}>
          <div style={styles.card(0)}>
            <h2 style={styles.heading}>Industries We Serve</h2>
            <p style={styles.subText}>
              Our part-load truck services are built for businesses that need
              safe, regular, and scalable cargo movement.
            </p>

            <div style={styles.industryGrid}>
              {industries.map((item) => (
                <div key={item} className="industry-item" style={styles.industryItem}>
                  <span style={styles.bullet}></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card(0.12)}>
            <h2 style={styles.heading}>How PTL Works with Asia Master</h2>

            <div style={styles.stepsGrid}>
              {steps.map((step, index) => {
                const active = hoveredStep === index;

                return (
                  <div
                    key={index}
                    style={styles.step(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div style={styles.stepNo(active)}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 style={styles.stepTitle(active)}>{step.title}</h3>
                    <p style={styles.stepText(active)}>{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={styles.cta}>
          <div>
            <h2 style={styles.ctaTitle}>Book Part Truck Load Services Today!</h2>
            <p style={styles.ctaText}>
              Asia Master ensures hassle-free PTL bookings, optimized transit
              times, and safe deliveries. Get a free quote now or call{" "}
              <a href="tel:+917065001053" style={styles.phone}>
                +91-7065001053
              </a>{" "}
              for expert logistics support.
            </p>
          </div>

          <button className="ptl-cta-btn" style={styles.btn}>
            Get Quote <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;