import React, { useEffect, useRef, useState } from "react";
import Image from "../../assets/images/factsimage.png";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const FactsFigures = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const navbar = window.innerWidth <= 768 ? 72 : 88;
      const scrollArea = rect.height - (window.innerHeight - navbar);
      const p =
        scrollArea > 0 ? clamp((navbar - rect.top) / scrollArea, 0, 1) : 0;

      setProgress(p);
    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const statsProgress = clamp((progress - 0.12) / 0.55, 0, 1);
  const arrowProgress = clamp((progress - 0.68) / 0.32, 0, 1);

  return (
    <section ref={ref} className="facts-section">
      <style>{`
        .facts-section {
          width: 100%;
          height: 85vh;
          min-height: 780px;
          position: relative;
          overflow: hidden;
          font-family: 'Montserrat', Arial, sans-serif;
          margin: 0;
          padding: 10px;
          background: transparent;
          box-sizing: border-box;
        }

        .facts-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          filter: brightness(1.12) contrast(1.04);
        }

        .facts-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,.22), rgba(0,0,0,.08), rgba(0,0,0,.04));
          z-index: 2;
        }

        .facts-arrows {
          position: absolute;
          right: -340px;
          top: 0;
          width: 900px;
          height: 100%;
          z-index: 3;
          transform: translateX(${(1 - arrowProgress) * 520}px);
          transition: transform .08s linear;
          pointer-events: none;
        }

        .facts-arrow-one {
          position: absolute;
          right: 250px;
          width: 520px;
          height: 100%;
          background: rgba(255,196,0,.34);
          clip-path: polygon(35% 0,100% 0,65% 50%,100% 100%,35% 100%,0 50%);
        }

        .facts-arrow-two {
          position: absolute;
          right: 0;
          width: 540px;
          height: 100%;
          background: rgba(255,196,0,.55);
          clip-path: polygon(35% 0,100% 0,65% 50%,100% 100%,35% 100%,0 50%);
        }

        .facts-content {
          position: relative;
          z-index: 4;
          height: 100%;
          padding: 95px 90px;
          box-sizing: border-box;
          color: #fff;
        }

        .facts-label {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 3px;
          margin-bottom: 78px;
        }

        .facts-track {
          display: flex;
          gap: 100px;
          width: max-content;
          transform: translateX(${-statsProgress * 760}px);
          transition: transform .08s linear;
          will-change: transform;
          padding: 0 50px;
        }

        .facts-stat {
          min-width: 330px;
        }

        .facts-number {
          font-size: 118px;
          font-weight: 300;
          line-height: 1;
          margin: 0;
          white-space: nowrap;
        }

        .facts-desc {
          font-size: 17px;
          font-weight: 700;
          margin-top: 16px;
        }

        .facts-hint {
          position: absolute;
          left: 90px;
          bottom: 78px;
          z-index: 5;
          color: #fff;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .facts-bar {
          position: absolute;
          left: 90px;
          bottom: 56px;
          width: 350px;
          height: 4px;
          background: rgba(255,255,255,.28);
          border-radius: 20px;
          z-index: 5;
          overflow: hidden;
        }

        .facts-fill {
          height: 100%;
          width: ${progress * 100}%;
          background: #ffc400;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .facts-section {
            height: 350px;
            min-height: 350px;
            padding: 0;
          }

          .facts-bg {
            object-position: center center;
          }

          .facts-overlay {
            background: rgba(0,0,0,.38);
          }

          .facts-arrows {
            display: none;
          }

          .facts-content {
            padding: 48px 24px 35px;
          }

          .facts-label {
            font-size: 19px;
            letter-spacing: 3px;
            margin-bottom: 38px;
          }

          .facts-track {
            gap: 24px;
            padding: 0;
            width: 100%;
            transform: none;
            justify-content: space-between;
          }

          .facts-stat {
            min-width: 0;
            width: 33.333%;
          }

          .facts-number {
            font-size: 24px;
            font-weight: 500;
          }

          .facts-desc {
            font-size: 15px;
            line-height: 1.35;
            margin-top: 10px;
          }

          .facts-hint,
          .facts-bar {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .facts-section {
            height: 325px;
            min-height: 325px;
          }

          .facts-content {
            padding: 44px 22px 30px;
          }

          .facts-track {
            gap: 18px;
          }

          .facts-number {
            font-size: 22px;
          }

          .facts-desc {
            font-size: 14px;
          }
        }
      `}</style>

      <img src={Image} alt="Facts" className="facts-bg" />

      <div className="facts-overlay"></div>

      <div className="facts-arrows">
        <div className="facts-arrow-one"></div>
        <div className="facts-arrow-two"></div>
      </div>

      <div className="facts-content">
        <div className="facts-label">FACTS &amp; FIGURES</div>

        <div className="facts-track">
          <div className="facts-stat">
            <h2 className="facts-number">80,000+</h2>
            <p className="facts-desc">Kilometers Running Daily</p>
          </div>

          <div className="facts-stat">
            <h2 className="facts-number">300+</h2>
            <p className="facts-desc">Trucks</p>
          </div>

          <div className="facts-stat">
            <h2 className="facts-number">3–4</h2>
            <p className="facts-desc">Days Delivery TAT</p>
          </div>
        </div>
      </div>

      <div className="facts-hint">Scroll to explore</div>

      <div className="facts-bar">
        <div className="facts-fill"></div>
      </div>
    </section>
  );
};

export default FactsFigures;