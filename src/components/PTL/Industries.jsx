import React, { useEffect, useRef, useState } from "react";

const industries = [
  "Automotive",
  "Apparel and Lifestyle",
  "Healthcare",
  "FMCG",
  "Hi Tech Electronics & Engineering",
  "Publishing",
  "Chemicals, Lubricants and Grease",
  "IT Hardware & Software Products",
];

const steps = [
  {
    title: "Share Details",
    text: "Provide pickup and delivery locations, cargo type, and shipment volume.",
  },
  {
    title: "Get a Quote",
    text: "Receive a transparent and competitive price with clear service details.",
  },
  {
    title: "Schedule Pickup",
    text: "We assign the nearest vehicle and optimize the route for faster movement.",
  },
  {
    title: "Track & Deliver",
    text: "Get shipment updates until your goods arrive safely at the destination.",
  },
];

const Industries = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.16 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="ptl-industries">
      <style>{`
        .ptl-industries {
          width: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
          padding: 110px 95px 115px;
          box-sizing: border-box;
          font-family: 'Montserrat', Arial, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .ptl-industries-glow {
          position: absolute;
          left: -120px;
          top: 80px;
          width: 310px;
          height: 310px;
          border-radius: 50%;
          background: rgba(255,196,0,0.12);
          filter: blur(50px);
        }

        .ptl-industries-wrapper {
          max-width: 1500px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .ptl-industries-top {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: start;
          margin-bottom: 75px;
        }

        .ptl-info-card {
          background: #fff;
          border-radius: 26px;
          padding: 44px;
          box-sizing: border-box;
          box-shadow: 0 18px 48px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateY(0)" : "translateY(70px)"};
          transition: all .85s cubic-bezier(.22,1,.36,1);
        }

        .ptl-info-card.second {
          transition-delay: .12s;
        }

        .ptl-heading {
          font-size: 34px;
          line-height: 1.25;
          font-weight: 700;
          color: #090909;
          margin: 0 0 26px;
        }

        .ptl-subtext {
          font-size: 17px;
          line-height: 1.65;
          font-weight: 500;
          color: #222;
          margin: 0 0 22px;
        }

        .ptl-industry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .industry-item {
          background: #f7f8fb;
          border-radius: 14px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #1f1f1f;
          font-size: 15px;
          font-weight: 600;
          transition: all .3s ease;
          border: 1px solid transparent;
        }

        .industry-item:hover {
          background: #fff8dc;
          border-color: rgba(255,196,0,.75);
          transform: translateX(6px);
        }

        .industry-bullet {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ffc400;
          flex-shrink: 0;
        }

        .ptl-steps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-top: 8px;
        }

        .ptl-step {
          background: #f7f8fb;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid rgba(38,59,150,0.08);
          transition: all .35s ease;
          cursor: pointer;
        }

        .ptl-step.active {
          background: linear-gradient(135deg, #263b96 0%, #2aa9e6 100%);
          border-color: rgba(255,196,0,0.75);
          box-shadow: 0 22px 42px rgba(38,59,150,.18);
          transform: translateY(-7px);
        }

        .ptl-step-no {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #263b96;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .ptl-step.active .ptl-step-no {
          background: #ffc400;
          color: #263b96;
        }

        .ptl-step-title {
          font-size: 17px;
          font-weight: 750;
          color: #111;
          margin: 0 0 8px;
        }

        .ptl-step.active .ptl-step-title {
          color: #fff;
        }

        .ptl-step-text {
          font-size: 14px;
          line-height: 1.6;
          color: #444;
          margin: 0;
          font-weight: 500;
        }

        .ptl-step.active .ptl-step-text {
          color: rgba(255,255,255,.9);
        }

        .ptl-cta {
          background: linear-gradient(135deg, #263b96 0%, #1f3a91 60%, #173079 100%);
          border-radius: 28px;
          padding: 42px 48px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          box-shadow: 0 24px 55px rgba(38,59,150,.22);
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateY(0)" : "translateY(70px)"};
          transition: all .85s cubic-bezier(.22,1,.36,1) .22s;
          position: relative;
          overflow: hidden;
        }

        .ptl-cta-title {
          font-size: 34px;
          line-height: 1.25;
          font-weight: 700;
          margin: 0 0 14px;
        }

        .ptl-cta-text {
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          color: rgba(255,255,255,.82);
          margin: 0;
          max-width: 930px;
        }

        .ptl-phone {
          color: #ffc400;
          font-weight: 800;
          text-decoration: none;
        }

        .ptl-cta-btn {
          height: 54px;
          min-width: 180px;
          border-radius: 34px;
          border: none;
          background: #ffc400;
          color: #111;
          font-size: 15px;
          font-weight: 750;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          box-shadow: 0 16px 35px rgba(255,196,0,.3);
          transition: all .3s ease;
          flex-shrink: 0;
        }

        .ptl-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 42px rgba(255,196,0,.38);
        }

        @media (max-width: 1024px) {
          .ptl-industries {
            padding: 95px 45px 100px;
          }

          .ptl-industries-top {
            grid-template-columns: 1fr;
            gap: 34px;
            margin-bottom: 50px;
          }

          .ptl-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .ptl-industries {
            padding: 72px 20px 80px;
          }

          .ptl-industries-glow {
            width: 220px;
            height: 220px;
            left: -100px;
            top: 40px;
          }

          .ptl-industries-top {
            gap: 28px;
            margin-bottom: 38px;
          }

          .ptl-info-card {
            border-radius: 18px;
            padding: 28px 22px;
          }

          .ptl-heading {
            font-size: 31px;
            line-height: 1.25;
            margin-bottom: 18px;
          }

          .ptl-subtext {
            font-size: 17px;
            line-height: 1.55;
          }

          .ptl-industry-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .industry-item {
            font-size: 16px;
            line-height: 1.35;
            padding: 15px 15px;
          }

          .ptl-steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ptl-step {
            padding: 22px;
          }

          .ptl-step.active {
            transform: translateY(0);
          }

          .ptl-step-title {
            font-size: 18px;
          }

          .ptl-step-text {
            font-size: 15px;
            line-height: 1.55;
          }

          .ptl-cta {
            border-radius: 20px;
            padding: 30px 24px;
            gap: 24px;
          }

          .ptl-cta-title {
            font-size: 30px;
            line-height: 1.25;
          }

          .ptl-cta-text {
            font-size: 16px;
            line-height: 1.6;
          }

          .ptl-cta-btn {
            width: 100%;
            height: 52px;
          }
        }
      `}</style>

      <div className="ptl-industries-glow"></div>

      <div className="ptl-industries-wrapper">
        <div className="ptl-industries-top">
          <div className="ptl-info-card">
            <h2 className="ptl-heading">Industries We Serve</h2>

            <p className="ptl-subtext">
              Our part-load truck services are built for businesses that need
              safe, regular, and scalable cargo movement.
            </p>

            <div className="ptl-industry-grid">
              {industries.map((item) => (
                <div key={item} className="industry-item">
                  <span className="industry-bullet"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="ptl-info-card second">
            <h2 className="ptl-heading">How PTL Works with Asia Master</h2>

            <div className="ptl-steps-grid">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`ptl-step ${
                    hoveredStep === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="ptl-step-no">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="ptl-step-title">{step.title}</h3>
                  <p className="ptl-step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ptl-cta">
          <div>
            <h2 className="ptl-cta-title">
              Book Part Truck Load Services Today!
            </h2>

            <p className="ptl-cta-text">
              Asia Master ensures hassle-free PTL bookings, optimized transit
              times, and safe deliveries. Get a free quote now or call{" "}
              <a href="tel:+917065001053" className="ptl-phone">
                +91-7065001053
              </a>{" "}
              for expert logistics support.
            </p>
          </div>

          <button className="ptl-cta-btn">
            Get Quote <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;