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
    {
      name: "ALIPUR",
      address: "Khasra No. 72/8, 72/9, Village Alipur, Delhi - 110036",
      contact: "+91-7303559964, +91-7428195441",
    },
    {
      name: "BABERPUR",
      address: "899E, Chajju Gate, Baberpur, Delhi - 110032",
      contact: "+91-8287328068",
    },
    {
      name: "GANDHINAGAR",
      address:
        "Near Pillar No. 26 Kailash Nagar Pusta Road Near Jai Mata TPT, Delhi - 110031",
      contact: "+91-9625459689, +91-7834888503",
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
    {
      name: "VADODARA",
      address: "Makarpura GIDC, Vadodara, Gujarat",
      contact: "+91-9000000003",
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
    {
      name: "PANIPAT",
      address: "GT Road Transport Area, Panipat, Haryana",
      contact: "+91-9000000006",
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
    {
      name: "NAGPUR",
      address: "Transport Nagar, Nagpur, Maharashtra",
      contact: "+91-9000000008",
    },
  ],

  PUNJAB: [
    {
      name: "LUDHIANA",
      address: "Transport Nagar, Ludhiana, Punjab",
      contact: "+91-9000000009",
    },
    {
      name: "AMRITSAR",
      address: "GT Road Logistics Area, Amritsar, Punjab",
      contact: "+91-9000000010",
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
    {
      name: "KANPUR",
      address: "Transport Nagar, Kanpur, Uttar Pradesh",
      contact: "+91-9000000013",
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
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  const styles = {
    section: {
      width: "100%",
      background: "linear-gradient(180deg,#ffffff 0%,#f7f8fb 100%)",
      padding: "115px 95px 125px",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', Arial, sans-serif",
      overflow: "hidden",
    },

    header: {
      textAlign: "center",
      marginBottom: "65px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(35px)",
      transition: "all .85s cubic-bezier(.22,1,.36,1)",
    },

    title: {
      fontSize: "44px",
      fontWeight: "700",
      margin: "0 0 22px",
      color: "#080808",
    },

    subtitle: {
      fontSize: "17px",
      color: "#6b7280",
      fontWeight: "500",
      margin: "0 0 24px",
    },

    select: {
      width: "240px",
      height: "46px",
      borderRadius: "8px",
      border: "1px solid rgba(0,0,0,.35)",
      background: "#fff",
      color: "#222",
      fontSize: "15px",
      fontWeight: "500",
      padding: "0 14px",
      outline: "none",
      cursor: "pointer",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px",
      maxWidth: "1500px",
      margin: "0 auto",
    },

    card: (index) => ({
      background: "#fff",
      border: "1px solid rgba(0,0,0,.10)",
      borderRadius: "18px",
      padding: "24px",
      boxSizing: "border-box",
      minHeight: "420px",
      cursor: "pointer",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(65px)",
      transition: `all .7s cubic-bezier(.22,1,.36,1) ${index * 0.08}s`,
      boxShadow: "0 16px 38px rgba(0,0,0,.06)",
      position: "relative",
      overflow: "hidden",
    }),

    topLine: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "4px",
      background: "linear-gradient(90deg,#ffc400,#263b96)",
    },

    name: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#ffc400",
      margin: "8px 0 28px",
      textTransform: "uppercase",
    },

    info: {
      fontSize: "14px",
      lineHeight: "1.65",
      color: "#1f1f1f",
      marginBottom: "14px",
      minHeight: "48px",
    },

    label: {
      fontWeight: "700",
      color: "#111",
    },

    mapBox: {
      width: "100%",
      height: "185px",
      marginTop: "22px",
      borderRadius: "12px",
      overflow: "hidden",
      border: "8px solid #f3f3f3",
      background: "#eee",
      position: "relative",
    },

    mapFrame: {
      width: "100%",
      height: "100%",
      border: "none",
      pointerEvents: "none",
      filter: "saturate(1.05)",
    },

    hint: {
      position: "absolute",
      right: "18px",
      top: "18px",
      background: "#263b96",
      color: "#fff",
      borderRadius: "20px",
      padding: "7px 13px",
      fontSize: "11px",
      fontWeight: "700",
      opacity: 0,
      transform: "translateY(-8px)",
      transition: "all .3s ease",
      zIndex: 5,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>
        {`
          .network-card:hover {
            transform: translateY(-10px) !important;
            border-color: rgba(255,196,0,.75) !important;
            box-shadow: 0 26px 55px rgba(38,59,150,.14) !important;
          }

          .network-card:hover .network-hint {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .network-card::after {
            content: "";
            position: absolute;
            right: -70px;
            bottom: -70px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: rgba(255,196,0,.12);
            transform: scale(0);
            transition: transform .35s ease;
          }

          .network-card:hover::after {
            transform: scale(1);
          }

          .network-select:hover {
            border-color: #ffc400 !important;
          }
        `}
      </style>

      <div style={styles.header}>
        <h2 style={styles.title}>Our Networks</h2>

        <p style={styles.subtitle}>
          Strategic locations across major business hubs for quick and efficient service
        </p>

        <select
          className="network-select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={styles.select}
        >
          {Object.keys(networkData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.grid}>
        {branches.map((branch, index) => {
          const query = encodeURIComponent(`${branch.name}, ${branch.address}`);
          const iframeUrl = `https://www.google.com/maps?q=${query}&output=embed`;

          return (
            <article
              key={`${selectedState}-${branch.name}-${index}`}
              className="network-card"
              style={styles.card(index)}
              onClick={() => openMap(branch)}
              title="Open location in Google Maps"
            >
              <div style={styles.topLine}></div>

              <span className="network-hint" style={styles.hint}>
                Open Map →
              </span>

              <h3 style={styles.name}>{branch.name}</h3>

              <p style={styles.info}>
                <span style={styles.label}>Address:</span> {branch.address}
              </p>

              <p style={styles.info}>
                <span style={styles.label}>Contact:</span> {branch.contact}
              </p>

              <div style={styles.mapBox}>
                <iframe
                  src={iframeUrl}
                  title={`${branch.name} map`}
                  loading="lazy"
                  style={styles.mapFrame}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Networks;