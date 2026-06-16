import React, { useEffect, useMemo, useRef, useState } from "react";

const networkData = {
  "DELHI-NCR": [
    {
      name: "KASHMIRI GATE",
      address: "1413, Chabiganj Nicholson Road Kashmere Gate, New Delhi - 110006",
      contact: "+91-7065001051",
    },
    {
      name: "KAMLA MARKET",
      address: "217, Kamal Market, New Delhi - 110002",
      contact: "+91-7065001066",
    },
    {
      name: "MOTIA KHAN",
      address: "24, Rani Jhansi Road, Delhi - 110055",
      contact: "+91-7065001052, +91-9311299292",
    },
  ],

  GUJARAT: [
    {
      name: "AHMEDABAD",
      address: "Narol Transport Nagar, Ahmedabad, Gujarat",
      contact: "+91-9000000001",
    },
    {
      name: "SURAT",
      address: "Textile Market Area, Surat, Gujarat",
      contact: "+91-9000000002",
    },
  ],

  HARYANA: [
    {
      name: "GURUGRAM",
      address: "Transport Nagar, Gurugram, Haryana",
      contact: "+91-9000000004",
    },
    {
      name: "FARIDABAD",
      address: "Sector 58 Industrial Area, Faridabad, Haryana",
      contact: "+91-9000000005",
    },
  ],

  MAHARASHTRA: [
    {
      name: "MUMBAI",
      address: "Vashi Truck Terminal, Navi Mumbai, Maharashtra",
      contact: "+91-7303882714",
    },
    {
      name: "PUNE",
      address: "Chakan Industrial Area, Pune, Maharashtra",
      contact: "+91-9000000007",
    },
  ],

  PUNJAB: [
    {
      name: "LUDHIANA",
      address: "Transport Nagar, Ludhiana, Punjab",
      contact: "+91-9000000009",
    },
  ],

  "UTTAR PRADESH": [
    {
      name: "NOIDA",
      address: "Sector 63, Noida, Uttar Pradesh",
      contact: "+91-9000000011",
    },
    {
      name: "GHAZIABAD",
      address: "Sahibabad Industrial Area, Ghaziabad, Uttar Pradesh",
      contact: "+91-9000000012",
    },
  ],
};

const Networks = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [selectedState, setSelectedState] = useState("DELHI-NCR");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const branches = useMemo(() => networkData[selectedState] || [], [selectedState]);

  const openMap = (branch) => {
    const query = encodeURIComponent(`${branch.name}, ${branch.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <section ref={sectionRef} className="network-section">
      <style>{`
        .network-section {
          width: 100%;
          background: linear-gradient(180deg,#ffffff 0%,#f7f8fb 100%);
          padding: 115px 95px 125px;
          box-sizing: border-box;
          font-family: 'Montserrat', Arial, sans-serif;
          overflow: hidden;
        }

        .network-header {
          text-align: center;
          margin-bottom: 65px;
          opacity: ${show ? 1 : 0};
          transform: ${show ? "translateY(0)" : "translateY(35px)"};
          transition: all .85s cubic-bezier(.22,1,.36,1);
        }

        .network-title {
          font-size: 44px;
          font-weight: 700;
          margin: 0 0 22px;
          color: #080808;
        }

        .network-subtitle {
          font-size: 17px;
          color: #6b7280;
          font-weight: 500;
          margin: 0 0 24px;
          line-height: 1.7;
        }

        .network-select {
          width: 240px;
          height: 46px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,.35);
          background: #fff;
          color: #222;
          font-size: 15px;
          font-weight: 500;
          padding: 0 14px;
          outline: none;
          cursor: pointer;
        }

        .network-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1500px;
          margin: 0 auto;
        }

        .network-card {
          background: #e9e9e9;
          border: 1px solid rgba(0,0,0,.16);
          border-radius: 8px;
          padding: 28px 20px 24px;
          box-sizing: border-box;
          min-height: 330px;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(0,0,0,.08);
          transition: all .35s ease;
        }

        .network-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 45px rgba(38,59,150,.14);
          border-color: rgba(255,196,0,.75);
        }

        .network-name {
          font-size: 22px;
          font-weight: 800;
          color: #ffc400;
          margin: 0 0 34px;
          text-transform: uppercase;
        }

        .network-info {
          font-size: 14px;
          line-height: 1.7;
          color: #1f1f1f;
          margin: 0 0 18px;
        }

        .network-label {
          font-weight: 800;
          color: #111;
        }

        .network-map-box {
          width: 100%;
          height: 175px;
          margin-top: 24px;
          overflow: hidden;
          border: 8px solid #fff;
          background: #eee;
          box-sizing: border-box;
        }

        .network-map-box iframe {
          width: 100%;
          height: 100%;
          border: none;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .network-section {
            padding: 95px 45px 110px;
          }

          .network-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .network-section {
            padding: 86px 21px 90px;
          }

          .network-header {
            margin-bottom: 52px;
          }

          .network-title {
            font-size: 36px;
            line-height: 1.2;
            margin-bottom: 28px;
          }

          .network-subtitle {
            font-size: 17px;
            line-height: 1.7;
            max-width: 280px;
            margin: 0 auto 22px;
          }

          .network-select {
            width: 215px;
            height: 42px;
            font-size: 14px;
          }

          .network-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .network-card {
            min-height: auto;
            padding: 21px 18px 22px;
            border-radius: 7px;
          }

          .network-name {
            font-size: 22px;
            margin-bottom: 30px;
          }

          .network-info {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 14px;
          }

          .network-map-box {
            height: 160px;
            margin-top: 22px;
          }
        }
      `}</style>

      <div className="network-header">
        <h2 className="network-title">Our Networks</h2>

        <p className="network-subtitle">
          Strategic locations across major business hubs for quick and efficient service
        </p>

        <select
          className="network-select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {Object.keys(networkData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="network-grid">
        {branches.map((branch, index) => {
          const query = encodeURIComponent(`${branch.name}, ${branch.address}`);
          const iframeUrl = `https://www.google.com/maps?q=${query}&output=embed`;

          return (
            <article
              key={`${selectedState}-${branch.name}-${index}`}
              className="network-card"
              onClick={() => openMap(branch)}
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(65px)",
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              <h3 className="network-name">{branch.name}</h3>

              <p className="network-info">
                <span className="network-label">Address:</span> {branch.address}
              </p>

              <p className="network-info">
                <span className="network-label">Contact:</span> {branch.contact}
              </p>

              <div className="network-map-box">
                <iframe src={iframeUrl} title={`${branch.name} map`} loading="lazy" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Networks;