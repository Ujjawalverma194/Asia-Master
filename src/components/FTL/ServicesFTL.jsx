import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "⌖",
    title: "Real-Time GPS Tracking",
    text: "Fleet monitoring with live location updates and accurate delivery estimates through advanced systems. Always know where your cargo is.",
  },
  {
    icon: "⚓",
    title: "Port Expertise",
    text: "Strategic Nhava Sheva and Mundra presence with dedicated clearing and forwarding teams. Hassle-free customs clearance and smooth port operations.",
  },
  {
    icon: "▤",
    title: "Warehouse-to-Warehouse Logistics",
    text: "Complete transportation from your warehouse to your customer’s warehouse, with safe handling, smooth coordination, and timely delivery every time.",
  },
  {
    icon: "↔",
    title: "Zero Transshipment",
    text: "Direct movement from pickup to final destination with no intermediate handling or load transfers. This reduces risk and ensures faster, safer delivery.",
  },
  {
    icon: "◷",
    title: "On-Time Delivery Commitment",
    text: "Efficient route planning, dedicated support teams, and decades of experience ensure deadlines get met without excuses.",
  },
  {
    icon: "▣",
    title: "Dedicated Trucks",
    text: "We provide exclusive truck allocation for every shipment, offering direct transport, reduced handling risks, and reliable on-time delivery.",
  },
];

const ServicesFTL = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

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
      background:
        "linear-gradient(180deg, #f7f7f7 0%, #ffffff 55%, #f8f8f8 100%)",
      padding: "115px 95px 125px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    title: {
      textAlign: "center",
      fontSize: "46px",
      lineHeight: "1.2",
      fontWeight: "700",
      color: "#080808",
      margin: "0 0 22px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(40px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1)",
    },

    subtitle: {
      textAlign: "center",
      fontSize: "17px",
      fontWeight: "500",
      color: "#333",
      margin: "0 0 72px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(32px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1) .1s",
    },

    grid: {
      maxWidth: "1500px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
    },

    card: (index) => {
      const active = hovered === index;

      return {
        minHeight: "310px",
        borderRadius: "22px",
        padding: "34px 36px 38px",
        boxSizing: "border-box",
        background: active
          ? "linear-gradient(135deg, #263b96 0%, #2aa9e6 100%)"
          : "#fff",
        border: active
          ? "1px solid rgba(255,196,0,.85)"
          : "1px solid rgba(0,0,0,.05)",
        boxShadow: active
          ? "0 28px 60px rgba(38,59,150,.20)"
          : "0 18px 45px rgba(0,0,0,.06)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        textAlign: "center",
        opacity: show ? 1 : 0,
        transform: show
          ? active
            ? "translateY(-12px)"
            : "translateY(0)"
          : "translateY(80px)",
        transition: `all .75s cubic-bezier(.22,1,.36,1) ${index * 0.08}s`,
      };
    },

    iconWrap: (active) => ({
      width: "94px",
      height: "94px",
      borderRadius: "50%",
      margin: "0 auto 24px",
      border: active ? "1px solid rgba(255,255,255,.55)" : "1px solid #8c8c8c",
      background: active ? "#ffc400" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: active ? "#263b96" : "#111",
      fontSize: "38px",
      fontWeight: "700",
      boxShadow: active
        ? "0 16px 34px rgba(255,196,0,.28)"
        : "0 8px 20px rgba(0,0,0,.04)",
      transform: active ? "scale(1.08)" : "scale(1)",
      transition: "all .35s ease",
      position: "relative",
      zIndex: 2,
    }),

    cardTitle: (active) => ({
      color: active ? "#fff" : "#ffc400",
      fontSize: "22px",
      lineHeight: "1.35",
      fontWeight: "650",
      margin: "0 0 18px",
      transition: "color .3s ease",
      position: "relative",
      zIndex: 2,
    }),

    text: (active) => ({
      color: active ? "rgba(255,255,255,.92)" : "#202020",
      fontSize: "16px",
      lineHeight: "1.65",
      fontWeight: "500",
      margin: 0,
      transition: "color .3s ease",
      position: "relative",
      zIndex: 2,
    }),

    glow: (active) => ({
      position: "absolute",
      right: active ? "-60px" : "-120px",
      top: active ? "-60px" : "-120px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: active ? "rgba(255,196,0,.24)" : "rgba(255,196,0,.08)",
      transition: "all .45s ease",
      pointerEvents: "none",
    }),

    bottomLine: (active) => ({
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: active ? "82%" : "0%",
      height: "4px",
      borderRadius: "30px 30px 0 0",
      background: "#ffc400",
      transform: "translateX(-50%)",
      transition: "width .38s ease",
    }),
  };

  return (
    <section ref={ref} style={styles.section}>
      <h2 style={styles.title}>Why Choose Asia Master Logistics Services</h2>

      <p style={styles.subtitle}>
        Comprehensive logistics solutions tailored to your business needs with
        smart technology and experienced professionals
      </p>

      <div style={styles.grid}>
        {features.map((item, index) => {
          const active = hovered === index;

          return (
            <div
              key={index}
              style={styles.card(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.glow(active)}></div>

              <div style={styles.iconWrap(active)}>{item.icon}</div>

              <h3 style={styles.cardTitle(active)}>{item.title}</h3>

              <p style={styles.text(active)}>{item.text}</p>

              <div style={styles.bottomLine(active)}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesFTL;