import React, { useEffect, useRef, useState } from "react";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const FactsFigures = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const navbar = 88;
      const scrollArea = rect.height - (window.innerHeight - navbar);

      const p =
        scrollArea > 0 ? clamp((navbar - rect.top) / scrollArea, 0, 1) : 0;
      setProgress(p);
    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const statsProgress = clamp((progress - 0.12) / 0.55, 0, 1);
  const arrowProgress = clamp((progress - 0.68) / 0.32, 0, 1);

  const styles = {
    section: {
      width: "100%",
      height: "85vh",
      minHeight: "780px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Montserrat', Arial, sans-serif",
      margin: 0,
      padding: "10px",
      background: "transparent",
    },

    bg: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
      filter: "brightness(1.12) contrast(1.04)",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(0,0,0,.22), rgba(0,0,0,.08), rgba(0,0,0,.04))",
      zIndex: 2,
    },

    arrows: {
      position: "absolute",
      right: "-340px",
      top: 0,
      width: "900px",
      height: "100%",
      zIndex: 3,
      transform: `translateX(${(1 - arrowProgress) * 520}px)`,
      transition: "transform .08s linear",
      pointerEvents: "none",
    },

    arrow1: {
      position: "absolute",
      right: "250px",
      width: "520px",
      height: "100%",
      background: "rgba(255,196,0,.34)",
      clipPath: "polygon(35% 0,100% 0,65% 50%,100% 100%,35% 100%,0 50%)",
    },

    arrow2: {
      position: "absolute",
      right: 0,
      width: "540px",
      height: "100%",
      background: "rgba(255,196,0,.55)",
      clipPath: "polygon(35% 0,100% 0,65% 50%,100% 100%,35% 100%,0 50%)",
    },

    content: {
      position: "relative",
      zIndex: 4,
      height: "100%",
      padding: "95px 90px",
      boxSizing: "border-box",
      color: "#fff",
    },

    label: {
      fontSize: "18px",
      fontWeight: "600",
      letterSpacing: "3px",
      marginBottom: "78px",
    },

    statsTrack: {
      display: "flex",
      gap: "100px",
      width: "max-content",
      transform: `translateX(${-statsProgress * 760}px)`,
      transition: "transform .08s linear",
      willChange: "transform",
      padding:"0 50px"
    },

    stat: {
      minWidth: "330px",
    },

    number: {
      fontSize: "118px",
      fontWeight: "300",
      lineHeight: "1",
      margin: 0,
      whiteSpace: "nowrap",
    },

    desc: {
      fontSize: "17px",
      fontWeight: "700",
      marginTop: "16px",
    },

    hint: {
      position: "absolute",
      left: "90px",
      bottom: "78px",
      zIndex: 5,
      color: "#fff",
      fontSize: "13px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },

    bar: {
      position: "absolute",
      left: "90px",
      bottom: "56px",
      width: "350px",
      height: "4px",
      background: "rgba(255,255,255,.28)",
      borderRadius: "20px",
      zIndex: 5,
      overflow: "hidden",
    },

    fill: {
      height: "100%",
      width: `${progress * 100}%`,
      background: "#ffc400",
      borderRadius: "20px",
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <img
        src="https://abctransport.co.in/images/FACTS%20&%20FIGURES%201366X600.jpg"
        alt="Facts"
        style={styles.bg}
      />

      <div style={styles.overlay}></div>

      <div style={styles.arrows}>
        <div style={styles.arrow1}></div>
        <div style={styles.arrow2}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.label}>FACTS &amp; FIGURES</div>

        <div style={styles.statsTrack}>
          <div style={styles.stat}>
            <h2 style={styles.number}>80,000+</h2>
            <p style={styles.desc}>Kilometers Running Daily</p>
          </div>

          <div style={styles.stat}>
            <h2 style={styles.number}>300+</h2>
            <p style={styles.desc}>Trucks</p>
          </div>

          <div style={styles.stat}>
            <h2 style={styles.number}>3–4</h2>
            <p style={styles.desc}>Days Delivery TAT</p>
          </div>
        </div>
      </div>

      <div style={styles.hint}>Scroll to explore</div>

      <div style={styles.bar}>
        <div style={styles.fill}></div>
      </div>
    </section>
  );
};

export default FactsFigures;
