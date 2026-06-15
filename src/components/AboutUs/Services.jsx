import React, { useEffect, useRef, useState } from "react";
import Image from "../../../public/images/aboutsection.png"
const milestones = [
  {
    num: "300+",
    title: "Fleet Strength",
    text: "Strong fleet capacity to handle daily logistics movement.",
  },
  {
    num: "50+",
    title: "Service Locations",
    text: "Wide regional presence across important transport routes.",
  },
  {
    num: "24×7",
    title: "Tracking Support",
    text: "Shipment visibility and customer support whenever needed.",
  },
  {
    num: "Pan India",
    title: "Logistics Reach",
    text: "Reliable transport support across key Indian locations.",
  },
];

const Services = () => {
  const heroRef = useRef(null);
  const [show, setShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    section: {
      width: "100%",
      paddingTop: "20px",
      background: "#fff",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    header: {
      textAlign: "center",
      padding: "50px 20px 50px",
      boxSizing: "border-box",
    },

    smallTitle: {
      fontSize: "20px",
      fontWeight: "700",
      letterSpacing: "2px",
      color: "#111",
      marginBottom: "22px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(28px)",
      transition: "all .8s cubic-bezier(.22,1,.36,1)",
    },

    title: {
      fontSize: "46px",
      lineHeight: "1.25",
      fontWeight: "600",
      color: "#070707",
      margin: 0,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(38px)",
      transition: "all .9s cubic-bezier(.22,1,.36,1) .12s",
    },

    imageWrap: {
      width: "100%",
      height: "520px",
      position: "relative",
      overflow: "hidden",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(45px)",
      transition: "all 1s cubic-bezier(.22,1,.36,1) .2s",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
      transform: `scale(${1.04 + Math.min(scrollY * 0.00008, 0.05)})`,
      transition: "transform .12s linear",
    },

    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02), rgba(255,255,255,0.10))",
      pointerEvents: "none",
    },

    textSection: {
      maxWidth: "1320px",
      margin: "0 auto",
      padding: "85px 90px 70px",
      textAlign: "center",
      boxSizing: "border-box",
    },

    para: (delay) => ({
      fontSize: "18px",
      lineHeight: "1.65",
      fontWeight: "500",
      color: "#181818",
      margin: "0 auto 26px",
      maxWidth: "1250px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(35px)",
      transition: `all .85s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }),

    statsStrip: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "26px",
      maxWidth: "1280px",
      margin: "58px auto 0",
    },

    statBox: (index) => ({
      background:
        "linear-gradient(180deg, #ffffff 0%, #fbfcff 100%)",
      border: "1px solid rgba(38,59,150,0.10)",
      borderLeft: "4px solid #ffc400",
      borderRadius: "18px",
      padding: "28px 24px",
      minHeight: "150px",
      textAlign: "left",
      boxShadow: "0 12px 28px rgba(0,0,0,0.045)",
      transition: "all .38s cubic-bezier(.22,1,.36,1)",
      position: "relative",
      overflow: "hidden",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(45px)",
      transitionDelay: `${0.1 + index * 0.08}s`,
    }),

    statNum: {
      color: "#263b96",
      fontSize: "34px",
      fontWeight: "700",
      marginBottom: "10px",
      lineHeight: "1",
    },

    statTitle: {
      color: "#263b96",
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "10px",
      lineHeight: "1.35",
    },

    statText: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#555",
      lineHeight: "1.6",
    },
  };

  return (
    <section ref={heroRef} style={styles.section}>
      <style>
        {`
          .about-stat::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: #263b96;
            transition: width .35s ease;
          }

          .about-stat::after {
            content: "";
            position: absolute;
            width: 120px;
            height: 120px;
            right: -55px;
            bottom: -55px;
            border-radius: 50%;
            background: rgba(255,196,0,.12);
            transform: scale(0);
            transition: transform .35s ease;
          }

          .about-stat:hover {
            transform: translateY(-13px) scale(1.025) !important;
            border-color: rgba(255,196,0,.75) !important;
            border-left-color: #263b96 !important;
            box-shadow: 0 26px 55px rgba(38,59,150,.14) !important;
          }

          .about-stat:hover::before {
            width: 100%;
          }

          .about-stat:hover::after {
            transform: scale(1);
          }

          .about-stat:hover .stat-number {
            color: #ffc400 !important;
          }
        `}
      </style>

      <div style={styles.header}>
        <div style={styles.smallTitle}>About Us</div>
        <h1 style={styles.title}>Reliable Logistics Services Across India</h1>
      </div>

      <div style={styles.imageWrap}>
        <img
          src={Image}
          alt="About Asia Master"
          style={styles.image}
        />
        <div style={styles.imageOverlay}></div>
      </div>

      <div style={styles.textSection}>
        <p style={styles.para(0.1)}>
          Asia Master began its journey with a clear vision of providing
          reliable and dependable transportation services. What began as a
          modest operation has steadily grown into a trusted and well-recognized
          logistics service provider.
        </p>

        <p style={styles.para(0.18)}>
          Today, Asia Master has established a strong presence across India,
          serving a wide network of customers and industries. Our service always
          comes before self, and this philosophy has been the foundation of our
          company since the beginning.
        </p>

        <p style={styles.para(0.26)}>
          With industry experience and a dedicated team, we follow a hands-on
          approach to ensure every shipment is handled with care and
          responsibility. Whether it is a small consignment or a large shipment,
          our focus remains the same — safe handling, timely delivery, and
          dependable service.
        </p>

        <div style={styles.statsStrip}>
          {milestones.map((item, index) => (
            <div
              key={index}
              className="about-stat"
              style={styles.statBox(index)}
            >
              <div className="stat-number" style={styles.statNum}>
                {item.num}
              </div>
              <div style={styles.statTitle}>{item.title}</div>
              <div style={styles.statText}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;