import React, { useEffect, useRef, useState } from "react";

const steps = [
  ["01", "Share Requirements", "Pickup, delivery, cargo type, volume, and truck preference."],
  ["02", "Route & Quote", "Transparent pricing based on distance, route, and vehicle type."],
  ["03", "Truck Allocation", "Dedicated suitable truck assigned with route planning."],
  ["04", "Safe Delivery", "Direct delivery with tracking, coordination, and cargo safety."],
];

const Process = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      padding: "115px 95px",
      background: "#fff",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      boxSizing: "border-box",
    },

    wrap: {
      maxWidth: "1500px",
      margin: "0 auto",
    },

    head: {
      maxWidth: "780px",
      marginBottom: "58px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(40px)",
      transition: "all .8s cubic-bezier(.22,1,.36,1)",
    },

    tag: {
      color: "#ffc400",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "14px",
    },

    title: {
      fontSize: "42px",
      fontWeight: "700",
      color: "#080808",
      margin: "0 0 18px",
      lineHeight: "1.25",
    },

    desc: {
      fontSize: "17px",
      lineHeight: "1.7",
      color: "#444",
      fontWeight: "500",
      margin: 0,
    },

    process: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px",
      marginBottom: "70px",
    },

    step: (i) => ({
      background: "#f8f9fc",
      border: "1px solid rgba(38,59,150,.10)",
      borderRadius: "22px",
      padding: "30px 26px",
      minHeight: "230px",
      position: "relative",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(70px)",
      transition: `all .75s cubic-bezier(.22,1,.36,1) ${i * 0.1}s`,
      boxShadow: "0 14px 34px rgba(0,0,0,.045)",
      boxSizing: "border-box",
    }),

    num: {
      fontSize: "44px",
      fontWeight: "800",
      color: "rgba(38,59,150,.15)",
      marginBottom: "24px",
      transition: "color .3s ease",
    },

    stepTitle: {
      fontSize: "19px",
      fontWeight: "700",
      color: "#263b96",
      margin: "0 0 12px",
      lineHeight: "1.35",
    },

    stepText: {
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#444",
      fontWeight: "500",
      margin: 0,
    },

    cta: {
      background: "linear-gradient(135deg,#263b96,#1c3179)",
      borderRadius: "30px",
      padding: "46px 52px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      boxShadow: "0 24px 58px rgba(38,59,150,.25)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(60px)",
      transition: "all .8s cubic-bezier(.22,1,.36,1) .25s",
      boxSizing: "border-box",
    },

    ctaTitle: {
      fontSize: "34px",
      fontWeight: "700",
      margin: "0 0 12px",
      lineHeight: "1.25",
    },

    ctaText: {
      fontSize: "16px",
      lineHeight: "1.65",
      color: "rgba(255,255,255,.82)",
      margin: 0,
    },

    phone: {
      color: "#ffc400",
      fontWeight: "800",
      textDecoration: "none",
    },

    btn: {
      height: "54px",
      minWidth: "175px",
      border: "none",
      borderRadius: "35px",
      background: "#ffc400",
      color: "#111",
      fontSize: "15px",
      fontWeight: "750",
      cursor: "pointer",
      transition: "all .3s ease",
      flexShrink: 0,
    },
  };

  return (
    <section ref={ref} className="ftl-process-section" style={styles.section}>
      <style>
        {`
          .ftl-step:hover {
            background: #fff !important;
            transform: translateY(-10px) !important;
            border-color: rgba(255,196,0,.85) !important;
            box-shadow: 0 26px 55px rgba(38,59,150,.14) !important;
          }

          .ftl-step:hover .ftl-step-num {
            color: #ffc400 !important;
          }

          .ftl-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 42px rgba(255,196,0,.38);
          }

          @media (max-width: 1200px) {
            .ftl-process-section {
              padding: 100px 55px !important;
            }

            .ftl-process-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px !important;
            }

            .ftl-process-title {
              font-size: 38px !important;
            }
          }

          @media (max-width: 768px) {
            .ftl-process-section {
              padding: 85px 28px !important;
            }

            .ftl-process-head {
              margin-bottom: 46px !important;
            }

            .ftl-process-title {
              font-size: 34px !important;
            }

            .ftl-process-desc {
              font-size: 16px !important;
              line-height: 1.65 !important;
            }

            .ftl-process-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              margin-bottom: 55px !important;
            }

            .ftl-process-step {
              min-height: auto !important;
              padding: 28px 24px !important;
            }

            .ftl-process-cta {
              flex-direction: column !important;
              align-items: flex-start !important;
              padding: 38px 32px !important;
              gap: 28px !important;
              border-radius: 26px !important;
            }

            .ftl-process-cta-title {
              font-size: 30px !important;
            }

            .ftl-process-btn {
              width: 100% !important;
            }
          }

          @media (max-width: 480px) {
            .ftl-process-section {
              padding: 72px 20px !important;
            }

            .ftl-process-tag {
              font-size: 12px !important;
              letter-spacing: 1.8px !important;
            }

            .ftl-process-title {
              font-size: 30px !important;
              line-height: 1.28 !important;
            }

            .ftl-process-desc {
              font-size: 15px !important;
            }

            .ftl-process-grid {
              gap: 18px !important;
              margin-bottom: 48px !important;
            }

            .ftl-process-step {
              border-radius: 18px !important;
              padding: 26px 22px !important;
            }

            .ftl-step-num {
              font-size: 38px !important;
              margin-bottom: 18px !important;
            }

            .ftl-process-step-title {
              font-size: 18px !important;
            }

            .ftl-process-step-text {
              font-size: 14px !important;
            }

            .ftl-process-cta {
              padding: 32px 24px !important;
              border-radius: 22px !important;
            }

            .ftl-process-cta-title {
              font-size: 27px !important;
            }

            .ftl-process-cta-text {
              font-size: 15px !important;
            }
          }

          @media (max-width: 360px) {
            .ftl-process-section {
              padding: 65px 18px !important;
            }

            .ftl-process-title {
              font-size: 27px !important;
            }

            .ftl-process-cta {
              padding: 28px 20px !important;
            }

            .ftl-process-cta-title {
              font-size: 24px !important;
            }
          }
        `}
      </style>

      <div style={styles.wrap}>
        <div className="ftl-process-head" style={styles.head}>
          <div className="ftl-process-tag" style={styles.tag}>
            FTL Booking Flow
          </div>

          <h2 className="ftl-process-title" style={styles.title}>
            Our Full Truck Load Transport Process
          </h2>

          <p className="ftl-process-desc" style={styles.desc}>
            A clear, direct and reliable process for dedicated truck movement —
            from requirement sharing to safe final delivery.
          </p>
        </div>

        <div className="ftl-process-grid" style={styles.process}>
          {steps.map((item, i) => (
            <div
              key={i}
              className="ftl-step ftl-process-step"
              style={styles.step(i)}
            >
              <div className="ftl-step-num" style={styles.num}>
                {item[0]}
              </div>

              <h3 className="ftl-process-step-title" style={styles.stepTitle}>
                {item[1]}
              </h3>

              <p className="ftl-process-step-text" style={styles.stepText}>
                {item[2]}
              </p>
            </div>
          ))}
        </div>

        <div className="ftl-process-cta" style={styles.cta}>
          <div>
            <h2 className="ftl-process-cta-title" style={styles.ctaTitle}>
              Book Full Truck Load Services Today!
            </h2>

            <p className="ftl-process-cta-text" style={styles.ctaText}>
              Asia Master ensures on-time FTL deliveries, expert handling, and
              end-to-end cargo safety. Call{" "}
              <a href="tel:+919320459696" style={styles.phone}>
                +91-9320459696
              </a>{" "}
              for a free quote.
            </p>
          </div>

          <button className="ftl-btn ftl-process-btn" style={styles.btn}>
            Get Quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;