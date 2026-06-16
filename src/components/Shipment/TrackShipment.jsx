import React, { useState } from "react";

const Shipment = () => {
  const [grNumber, setGrNumber] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();

    if (!grNumber.trim()) {
      setError("Please enter your GR number.");
      return;
    }

    if (!captchaChecked) {
      setError("Please verify that you are not a robot.");
      return;
    }

    setError("");
    alert(`Tracking shipment: ${grNumber}`);
  };

  return (
    <main className="shipment-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .shipment-page {
          min-height: 100vh;
          background: #f7f8fb;
          font-family: 'Montserrat', Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .shipment-hero {
          min-height: 575px;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.09) 0 2px, transparent 3px),
            linear-gradient(135deg, #1d3764 0%, #365d95 100%);
          background-size: 70px 70px, cover;
          padding: 58px 20px 62px;
          text-align: center;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shipment-inner {
          width: 100%;
        }

        .brand {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin-bottom: 34px;
        }

        .brand-mark {
          background: #ffc400;
          color: #111;
          padding: 5px 15px;
          font-size: 28px;
          font-weight: 900;
          font-style: italic;
          transform: skew(-12deg);
        }

        .brand-name {
          font-size: 25px;
          font-weight: 800;
        }

        .shipment-title {
          font-size: 38px;
          font-weight: 800;
          margin: 0 0 14px;
        }

        .shipment-subtitle {
          font-size: 17px;
          color: rgba(255,255,255,.78);
          margin: 0 0 36px;
        }

        .track-card {
          max-width: 790px;
          margin: 0 auto;
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 25px 60px rgba(0,0,0,.2);
        }

        .track-form {
          display: grid;
          grid-template-columns: 1fr 125px;
          gap: 12px;
          margin-bottom: 22px;
        }

        .input-wrap {
          position: relative;
        }

        .truck-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #8b95a7;
          font-size: 20px;
        }

        .track-input {
          width: 100%;
          height: 58px;
          border: 1px solid #b8c2d6;
          border-radius: 12px;
          padding: 0 18px 0 54px;
          font-size: 16px;
          outline: none;
          font-family: inherit;
        }

        .track-input:focus {
          border-color: #263b96;
          box-shadow: 0 0 0 4px rgba(38,59,150,.12);
        }

        .track-btn {
          height: 58px;
          border: none;
          border-radius: 12px;
          background: #b98600;
          color: #fff;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s ease;
        }

        .track-btn:hover {
          background: #ffc400;
          color: #111;
          transform: translateY(-2px);
        }

        .fake-captcha {
          width: 340px;
          min-height: 82px;
          margin: 0 auto;
          border: 1px solid #d6d6d6;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          cursor: pointer;
          user-select: none;
        }

        .captcha-left {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #111;
          font-size: 15px;
        }

        .captcha-check {
          width: 31px;
          height: 31px;
          border: 2px solid #777;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #263b96;
          font-weight: 900;
        }

        .captcha-logo {
          font-size: 12px;
          color: #777;
          text-align: center;
          line-height: 1.2;
        }

        .error {
          color: #d92d20;
          font-size: 14px;
          font-weight: 600;
          margin-top: 15px;
        }

        .portal-section {
          padding: 28px 20px 45px;
        }

        .portal-card {
          max-width: 850px;
          margin: 0 auto;
          background: linear-gradient(135deg, #f4f7ff, #fffaf0);
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 22px;
          box-shadow: 0 14px 35px rgba(0,0,0,.05);
        }

        .portal-text {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #26364b;
          font-size: 15px;
          font-weight: 500;
        }

        .portal-btn {
          background: #2d528c;
          color: #fff;
          border: none;
          border-radius: 8px;
          height: 48px;
          padding: 0 24px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s ease;
        }

        .portal-btn:hover {
          background: #263b96;
          transform: translateY(-2px);
        }

        .shipment-footer {
          text-align: center;
          color: #97a1b3;
          font-size: 14px;
          padding-bottom: 35px;
        }

        .shipment-footer strong {
          color: #2d528c;
          display: block;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .shipment-hero {
            min-height: auto;
            padding: 42px 18px 48px;
          }

          .brand-mark {
            font-size: 22px;
          }

          .brand-name {
            font-size: 21px;
          }

          .shipment-title {
            font-size: 28px;
          }

          .shipment-subtitle {
            font-size: 16px;
            line-height: 1.5;
          }

          .track-card {
            padding: 18px;
          }

          .track-form {
            grid-template-columns: 1fr;
          }

          .track-input,
          .track-btn {
            height: 52px;
          }

          .fake-captcha {
            width: 100%;
          }

          .portal-card {
            flex-direction: column;
            text-align: center;
          }

          .portal-text {
            flex-direction: column;
            line-height: 1.5;
          }

          .portal-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="shipment-hero">
        <div className="shipment-inner">
          <div className="brand">
            <div className="brand-mark">ASIA</div>
            <div className="brand-name">Master</div>
          </div>

          <h1 className="shipment-title">Track Your Shipment</h1>
          <p className="shipment-subtitle">
            Enter your GR number to get real-time shipment updates
          </p>

          <div className="track-card">
            <form className="track-form" onSubmit={handleTrack}>
              <div className="input-wrap">
                <span className="truck-icon">▣</span>
                <input
                  className="track-input"
                  type="text"
                  placeholder="Enter your GR number"
                  value={grNumber}
                  onChange={(e) => {
                    setGrNumber(e.target.value);
                    setError("");
                  }}
                />
              </div>

              <button className="track-btn" type="submit">
                Track
              </button>
            </form>

            <div
              className="fake-captcha"
              onClick={() => {
                setCaptchaChecked(!captchaChecked);
                setError("");
              }}
            >
              <div className="captcha-left">
                <div className="captcha-check">
                  {captchaChecked ? "✓" : ""}
                </div>
                <span>I'm not a robot</span>
              </div>

              <div className="captcha-logo">
                ↻
                <br />
                reCAPTCHA
              </div>
            </div>

            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-card">
          <div className="portal-text">
            <span style={{ fontSize: 24 }}>▭</span>
            <span>View all your GRs, invoices & payment details in one place</span>
          </div>

          <button
            className="portal-btn"
            onClick={() => window.open("https://abcportal.app", "_blank")}
          >
            Open Customer Portal ↗
          </button>
        </div>
      </section>

      <footer className="shipment-footer">
        <strong>asiamaster.co.in</strong>
        Asia Master © 2026
      </footer>
    </main>
  );
};

export default Shipment;