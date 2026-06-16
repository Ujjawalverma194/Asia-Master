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
      boxSizing: "border-box",
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
      boxSizing: "border-box",
    },

    fileRow: {
      height: "54px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      borderBottom: "1px solid rgba(0,0,0,.35)",
      boxSizing: "border-box",
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
      transition: "all .3s ease",
      whiteSpace: "nowrap",
    },

    fileText: {
      fontSize: "14px",
      color: "#444",
      fontWeight: "500",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
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
    <section ref={ref} className="career-section" style={styles.section}>
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

          @media (max-width: 1200px) {
            .career-section {
              padding: 130px 55px 100px !important;
            }

            .career-title {
              font-size: 46px !important;
            }

            .career-form {
              padding: 52px 50px 50px !important;
            }
          }

          @media (max-width: 768px) {
            .career-section {
              min-height: auto !important;
              padding: 115px 28px 85px !important;
            }

            .career-bg-circle {
              width: 300px !important;
              height: 300px !important;
              right: -145px !important;
              top: 100px !important;
            }

            .career-header {
              margin-bottom: 52px !important;
            }

            .career-eyebrow {
              font-size: 13px !important;
              letter-spacing: 3px !important;
              margin-bottom: 14px !important;
            }

            .career-title {
              font-size: 40px !important;
              line-height: 1.2 !important;
            }

            .career-subtitle {
              font-size: 15px !important;
              line-height: 1.6 !important;
              max-width: 420px !important;
              margin: 0 auto !important;
            }

            .career-form {
              border-radius: 24px !important;
              padding: 46px 34px 44px !important;
            }

            .career-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }

            .career-full {
              grid-column: auto !important;
            }

            .career-submit-row {
              justify-content: flex-start !important;
              margin-top: 38px !important;
            }
          }

          @media (max-width: 480px) {
            .career-section {
              padding: 90px 20px 70px !important;
            }

            .career-header {
              margin-bottom: 44px !important;
            }

            .career-eyebrow {
              font-size: 12px !important;
              letter-spacing: 3px !important;
            }

            .career-title {
              font-size: 36px !important;
              line-height: 1.25 !important;
            }

            .career-form {
              padding: 40px 30px 42px !important;
              border-radius: 22px !important;
            }

            .career-textarea {
              height: 100px !important;
            }

            .career-input,
            .career-file-row {
              height: 52px !important;
            }

            .career-file-row {
              gap: 10px !important;
            }

            .career-file {
              padding: 9px 12px !important;
              font-size: 13px !important;
            }

            .career-file-text {
              font-size: 13px !important;
            }

            .career-submit {
              min-width: 156px !important;
              height: 52px !important;
            }
          }

          @media (max-width: 360px) {
            .career-section {
              padding: 78px 14px 60px !important;
            }

            .career-title {
              font-size: 32px !important;
            }

            .career-form {
              padding: 36px 28px 40px !important;
            }

            .career-submit-row {
              justify-content: flex-start !important;
            }
          }
        `}
      </style>

      <div className="career-bg-circle" style={styles.bgCircle}></div>

      <div className="career-header" style={styles.header}>
        <div className="career-eyebrow" style={styles.eyebrow}>
          Career
        </div>

        <h1 className="career-title" style={styles.title}>
          Explore your career
        </h1>

        <p className="career-subtitle" style={styles.subtitle}>
          Join Asia Master and grow with a reliable logistics network.
        </p>
      </div>

      <form className="career-form" style={styles.formWrap}>
        <div style={styles.topLine}></div>

        <div className="career-grid" style={styles.grid}>
          <div className="career-full" style={{ ...styles.field, ...styles.full }}>
            <textarea
              className="career-input career-textarea"
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
            <div className="career-file-row" style={styles.fileRow}>
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

              <span className="career-file-text" style={styles.fileText}>
                {fileName}
              </span>
            </div>
          </div>
        </div>

        <div className="career-submit-row" style={styles.submitRow}>
          <button className="career-submit" type="submit" style={styles.btn}>
            Submit <span style={styles.circle}>→</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default HeroCareer;