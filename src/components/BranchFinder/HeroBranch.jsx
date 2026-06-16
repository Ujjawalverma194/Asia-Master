import React, { useMemo, useState } from "react";

const branches = [
  {
    region: "NORTH REGION",
    count: 10,
    items: [
      {
        code: "ALI",
        name: "(A)ALI - ALIPUR",
        address: "KHASRA NO. 72/8, 72/9, VILLAGE - ALIPUR, DELHI - 110036",
        area: "NORTH WEST DELHI, DELHI - 110036",
        phones: ["7428195441", "9289729611"],
      },
      {
        code: "BWN",
        name: "BWN - BAWANA",
        address: "NA",
        area: "NORTH WEST DELHI, DELHI - 110039",
        phones: [],
      },
      {
        code: "GURGAON",
        name: "GURGAON",
        address: "948, GALI NO. 5, BHAWANI ENCLAVE, BASAI ROAD, GURGAON - 122006",
        area: "GURGAON, HARYANA - 122006",
        phones: ["9821893897", "9312362493"],
      },
      {
        code: "KG",
        name: "KG - KASHMERE GATE",
        address:
          "1413, CHABIGANJ NICHOLSON ROAD KASHMERE GATE NEW DELHI PIN CODE - 110006",
        area: "NORTH DELHI, DELHI - 110006",
        phones: ["7065001051"],
      },
      {
        code: "KM",
        name: "KM - KAMLA MARKET",
        address: "217, KAMLA MARKET, NEW DELHI PIN - 110002",
        area: "CENTRAL DELHI, DELHI - 110002",
        phones: ["7065001066", "9289728138"],
      },
      {
        code: "MKN",
        name: "MKN - MOTIA KHAN",
        address: "24, RANI JHANSI ROAD, DELHI PIN - 110055",
        area: "CENTRAL DELHI, DELHI - 110055",
        phones: ["9311299292", "7065001052"],
      },
    ],
  },
  {
    region: "WEST REGION",
    count: 8,
    items: [
      {
        code: "PNCK",
        name: "(DP)PNCK - PUNE CHAKAN",
        address:
          "GATE NO 93 PUNE NASIK HIGHWAY BEHIND PAWANA SHAHAKARI BANK CHIMBLI PHATA PIN CODE 411005",
        area: "PUNE, MAHARASHTRA - 411005",
        phones: ["7769922615"],
      },
      {
        code: "BW",
        name: "BW - BHIWANDI",
        address:
          "ARIHANI COMPLEX, SHED NO 8, GALA NO 14,15, KOPER BUS STOP, BHIWANDI PIN - 421302",
        area: "THANE, MAHARASHTRA - 421302",
        phones: ["7303882715", "9823936969"],
      },
      {
        code: "SUR",
        name: "SUR - SURAT",
        address:
          "GODOWN NO.36, NEW BHARAT TRANSPORT NAGAR, NEAR BHATWARI HOTEL ANTROLI SURAT PIN NO - 394325",
        area: "SURAT, GUJARAT - 394325",
        phones: ["9319143622"],
      },
      {
        code: "VSH",
        name: "VSH - VASHI",
        address: "GALA NO 4/5 SECTOR TRUCK 19, TERMINAL, VASHI NAVI MUMBAI - 400705",
        area: "THANE, MAHARASHTRA - 400705",
        phones: ["7303882714"],
      },
    ],
  },
];

const HeroBranch = () => {
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const filteredRegions = useMemo(() => {
    const searchTerm = activeSearch.trim().toLowerCase();

    return branches
      .map((region) => ({
        ...region,
        items: region.items.filter((item) => {
          if (!searchTerm) return true;

          const searchableText = [
            item.region,
            region.region,
            item.code,
            item.name,
            item.address,
            item.area,
            ...item.phones,
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(searchTerm);
        }),
      }))
      .filter((region) => region.items.length > 0);
  }, [activeSearch]);

  const openMap = (branch) => {
    const mapQuery = encodeURIComponent(`${branch.name} ${branch.address} ${branch.area}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${mapQuery}`, "_blank");
  };

  const handleFindNearest = () => {
    const value = locationQuery.trim();
    setActiveSearch(value);
    setQuery("");
  };

  const handleBranchSearch = (value) => {
    setQuery(value);
    setLocationQuery("");
    setActiveSearch(value);
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        window.open(
          `https://www.google.com/maps/search/Asia+Master+branch/@${coords.latitude},${coords.longitude},12z`,
          "_blank"
        );
      },
      () => alert("Location permission denied.")
    );
  };

  const handleShare = async () => {
    const data = {
      title: "Asia Master Branch Network Directory",
      text: "Asia Master Branch Network Directory",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Page link copied!");
    }
  };

  return (
    <section className="branch-page">
      <style>{`
        .branch-page {
          min-height: 100vh;
          background: #ffffff;
          padding: 55px 20px 80px;
          font-family: 'Montserrat', Arial, sans-serif;
          color: #1f2937;
        }

        .branch-actions {
          position: fixed;
          right: 32px;
          top: 28px;
          display: flex;
          gap: 10px;
          z-index: 50;
        }

        .branch-actions button {
          border: none;
          border-radius: 7px;
          padding: 12px 20px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }

        .print-btn { background: #1f43b7; }
        .share-btn { background: #18a34a; }
        .close-btn { background: #aab0bb; }

        .branch-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .branch-head {
          text-align: center;
          margin-bottom: 36px;
        }

        .company {
          font-size: 34px;
          color: #2145b8;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 0 0 8px;
        }

        .branch-small {
          font-size: 18px;
          margin-bottom: 18px;
        }

        .branch-title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 5px;
          margin: 0;
        }

        .head-line {
          width: 100%;
          height: 4px;
          background: #2145b8;
          margin: 34px auto 0;
          border-radius: 30px;
        }

        .search-panel {
          background: #f0f4fb;
          border: 1px solid #dce4f1;
          border-radius: 12px;
          padding: 26px;
          margin-bottom: 32px;
        }

        .search-title {
          color: #2145b8;
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .search-row {
          display: grid;
          grid-template-columns: 210px 1fr 180px;
          gap: 12px;
          margin-bottom: 26px;
        }

        .loc-btn,
        .find-btn {
          height: 52px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 750;
          cursor: pointer;
        }

        .loc-btn {
          background: #ffc400;
          color: #111;
        }

        .find-btn {
          background: #2145b8;
          color: #fff;
        }

        .search-input {
          height: 52px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0 18px;
          font-size: 15px;
          outline: none;
          box-sizing: border-box;
          width: 100%;
        }

        .or {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 16px;
          align-items: center;
          color: #6b7280;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .or::before,
        .or::after {
          content: "";
          height: 1px;
          background: #d1d9e6;
        }

        .no-result {
          text-align: center;
          padding: 30px;
          color: #6b7280;
          font-weight: 700;
        }

        .region {
          border: 1px solid #dce4f1;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 34px;
          background: #f8fbff;
        }

        .region-head {
          background: linear-gradient(135deg, #2145b8, #3b82f6);
          color: #fff;
          padding: 18px 26px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 22px;
          font-weight: 800;
        }

        .count {
          background: rgba(255,255,255,.22);
          padding: 7px 16px;
          border-radius: 30px;
          font-size: 14px;
        }

        .branch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          padding: 26px;
        }

        .branch-card {
          background: #fff;
          border: 1px solid #e0e7f1;
          border-radius: 9px;
          padding: 20px;
          position: relative;
          transition: .3s ease;
        }

        .branch-card:hover {
          transform: translateY(-5px);
          border-color: #ffc400;
          box-shadow: 0 18px 42px rgba(33,69,184,.12);
        }

        .branch-name {
          color: #153eaa;
          font-size: 18px;
          font-weight: 800;
          padding-right: 78px;
          margin-bottom: 15px;
        }

        .branch-code {
          position: absolute;
          right: 18px;
          top: 18px;
          background: #ffc400;
          color: #8a5a00;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 800;
        }

        .branch-info {
          font-size: 14px;
          line-height: 1.55;
          margin: 9px 0;
          color: #374151;
        }

        .phones {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 10px 0;
        }

        .phone {
          background: #2145b8;
          color: #fff;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 800;
        }

        .map-link {
          border: none;
          background: transparent;
          color: #2145b8;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          padding: 0;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .branch-page {
            padding: 28px 12px 60px;
          }

          .branch-actions {
            position: sticky;
            top: 8px;
            justify-content: center;
            right: auto;
            margin-bottom: 10px;
          }

          .branch-actions button {
            padding: 10px 14px;
            font-size: 13px;
          }

          .company {
            font-size: 27px;
            line-height: 1.15;
          }

          .branch-title {
            font-size: 22px;
            letter-spacing: 3px;
            line-height: 1.35;
          }

          .search-panel {
            padding: 20px;
          }

          .search-row {
            grid-template-columns: 1fr;
          }

          .branch-grid {
            grid-template-columns: 1fr;
            padding: 16px;
          }

          .region-head {
            font-size: 20px;
            padding: 16px;
          }
        }

        @media print {
          .branch-actions,
          .search-panel {
            display: none !important;
          }

          .branch-page {
            padding: 0;
          }

          .branch-card {
            break-inside: avoid;
            box-shadow: none !important;
          }
        }
      `}</style>

      <div className="branch-actions">
        <button className="print-btn" onClick={() => window.print()}>
          🖨 Print
        </button>
        <button className="share-btn" onClick={handleShare}>
          🔗 Share
        </button>
        <button className="close-btn" onClick={() => window.history.back()}>
          ×
        </button>
      </div>

      <div className="branch-container">
        <div className="branch-head">
          <h1 className="company">ASIA MASTER</h1>
          <div className="branch-small">BRANCHES</div>
          <h2 className="branch-title">BRANCH NETWORK DIRECTORY</h2>
          <div className="head-line"></div>
        </div>

        <div className="search-panel">
          <div className="search-title">⌾ Find branch nearest to me</div>

          <div className="search-row">
            <button className="loc-btn" onClick={handleLocation}>
              ➤ Use my location
            </button>

            <input
              className="search-input"
              placeholder="Or enter a city, pincode or address"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleFindNearest();
              }}
            />

            <button className="find-btn" onClick={handleFindNearest}>
              🔍 Find nearest
            </button>
          </div>

          <div className="or">OR</div>

          <div className="search-title" style={{ fontSize: 16 }}>
            🔍 Search by branch name or code
          </div>

          <input
            className="search-input"
            placeholder="e.g. Bhiwandi, BHW, Gurgaon"
            value={query}
            onChange={(e) => handleBranchSearch(e.target.value)}
          />
        </div>

        {filteredRegions.length === 0 ? (
          <div className="no-result">No branch found for this search.</div>
        ) : (
          filteredRegions.map((region) => (
            <div className="region" key={region.region}>
              <div className="region-head">
                <span>📍 {region.region}</span>
                <span className="count">{region.items.length} Locations</span>
              </div>

              <div className="branch-grid">
                {region.items.map((branch) => (
                  <div className="branch-card" key={`${region.region}-${branch.name}`}>
                    <div className="branch-code">{branch.code}</div>

                    <div className="branch-name">{branch.name}</div>

                    <p className="branch-info">📍 {branch.address}</p>
                    <p className="branch-info">➤ {branch.area}</p>

                    {branch.phones.length > 0 && (
                      <div className="phones">
                        {branch.phones.map((phone) => (
                          <span className="phone" key={phone}>
                            📞 {phone}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className="map-link" onClick={() => openMap(branch)}>
                      🗺 View on Google Maps ↗
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HeroBranch;