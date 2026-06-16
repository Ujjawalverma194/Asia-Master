import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "↗",
    title: "Business Expansion Support",
    text: "Perfect logistics support for businesses expanding across multiple states. We handle delivery complexity so you can focus on growth.",
  },
  {
    icon: "◎",
    title: "Digital India Ready",
    text: "Computerized systems, smart tracking, and modern logistics tools help improve shipment visibility and daily operations.",
  },
  {
    icon: "▣",
    title: "Corporate & MSME Focus",
    text: "Specialized value-added services designed for corporate clients and MSME requirements with reliable handling.",
  },
  {
    icon: "⌂",
    title: "Owned Infrastructure",
    text: "Our warehouse and delivery network gives better control, service quality, accountability, and faster local movement.",
  },
  {
    icon: "★",
    title: "Local Delivery Expertise",
    text: "Organized local networks ensure parcels reach exact consignee locations, not just nearby transport points.",
  },
  {
    icon: "✓",
    title: "Compliance Assured",
    text: "E-waybill, GST, and transport regulation-ready operations keep documentation simple and hassle-free.",
  },
];

const ServicesPTL = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="services-ptl">
      <style>{`
        .services-ptl {
          width: 100%;
          background: linear-gradient(180deg, #f7f7f7 0%, #ffffff 55%, #f8f8f8 100%);
          padding: 115px 95px 125px;
          box-sizing: border-box;
          font-family: 'Montserrat', Arial, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .services-ptl-title {
          text-align: center;
          font-size: 46px;
          line-height: 1.2;
          font-weight: 700;
          color: #080808;
          margin: 0 0 22px;
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateY(0)" : "translateY(40px)"};
          transition: all .85s cubic-bezier(.22,1,.36,1);
        }

        .services-ptl-subtitle {
          text-align: center;
          font-size: 17px;
          font-weight: 500;
          color: #333;
          margin: 0 0 72px;
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateY(0)" : "translateY(32px)"};
          transition: all .85s cubic-bezier(.22,1,.36,1) .1s;
        }

        .services-ptl-grid {
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .services-ptl-card {
          min-height: 310px;
          border-radius: 22px;
          padding: 34px 36px 38px;
          box-sizing: border-box;
          background: #fff;
          border: 1px solid rgba(0,0,0,.05);
          box-shadow: 0 18px 45px rgba(0,0,0,.06);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          text-align: center;
          transition: all .75s cubic-bezier(.22,1,.36,1);
        }

        .services-ptl-card.active {
          background: linear-gradient(135deg, #263b96 0%, #2aa9e6 100%);
          border-color: rgba(255,196,0,.85);
          box-shadow: 0 28px 60px rgba(38,59,150,.20);
          transform: translateY(-12px);
        }

        .services-ptl-icon {
          width: 94px;
          height: 94px;
          border-radius: 50%;
          margin: 0 auto 24px;
          border: 1px solid #8c8c8c;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 38px;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(0,0,0,.04);
          transition: all .35s ease;
          position: relative;
          z-index: 2;
        }

        .services-ptl-card.active .services-ptl-icon {
          border-color: rgba(255,255,255,.55);
          background: #ffc400;
          color: #263b96;
          transform: scale(1.08);
          box-shadow: 0 16px 34px rgba(255,196,0,.28);
        }

        .services-ptl-card-title {
          color: #ffc400;
          font-size: 22px;
          line-height: 1.35;
          font-weight: 650;
          margin: 0 0 18px;
          transition: color .3s ease;
          position: relative;
          z-index: 2;
        }

        .services-ptl-card.active .services-ptl-card-title {
          color: #fff;
        }

        .services-ptl-text {
          color: #202020;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          margin: 0;
          transition: color .3s ease;
          position: relative;
          z-index: 2;
        }

        .services-ptl-card.active .services-ptl-text {
          color: rgba(255,255,255,.92);
        }

        .services-ptl-glow {
          position: absolute;
          right: -120px;
          top: -120px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,196,0,.08);
          transition: all .45s ease;
          pointer-events: none;
        }

        .services-ptl-card.active .services-ptl-glow {
          right: -60px;
          top: -60px;
          background: rgba(255,196,0,.24);
        }

        .services-ptl-bottom-line {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0%;
          height: 4px;
          border-radius: 30px 30px 0 0;
          background: #ffc400;
          transform: translateX(-50%);
          transition: width .38s ease;
        }

        .services-ptl-card.active .services-ptl-bottom-line {
          width: 82%;
        }

        @media (max-width: 1024px) {
          .services-ptl {
            padding: 95px 45px 105px;
          }

          .services-ptl-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .services-ptl-title {
            font-size: 40px;
          }
        }

        @media (max-width: 600px) {
          .services-ptl {
            padding: 72px 20px 80px;
          }

          .services-ptl-title {
            font-size: 38px;
            line-height: 1.2;
            max-width: 300px;
            margin: 0 auto 28px;
          }

          .services-ptl-subtitle {
            font-size: 18px;
            line-height: 1.45;
            max-width: 285px;
            margin: 0 auto 70px;
          }

          .services-ptl-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .services-ptl-card {
            min-height: 380px;
            border-radius: 16px;
            padding: 32px 28px 44px;
            box-shadow: 0 16px 38px rgba(0,0,0,.08);
          }

          .services-ptl-card.active {
            transform: translateY(0);
          }

          .services-ptl-icon {
            width: 108px;
            height: 108px;
            font-size: 42px;
            margin-bottom: 28px;
          }

          .services-ptl-card-title {
            font-size: 24px;
            line-height: 1.2;
            margin-bottom: 22px;
          }

          .services-ptl-text {
            font-size: 19px;
            line-height: 1.48;
          }
        }
      `}</style>

      <h2 className="services-ptl-title">Why Choose Us for Parchoon Services</h2>

      <p className="services-ptl-subtitle">
        Tailored solutions for corporate and MSME sectors to expand nationwide
      </p>

      <div className="services-ptl-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className={`services-ptl-card ${hovered === index ? "active" : ""}`}
            style={{
              opacity: show ? 1 : 0,
              transform: show
                ? hovered === index
                  ? "translateY(-12px)"
                  : "translateY(0)"
                : "translateY(80px)",
              transitionDelay: `${index * 0.08}s`,
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="services-ptl-glow"></div>
            <div className="services-ptl-icon">{item.icon}</div>
            <h3 className="services-ptl-card-title">{item.title}</h3>
            <p className="services-ptl-text">{item.text}</p>
            <div className="services-ptl-bottom-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPTL;