import React, { useEffect, useRef, useState } from "react";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const FTLSection = () => {
  const ref = useRef(null);
  const [enter, setEnter] = useState(0);
  const [dim, setDim] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const enterProgress = clamp((vh - rect.top) / (vh * 0.75), 0, 1);
      const dimProgress = clamp((vh - rect.bottom - 40) / 260, 0, 1);

      setEnter(easeOut(enterProgress));
      setDim(dimProgress);
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
    <section ref={ref} className="ftl-section">
      <style>{`
        .ftl-section {
          width: 100%;
          min-height: 860px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          background: #fff;
          font-family: 'Montserrat', Arial, sans-serif;
        }

        .ftl-inner {
          width: 100%;
          min-height: 860px;
          display: flex;
          opacity: ${enter};
          transform: translateY(${(1 - enter) * 100}px);
          transition: transform .08s linear, opacity .08s linear;
          filter: brightness(${1 - dim * 0.42}) blur(${dim * 7}px);
        }

        .ftl-left {
          width: 58%;
          min-height: 860px;
          overflow: hidden;
        }

        .ftl-img {
          width: 100%;
          height: 740px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .ftl-right {
          width: 42%;
          min-height: 860px;
          background: #2e2e31;
          display: flex;
          align-items: center;
          padding: 0 72px;
          box-sizing: border-box;
        }

        .ftl-content {
          max-width: 540px;
        }

        .ftl-title {
          color: #fff;
          font-size: 44px;
          font-weight: 800;
          margin: 0 0 34px;
        }

        .ftl-text {
          color: #e2e2e2;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          margin: 0 0 55px;
        }

        .ftl-btn {
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
        }

        .ftl-circle {
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

        .ftl-dim {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,${dim * 0.28});
          z-index: 5;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .ftl-section {
            min-height: auto;
          }

          .ftl-inner {
            min-height: auto;
            display: block;
          }

          .ftl-left {
            width: 100%;
            min-height: auto;
          }

          .ftl-img {
            height: 245px;
            object-position: center;
          }

          .ftl-right {
            width: 100%;
            min-height: auto;
            padding: 32px 20px 48px;
            display: block;
          }

          .ftl-title {
            font-size: 36px;
            line-height: 1.15;
            margin-bottom: 24px;
          }

          .ftl-text {
            font-size: 17px;
            line-height: 1.55;
            margin-bottom: 38px;
          }

          .ftl-btn {
            height: 52px;
            min-width: 185px;
          }
        }
      `}</style>

      <div className="ftl-inner">
        <div className="ftl-left">
          <img
            src="https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14?q=80&w=735&auto=format&fit=crop"
            alt="Full Truck Load"
            className="ftl-img"
          />
        </div>

        <div className="ftl-right">
          <div className="ftl-content">
            <h2 className="ftl-title">Full Truck Load</h2>

            <p className="ftl-text">
              FTL services are ideal when your shipment requires an entire
              truck. Your goods are loaded once and delivered directly to the
              destination without sharing space. This ensures faster transit,
              better safety, and complete control over schedules—perfect for
              bulk, industrial, or high-value consignments.
            </p>

            <button className="ftl-btn">
              Explore More <span className="ftl-circle">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="ftl-dim"></div>
    </section>
  );
};

export default FTLSection;