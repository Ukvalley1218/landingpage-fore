import React from 'react'
import bookimage from '../assets/heroimagenew.webp'
import { MdMenuBook } from 'react-icons/md'
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#C89B3C',
  goldLight: '#C89B3C',
  goldGradient: 'linear-gradient(90deg,#C89B3C1A 10%, #C89B3C1A 5%)',
  white: '#fff',
  textDark: '#151515',
  textBody: 'rgba(13,13,13,1)',
  background: '#fff',
  buttonShadow: '0 3px 8px rgba(29,26,11,0.13)',
  featureShadow: '0 1px 4px rgba(0,0,0,0.04)'
};

// ---- END COLOR PALETTE ----

const featuresLeft = [
  "Transforms Complex Real Estate Concepts into Simple Strategies.",
  "Builds Predictable, Multi-Generational Wealth.",
  "Covers Every Aspect of Real Estate for Family Offices."
];

const featuresRight = [
  "Includes Practical Tools, Frameworks & Checklists.",
  "Aligns Wealth with Family Values & Legacy Goals.",
  "Trusted Insights from Global Family Office Experts."
];

const BookFeaturesSection = () => {
      const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="book-features-root" style={{
      background: COLORS.background,
      padding: "80px 0 60px 0",
      width: "100%",
      textAlign: "center"
    }}>
      <style>
        {`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .book-features-root { padding: 40px 0 30px 0 !important; }
          .bf-heading {
    font-size: 2rem !important;
    line-height: 1.3 !important;
    text-align: center !important;
    padding: 0 15px !important;
    margin-bottom: 16px !important;
  }
          .bf-subheading { font-size: 1rem !important; line-height: 1.4 !important; padding: 0 15px !important; margin-bottom: 2px !important; max-width: 95vw !important; }
          .bf-content-layout { flex-direction: column !important; gap: 2px !important; padding: 0 15px !important; }
          .bf-feature-column { align-items: center !important; width: 100% !important; }
          .bf-feature-box { width: 95vw !important; max-width: 400px !important; height: auto !important; min-height: 70px !important; padding: 15px 12px !important; font-size: 16px !important; line-height: 1.4 !important; margin-bottom: 12px !important; }
          .bf-feature-icon { width: 20px !important; height: 20px !important; min-width: 20px !important; min-height: 20px !important; font-size: 14px !important; margin-right: 12px !important; margin-left: 8px !important; border-radius: 50% !important; }
          .bf-book-image { width: 200px !important; height: 325px !important; order: -1 !important; }
          .bf-book-image img { width: 180px !important; height: 300px !important; }
          .bf-cta-button { margin-top: 20px !important; padding: 0 15px !important; }
          .bf-button { font-size: 18px !important; padding: 12px 30px !important; gap: 10px !important; }
          .bf-button svg { font-size: 22px !important; margin-right: 8px !important; }
        }
        @media (max-width: 380px) {
          .bf-heading {
    font-size: 1.6rem !important;
    line-height: 1.25 !important;
    text-align: center !important;
  }
          .bf-subheading { font-size: 0.9rem !important; }
          .bf-feature-box { font-size: 15px !important; min-height: 65px !important; padding: 12px 10px !important; }
          .bf-book-image { width: 180px !important; height: 290px !important; }
          .bf-book-image img { width: 160px !important; height: 270px !important; }
          .bf-button { font-size: 16px !important; padding: 10px 25px !important; }
        }
        @media (min-width: 769px) {
          .book-features-root { padding: 80px 0 60px 0 !important; }
         .bf-heading {
    font-size: 53px !important;
    line-height: 58px !important;
    text-align: center !important;
    margin-bottom: 8px !important;
  }
          .bf-subheading { font-size: 20px !important; line-height: 28px !important; max-width: 898px !important; margin-bottom: 0px !important; }
          .bf-content-layout { flex-direction: row !important; max-width: 1120px !important; gap: 0 !important; }
          .bf-feature-column { align-items: flex-end !important; width: auto !important; }
          .bf-feature-box { width: 456px !important; height: 82px !important; font-size: 20px !important; line-height: 28px !important; margin-bottom: 18px !important; }
          .bf-feature-icon { width: 24px !important; height: 24px !important; font-size: 16px !important; margin-right: 18px !important; margin-left: 10px !important; border-radius: 50% !important; }
          .bf-book-image { width: 340px !important; height: 519px !important; order: 0 !important; }
          .bf-book-image img { width: 351px !important; height: 535px !important; }
          .bf-cta-button { margin-top: 15px !important; }
          .bf-button { font-size: 22px !important; padding: 15px 58px !important; gap: 14px !important; }
          .bf-button svg { font-size: 27px !important; margin-right: 11px !important; }
        }
        `}
      </style>

      {/* Heading */}
      <div style={{ marginBottom: 14 }}>
        <div className="bf-heading" style={{
          fontFamily: 'Tinos, serif',
          fontWeight: 700,
          color: COLORS.textDark
        }}>
          What is{' '}
          <span style={{ color: COLORS.gold }}>Family Office Real Estate Simplified</span>
          <br />
          <span style={{ color: COLORS.textDark }}>Book All About?</span>
        </div>
      </div>

      {/* Subheading */}
      <div className="bf-subheading" style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        color: COLORS.textBody,
        letterSpacing: '0px',
        textAlign: 'center',
        margin: "0 auto"
      }}>
        A complete guide to understanding how wealthy families and family offices build lasting wealth through real estate.
      </div>

      {/* Features & Book Layout */}
      <div className="bf-content-layout" style={{
        display: 'flex',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Left Feature List */}
        <div className="bf-feature-column lg:mb-[-50px] text-left" style={{ display: 'flex', flexDirection: 'column' }}>
          {featuresLeft.map((feature, idx) => (
            <div className="bf-feature-box" key={idx} style={{
              background: COLORS.goldGradient,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderLeft: `4px solid ${COLORS.goldLight}`,
              display: 'flex',
              alignItems: 'center',
              boxShadow: COLORS.featureShadow,
              fontFamily: 'Inter, sans-serif',
              color: COLORS.textBody,
              fontWeight: 400,
            }}>
              <span className="bf-feature-icon" style={{
                width: 24,
                height: 24,
                minWidth: 24,
                minHeight: 24,
                background: COLORS.goldLight,
                borderRadius: '50%', // <-- perfect circle!
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.white,
                fontWeight: 700,
                fontSize: 16,
                marginRight: 18,
                marginLeft: 10,
              }}>{idx + 1}</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Book Image */}
        <div className="bf-book-image"
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 38,
            position: 'relative',
          }}
        >
          {/* Yellow glow background */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '350px',
            background: 'rgba(200, 155, 60, 0.4)',
            filter: 'blur(70px)',
            borderRadius: '50%',
            zIndex: 0,
          }} />
          <img loading="lazy"
            src={bookimage}
            alt="Dubai Rental Wealth Simplified Book"
            style={{
              objectFit: 'cover',
              borderRadius: '5px',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>

        {/* Right Feature List */}
        <div className="bf-feature-column lg:mb-[-50px] text-left" style={{ display: 'flex', flexDirection: 'column' }}>
          {featuresRight.map((feature, idx) => (
            <div className="bf-feature-box px-2" key={idx} style={{
              background: COLORS.goldGradient,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderLeft: `4px solid ${COLORS.goldLight}`,
              display: 'flex',
              alignItems: 'center',
              boxShadow: COLORS.featureShadow,
              fontFamily: 'Inter, sans-serif',
              color: COLORS.textBody,
              fontWeight: 400,
            }}>
              <span className="bf-feature-icon" style={{
                width: 24,
                height: 24,
                minWidth: 24,
                minHeight: 24,
                background: COLORS.goldLight,
                borderRadius: '50%', // <-- perfect circle!
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.white,
                fontWeight: 700,
                fontSize: 16,
                marginRight: 18,
                marginLeft: 10,
              }}>{idx + 4}</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 lg:mt-[80px]">
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
  )
}

export default BookFeaturesSection
