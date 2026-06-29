import React from 'react'
import bookimage from '../assets/heroimagenew.webp'
import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#C89B3C',
  goldLight: 'rgb(105, 154, 196)',
  white: '#fff',
  textDark: '#111',
  textBody: 'rgba(13,13,13,1)',
  background: '#fff',
  cardShadow: '0px 1px 2px -1px rgba(0,0,0,0.10), 0px 1px 3px 0px rgba(0,0,0,0.10)',
  buttonShadow: '0px 2px 8px rgba(85,134,176,0.06)',
  buttonShadowHover: '0px 3px 11px rgba(85,134,176,0.16)'
};

// ---- END COLOR PALETTE ----

const learnings = [
  "Learn how to create steady, long-term cash flow through strategic real estate investments.",
  "Combine residential, commercial, and co-investment opportunities for sustainable growth.",
  "Use trusts, foundations, and holding companies to preserve and protect family wealth.",
  "Reduce risk and enhance returns through smart diversification strategies.",
  "Prepare the next generation to lead with clear governance, values, and family charters.",
  "Align your property portfolio with ethical, responsible, and future-ready principles.",
  "Gain tools to handle market shifts, protect assets, and sustain portfolio performance.",
  "Access ready-to-use templates, dashboards, and KPIs for confident decision-making."
];

// White checkmark SVG for complete color reliability
const WhiteCheck = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 10.5L9 14.5L15 7.5"
      stroke={COLORS.white}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Inter:wght@400;700&display=swap');
.seven-section {
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  background: ${COLORS.background};
  min-height: 860px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.seven-container {
  width: 1440px;
  min-height: 860px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.seven-header {
  width: 100%;
  text-align: center;
  margin-top: 58px;
  margin-bottom: 38px;
}
.seven-heading {
  font-family: 'Tinos', serif;
  font-weight: 700;
  font-size: 53px;
  line-height: 60px;
  color: ${COLORS.textDark};
  margin-bottom: 0px;
}
.seven-highlight {
  color: #C89B3C;
  display: block;
  font-family: 'Tinos', serif;
  font-weight: 700;
  font-size: 53px;
}
.seven-content-row {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 18px;
}
.seven-card-list {
  margin-top:40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 540px;
  margin-left: 0;
  background: transparent;
  max-height: 450px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  padding-right: 12px;
}
.seven-card-list::-webkit-scrollbar {
  display: none;
}
.seven-learn-card {
  width: 580px;
  height: 84px;
  background: ${COLORS.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: ${COLORS.cardShadow};
  position: relative;
  padding: 28px 3px;
}
.seven-card-icon {
  width: 20px;
  height: 20px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  background: ${COLORS.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  margin-right: 24px;
}
.seven-card-text {
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  color: ${COLORS.textBody};
  line-height: 26px;
  letter-spacing: 0;
  font-weight: 400;
  text-align: left;
  width: 392px;
  height: 52px;
  display: flex;
  align-items: center;
}
.seven-book-col {
  width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 620px;
  margin-top: 8px;
  position: relative;
}
.seven-book-bg {
  position: absolute;
  left: 50%;
  top: 63px;
  transform: translateX(-50%);
  width: 410px;
  height: 480px;
  background: ${COLORS.goldLight};
  filter: blur(53px);
  opacity: 0.75;
  border-radius: 40px;
  z-index: 1;
  pointer-events: none;
}
.seven-book-img {
  width: 698px;
  max-width: 144%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  margin-top:74px;
  z-index: 2;
  position: relative;
}

/* --- CTA BUTTON STYLING --- */
.seven-cta-btn {
  width: 340px;
  height: 55px;
  background: ${COLORS.gold};
  border: none;
  border-radius: 8px;
  margin: 88px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: filter 0.18s;
  filter: drop-shadow(${COLORS.buttonShadow});
  margin-bottom:25px;
}
.seven-cta-btn:hover {
  filter: brightness(0.98) drop-shadow(${COLORS.buttonShadowHover});
}
.seven-cta-btn-text {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.44px;
  color: ${COLORS.white};
  padding-left: 6px;
  display: inline-flex;
  align-items: center;
  width: 263px;
  height: 28px;
  justify-content: center;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .seven-section {
    min-height: auto !important;
    padding: 0 !important;
  }
  .seven-container {
    width: 100vw !important;
    min-height: auto !important;
    padding: 0 15px !important;
  }
  .seven-header {
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  .seven-heading {
    font-size: 2rem !important;
    line-height: 1.2 !important;
    padding: 0 10px !important;
  }
  .seven-highlight {
    font-size: 2rem !important;
    line-height: 1.2 !important;
  }
  .seven-content-row {
    flex-direction: column !important;
    align-items: center !important;
    gap: 30px !important;
    margin-top: 0 !important;
    max-width: 100vw !important;
  }
  .seven-card-list {
    width: 100% !important;
    max-width: 95vw !important;
    margin-top: 20px !important;
    max-height: 400px !important;
    gap: 12px !important;
    order: 2 !important;
  }
  .seven-learn-card {
    width: 100% !important;
    height: auto !important;
    min-height: 70px !important;
    padding: 15px 10px !important;
    margin: 0 auto !important;
  }
  .seven-card-icon {
    width: 22px !important;
    height: 22px !important;
    min-width: 32px !important;
    min-height: 32px !important;
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  .seven-card-text {
    width: auto !important;
    flex: 1 !important;
    font-size: 16px !important;
    line-height: 1.4 !important;
    height: auto !important;
    min-height: 40px !important;
  }
  .seven-book-col {
    width: 100% !important;
    height: auto !important;
    margin-top: 0 !important;
    order: 1 !important;
  }
  .seven-book-bg {
    width: 250px !important;
    height: 300px !important;
    top: 40px !important;
    filter: blur(30px) !important;
  }
  .seven-book-img {
    width: 280px !important;
    max-width: 100% !important;
    margin-top: 40px !important;
  }
  .seven-cta-btn {
    width: 90vw !important;
    max-width: 300px !important;
    height: 48px !important;
    margin: 40px auto 20px auto !important;
  }
  .seven-cta-btn-text {
    font-size: 18px !important;
    width: auto !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .seven-heading {
    font-size: 1.6rem !important;
  }
  .seven-highlight {
    font-size: 1.8rem !important;
  }
  .seven-card-text {
    font-size: 15px !important;
  }
  .seven-learn-card {
    min-height: 65px !important;
    padding: 12px 8px !important;
  }
  .seven-card-icon {
    width: 20px !important;
    height: 20px !important;
    min-width: 30px !important;
    min-height: 30px !important;
    margin-left: 12px !important;
    margin-right: 12px !important;
  }
  .seven-book-img {
    width: 240px !important;
    margin-top: 30px !important;
  }
  .seven-book-bg {
    width: 200px !important;
    height: 250px !important;
    top: 30px !important;
  }
  .seven-cta-btn {
    height: 44px !important;
    margin: 30px auto 15px auto !important;
  }
  .seven-cta-btn-text {
    font-size: 16px !important;
  }
}

/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  .seven-section {
    min-height: 860px !important;
    padding: 0 !important;
  }
  .seven-container {
    width: 1440px !important;
    min-height: 860px !important;
    padding: 0 !important;
  }
  .seven-header {
    margin-top: 58px !important;
    margin-bottom: 38px !important;
  }
  .seven-heading {
    font-size: 53px !important;
    line-height: 60px !important;
  }
  .seven-highlight {
    font-size: 53px !important;
  }
  .seven-content-row {
    flex-direction: row !important;
    max-width: 1200px !important;
    margin-top: 18px !important;
    gap: 0 !important;
  }
  .seven-card-list {
    width: 540px !important;
    margin-top: 40px !important;
    max-height: 477px !important;
    gap: 18px !important;
    order: 0 !important;
  }
  .seven-learn-card {
    width: 540px !important;
    height: 84px !important;
    padding: 28px 3px !important;
  }
  .seven-card-icon {
    width: 20px !important;
    height: 20px !important;
    margin-left: 32px !important;
    margin-right: 24px !important;
  }
  .seven-card-text {
    width: 410px !important;
    height: 52px !important;
    font-size: 19px !important;
    line-height: 26px !important;
  }
  .seven-book-col {
    width: 600px !important;
    height: 520px !important;
    margin-top: 8px !important;
    order: 0 !important;
  }
  .seven-book-bg {
    width: 410px !important;
    height: 480px !important;
    top: 63px !important;
    filter: blur(53px) !important;
  }
  .seven-book-img {
    width: 450px !important;
    max-width: 144% !important;
    margin-top: 14px !important;
  }
  .seven-cta-btn {
    width: 340px !important;
    height: 55px !important;
    margin: 88px auto 25px auto !important;
  }
  .seven-cta-btn-text {
    font-size: 22px !important;
    width: 263px !important;
    height: 28px !important;
  }
}
`;

const LearningSection = () =>{
      const ref = sessionStorage.getItem("reference") || "direct";

return (
  <div className="seven-section">
    <style>{styles}</style>
    <div className="seven-container">
      <div className="seven-header">
        <div className="seven-heading">
          What You will Learn in
          <br />
          <span className="seven-highlight">
            Family Office Real Estate Simplified book?
          </span>
        </div>
      </div>
      <div className="seven-content-row">
        <div className="seven-card-list">
          {learnings.map((item, idx) => (
            <div className="seven-learn-card" key={idx}>
              <div className="seven-card-icon">
                <WhiteCheck />
              </div>
              <div className="seven-card-text">{item}</div>
            </div>
          ))}
        </div>
        <div className="seven-book-col">
          {/* Yellow glow background */}
          <div style={{
            position: 'absolute',
            width: '350px',
            height: '400px',
            background: 'rgba(200, 155, 60, 0.4)',
            filter: 'blur(80px)',
            borderRadius: '50%',
            zIndex: 0,
          }} />
          <img loading="lazy" className="seven-book-img" src={bookimage} alt="Dubai Rental Wealth Simplified Book" />
        </div>
      </div>
      {/* --- BUTTON ADDED BELOW --- */}
      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-12 lg:my-12">
        {/* Hardcopy Button */}
        {/* Hardcopy Button */}
          <button
             onClick={() =>
              (window.location.href = `/books/fore/checkout?type=hardcopy&reference=${ref}`)
            }
            className="flex items-center justify-center gap-2 rounded-lg bg-[#C89B3C] 
      px-6 py-3 text-white font-medium
      text-[18px] hover:bg-[#5a4311] transition-colors duration-200
      max-[768px]:w-[90vw] max-[768px]:max-w-[320px] max-[768px]:h-[52px] max-[768px]:text-[16px]"
          >
            📚 Get Your Hard Copy Now
          </button>

          {/* eBook Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/fore/checkout?type=ebook&reference=${ref}`)
            }
            className="flex items-center justify-center gap-2 rounded-lg bg-white 
      px-6 py-3 text-[#C89B3C] border border-[#C89B3C] font-medium
      text-[16px] hover:bg-[#C89B3C] hover:text-black transition-colors duration-200
      max-[768px]:w-[90vw] max-[768px]:max-w-[320px] max-[768px]:h-[52px] max-[768px]:text-[16px]"
          >
            
            <span>📥 Get Your Digital Copy Now</span>
          </button>
      </div>
    </div>
  </div>
);
}
export default LearningSection;