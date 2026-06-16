import React, { useEffect, useRef, useState } from "react";
import Image from "../../../public/images/ptlsectionimage.png";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const PTLSection = () => {
  const ref = useRef(null);
  const [enter, setEnter] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = clamp((vh - rect.top) / (vh * 0.72), 0, 1);

      setEnter(easeOut(progress));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={ref} className="ptl-section">
      <style>{`
        .ptl-section {
          width: 100%;
          min-height: 650px;
          display: flex;
          position: relative;
          z-index: 10;
          margin-top: -120px;
          overflow: hidden;
          background: #fff;
          font-family: 'Montserrat', Arial, sans-serif;
          box-sizing: border-box;
          box-shadow: 0 -20px 45px rgba(0,0,0,${enter * 0.22});
        }

        .ptl-left {
          width: 58%;
          min-height: 650px;
          overflow: hidden;
          opacity: ${enter};
          transform: translateY(${(1 - enter) * 95}px);
          transition: transform .08s linear, opacity .08s linear;
        }

        .ptl-img {
          width: 100%;
          height: 650px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .ptl-right {
          width: 42%;
          min-height: 650px;
          background: #2e2e31;
          display: flex;
          align-items: center;
          padding: 0 72px;
          box-sizing: border-box;
          opacity: ${enter};
          transform: translateY(${(1 - enter) * 120}px);
          transition: transform .08s linear, opacity .08s linear;
        }

        .ptl-content {
          max-width: 540px;
          opacity: ${enter};
          transform: translateY(${(1 - enter) * 55}px);
          transition: transform .08s linear, opacity .08s linear;
        }

        .ptl-title {
          color: #fff;
          font-size: 44px;
          font-weight: 800;
          margin: 0 0 34px;
        }

        .ptl-text {
          color: #e2e2e2;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          margin: 0 0 55px;
        }

        .ptl-btn {
          height: 52px;
          min-width: 190px;
          border-radius: 35px;
          border: none;
          background: #ffc400;
          color: #111;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7px 0 24px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          opacity: ${enter};
          transform: translateY(${(1 - enter) * 35}px);
          transition: transform .08s linear, opacity .08s linear;
        }

        .ptl-circle {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-left: 18px;
        }

        @media (max-width: 768px) {
          .ptl-section {
            min-height: auto;
            display: block;
            margin-top: 0;
          }

          .ptl-left {
            width: 100%;
            min-height: auto;
          }

          .ptl-img {
            height: 245px;
            object-position: center;
          }

          .ptl-right {
            width: 100%;
            min-height: auto;
            padding: 32px 20px 48px;
            display: block;
          }

          .ptl-title {
            font-size: 36px;
            line-height: 1.15;
            margin-bottom: 24px;
          }

          .ptl-text {
            font-size: 17px;
            line-height: 1.55;
            margin-bottom: 38px;
          }

          .ptl-btn {
            height: 52px;
            min-width: 185px;
          }
        }
      `}</style>

      <div className="ptl-left">
        <img src={Image} alt="Parchoon PTL" className="ptl-img" />
      </div>

      <div className="ptl-right">
        <div className="ptl-content">
          <h2 className="ptl-title">Parchoon / PTL</h2>

          <p className="ptl-text">
            PTL services allow you to transport smaller shipments by sharing
            truck space with other consignments. You pay only for the space you
            use, making it cost-effective while still ensuring secure handling,
            timely delivery, and professional logistics management across routes.
          </p>

          <button className="ptl-btn">
            Explore More <span className="ptl-circle">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PTLSection;