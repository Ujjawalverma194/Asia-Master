import React, { useEffect, useRef, useState } from "react";
import Image from "../../../public/images/ptlsectionimage.png"
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const PTLSection = () => {
  const ref = useRef(null);
  const [enter, setEnter] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = clamp((vh - rect.top) / (vh * 0.72), 0, 1);

      setEnter(easeOut(progress));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const styles = {
    section: {
      width: "100%",
      minHeight: "650px",
      display: "flex",
      position: "relative",
      zIndex: 10,
      marginTop: "-120px",
      overflow: "hidden",
      background: "#fff",
      fontFamily: "'Montserrat', Arial, sans-serif",
      boxSizing: "border-box",
      boxShadow: `0 -20px 45px rgba(0,0,0,${enter * 0.22})`,
    },

    left: {
      width: "58%",
      minHeight: "650px",
      overflow: "hidden",
      opacity: enter,
      transform: `translateY(${(1 - enter) * 95}px)`,
      transition: "transform 0.08s linear, opacity 0.08s linear",
    },

    image: {
      width: "100%",
      height: "650px",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
    },

    right: {
      width: "42%",
      minHeight: "650px",
      background: "#2e2e31",
      display: "flex",
      alignItems: "center",
      padding: "0 72px",
      boxSizing: "border-box",
      opacity: enter,
      transform: `translateY(${(1 - enter) * 120}px)`,
      transition: "transform 0.08s linear, opacity 0.08s linear",
    },

    content: {
      maxWidth: "540px",
      opacity: enter,
      transform: `translateY(${(1 - enter) * 55}px)`,
      transition: "transform 0.08s linear, opacity 0.08s linear",
    },

    title: {
      color: "#fff",
      fontSize: "44px",
      fontWeight: "800",
      margin: "0 0 34px",
    },

    text: {
      color: "#e2e2e2",
      fontSize: "16px",
      lineHeight: "1.65",
      fontWeight: "500",
      margin: "0 0 55px",
    },

    button: {
      height: "52px",
      minWidth: "190px",
      borderRadius: "35px",
      border: "none",
      background: "#ffc400",
      color: "#111",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 7px 0 24px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      opacity: enter,
      transform: `translateY(${(1 - enter) * 35}px)`,
      transition: "transform 0.08s linear, opacity 0.08s linear",
    },

    circle: {
      width: "39px",
      height: "39px",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
      marginLeft: "18px",
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <div style={styles.left}>
        <img
          src={Image}
          alt="Parchoon PTL"
          style={styles.image}
        />
      </div>

      <div style={styles.right}>
        <div style={styles.content}>
          <h2 style={styles.title}>Parchoon / PTL</h2>

          <p style={styles.text}>
            PTL services allow you to transport smaller shipments by sharing
            truck space with other consignments. You pay only for the space you
            use, making it cost-effective while still ensuring secure handling,
            timely delivery, and professional logistics management across
            routes.
          </p>

          <button style={styles.button}>
            Explore More
            <span style={styles.circle}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PTLSection;