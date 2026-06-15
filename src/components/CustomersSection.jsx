import React, { useEffect, useRef, useState } from "react";

const logos = [
  "https://abctransport.co.in/images/partners/Apar.png",
  "https://abctransport.co.in/images/clintel/jindal%20steel.png",
  "https://abctransport.co.in/images/clintel/Nutraj.png",
  "https://abctransport.co.in/images/clintel/organic%20tattva.png",
  "https://abctransport.co.in/images/clintel/gm-logo.jpg",
  "https://abctransport.co.in/images/partners/century%20ply.png",
  "https://abctransport.co.in/images/partners/nova.png",
  "https://abctransport.co.in/images/partners/mahaan.png",
  "https://abctransport.co.in/images/partners/kajaria.png",
];

const CustomersSection = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const repeatedLogos = [...logos, ...logos, ...logos];

  const styles = {
    section: {
      width: "100%",
      background: "#fff",
      padding: "110px 0 120px",
      overflow: "hidden",
      fontFamily: "'Montserrat', sans-serif",
      position: "relative",
    },

    title: {
      textAlign: "center",
      fontSize: "38px",
      fontWeight: "700",
      color: "#111",
      marginBottom: "75px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0px)" : "translateY(40px)",
      transition: "all .9s cubic-bezier(0.22, 1, 0.36, 1)",
    },

    sliderWrapper: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
    },

    fadeLeft: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "180px",
      height: "100%",
      background: "linear-gradient(to right,#fff,transparent)",
      zIndex: 2,
      pointerEvents: "none",
    },

    fadeRight: {
      position: "absolute",
      right: 0,
      top: 0,
      width: "180px",
      height: "100%",
      background: "linear-gradient(to left,#fff,transparent)",
      zIndex: 2,
      pointerEvents: "none",
    },

    track: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      width: "max-content",
      animation: "customerSlider 35s linear infinite",
      animationPlayState: paused ? "paused" : "running",
    },

    logoCard: {
      width: "240px",
      height: "130px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
      borderRadius: "18px",
      transition: "all .35s ease",
      padding: "12px",
      boxSizing: "border-box",
    },

    logo: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      userSelect: "none",
      pointerEvents: "none",
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>
        {`
          @keyframes customerSlider {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .customer-track:hover {
            animation-play-state: paused;
          }

          .customer-logo:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          }
        `}
      </style>

      <h2 style={styles.title}>Our Valuable Customers</h2>

      <div style={styles.sliderWrapper}>
        <div style={styles.fadeLeft}></div>
        <div style={styles.fadeRight}></div>

        <div
          className="customer-track"
          style={styles.track}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="customer-logo" style={styles.logoCard}>
              <img src={logo} alt="customer logo" style={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
