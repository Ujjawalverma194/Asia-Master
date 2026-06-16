import React, { useEffect, useRef, useState } from "react";

const values = [
  {
    letter: "A",
    title: "Always Dependable",
    text: "From pickup to delivery, we ensure consistency, safety, and on-time performance you can rely on.",
  },
  {
    letter: "B",
    title: "Boldly Innovative",
    text: "We use technology, tracking systems, and smart logistics tools to simplify shipping and improve visibility.",
  },
  {
    letter: "C",
    title: "Clients First",
    text: "Every service is designed around customer needs, timelines, and business goals—because your cargo matters.",
  },
];

const ApartSection = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.18 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="apart-section">
      <style>{`
        .apart-section {
          width: 100%;
          background: linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%);
          padding: 115px 80px 125px;
          box-sizing: border-box;
          font-family: 'Montserrat', Arial, sans-serif;
          overflow: hidden;
        }

        .apart-title {
          text-align: center;
          font-size: 44px;
          font-weight: 700;
          color: #080808;
          margin: 0 0 95px;
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateY(0)" : "translateY(40px)"};
          transition: all .85s cubic-bezier(.22,1,.36,1);
        }

        .apart-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 42px;
          max-width: 1500px;
          margin: 0 auto;
        }

        .apart-card {
          min-height: 255px;
          border-radius: 22px;
          padding: 78px 42px 42px;
          text-align: center;
          position: relative;
          cursor: pointer;
          background: linear-gradient(135deg, #3147b7 0%, #38b7ee 100%);
          box-shadow: 0 14px 35px rgba(0,0,0,0.08);
          overflow: visible;
          box-sizing: border-box;
          transition: all .75s cubic-bezier(.22,1,.36,1);
        }

        .apart-card:hover {
          transform: translateY(-14px);
          background: linear-gradient(135deg, #243b96 0%, #26aee9 100%);
          box-shadow: 0 30px 60px rgba(38,59,150,0.24);
        }

        .apart-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.28;
          pointer-events: none;
          border-radius: 22px;
          overflow: hidden;
        }

        .apart-circle {
          position: absolute;
          top: -54px;
          left: 50%;
          transform: translateX(-50%);
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: #ffc400;
          color: #263b96;
          border: 14px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: 800;
          z-index: 5;
          box-sizing: content-box;
        }

        .apart-card:hover .apart-circle {
          transform: translateX(-50%) scale(1.08);
        }

        .apart-content {
          position: relative;
          z-index: 2;
        }

        .apart-card-title {
          font-size: 27px;
          font-weight: 600;
          color: #080808;
          margin: 0 0 16px;
        }

        .apart-text {
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          color: #fff;
          max-width: 450px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .apart-section {
            padding: 95px 45px 110px;
          }

          .apart-grid {
            grid-template-columns: 1fr;
            gap: 70px;
            max-width: 520px;
          }
        }

        @media (max-width: 600px) {
          .apart-section {
            padding: 86px 21px 80px;
          }

          .apart-title {
            font-size: 35px;
            line-height: 1.28;
            margin-bottom: 92px;
          }

          .apart-grid {
            gap: 86px;
          }

          .apart-card {
            min-height: 335px;
            padding: 92px 28px 38px;
            border-radius: 18px;
          }

          .apart-pattern {
            border-radius: 18px;
          }

          .apart-circle {
            width: 86px;
            height: 86px;
            top: -54px;
            font-size: 30px;
            border-width: 13px;
          }

          .apart-card-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .apart-text {
            font-size: 16px;
            line-height: 1.65;
          }
        }
      `}</style>

      <h2 className="apart-title">How We Set Ourselves Apart</h2>

      <div className="apart-grid">
        {values.map((item, index) => (
          <div
            key={index}
            className="apart-card"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? undefined : "translateY(80px)",
              transitionDelay: `${index * 0.12}s`,
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="apart-pattern"></div>

            <div className="apart-circle">{item.letter}</div>

            <div className="apart-content">
              <h3 className="apart-card-title">{item.title}</h3>
              <p className="apart-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApartSection;