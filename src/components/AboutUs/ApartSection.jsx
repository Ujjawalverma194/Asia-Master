import React, { useEffect, useRef, useState } from "react";

const values = [
  {
    letter: "A",
    title: "Always Dependable",
    text: "From pickup to delivery, we ensure consistency, safety, and on-time performance you can rely on.",
  },
  {
    letter: "B",
    title: "Boldly Innovative",
    text: "We use technology, tracking systems, and smart logistics tools to simplify shipping and improve visibility.",
  },
  {
    letter: "C",
    title: "Clients First",
    text: "Every service is designed around customer needs, timelines, and business goals—because your cargo matters.",
  },
];

const ApartSection = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.18 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      background: "linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%)",
      padding: "115px 80px 125px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
    },

    title: {
      textAlign: "center",
      fontSize: "44px",
      fontWeight: "700",
      color: "#080808",
      margin: "0 0 95px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(40px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "42px",
      maxWidth: "1500px",
      margin: "0 auto",
    },

  card: (index) => {
  const active = hovered === index;

  return {
    minHeight: "255px",
    borderRadius: "22px",
    padding: "78px 42px 42px",
    textAlign: "center",
    position: "relative",
    cursor: "pointer",
    background: active
      ? "linear-gradient(135deg, #243b96 0%, #26aee9 100%)"
      : "linear-gradient(135deg, #3147b7 0%, #38b7ee 100%)",
    boxShadow: active
      ? "0 30px 60px rgba(38,59,150,0.24)"
      : "0 14px 35px rgba(0,0,0,0.08)",
    opacity: show ? 1 : 0,
    transform: show
      ? active
        ? "translateY(-14px)"
        : "translateY(0)"
      : "translateY(80px)",
    transition: `all .75s cubic-bezier(.22,1,.36,1) ${index * 0.12}s`,
    overflow: "visible",
  };
},

    bgGlow: (active) => ({
      position: "absolute",
      width: active ? "260px" : "180px",
      height: active ? "260px" : "180px",
      borderRadius: "50%",
      right: active ? "-70px" : "-90px",
      top: active ? "-70px" : "-100px",
      background: active
        ? "rgba(255,196,0,0.28)"
        : "rgba(255,255,255,0.12)",
      filter: "blur(4px)",
      transition: "all .55s ease",
      pointerEvents: "none",
    }),

    bgGlowTwo: (active) => ({
      position: "absolute",
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      left: active ? "-45px" : "-80px",
      bottom: active ? "-55px" : "-90px",
      background: active
        ? "rgba(255,255,255,0.18)"
        : "rgba(255,255,255,0.08)",
      transition: "all .55s ease",
      pointerEvents: "none",
    }),

    pattern: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      opacity: 0.28,
      pointerEvents: "none",
    },

 circle: (active) => ({
  position: "absolute",
  top: "-54px",
  left: "50%",
  transform: active
    ? "translateX(-50%) scale(1.08)"
    : "translateX(-50%) scale(1)",
  width: "96px",
  height: "96px",
  borderRadius: "50%",
  background: "#ffc400",
  color: "#263b96",
  border: "14px solid #fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  fontWeight: "800",
  zIndex: 5,
}),
    content: {
      position: "relative",
      zIndex: 2,
    },

    cardTitle: {
      fontSize: "27px",
      fontWeight: "600",
      color: "#080808",
      margin: "0 0 16px",
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.65",
      fontWeight: "500",
      color: "#fff",
      maxWidth: "450px",
      margin: "0 auto",
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <h2 style={styles.title}>How We Set Ourselves Apart</h2>

      <div style={styles.grid}>
        {values.map((item, index) => {
          const active = hovered === index;

          return (
            <div
              key={index}
              style={styles.card(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.pattern}></div>
              <div style={styles.bgGlow(active)}></div>
              <div style={styles.bgGlowTwo(active)}></div>

              <div style={styles.circle(active)}>{item.letter}</div>

              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.text}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApartSection;