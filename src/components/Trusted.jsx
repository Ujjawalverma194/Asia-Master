import React, { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.left}>
        <img
          src="https://abctransport.co.in/images/TRUCK.png"
          alt="ABC Truck"
          style={styles.truck}
        />
      </div>

      <div style={styles.right}>
        <h2 style={styles.heading}>
          Trusted Logistics Services Across <br />
          India Since 1958
        </h2>

        <div style={styles.line}></div>

        <div style={styles.textBox}>
          <p style={styles.para}>
            At ABC Express, we make logistics simple and reliable. Since
            1958, we've helped businesses of all sizes move goods across
            India with confidence, on schedule, and with complete
            visibility. With our robust fleet and customer-first approach,
            your shipment is in expert hands from pickup to delivery.
          </p>

          <p style={styles.para}>
            Whether you need a dedicated vehicle or cost-effective
            shared transport, we ensure safe handling and timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;