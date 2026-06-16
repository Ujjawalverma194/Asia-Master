import React, { useEffect, useRef, useState } from "react";
import Image from "../../../public/images/ptlsection.png";

const HeroPTL = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="ptl-hero">
      <style>{`
        .ptl-hero {
          width: 100%;
          min-height: 100vh;
          padding: 150px 95px 90px;
          box-sizing: border-box;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 55%, #ffffff 100%);
          font-family: 'Montserrat', Arial, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .ptl-bg-circle {
          position: absolute;
          right: -160px;
          top: 120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(255,196,0,0.12);
          filter: blur(4px);
        }

        .ptl-wrapper {
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .ptl-content {
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateX(0)" : "translateX(-70px)"};
          transition: all .9s cubic-bezier(.22,1,.36,1);
        }

        .ptl-eyebrow {
          color: #ffc400;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .ptl-title {
          font-size: 56px;
          line-height: 1.1;
          font-weight: 750;
          color: #080808;
          margin: 0 0 28px;
        }

        .ptl-title span {
          color: #263b96;
        }

        .ptl-para {
          font-size: 17px;
          line-height: 1.75;
          font-weight: 500;
          color: #222;
          margin: 0 0 20px;
          max-width: 780px;
        }

        .ptl-points {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 34px;
          max-width: 780px;
        }

        .ptl-point {
          background: #fff;
          border: 1px solid rgba(38,59,150,.12);
          border-radius: 16px;
          padding: 18px 16px;
          box-shadow: 0 12px 28px rgba(0,0,0,.045);
          transition: all .3s ease;
        }

        .ptl-point:hover {
          transform: translateY(-6px);
          border-color: rgba(255,196,0,.75);
          box-shadow: 0 20px 40px rgba(38,59,150,.10);
        }

        .ptl-point-num {
          color: #ffc400;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .ptl-point-text {
          font-size: 13px;
          line-height: 1.45;
          font-weight: 650;
          color: #263b96;
        }

        .ptl-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 38px;
        }

        .ptl-primary,
        .ptl-secondary {
          height: 52px;
          border-radius: 35px;
          font-size: 15px;
          font-weight: 750;
          cursor: pointer;
          transition: all .3s ease;
        }

        .ptl-primary {
          padding: 0 8px 0 24px;
          border: none;
          background: #ffc400;
          color: #111;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 16px 32px rgba(255,196,0,.25);
        }

        .ptl-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 42px rgba(255,196,0,.35);
        }

        .ptl-secondary {
          padding: 0 26px;
          border: 1px solid #263b96;
          background: #fff;
          color: #263b96;
        }

        .ptl-secondary:hover {
          background: #263b96;
          color: #fff;
          transform: translateY(-4px);
        }

        .ptl-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
        }

        .ptl-image-area {
          position: relative;
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateX(0) scale(1)" : "translateX(70px) scale(.96)"};
          transition: all 1s cubic-bezier(.22,1,.36,1) .12s;
        }

        .ptl-yellow-shape {
          position: absolute;
          right: -26px;
          top: -26px;
          width: 180px;
          height: 180px;
          background: #ffc400;
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
          z-index: -1;
          border-radius: 0 24px 0 0;
        }

        .ptl-image-card {
          width: 100%;
          height: 560px;
          border-radius: 26px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 70px rgba(0,0,0,.16);
          border: 8px solid #fff;
          background: #eee;
        }

        .ptl-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: ${hover ? "scale(1.08)" : "scale(1)"};
          transition: transform .75s cubic-bezier(.22,1,.36,1);
        }

        .ptl-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.22));
        }

        .ptl-badge {
          position: absolute;
          left: -28px;
          bottom: 45px;
          background: #263b96;
          color: #fff;
          border-radius: 18px;
          padding: 22px 26px;
          box-shadow: 0 22px 42px rgba(38,59,150,.25);
        }

        .ptl-badge-top {
          font-size: 28px;
          font-weight: 800;
          color: #ffc400;
          margin-bottom: 4px;
        }

        .ptl-badge-text {
          font-size: 13px;
          font-weight: 650;
          letter-spacing: .4px;
        }

        @media (max-width: 1024px) {
          .ptl-hero {
            padding: 125px 45px 80px;
          }

          .ptl-wrapper {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .ptl-image-card {
            height: 460px;
          }
        }

        @media (max-width: 600px) {
          .ptl-hero {
            min-height: auto;
            padding: 110px 22px 70px;
          }

          .ptl-bg-circle {
            display: none;
          }

          .ptl-wrapper {
            display: flex;
            flex-direction: column;
            gap: 28px;
          }

          .ptl-content {
            order: 1;
            transform: none;
          }

          .ptl-image-area {
            order: 2;
            width: 100%;
            transform: none;
          }

          .ptl-eyebrow {
            display: none;
          }

          .ptl-title {
            font-size: 40px;
            line-height: 1.18;
            margin-bottom: 32px;
          }

          .ptl-para {
            font-size: 18px;
            line-height: 1.55;
            margin-bottom: 24px;
          }

          .ptl-points {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 28px;
          }

          .ptl-actions {
            flex-direction: column;
            align-items: stretch;
            margin-top: 30px;
          }

          .ptl-primary,
          .ptl-secondary {
            width: 100%;
            justify-content: center;
          }

          .ptl-image-card {
            height: 195px;
            border: 0;
            border-radius: 0;
            box-shadow: none;
          }

          .ptl-image-card img {
            object-position: center;
          }

          .ptl-yellow-shape,
          .ptl-badge,
          .ptl-overlay {
            display: none;
          }
        }
      `}</style>

      <div className="ptl-bg-circle"></div>

      <div className="ptl-wrapper">
        <div className="ptl-content">
          <div className="ptl-eyebrow">Part Truck Load Logistics</div>

          <h1 className="ptl-title">
            Parchoon / <span>PTL</span>
          </h1>

          <p className="ptl-para">
            Punjabis call it Parchoon, Marathis say Parchutan, Gujaratis know it
            as Parchuran. Whatever you call it, Asia Master delivers it reliably.
          </p>

          <p className="ptl-para">
            India’s digital transformation opens business opportunities nationwide.
            Corporate offices and MSME businesses need dependable door-to-door
            solutions expanding their reach. Our parcel logistics services are
            GST ready, e-waybill compliant, and supported with live tracking.
          </p>

          <p className="ptl-para">
            Our owned booking and delivery warehouses span NCR, Maharashtra,
            Gujarat, and Rajasthan, organizing local delivery directly to
            consignee doorsteps.
          </p>

          <div className="ptl-points">
            {[
              ["01", "Door-to-door delivery"],
              ["02", "Live shipment tracking"],
              ["03", "Cost-effective movement"],
            ].map((item) => (
              <div key={item[0]} className="ptl-point">
                <div className="ptl-point-num">{item[0]}</div>
                <div className="ptl-point-text">{item[1]}</div>
              </div>
            ))}
          </div>

          <div className="ptl-actions">
            <button className="ptl-primary">
              Get PTL Quote
              <span className="ptl-circle">→</span>
            </button>

            <button className="ptl-secondary">Track Shipment</button>
          </div>
        </div>

        <div className="ptl-image-area">
          <div className="ptl-yellow-shape"></div>

          <div
            className="ptl-image-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img src={Image} alt="Asia Master PTL Logistics" />
            <div className="ptl-overlay"></div>
          </div>

          <div className="ptl-badge">
            <div className="ptl-badge-top">PTL</div>
            <div className="ptl-badge-text">Flexible cargo movement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPTL;