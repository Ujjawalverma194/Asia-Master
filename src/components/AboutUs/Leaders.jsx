import React, { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "Mr. Sukhbir Singh Chhabra",
    role: "Founder & Mentor",
    image:
      "https://abctransport.co.in/images/Sukhbir-Singh-Chhabra.jpg",
    desc: "A true logistics visionary with decades of hands-on experience, deep operational knowledge, and unwavering commitment toward building a trusted and resilient transport organization.",
  },
  {
    name: "Mr. Inder Bir Singh Chhabra",
    role: "Operations Head",
    image:
      "https://abctransport.co.in/images/inder-bir-singh.jpg",
    desc: "Leading operations with discipline, consistency, and strong customer-first values to ensure every shipment is handled with reliability and care.",
  },
  {
    name: "Mr. Tansher Singh",
    role: "Business Development",
    image:
      "https://abctransport.co.in/images/Tansher-Singh.jpg",
    desc: "Focused on expanding service reach, strengthening client relationships, and bringing modern logistics practices into everyday operations.",
  },
  {
    name: "Mr. Gyan Pratap Singh",
    role: "Logistics Strategy",
    image:
      "https://abctransport.co.in/images/2s.jpg",
    desc: "Driving process improvements, route planning, and technology-enabled transport solutions for faster and more dependable service.",
  },
];

const Leaders = () => {
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
      padding: "115px 95px 125px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    title: {
      textAlign: "center",
      fontSize: "46px",
      fontWeight: "700",
      color: "#090909",
      margin: "0 0 62px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(42px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "28px",
      maxWidth: "1500px",
      margin: "0 auto",
    },

    card: (index) => {
      const active = hovered === index;

      return {
        height: "440px",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        background: "#f7f7f7",
        border: active
          ? "1px solid rgba(255,196,0,.75)"
          : "1px solid rgba(0,0,0,.16)",
        cursor: "pointer",
        opacity: show ? 1 : 0,
        transform: show
          ? active
            ? "translateY(-10px)"
            : "translateY(0)"
          : "translateY(80px)",
        transition: `all .75s cubic-bezier(.22,1,.36,1) ${index * 0.1}s`,
        boxShadow: active
          ? "0 28px 55px rgba(0,0,0,.16)"
          : "0 8px 22px rgba(0,0,0,.04)",
      };
    },

    image: (active) => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block",
      transform: active ? "scale(1.08)" : "scale(1)",
      transition: "transform .75s cubic-bezier(.22,1,.36,1)",
    }),

    bottomGradient: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "45%",
      background:
        "linear-gradient(180deg, transparent 0%, rgba(0,0,0,.58) 100%)",
      zIndex: 2,
      pointerEvents: "none",
    },

    name: (active) => ({
      position: "absolute",
      left: "20px",
      right: "20px",
      bottom: active ? "20px" : "32px",
      color: "#ffc400",
      fontSize: "20px",
      lineHeight: "1.25",
      fontWeight: "600",
      zIndex: 5,
      opacity: active ? 0 : 1,
      transform: active ? "translateY(20px)" : "translateY(0)",
      transition: "all .35s ease",
    }),

    overlay: (active) => ({
      position: "absolute",
      left: "18px",
      right: "18px",
      bottom: "18px",
      background: "rgba(0,0,0,.58)",
      backdropFilter: "blur(7px)",
      borderRadius: "6px",
      padding: "18px 18px",
      boxSizing: "border-box",
      zIndex: 6,
      color: "#fff",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(28px)",
      transition: "all .42s cubic-bezier(.22,1,.36,1)",
      pointerEvents: "none",
    }),

    overlayName: {
      color: "#fff",
      fontSize: "15px",
      lineHeight: "1.55",
      fontWeight: "600",
      margin: "0 0 8px",
    },

    role: {
      color: "#ffc400",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: ".6px",
    },

    desc: {
      color: "#fff",
      fontSize: "14px",
      lineHeight: "1.55",
      fontWeight: "500",
      margin: 0,
    },

    shine: (active) => ({
      position: "absolute",
      top: 0,
      left: active ? "120%" : "-80%",
      width: "45%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,.28), transparent)",
      transform: "skewX(-18deg)",
      transition: "left .7s ease",
      zIndex: 4,
      pointerEvents: "none",
    }),
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <h2 style={styles.title}>Our Leadership</h2>

      <div style={styles.grid}>
        {leaders.map((leader, index) => {
          const active = hovered === index;

          return (
            <div
              key={index}
              style={styles.card(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={leader.image} alt={leader.name} style={styles.image(active)} />

              <div style={styles.bottomGradient}></div>
              <div style={styles.shine(active)}></div>

              <h3 style={styles.name(active)}>{leader.name}</h3>

              <div style={styles.overlay(active)}>
                <div style={styles.overlayName}>{leader.name}</div>
                <div style={styles.role}>{leader.role}</div>
                <p style={styles.desc}>{leader.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Leaders;