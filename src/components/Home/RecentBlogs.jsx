import React, { useEffect, useRef, useState } from "react";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=90",
    tag: "Supply chain management",
    title:
      "Elements of Supply Chain Management: The 4 Pillars That Keep Businesses Moving",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=90",
    tag: "Delhi to Mumbai transport",
    title: "How to Book Delhi to Mumbai Transport in 5 Easy Steps",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=90",
    tag: "Goods transport services",
    title: "Goods Transport Services in India: Local & Interstate Solutions",
  },
];

const RecentBlogs = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.18 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      width: "100%",
      background: "#fff",
      padding: "120px 95px 130px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
      position: "relative",
    },

    top: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "80px",
    },

    heading: {
      fontSize: "46px",
      lineHeight: "1.45",
      fontWeight: "600",
      color: "#050505",
      margin: 0,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(45px)",
      transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
    },

    viewBtn: {
      height: "54px",
      minWidth: "190px",
      borderRadius: "35px",
      border: "none",
      background: "#ffc400",
      color: "#111",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8px 0 24px",
      fontSize: "15px",
      fontWeight: "700",
      letterSpacing: "0.4px",
      cursor: "pointer",
      boxShadow: "0 12px 25px rgba(255,196,0,0.25)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(45px)",
      transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
    },

    btnCircle: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
      marginLeft: "14px",
      transition: "transform 0.35s ease",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px",
    },

    card: (index) => {
      const active = hovered === index;

      return {
        border: active
          ? "1px solid rgba(255,196,0,0.8)"
          : "1px solid #cfcfcf",
        borderRadius: "20px",
        padding: "26px",
        minHeight: "460px",
        background: "#fff",
        boxSizing: "border-box",
        cursor: "pointer",
        opacity: show ? 1 : 0,
        transform: show
          ? active
            ? "translateY(-10px)"
            : "translateY(0)"
          : "translateY(90px)",
        transition: `all 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${
          index * 0.12
        }s`,
        boxShadow: active
          ? "0 24px 45px rgba(0,0,0,0.10)"
          : "0 8px 22px rgba(0,0,0,0.03)",
        overflow: "hidden",
      };
    },

    imageWrap: {
      width: "100%",
      height: "285px",
      borderRadius: "16px",
      overflow: "hidden",
      position: "relative",
      marginBottom: "26px",
    },

    image: (active) => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      transform: active ? "scale(1.08)" : "scale(1)",
    }),

    tag: {
      position: "absolute",
      left: "14px",
      bottom: "14px",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "700",
      textShadow: "0 4px 14px rgba(0,0,0,0.45)",
    },

    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.45))",
    },

    title: (active) => ({
      color: active ? "#f4b400" : "#111",
      fontSize: "23px",
      lineHeight: "1.45",
      fontWeight: "450",
      margin: "0 0 42px",
      transition: "color 0.3s ease",
    }),

    bottom: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginTop: "auto",
    },

    line: {
      height: "1px",
      background: "#cfcfcf",
      flex: 1,
    },

    read: (active) => ({
      color: "#ffc400",
      fontSize: "15px",
      fontWeight: "700",
      whiteSpace: "nowrap",
      transform: active ? "translateX(4px)" : "translateX(0)",
      transition: "transform 0.3s ease",
    }),
  };

  return (
    <section ref={sectionRef} className="recent-blogs" style={styles.section}>
      <style>
        {`
          .recent-blog-btn:hover .recent-blog-arrow {
            transform: translateX(4px);
          }

          @media (max-width: 1100px) {
            .recent-blogs {
              padding: 95px 45px 105px !important;
            }

            .recent-blogs-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            .recent-blog-heading {
              font-size: 42px !important;
            }
          }

          @media (max-width: 768px) {
            .recent-blogs {
              padding: 72px 22px 85px !important;
            }

            .recent-blogs-top {
              display: block !important;
              margin-bottom: 34px !important;
            }

            .recent-blog-heading {
              font-size: 38px !important;
              line-height: 1.24 !important;
              margin-bottom: 34px !important;
            }

            .recent-blog-btn {
              height: 52px !important;
              min-width: 190px !important;
              width: fit-content !important;
              padding-left: 24px !important;
              font-size: 15px !important;
            }

            .recent-blogs-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }

            .recent-blog-card {
              min-height: auto !important;
              padding: 26px !important;
              border-radius: 20px !important;
            }

            .recent-blog-image-wrap {
              height: 184px !important;
              border-radius: 14px !important;
              margin-bottom: 24px !important;
            }

            .recent-blog-title {
              font-size: 22px !important;
              line-height: 1.38 !important;
              margin-bottom: 42px !important;
            }

            .recent-blog-tag {
              font-size: 12px !important;
              left: 12px !important;
              bottom: 12px !important;
            }

            .recent-blog-bottom {
              gap: 16px !important;
            }

            .recent-blog-read {
              font-size: 16px !important;
              line-height: 1.35 !important;
              white-space: normal !important;
              max-width: 60px !important;
            }
          }

          @media (max-width: 480px) {
            .recent-blogs {
              padding: 66px 21px 76px !important;
            }

            .recent-blog-heading {
              font-size: 37px !important;
            }

            .recent-blog-card {
              padding: 25px 24px !important;
            }

            .recent-blog-image-wrap {
              height: 183px !important;
            }

            .recent-blog-title {
              font-size: 22px !important;
            }
          }
        `}
      </style>

      <div className="recent-blogs-top" style={styles.top}>
        <h2 className="recent-blog-heading" style={styles.heading}>
          Our Recent <br />
          Blogs
        </h2>

        <button className="recent-blog-btn" style={styles.viewBtn}>
          View All Post
          <span className="recent-blog-arrow" style={styles.btnCircle}>
            →
          </span>
        </button>
      </div>

      <div className="recent-blogs-grid" style={styles.grid}>
        {blogs.map((blog, index) => {
          const active = hovered === index;

          return (
            <article
              key={index}
              className="recent-blog-card"
              style={styles.card(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="recent-blog-image-wrap" style={styles.imageWrap}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={styles.image(active)}
                />
                <div style={styles.imageOverlay}></div>
                <div className="recent-blog-tag" style={styles.tag}>
                  {blog.tag}
                </div>
              </div>

              <h3 className="recent-blog-title" style={styles.title(active)}>
                {blog.title}
              </h3>

              <div className="recent-blog-bottom" style={styles.bottom}>
                <div style={styles.line}></div>
                <span className="recent-blog-read" style={styles.read(active)}>
                  Read More
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentBlogs;