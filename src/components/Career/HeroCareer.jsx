import React, { useEffect, useRef, useState } from "react";

const HeroCareer = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.16 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      padding: "150px 95px 115px",
      boxSizing: "border-box",
      background:
        "linear-gradient(180deg, #ffffff 0%, #fafafa 55%, #ffffff 100%)",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    bgCircle: {
      position: "absolute",
      right: "-150px",
      top: "130px",
      width: "430px",
      height: "430px",
      borderRadius: "50%",
      background: "rgba(255,196,0,.12)",
      filter: "blur(5px)",
    },

    header: {
      textAlign: "center",
      marginBottom: "70px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(40px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1)",
      position: "relative",
      zIndex: 2,
    },

    eyebrow: {
      color: "#ffc400",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: "4px",
      textTransform: "uppercase",
      marginBottom: "18px",
    },

    title: {
      fontSize: "52px",
      lineHeight: "1.15",
      fontWeight: "750",
      color: "#080808",
      margin: "0 0 16px",
    },

    subtitle: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#666",
      margin: 0,
    },

    formWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      background: "#fff",
      borderRadius: "28px",
      padding: "58px 64px 54px",
      boxSizing: "border-box",
      boxShadow: "0 28px 70px rgba(0,0,0,.10)",
      border: "1px solid rgba(38,59,150,.08)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(70px)",
      transition: "all .9s cubic-bezier(.22,1,.36,1) .12s",
      position: "relative",
      overflow: "hidden",
      zIndex: 2,
    },

    topLine: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "5px",
      background: "linear-gradient(90deg,#ffc400,#263b96,#ffc400)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "34px 34px",
    },

    full: {
      gridColumn: "1 / -1",
    },

    field: {
      position: "relative",
    },

    input: {
      width: "100%",
      height: "54px",
      border: "none",
      borderBottom: "1px solid rgba(0,0,0,.35)",
      outline: "none",
      fontSize: "15px",
      fontWeight: "500",
      color: "#111",
      fontFamily: "'Montserrat', Arial, sans-serif",
      background: "transparent",
      transition: "all .3s ease",
    },

    textarea: {
      width: "100%",
      height: "110px",
      border: "none",
      borderBottom: "1px solid rgba(0,0,0,.35)",
      outline: "none",
      resize: "none",
      fontSize: "15px",
      fontWeight: "500",
      color: "#111",
      fontFamily: "'Montserrat', Arial, sans-serif",
      background: "transparent",
      paddingTop: "14px",
    },

    fileRow: {
      height: "54px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      borderBottom: "1px solid rgba(0,0,0,.35)",
    },

    fileBtn: {
      background: "#f1f3f8",
      color: "#111",
      padding: "10px 16px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      border: "1px solid rgba(38,59,150,.12)",
    },

    fileText: {
      fontSize: "14px",
      color: "#444",
      fontWeight: "500",
    },

    submitRow: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "46px",
    },

    btn: {
      height: "54px",
      minWidth: "165px",
      border: "none",
      borderRadius: "35px",
      background: "#ffc400",
      color: "#111",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: "1.2px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      boxShadow: "0 16px 34px rgba(255,196,0,.28)",
      transition: "all .3s ease",
      textTransform: "uppercase",
    },

    circle: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <style>
        {`
          .career-input:focus {
            border-bottom-color: #ffc400 !important;
          }

          .career-input::placeholder {
            color: #667085;
          }

          .career-submit:hover {
            transform: translateY(-4px);
            box-shadow: 0 22px 44px rgba(255,196,0,.38) !important;
          }

          .career-file:hover {
            background: #263b96 !important;
            color: #fff !important;
          }
        `}
      </style>

      <div style={styles.bgCircle}></div>

      <div style={styles.header}>
        <div style={styles.eyebrow}>Career</div>
        <h1 style={styles.title}>Explore your career</h1>
        <p style={styles.subtitle}>
          Join Asia Master and grow with a reliable logistics network.
        </p>
      </div>

      <form style={styles.formWrap}>
        <div style={styles.topLine}></div>

        <div style={styles.grid}>
          <div style={{ ...styles.field, ...styles.full }}>
            <textarea
              className="career-input"
              placeholder="Your Requirement"
              style={styles.textarea}
            />
          </div>

          <div style={styles.field}>
            <input
              className="career-input"
              type="text"
              placeholder="Your Name"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <input
              className="career-input"
              type="email"
              placeholder="Email Id"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <input
              className="career-input"
              type="tel"
              placeholder="Mobile Number"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <div style={styles.fileRow}>
              <label className="career-file" style={styles.fileBtn}>
                Choose File
                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name || "No file chosen")
                  }
                />
              </label>
              <span style={styles.fileText}>{fileName}</span>
            </div>
          </div>
        </div>

        <div style={styles.submitRow}>
          <button className="career-submit" type="submit" style={styles.btn}>
            Submit <span style={styles.circle}>→</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default HeroCareer;