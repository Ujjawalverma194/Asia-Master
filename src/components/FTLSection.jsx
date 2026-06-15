import React, { useEffect, useRef, useState } from "react";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const FTLSection = () => {
  const ref = useRef(null);
  const [enter, setEnter] = useState(0);
  const [dim, setDim] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const enterProgress = clamp((vh - rect.top) / (vh * 0.75), 0, 1);

      // FTL tabhi dim hoga jab PTL overlap/enter karne lage
      const dimProgress = clamp((vh - rect.bottom - 40) / 260, 0, 1);

      setEnter(easeOut(enterProgress));
      setDim(dimProgress);

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
      minHeight: "860px",
      display: "flex",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
      background: "#fff",
      fontFamily: "'Montserrat', Arial, sans-serif",
      boxSizing: "border-box",
    },

    inner: {
      width: "100%",
      minHeight: "860px",
      display: "flex",
      opacity: enter,
      transform: `translateY(${(1 - enter) * 100}px)`,
      transition: "transform 0.08s linear, opacity 0.08s linear",
      filter: `brightness(${1 - dim * 0.42}) blur(${dim * 7}px)`,
    },

    dimLayer: {
      position: "absolute",
      inset: 0,
      background: `rgba(0,0,0,${dim * 0.28})`,
      zIndex: 5,
      pointerEvents: "none",
    },

    left: {
      width: "58%",
      minHeight: "860px",
      overflow: "hidden",
    },

    image: {
      width: "100%",
      height: "860px",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
    },

    right: {
      width: "42%",
      minHeight: "860px",
      background: "#2e2e31",
      display: "flex",
      alignItems: "center",
      padding: "0 72px",
      boxSizing: "border-box",
    },

    content: {
      maxWidth: "540px",
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
      <div style={styles.inner}>
        <div style={styles.left}>
          <img
            src="https://abctransport.co.in/images/Full%20Truck%20Load%20&%20Part%20Truck%20Load.jpg"
            alt="Full Truck Load"
            style={styles.image}
          />
        </div>

        <div style={styles.right}>
          <div style={styles.content}>
            <h2 style={styles.title}>Full Truck Load</h2>

            <p style={styles.text}>
              FTL services are ideal when your shipment requires an entire
              truck. Your goods are loaded once and delivered directly to the
              destination without sharing space. This ensures faster transit,
              better safety, and complete control over schedules—perfect for
              bulk, industrial, or high-value consignments.
            </p>

            <button style={styles.button}>
              Explore More
              <span style={styles.circle}>→</span>
            </button>
          </div>
        </div>
      </div>

      <div style={styles.dimLayer}></div>
    </section>
  );
};

export default FTLSection;