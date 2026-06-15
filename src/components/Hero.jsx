import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollMove, setScrollMove] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollMove(Math.min(window.scrollY * 0.85, 430));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
   hero: {
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
},

    video: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
      zIndex: 1,
      display: "block",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(255,255,255,0.34)",
      zIndex: 2,
    },

    arrowWrapper: {
      position: "absolute",
      left: "-260px",
      top: 0,
      width: "780px",
      height: "100%",
      zIndex: 3,
      transform: `translateX(${scrollMove}px)`,
      transition: "transform 0.12s linear",
      pointerEvents: "none",
    },

    backChevron: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "560px",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(255,196,0,0.08), rgba(255,196,0,0.40))",
      clipPath:
        "polygon(0 0, 58% 0, 100% 50%, 58% 100%, 0 100%, 42% 50%)",
    },

    frontChevron: {
      position: "absolute",
      left: "190px",
      top: 0,
      width: "540px",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(255,196,0,0.18), rgba(255,196,0,0.60))",
      clipPath:
        "polygon(0 0, 58% 0, 100% 50%, 58% 100%, 0 100%, 42% 50%)",
    },

    enquireBtn: {
      position: "fixed",
      right: 0,
      top: "45%",
      transform: "translateY(-50%)",
      background: "#ffc400",
      color: "#fff",
      border: "none",
      padding: "16px 10px",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "1px",
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      cursor: "pointer",
      zIndex: 2000,
    },
  };

  return (
    <section style={styles.hero}>
      <video autoPlay muted loop playsInline style={styles.video}>
        <source src="https://abctransport.co.in/images/banner-video-new.mp4" type="video/mp4" />
      </video>

      <div style={styles.overlay}></div>

      <div style={styles.arrowWrapper}>
        <div style={styles.backChevron}></div>
        <div style={styles.frontChevron}></div>
      </div>

      <button style={styles.enquireBtn}>ENQUIRE NOW</button>
    </section>
  );
};

export default Hero;