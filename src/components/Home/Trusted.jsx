import React, { useEffect, useRef, useState } from "react";
import Image1 from "../../../public/images/TrustedSection.png";

const TrustedSection = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      minHeight: "680px",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "80px 120px 95px",
      boxSizing: "border-box",
      overflow: "hidden",
      fontFamily: "'Montserrat', Arial, sans-serif",
    },

    left: {
      width: "42%",
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0)" : "translateX(-130px)",
      transition: "all 1.1s ease",
    },

    truck: {
      width: "560px",
      maxWidth: "100%",
      height: "auto",
      display: "block",
    },

    right: {
      width: "58%",
      paddingLeft: "80px",
      boxSizing: "border-box",
    },

    heading: {
      fontSize: "46px",
      lineHeight: "1.55",
      fontWeight: "800",
      color: "#080808",
      margin: "0 0 32px",
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0)" : "translateX(120px)",
      transition: "all 1s ease 0.15s",
    },

    line: {
      width: show ? "100%" : "0%",
      height: "1px",
      background: "#777",
      marginBottom: "22px",
      transition: "width 1s ease 0.45s",
    },

    textBox: {
      maxWidth: "620px",
      marginLeft: "300px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(60px)",
      transition: "all 1s ease 0.55s",
    },

    para: {
      fontSize: "18px",
      lineHeight: "1.55",
      color: "#333",
      fontWeight: "400",
      margin: "0 0 20px",
    },
  };

  return (
    <section ref={sectionRef} className="trusted-section" style={styles.section}>
      <style>
        {`
          @media (max-width: 1024px) {
            .trusted-section {
              padding: 70px 55px 80px !important;
            }

            .trusted-right {
              padding-left: 45px !important;
            }

            .trusted-heading {
              font-size: 38px !important;
              line-height: 1.35 !important;
            }

            .trusted-text-box {
              margin-left: 80px !important;
            }
          }

          @media (max-width: 768px) {
            .trusted-section {
              min-height: auto !important;
              display: block !important;
              padding: 55px 22px 65px !important;
            }

            .trusted-left {
              width: 100% !important;
              margin-bottom: 20px !important;
              transform: ${show ? "translateY(0)" : "translateY(40px)"} !important;
            }

            .trusted-truck {
              width: 100% !important;
              max-width: 280px !important;
              margin: 0 auto 8px !important;
            }

            .trusted-right {
              width: 100% !important;
              padding-left: 0 !important;
            }

            .trusted-heading {
              font-size: 34px !important;
              line-height: 1.22 !important;
              margin-bottom: 26px !important;
              transform: ${show ? "translateY(0)" : "translateY(40px)"} !important;
            }

            .trusted-line {
              width: ${show ? "100%" : "0%"} !important;
              margin-bottom: 30px !important;
              background: #111 !important;
            }

            .trusted-text-box {
              max-width: 100% !important;
              margin-left: 0 !important;
            }

            .trusted-para {
              font-size: 17px !important;
              line-height: 1.55 !important;
              margin-bottom: 18px !important;
            }
          }

          @media (max-width: 480px) {
            .trusted-section {
              padding: 45px 22px 55px !important;
            }

            .trusted-truck {
              max-width: 245px !important;
            }

            .trusted-heading {
              font-size: 32px !important;
              line-height: 1.25 !important;
            }

            .trusted-para {
              font-size: 16px !important;
              line-height: 1.55 !important;
            }
          }
        `}
      </style>

      <div className="trusted-left" style={styles.left}>
        <img
          className="trusted-truck"
          src={Image1}
          alt="Asia Master Truck"
          style={styles.truck}
        />
      </div>

      <div className="trusted-right" style={styles.right}>
        <h2 className="trusted-heading" style={styles.heading}>
          Trusted Logistics Services Across <br />
          India Since 1958
        </h2>

        <div className="trusted-line" style={styles.line}></div>

        <div className="trusted-text-box" style={styles.textBox}>
          <p className="trusted-para" style={styles.para}>
            At ABC Express, we make logistics simple and reliable. Since 1958,
            we've helped businesses of all sizes move goods across India with
            confidence, on schedule, and with complete visibility. With our
            robust fleet and customer-first approach, your shipment is in expert
            hands from pickup to delivery.
          </p>

          <p className="trusted-para" style={styles.para}>
            Whether you need a dedicated vehicle or cost-effective shared
            transport, we ensure safe handling and timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;