import React, { useEffect, useRef, useState } from "react";

const logos = [
  "https://abctransport.co.in/images/partners/Apar.png",
  "https://abctransport.co.in/images/clintel/jindal%20steel.png",
  "https://abctransport.co.in/images/clintel/Nutraj.png",
  "https://abctransport.co.in/images/clintel/organic%20tattva.png",
  "https://abctransport.co.in/images/clintel/gm-logo.jpg",
  "https://abctransport.co.in/images/partners/century%20ply.png",
  "https://abctransport.co.in/images/partners/nova.png",
  "https://abctransport.co.in/images/partners/mahaan.png",
  "https://abctransport.co.in/images/partners/kajaria.png",
];

const CustomersSection = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section ref={sectionRef} className="customers-section">
      <style>{`
        .customers-section {
          width: 100%;
          background: #fff;
          padding: 110px 0 120px;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }

        .customers-title {
          text-align: center;
          font-size: 38px;
          font-weight: 700;
          color: #111;
          margin: 0 0 75px;
          opacity: ${show ? 1 : 0};
          transform: translateY(${show ? "0px" : "40px"});
          transition: all .9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .customers-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .customers-fade-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 180px;
          height: 100%;
          background: linear-gradient(to right,#fff,transparent);
          z-index: 2;
          pointer-events: none;
        }

        .customers-fade-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 180px;
          height: 100%;
          background: linear-gradient(to left,#fff,transparent);
          z-index: 2;
          pointer-events: none;
        }

        .customer-track {
          display: flex;
          align-items: center;
          gap: 20px;
          width: max-content;
          animation: customerSlider 35s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        .customer-logo {
          width: 240px;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 18px;
          transition: all .35s ease;
          padding: 12px;
          box-sizing: border-box;
        }

        .customer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
        }

        @keyframes customerSlider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .customer-track:hover {
          animation-play-state: paused;
        }

        .customer-logo:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        @media (max-width: 768px) {
          .customers-section {
            padding: 72px 0 80px;
          }

          .customers-title {
            font-size: 36px;
            line-height: 1.2;
            max-width: 280px;
            margin: 0 auto 48px;
          }

          .customers-fade-left,
          .customers-fade-right {
            width: 55px;
          }

          .customer-track {
            gap: 18px;
            animation-duration: 28s;
          }

          .customer-logo {
            width: 170px;
            height: 92px;
            padding: 8px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .customers-section {
            padding: 65px 0 70px;
          }

          .customers-title {
            font-size: 34px;
            margin-bottom: 42px;
          }

          .customer-track {
            gap: 16px;
          }

          .customer-logo {
            width: 150px;
            height: 82px;
          }
        }
      `}</style>

      <h2 className="customers-title">Our Valuable Customers</h2>

      <div className="customers-slider">
        <div className="customers-fade-left"></div>
        <div className="customers-fade-right"></div>

        <div
          className="customer-track"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="customer-logo">
              <img src={logo} alt="customer logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;