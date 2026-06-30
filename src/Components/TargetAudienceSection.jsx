import React from "react";
import container from '../assets/container.png';
import { redirectWithRef } from "../utils/redirectWithRef";
import { Landmark } from "lucide-react";

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#C89B3C',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  goldLighter: 'rgba(85, 134, 176, 0.05)',
  goldBorder: 'rgba(85, 134, 176, 0.2)',
  white: '#fff',
  textDark: '#111',
  textHeading: '#232323',
  textBody: '#444',
  textFeatures: '#222',
  textNote: 'rgb(85, 134, 176)',
  background: '#FAF9F6',
  cardShadow: '0px 8px 20px rgba(0,0,0,0.10)',
  iconBg: 'rgba(85, 134, 176, 0.1)'
};

// ---- END COLOR PALETTE ----

const BENEFIT_CARDS = [
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Graduation Cap SVG in larger gold icon, squared bg */}

        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1797_5337)">
            <path d="M14.0625 7.5C14.3111 7.5 14.5496 7.59877 14.7254 7.77459C14.9012 7.9504 15 8.18886 15 8.4375V13.125H19.6875C19.9361 13.125 20.1746 13.2238 20.3504 13.3996C20.5262 13.5754 20.625 13.8139 20.625 14.0625C20.625 14.3111 20.5262 14.5496 20.3504 14.7254C20.1746 14.9012 19.9361 15 19.6875 15H15V19.6875C15 19.9361 14.9012 20.1746 14.7254 20.3504C14.5496 20.5262 14.3111 20.625 14.0625 20.625C13.8139 20.625 13.5754 20.5262 13.3996 20.3504C13.2238 20.1746 13.125 19.9361 13.125 19.6875V15H8.4375C8.18886 15 7.9504 14.9012 7.77459 14.7254C7.59877 14.5496 7.5 14.3111 7.5 14.0625C7.5 13.8139 7.59877 13.5754 7.77459 13.3996C7.9504 13.2238 8.18886 13.125 8.4375 13.125H13.125V8.4375C13.125 8.18886 13.2238 7.9504 13.3996 7.77459C13.5754 7.59877 13.8139 7.5 14.0625 7.5Z" fill="#C89B3C" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.9995C0 7.79953 0 5.69953 0.8175 4.08703C1.54002 2.6762 2.68792 1.5283 4.09875 0.805781C5.70375 -0.0117187 7.81125 -0.0117188 12.0112 -0.0117188H16.1362C20.3362 -0.0117188 22.4362 -0.0117187 24.0487 0.805781C25.4606 1.52391 26.5987 2.67141 27.33 4.08703C28.1475 5.69203 28.1475 7.79953 28.1475 11.9995V16.1245C28.1475 20.3245 28.1475 22.4245 27.33 24.037C26.6075 25.4479 25.4596 26.5958 24.0487 27.3183C22.4437 28.1358 20.3362 28.1358 16.1362 28.1358H12.0112C7.81125 28.1358 5.71125 28.1358 4.09875 27.3183C2.68792 26.5958 1.54002 25.4479 0.8175 24.037C0 22.432 0 20.3245 0 16.1245V11.9995ZM12 1.87453H16.125C18.2625 1.87453 19.7437 1.87453 20.9062 1.97016C22.0406 2.06391 22.6931 2.23641 23.1937 2.48766C24.2496 3.02885 25.1088 3.88804 25.65 4.94391C25.9012 5.43703 26.0737 6.08953 26.1675 7.23141C26.2612 8.38828 26.2631 9.87515 26.2631 12.0127V16.1377C26.2631 18.2752 26.2631 19.7564 26.1675 20.9189C26.0737 22.0533 25.9012 22.7058 25.65 23.2064C25.1109 24.2638 24.2511 25.1235 23.1937 25.6627C22.7006 25.9139 22.0481 26.0864 20.9062 26.1802C19.7494 26.2739 18.2625 26.2758 16.125 26.2758H12C9.8625 26.2758 8.38125 26.2758 7.21875 26.182C6.08437 26.0883 5.43187 25.9139 4.93125 25.6627C3.87387 25.1235 3.01411 24.2638 2.475 23.2064C2.22375 22.7133 2.05125 22.0627 1.9575 20.9189C1.86375 19.762 1.86187 18.2752 1.86187 16.1377V12.0127C1.86187 9.87515 1.86187 8.3939 1.9575 7.23141C2.05125 6.09703 2.22375 5.44453 2.475 4.94391C3.0162 3.88804 3.87539 3.02885 4.93125 2.48766C5.42437 2.23641 6.07687 2.06391 7.21875 1.97016C8.37562 1.87641 9.8625 1.87453 12 1.87453Z" fill="#C89B3C" />
          </g>
          <defs>
            <clipPath id="clip0_1797_5337">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </span>
    ),
    heading: "High-Net-Worth Individuals (HNWIs)",
    description: "Preserve and grow wealth through long-term real estate strategies.",
    points: [
      "Portfolio diversification",
      "Predictable income creation",
      "Legacy-focused investments",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg p-2">
        {/* Target/Bulls-eye */}

        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1797_5417)">
            <path d="M3.16797 2.16602H25.3346C28.3208 2.16602 29.8123 2.16602 30.7401 3.09385C31.668 4.02168 31.668 5.51318 31.668 8.49935V17.9994C31.668 20.9855 31.668 22.477 30.7401 23.4049C29.8123 24.3327 28.3208 24.3327 25.3346 24.3327H14.2513M15.8346 9.29102H25.3346M3.16797 25.916V19.5827C3.16797 18.0896 3.16797 17.3439 3.63189 16.8799C4.0958 16.416 4.84155 16.416 6.33464 16.416H9.5013M3.16797 25.916H9.5013M3.16797 25.916V33.8327M9.5013 16.416V25.916M9.5013 16.416H19.0013M9.5013 25.916V33.8327" stroke="#C89B3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.5013 9.29167C9.5013 10.1315 9.16767 10.937 8.57381 11.5308C7.97994 12.1247 7.17449 12.4583 6.33463 12.4583C5.49478 12.4583 4.68933 12.1247 4.09546 11.5308C3.5016 10.937 3.16797 10.1315 3.16797 9.29167C3.16797 8.45181 3.5016 7.64636 4.09546 7.05249C4.68933 6.45863 5.49478 6.125 6.33463 6.125C7.17449 6.125 7.97994 6.45863 8.57381 7.05249C9.16767 7.64636 9.5013 8.45181 9.5013 9.29167Z" stroke="#C89B3C" stroke-width="1.5" />
          </g>
          <defs>
            <clipPath id="clip0_1797_5417">
              <rect width="32" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </span>
    ),
    heading: "Family Office Executives",
    description: "Manage and optimise family property portfolios with clarity.",
    points: [
      "Governance and reporting frameworks",
      "Co-investment and fund structures",
      "Asset performance optimisation",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Laptop */}

        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9993 29.3327C23.3631 29.3327 29.3327 23.3631 29.3327 15.9993C29.3327 8.63555 23.3631 2.66602 15.9993 2.66602C8.63555 2.66602 2.66602 8.63555 2.66602 15.9993C2.66602 23.3631 8.63555 29.3327 15.9993 29.3327Z" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.0007 18.6673C17.4734 18.6673 18.6673 17.4734 18.6673 16.0007C18.6673 14.5279 17.4734 13.334 16.0007 13.334C14.5279 13.334 13.334 14.5279 13.334 16.0007C13.334 17.4734 14.5279 18.6673 16.0007 18.6673Z" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </span>
    ),
    heading: "Next-Generation Wealth Holders",
    description: "Learn how to responsibly manage and expand inherited wealth.",
    points: [
      "Succession planning",
      "Financial literacy for next-gen leaders",
      "Balancing growth with family values",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Document */}

        <Landmark className="text-[#C89B3C]"/>

      </span>
    ),
    heading: "Private Wealth Advisors & Estate Planners",
    description: "Guide clients with strategies that blend tax efficiency and legacy.",
    points: [
      "Structuring trusts and holdings",
      "Long-term wealth continuity",
      "Real estate planning for clients",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Globe */}

       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#D4AF37" d="M19 14.77v-7l-5.5-3.847L8 7.769v2.692H7V7.29l6.5-4.635L20 7.289v7.48zm-4.904-6.328h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm2 2h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm-5.692 8.212l7.565 2.207l5.989-1.85q-.03-.455-.272-.656q-.244-.201-.551-.201H14.39q-.634 0-1.15-.05t-1.055-.238l-2.19-.718l.338-.988l2.025.732q.482.183 1.096.22q.613.036 1.68.042q0-.468-.172-.756t-.493-.402l-5.754-2.112q-.057-.019-.106-.028t-.105-.01h-2.1zm-4 2.346v-8.154H8.48q.14 0 .288.032t.275.074l5.779 2.117q.537.204.924.733q.388.529.388 1.352h3q.904 0 1.384.565q.481.566.481 1.435v.615l-6.98 2.154l-7.616-2.22V21zm1-1h2v-6.154h-2z"/></svg>
      </span>
    ),
    heading: "Real Estate Investors & Developers",
    description: "Enhance professional investment strategies for multi-generational goals.",
    points: [
      "Market-driven property insights",
      "Partnership and co-investment models",
      "Development and value-add strategies",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Bars/Graph */}

        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 29.3327V5.33268C8 4.62544 8.28095 3.94716 8.78105 3.44706C9.28115 2.94697 9.95942 2.66602 10.6667 2.66602H21.3333C22.0406 2.66602 22.7189 2.94697 23.219 3.44706C23.719 3.94716 24 4.62544 24 5.33268V29.3327H8Z" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.0013 16H5.33464C4.62739 16 3.94911 16.281 3.44902 16.781C2.94892 17.2811 2.66797 17.9594 2.66797 18.6667V26.6667C2.66797 27.3739 2.94892 28.0522 3.44902 28.5523C3.94911 29.0524 4.62739 29.3333 5.33464 29.3333H8.0013" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24 12H26.6667C27.3739 12 28.0522 12.281 28.5523 12.781C29.0524 13.2811 29.3333 13.9594 29.3333 14.6667V26.6667C29.3333 27.3739 29.0524 28.0522 28.5523 28.5523C28.0522 29.0524 27.3739 29.3333 26.6667 29.3333H24" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.332 8H18.6654" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.334 13.334H18.6673" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.334 18.666H18.6673" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.332 24H18.6654" stroke="#C89B3C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </span>
    ),
    heading: "Academics & Wealth Management Students",
    description: "Gain deep insights into real estate’s role in family office ecosystems.",
    points: [
      "Real-world case studies",
      "Practical frameworks",
      "Research-based learning",
    ],
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Inter:wght@400;500;700&display=swap');
.dubai-section-main {
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 1531px;
  background: ${COLORS.background};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 0;
}
.dubai-section-container {
  width: 1439px;
  min-height: 1531px;
  background: ${COLORS.background};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 40px;
}
.dubai-title {
  width: 904px;
  margin: 0 auto 54px auto;
  font-family: 'Tinos', serif;
  font-size: 53px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  color: ${COLORS.textDark};
  letter-spacing: 0;
}
.dubai-title .gold {
  color: ${COLORS.gold};
}
.dubai-cards-grid {
  width: 1202px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 32px 32px;
  margin: 0 auto 44px auto;
  box-sizing: border-box;
}
.dubai-benefit-card {
  width: 585px;
  height: auto !important;       /* Allow full expansion */
  min-height: 280px;             /* Keep minimum height but allow growth */
  align-items: flex-start;       /* Keep top aligned */
  background: ${COLORS.white};
  border-radius: 16px;
  box-shadow: ${COLORS.cardShadow};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-left: 4px solid ${COLORS.gold};
  padding: 28px 34px 32px 36px;
  box-sizing: border-box;
  position: relative;
  gap: 24px;
  margin-bottom: 8px;
}
.dubai-benefit-icon-bg {
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  background: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  background: ${COLORS.iconBg};
}
.dubai-benefit-vert {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 78px);
}
.dubai-benefit-heading {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${COLORS.textHeading};
  margin-bottom: 5px;
  width: 440px;
  height: auto !important;
  letter-spacing: 0;
  line-height: 1.30;
  display: flex;
  align-items: flex-end;
  text-align: left;
}
.dubai-benefit-desc {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${COLORS.textBody};
  font-size: 18px;
  line-height: 26px;
  margin: 0 0 15px 0;
  width: 437px;
  height: 48px;
  display: block;
  text-align: left;
  overflow-wrap: break-word;
}
.dubai-benefit-features {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${COLORS.textFeatures};
  margin: 0;
  padding: 0 0 0 4px;
  list-style: none;
  width: 437px;
  min-height: 66px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
.dubai-benefit-features li {
  position: relative;
  padding-left: 20px;
  margin-bottom:0;
  line-height: 1.6;
  width: 437px;
  height: 28px;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${COLORS.textFeatures};
}
.dubai-benefit-features li:before {
  content: '';
  width: 8px;
  height: 8px;
  background: ${COLORS.gold};
  border-radius: 100%;
  left: 3px;
  top: 10px;
  position: absolute;
  display: block;
}
.dubai-note-card {
  background: linear-gradient(90deg, #000000 0%, #101828 100%);
  border-radius: 16px;
  padding: 33px 33px 20px 33px;
  width: 1202px;
  min-height: 98px;
  margin: 58px auto 0 auto;
  font-family: 'Inter', serif;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  color: white;
  font-size: 24px;
  letter-spacing: 0;
  border-top: 1px solid ${COLORS.goldBorder};
}
.dubai-cta-btn {
  width: 340px;
  height: 55px;
  background: ${COLORS.gold};
  border: none;
  border-radius: 8px;
  margin: 40px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: ${COLORS.white};
  line-height: 28px;
  letter-spacing: -0.44px;
  transition: filter 0.16s;
}
.dubai-cta-btn:hover {
  filter: brightness(0.98);
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .dubai-section-main {
    min-height: auto !important;
    padding: 0 !important;
  }
  .dubai-section-container {
    width: 100vw !important;
    min-height: auto !important;
    padding: 40px 15px 30px 15px !important;
  }
  .dubai-title {
    width: 95vw !important;
    font-size: 2rem !important;
    line-height: 1.2 !important;
    margin-bottom: 30px !important;
    padding: 0 10px !important;
  }
  .dubai-cards-grid {
    width: 100% !important;
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    margin-bottom: 30px !important;
  }
  .dubai-benefit-card {
    width: 100% !important;
    min-height: auto !important;
    padding: 20px 15px 25px 15px !important;
    margin-bottom: 0 !important;
    gap: 15px !important;
  }
  .dubai-benefit-icon-bg {
    width: 50px !important;
    height: 50px !important;
    min-width: 50px !important;
    min-height: 50px !important;
    margin-top: 0 !important;
  }
  .dubai-benefit-icon-bg svg {
    width: 28px !important;
    height: 28px !important;
  }
  .dubai-benefit-vert {
    width: calc(100% - 65px) !important;
  }
  .dubai-benefit-heading {
    font-size: 18px !important;
    width: 100% !important;
    height: auto !important;
    margin-bottom: 8px !important;
  }
  .dubai-benefit-desc {
    font-size: 16px !important;
    line-height: 1.4 !important;
    width: 100% !important;
    height: auto !important;
    margin-bottom: 12px !important;
  }
  .dubai-benefit-features {
    width: 100% !important;
    min-height: auto !important;
    font-size: 15px !important;
    gap: 4px !important;
  }
  .dubai-benefit-features li {
    width: 100% !important;
    height: auto !important;
    font-size: 15px !important;
    line-height: 1.4 !important;
    padding-left: 18px !important;
    margin-bottom: 4px !important;
  }
  .dubai-benefit-features li:before {
    top: 8px !important;
  }
  .dubai-note-card {
    width: 95vw !important;
    padding: 20px 15px 15px 15px !important;
    min-height: auto !important;
    margin: 30px auto 0 auto !important;
    font-size: 18px !important;
  }
  .dubai-cta-btn {
    width: 90vw !important;
    max-width: 300px !important;
    height: 48px !important;
    font-size: 18px !important;
    margin: 25px auto 0 auto !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .dubai-section-container {
    padding: 30px 10px 20px 10px !important;
  }
  .dubai-title {
    font-size: 1.8rem !important;
    margin-bottom: 25px !important;
  }
  .dubai-benefit-card {
    padding: 18px 12px 22px 12px !important;
    gap: 12px !important;
  }
  .dubai-benefit-icon-bg {
    width: 45px !important;
    height: 45px !important;
    min-width: 45px !important;
    min-height: 45px !important;
  }
  .dubai-benefit-icon-bg svg {
    width: 24px !important;
    height: 24px !important;
  }
  .dubai-benefit-heading {
    font-size: 17px !important;
  }
  .dubai-benefit-desc {
    font-size: 15px !important;
  }
  .dubai-benefit-features {
    font-size: 14px !important;
  }
  .dubai-benefit-features li {
    font-size: 14px !important;
  }
  .dubai-note-card {
    font-size: 16px !important;
    padding: 18px 12px 12px 12px !important;
  }
  .dubai-cta-btn {
    height: 44px !important;
    font-size: 16px !important;
  }
}

/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  .dubai-section-main {
    min-height: 1531px !important;
    padding: 0 !important;
  }
  .dubai-section-container {
    width: 1439px !important;
    min-height: 1531px !important;
    padding-top: 80px !important;
    padding-bottom: 40px !important;
  }
  .dubai-title {
    width: 904px !important;
    font-size: 53px !important;
    line-height: 60px !important;
    margin-bottom: 54px !important;
  }
  .dubai-cards-grid {
    width: 1202px !important;
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: repeat(3, 1fr) !important;
    gap: 32px 32px !important;
    margin-bottom: 44px !important;
  }
  .dubai-benefit-card {
    width: 585px !important;
    min-height: 265px !important;
    padding: 28px 34px 32px 36px !important;
    gap: 24px !important;
    margin-bottom: 8px !important;
  }
  .dubai-benefit-icon-bg {
    width: 64px !important;
    height: 64px !important;
    min-width: 64px !important;
    min-height: 64px !important;
    margin-top: 2px !important;
  }
  .dubai-benefit-icon-bg svg {
    width: 56px !important;
    height: 56px !important;
  }
  .dubai-benefit-vert {
    width: calc(100% - 78px) !important;
  }
  .dubai-benefit-heading {
    font-size: 22px !important;
    width: 440px !important;
    height: 28px !important;
    margin-bottom: 5px !important;
  }
  .dubai-benefit-desc {
    font-size: 18px !important;
    line-height: 26px !important;
    width: 437px !important;
    height: 48px !important;
    margin-bottom: 15px !important;
  }
  .dubai-benefit-features {
    font-size: 18px !important;
    width: 437px !important;
    min-height: 66px !important;
    gap: 6px !important;
  }
  .dubai-benefit-features li {
    width: 437px !important;
    height: 28px !important;
    font-size: 18px !important;
    line-height: 1.6 !important;
    padding-left: 20px !important;
    margin-bottom: 0 !important;
  }
  .dubai-benefit-features li:before {
    top: 10px !important;
  }
  .dubai-note-card {
    width: 1202px !important;
    padding: 33px 33px 1px 33px !important;
    min-height: 98px !important;
    margin: 58px auto 0 auto !important;
    font-size: 24px !important;
  }
  .dubai-cta-btn {
    width: 340px !important;
    height: 55px !important;
    font-size: 22px !important;
    margin: 40px auto 0 auto !important;
  }
}

@media (max-width: 1240px) {
  .dubai-cards-grid, .dubai-note-card {
    width: 98vw;
    min-width: 0;
    max-width: 102vw;
  }
  .dubai-section-container {
    padding-left: 2vw;
    padding-right: 2vw;
  }
}
@media (max-width: 900px) {
  .dubai-cards-grid {
    grid-template-columns: 1fr;
    gap: 26px;
    width: 94vw;
  }
  .dubai-benefit-card, .dubai-note-card {
    width: 98vw;
    min-width: 0;
    max-width: 400vw;
  }
}
`;

export default function TargetAudienceSection() {
        const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="dubai-section-main">
      <style>{styles}</style>
      <div className="dubai-section-container">
        <div className="dubai-title">
          Who is <span className="text-[#C89B3C]">Family Office Real Estate Simplified Book</span> For?
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BENEFIT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 bg-white rounded-2xl shadow-lg border-l-4 border-[#C89B3C] p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#F3EBDC] flex items-center justify-center">
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 leading-snug">
                  {card.heading}
                </h3>

                <p className="text-gray-600 text-[15px] sm:text-[20px] leading-relaxed mb-4">
                  {card.description}
                </p>

                <ul className="space-y-2  text-gray-700 text-[15px] sm:text-[20px]">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C89B3C] xl:mt-2 mt-1 text-lg leading-none">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
    
    mt-12
    max-w-7xl
    
  "
        >
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-2 mt-8 lg:mt-0">
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