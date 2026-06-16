import React, { useEffect, useState } from "react";
// import Video from "../../../public/videos/herosectionvideo.mp4"
const Hero = () => {
  const [scrollMove, setScrollMove] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      setScrollMove(Math.min(window.scrollY * 0.85, isMobile ? 160 : 430));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
    <section className="home-hero" style={styles.hero}>
      <style>
        {`
          @media (max-width: 768px) {
            .home-hero {
              height: 430px !important;
              margin-top: 72px !important;
            }

            .home-hero video {
              height: 430px !important;
              object-fit: cover !important;
              object-position: center center !important;
            }

            .home-hero .hero-arrow-wrapper {
              left: -255px !important;
              width: 520px !important;
            }

            .home-hero .hero-back-chevron {
              width: 380px !important;
              background: linear-gradient(
                90deg,
                rgba(255,196,0,0.06),
                rgba(255,196,0,0.28)
              ) !important;
            }

            .home-hero .hero-front-chevron {
              left: 130px !important;
              width: 370px !important;
              background: linear-gradient(
                90deg,
                rgba(255,196,0,0.12),
                rgba(255,196,0,0.42)
              ) !important;
            }

            .hero-enquire-btn {
              top: 46% !important;
              padding: 13px 8px !important;
              font-size: 12px !important;
              z-index: 2000 !important;
            }
          }

          @media (max-width: 480px) {
            .home-hero {
              height: 340px !important;
              margin-top: 72px !important;
            }

            .home-hero video {
              height: 340px !important;
              object-fit: cover !important;
              object-position: center center !important;
            }

            .home-hero .hero-arrow-wrapper {
              left: -245px !important;
              width: 450px !important;
            }

            .home-hero .hero-back-chevron {
              width: 330px !important;
            }

            .home-hero .hero-front-chevron {
              left: 115px !important;
              width: 320px !important;
            }
          }
        `}
      </style>

      <video autoPlay muted loop playsInline style={styles.video}>
        <source
          src="https://abctransport.co.in/images/banner-video-new.mp4"
          type="video/mp4"
        />
      </video>

      <div style={styles.overlay}></div>

      <div className="hero-arrow-wrapper" style={styles.arrowWrapper}>
        <div className="hero-back-chevron" style={styles.backChevron}></div>
        <div className="hero-front-chevron" style={styles.frontChevron}></div>
      </div>

      <button className="hero-enquire-btn" style={styles.enquireBtn}>
        ENQUIRE NOW
      </button>
    </section>
  );
};

export default Hero;