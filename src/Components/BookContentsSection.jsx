import React from 'react'
import bookimage from '../assets/bookimage3.png'
import frame from "../assets/Frame2.webp"
import { BookOpen, Play } from 'lucide-react';
import bgImage from "../assets/bgimg.png"
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: 'rgb(85, 134, 176)',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  white: '#fff',
  textDark: '#111',
  textHeading: '#232323',
  background: '#FAF9F6',
  iconBg: 'rgba(85, 134, 176, 0.1)',
  cardShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)'
};

// ---- END COLOR PALETTE ----

const featureCards = [
  {
    icon: (
      <span className="book-contents-feature-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill={COLORS.iconBg} />
          <path d="M11 29V16L20 11L29 16V29H11Z" stroke={COLORS.gold} strokeWidth="2" fill="none" />
          <rect x="16" y="22" width="8" height="7" rx="1.8" stroke={COLORS.gold} strokeWidth="1.5" fill="none" />
        </svg>
      </span>
    ),
    heading: "Dubai Real Estate Market",
    list: [
      "Understanding Dubai's Property Landscape",
      "Market Trends and Future Outlook",
      "Investment Hotspots and Emerging Areas",
      "Regulatory Environment Overview"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill={COLORS.iconBg} />
          <circle cx="20" cy="20" r="10" stroke={COLORS.gold} strokeWidth="2" />
          <path d="M17 22c0 1.104 1.343 2 3 2s3-.896 3-2c0-.735-.884-1.413-2.197-1.802C18.596 19.86 17 19.02 17 18c0-1.104 1.343-2 3-2s3 .896 3 2" stroke={COLORS.gold} strokeWidth="1.8" />
          <circle cx="20" cy="15" r="1.2" fill={COLORS.gold} />
        </svg>
      </span>
    ),
    heading: "Maximising Returns",
    list: [
      "Rental Yield Optimization Strategies",
      "Capital Appreciation Techniques",
      "Tax-Free Income Structuring",
      "Portfolio Diversification Methods"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill={COLORS.iconBg} />
          <path d="M15 28V15a5 5 0 0 1 10 0v13M12 28h16" stroke={COLORS.gold} strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
    heading: "Legal Framework",
    list: [
      "Foreign Ownership Rights",
      "Property Registration Process",
      "Tenancy Laws and Regulations",
      "Dispute Resolution Mechanisms"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill={COLORS.iconBg} />
          <circle cx="20" cy="17" r="5" stroke={COLORS.gold} strokeWidth="2" />
          <path d="M20 22v6M23 28h-6" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    ),
    heading: "Finding the Right Property",
    list: [
      "Location Analysis and Selection",
      "Property Types and Investment Potential",
      "Due Diligence Checklist",
      "Negotiation Strategies"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill={COLORS.iconBg} />
          <rect x="12" y="18" width="16" height="4" rx="2" stroke={COLORS.gold} strokeWidth="2" />
          <rect x="17" y="22" width="6" height="6" rx="1.2" stroke={COLORS.gold} strokeWidth="2" />
        </svg>
      </span>
    ),
    heading: "Managing Property Remotely",
    list: [
      "Property Management Solutions",
      "Technology Tools for Remote Investors",
      "Tenant Screening and Retention",
      "Maintenance and Upkeep Systems"
    ]
  }
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.book-contents-section {
  width: 100vw;
  background: ${COLORS.background};
  min-height: 100vh;
  padding: 0;
  overflow-x: hidden;
}
.book-contents-container {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.book-contents-heading {
  font-family: 'Tinos', serif;
  font-size: 48px;
  font-weight: 700;
  color: ${COLORS.textDark};
  letter-spacing: 0;
  line-height: 48px;
  text-align: center;
  margin: 58px 0 14px 0;
  width: 1050px;
}
.book-contents-heading .gold {
  color: ${COLORS.gold};
}
.book-contents-center-img-block {
  width: 585px;
  height: 591px;
  position: absolute;
  left: 50%;
  top: 23%;
  transform: translate(-50%, 0);
  z-index: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 294px;
}
.book-contents-center-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
  box-shadow: none;
  background: none;
  display: block;
  margin: 0 auto;
}
.book-contents-feature-grid {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 390px 1fr 390px;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px;
  position: relative;
  z-index: 2;
}

.book-contents-feature-card {
  background: ${COLORS.white};
  border-radius: 16px;
  box-shadow: ${COLORS.cardShadow};
  padding: 25px 25px 1px 25px;
  border-top: 1px solid ${COLORS.goldLight};
  border: 1px solid ${COLORS.white};
  min-width: 380px;
  max-width: 410px;
  min-height: 213px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 16px;
}

/* Connecting lines and dots: only show on desktop, hide on mobile */
.book-contents-feature-card::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${COLORS.gold};
  border-radius: 50%;
  z-index: 10;
}
.book-contents-feature-card::before {
  content: '';
  position: absolute;
  height: 2px;
  background: ${COLORS.gold};
  z-index: 5;
}

/* Card 1 - Top Left - Line to right to book */
.book-contents-feature-card:nth-child(1)::before {
  top: 74%;
  left: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(1)::after {
  top: 74%;
  right: -10px;
  transform: translate(-30%, -50%);
}

/* Card 2 - Top Right - Line to left to book */
.book-contents-feature-card:nth-child(2)::before {
  top: 74%;
  right: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(2)::after {
  top: 74%;
  left: -10px;
  transform: translate(-1%, -50%);
}

/* Card 3 - Middle Left - Line to right to book */
.book-contents-feature-card:nth-child(3)::before {
  top: 50%;
  left: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(3)::after {
  top: 50%;
  right: -10px;
  transform: translate(-28%, -50%);
}

/* Card 4 - Middle Right - Line to left to book */
.book-contents-feature-card:nth-child(4)::before {
  top: 50%;
  right: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(4)::after {
  top: 50%;
  left: -10px;
  transform: translate(12%, -50%);
}

/* Card 5 - Bottom Center - Line to bottom of book */
.book-contents-feature-card:nth-child(5)::before {
  bottom: 100%;
  left: 50%;
  width: 2px;
  height: 223px;
  transform: translateX(-50%);
}
.book-contents-feature-card:nth-child(5)::after {
  top: -10px;
  left: 50%;
  transform: translate(-50%, 21%);
}

.book-contents-feature-icon {
  width: 56px;
  height: 56px;
  background: ${COLORS.iconBg};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.book-contents-feature-heading {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.textHeading};
  margin: 0 0 5px 0;
  width: 204px;
  line-height: 28px;
  height: 28px;
  letter-spacing: 0;
}
.book-contents-feature-list {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  color: ${COLORS.textHeading};
  margin-top: 8px;
  width: 330px;
  line-height: 26px;
  letter-spacing: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding-left: 0;
}
.book-contents-feature-list li::before {
  content: '•';
  color: ${COLORS.gold};
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
  vertical-align: middle;
}
.book-contents-feature-list li {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 0;
  margin: 0;
}
.book-contents-feature-grid > .book-contents-feature-card {
  margin: 50px 0 50px 0;
}

/* Mobile Responsive Styles */
@media (max-width: 900px) {
  .book-contents-section {
    width: 100%;
    padding: 60px 0 40px 0;
    min-height: auto;
    overflow-x: hidden;
  }
  .book-contents-center-img-block {
    display: none !important;
  }
  
  .book-contents-container {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  
  .book-contents-heading {
    font-size: 32px;
    line-height: 38px;
    width: 100%;
    max-width: 320px;
    margin: 0;
    text-align: center;
    order: 1;
  }
  
  .book-contents-feature-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    order: 3;
  }
  
  .book-contents-feature-card {
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
    padding: 24px 20px;
    margin: 0 !important;
    gap: 16px;
    border: 1px solid ${COLORS.goldLight};
  }
  
  .book-contents-feature-heading {
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    height: auto;
    margin-bottom: 8px;
  }
  
  .book-contents-feature-list {
    width: 100%;
    font-size: 15px;
    line-height: 22px;
    gap: 8px;
    margin-top: 0;
  }
  
  .book-contents-feature-list li {
    font-size: 15px;
    line-height: 22px;
  }
  
  .book-contents-feature-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 4px;
  }
  
  .book-contents-feature-icon svg {
    width: 32px;
    height: 32px;
  }
  
  /* Hide connecting lines on mobile */
  .book-contents-feature-card::before,
  .book-contents-feature-card::after {
    display: none !important;
  }
}

/* Remaining mobile and smaller device styles unchanged */

@media (max-width: 480px) {
  .book-contents-section {
    padding: 40px 0 30px 0;
  }
  
  .book-contents-container {
    padding: 0 16px;
    gap: 32px;
  }
  
  .book-contents-heading {
    font-size: 28px;
    line-height: 34px;
    max-width: 280px;
  }
  
  .book-contents-feature-grid {
    gap: 20px;
    max-width: 100%;
  }
  
  .book-contents-feature-card {
    padding: 20px 16px;
    gap: 14px;
  }
  
  .book-contents-feature-heading {
    font-size: 17px;
    line-height: 22px;
  }
  
  .book-contents-feature-list {
    font-size: 14px;
    line-height: 20px;
    gap: 6px;
  }
  
  .book-contents-feature-list li {
    font-size: 14px;
    line-height: 20px;
  }
  
  .book-contents-feature-list li::before {
    font-size: 16px;
    margin-right: 6px;
  }
  
  .book-contents-feature-icon {
    width: 44px;
    height: 44px;
  }
  
  .book-contents-feature-icon svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 360px) {
  .book-contents-heading {
    font-size: 26px;
    line-height: 32px;
    max-width: 260px;
  }
  
  .book-contents-feature-card {
    padding: 18px 14px;
  }
  
  .book-contents-feature-heading {
    font-size: 16px;
  }
  
  .book-contents-feature-list {
    font-size: 13px;
    line-height: 19px;
  }
  
  .book-contents-feature-list li {
    font-size: 13px;
    line-height: 19px;
  }
}
`;

export default function BookContentsSection() {
    const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="book-contents-section">
      {/* <img loading="lazy"  src={frame} alt="" className='my-12 lg:my-0'/> */}
      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-24">
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

     <section
  className="relative text-center py-16 sm:py-20 px-4 sm:px-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#101828] bg-opacity-70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-white">
    
    <h2 className="text-[#F2C94C] text-sm sm:text-[33px] font-semibold mb-3 sm:mb-4">
      Start Building Generational Wealth Today
    </h2>

    <p className="text-[16px] sm:text-[18px] md:text-[23px] text-[#D1D5DC] leading-relaxed mb-6 sm:mb-8 px-1">
      Real estate is more than an investment; it's a foundation for generational
      stability. Empower your family office or personal wealth journey with the
      proven principles from{" "}
      <span className="text-white font-semibold">
        Family Office Real Estate Simplified
      </span>.
    </p>

    {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {/* Hardcopy Button */}
            <button
                onClick={() =>
              (window.location.href = `/books/fore/checkout?type=hardcopy&reference=${ref}`)
            }
              className="flex items-center justify-center gap-2 rounded-lg bg-[#C89B3C] px-6 py-3 text-white font-medium text-[18px] hover:bg-[#5a4311]"
            >
              📚 Get Your Hard Copy Now
            </button>

            {/* eBook Button */}
            <button
               onClick={() =>
              (window.location.href = `/books/fore/checkout?type=ebook&reference=${ref}`)
            }
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[#C89B3C] border border-[#C89B3C] font-medium text-[18px] hover:bg-[#C89B3C] hover:text-black transition-colors duration-200"
            >
             
              <span>📥 Get Your Digital Copy Now</span>
            </button>
          </div>

    {/* Location */}
    <p className="text-[13px] lg:text-[18px] lg:mt-5 sm:text-sm text-gray-300 flex flex-wrap justify-center items-center gap-2">
      Available in India
      <svg width="20" height="14" viewBox="0 0 640 480">
        <path fill="#f93" d="M0 0h640v160H0z"/>
        <path fill="#fff" d="M0 160h640v160H0z"/>
        <path fill="#128807" d="M0 320h640v160H0z"/>
        <circle cx="320" cy="240" r="55" fill="#000080"/>
        <circle cx="320" cy="240" r="50" fill="none" stroke="#fff" strokeWidth="5"/>
      </svg>

      and UAE
      <svg width="20" height="14" viewBox="0 0 640 480">
        <path fill="#00732f" d="M0 0h213v480H0z"/>
        <path fill="#fff" d="M213 0h427v160H213z"/>
        <path fill="#000" d="M213 320h427v160H213z"/>
        <path fill="#ce1126" d="M213 160h427v160H213z"/>
      </svg>

      <span className="hidden sm:inline">|</span>
      <span>Physical & Digital Formats</span>
    </p>

  </div>
</section>

    </div>
  );
}
 