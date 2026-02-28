import React from 'react';
import bookimage from '../assets/bookimg.webp'
import bgimage from '../assets/bgimage.jpg'
import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  primary: "#5586B0",                         // Main accent and brand color
  bannerGradient: "linear-gradient(90deg, #FFFECE 0%, #C89B3C 100%)", // Blue gradient
  iconBg: "rgba(85,134,176,0.12)",            // Soft blue tint for icon backgrounds
  cardBg: "rgba(255,255,255,0.8)",            // Light, semi-transparent card background
  cardText: "rgba(32,52,74,1)",               // Deep blue for card text
  btnBg: "#C89B3C",                           // Button solid blue
  btnText: "rgba(255,255,255,1)",             // Button text: white
  btnBorder: "#406890",                       // Button border: darker blue
  subtitle: "#0D0D0D",                        // Subtitle: bold blue tone
  heading: "#C89B3C",
  icon: "black",                          // Heading: main blue
};
 const messages = [
  { text: "Limited Stock", icon: "🛒" },
  { text: "Fast Delivery", icon: "🚚" },
  { text: "Bestseller Book", icon: "⭐" },
  { text: "10,000+ Readers", icon: "📚" },
  { text: "Ships Worldwide", icon: "🌍" },
  { text: "Top Rated", icon: "🔥" },
  { text: "Entrepreneur's Pick", icon: "💼" },
  { text: "Instant eBook Access", icon: "⚡" }
];

const MarqueeContent = () => {
  return (
    <>
      {messages.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center text-yellow mx-6 font-medium hover:-translate-y-0.5  transition-transform whitespace-nowrap"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="ml-2 font-semibold">{item.text}</span>
        </span>
      ))}
    </>
  );
};
// ---- END COLOR PALETTE ----

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g>
      <circle cx="9.5" cy="9.5" r="9.5" fill="rgba(255,255,255,0)" />
      <path d="M3 5H4.5L6.7 13.1C6.84877 13.6882 7.37675 14.1001 7.98701 14.1H15.35C15.9144 14.0991 16.4125 13.729 16.5567 13.1791L18 7.75H5.1"
        stroke="#2e2206" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.45" cy="16" r="1.05" fill="#2e2206" />
      <circle cx="15.1" cy="16" r="1.05" fill="#2e2206" />
      <rect x="9.3" y="8" width="1.5" height="3.1" rx="0.7" fill="#2e2206" />
    </g>
  </svg>
);

export default function DubaiWealthHero() {
        const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="min-h-screen ">
      <style>{`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .marquee-mobile {
            font-size: 13px !important;
            margin-left: 7px !important;
            margin-right: 7px !important;
          }
          .hero-heading {
            font-size: 2rem !important;
            line-height: 2.35rem !important;
            margin-bottom: 16px !important;
            padding: 0 10px !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.4rem !important;
            width: 95vw !important;
            max-width: 100% !important;
            word-break: break-word;
            padding: 0 10px !important;
            margin-bottom: 24px !important;
          }
          .feature-icons-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 0 10px !important;
            margin-bottom: 24px !important;
          }
          .feature-card {
            width: 95vw !important;
            max-width: 320px !important;
            height: 60px !important;
            padding: 12px 16px !important;
            margin: 0 auto !important;
            gap: 12px !important;
          }
          .feature-card span:last-child {
            font-size: 16px !important;
            width: auto !important;
            flex: 1 !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 12px !important;
            padding: 0 10px !important;
            margin-bottom: 30px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 95vw !important;
            max-width: 320px !important;
            font-size: 16px !important;
            height: 48px !important;
            border-radius: 8px !important;
            margin: 0 auto !important;
          }
          .book-row {
            min-height: 300px !important;
            height: auto !important;
            margin-bottom: 30px !important;
            padding: 0 10px !important;
          }
          .book-viewer {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          .book-viewer img {
            width: 268px !important;
            height: 350px !important;
            object-fit: cover !important;
          }
          .rating-badge {
            position: static !important;
            margin: 20px auto 0 auto !important;
            display: flex !important;
            justify-content: center !important;
            transform: none !important;
            padding: 12px 20px 8px 20px !important;
          }
          .rating-badge span:first-child {
            font-size: 18px !important;
          }
          .rating-badge span:last-child {
            font-size: 14px !important;
          }
          
          /* Reduced background image spread for mobile */
          .bg-image-container {
            background-size: 60% !important;
          }
          
          /* Reduced book blur background for mobile */
          .book-blur-bg {
            width: 300px !important;
            height: 300px !important;
            filter: blur(30px) !important;
          }
        }
          
        /* Extra small devices */
        @media (max-width: 380px) {
          .hero-heading {
            font-size: 1.8rem !important;
            line-height: 2.1rem !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
            line-height: 1.3rem !important;
          }
          .feature-card {
            height: 55px !important;
            padding: 10px 14px !important;
          }
          .feature-card span:last-child {
            font-size: 15px !important;
          }
          .hero-btn, .hero-btn-trailer {
            height: 45px !important;
            font-size: 15px !important;
          }
          .book-viewer img {
            width: 100% !important;
            height: 320px !important;
          }
          
          /* Further reduced background for extra small screens */
          .bg-image-container {
            background-size: 70% !important;
          }
          
          .book-blur-bg {
            width: 250px !important;
            height: 250px !important;
            filter: blur(25px) !important;
          }
        }

        /* iPhone SE Specific Button Styles Only (320px-375px) */
        @media (max-width: 375px) {
          .feature-card {
            width: 239px !important;
            max-width: 280px !important;
            height: 50px !important;
            padding: 10px 12px !important;
            gap: 10px !important;
          }
          .feature-card span:last-child {
            font-size: 14px !important;
          }
          .feature-card span:first-child {
            min-width: 28px !important;
            min-height: 28px !important;
            font-size: 16px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 239px !important;
            max-width: 280px !important;
            height: 42px !important;
            font-size: 14px !important;
            margin: 0 auto !important;
          }
        }

        /* Desktop styles remain unchanged */
        @media (min-width: 769px) {
          .hero-heading {
            font-size: 65px !important;
            line-height: normal !important;
          }
          .hero-subtitle {
            font-size: 22px !important;
            line-height: 30px !important;
            width: 765px !important;
          }
          .feature-icons-row {
            flex-direction: row !important;
            gap: 24px !important;
          }
          .feature-card {
            width: 270px !important;
            height: 72px !important;
          }
          .hero-cta-row {
            flex-direction: row !important;
            gap: 16px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 265px !important;
            height: 52px !important;
          }
          .book-viewer img {
            width: 100% !important;
            height: 500px !important;
          }
          .rating-badge {
            position: absolute !important;
            bottom: 24px !important;
            right: -40px !important;
          }
          
          /* Desktop background settings */
          .bg-image-container {
            background-size: cover !important;
          }
        }
      `}</style>

      {/* Limited Stock Banner */}
       <div className="flex items-center bg-gradient-to-r from-[#FFFECE] to-[#C89B3C] gap-2 text-[14px] sm:text-[16px] md:text-[18px] font-medium overflow-hidden py-2 ">
  <div className="animate-marquee inline-flex whitespace-nowrap">
    {[...Array(3)].map((_, i) => (
      <MarqueeContent key={i} />
    ))}
  </div>
  
  <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }

    .animate-marquee {
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
</div>

      {/* Background Image Section */}
      <div
        className="w-full h-full absolute top-0 left-0 z-0 bg-image-container"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.08',
        }}
      />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-12 md:py-8 lg:py-16 text-center relative z-10">
        {/* Main Heading */}
        <h1
          className="text-5xl md:text-[65px] font-bold text-gray-800 mb-6 hero-heading"
          style={{ fontFamily: 'Tinos, serif' }}
        >
          Build{' '}
          <span style={{ color: COLORS.heading }}>Predictable Wealth </span>
          That Lasts
          <br />
          <span>For Generations</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto text-center capitalize mb-8 hero-subtitle"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.45px',
            color: COLORS.subtitle
          }}
        >
          Discover proven real estate strategies used by family offices to create stable income, preserve capital, and build a lasting legacy.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 px-4">
          {/* Box 1 */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-white shadow-lg w-full sm:w-auto">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C89B3C33] text-[#C89B3C] flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25" /></svg>
            </span>
            <span className="font-inter text-base sm:text-[19px] text-gray-800 font-normal">
              Trusted by Global Family Offices
            </span>
          </div>

          {/* Box 2 */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-white shadow-lg w-full sm:w-auto">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C89B3C33] flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6"><path fill="#C89B3C" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9" /></svg>
            </span>
            <span className="font-inter text-base sm:text-[19px] text-gray-800 font-normal">
              Proven Frameworks
            </span>
          </div>

          {/* Box 3 */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-white shadow-lg w-full sm:w-auto">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C89B3C33] flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6"><path fill="#C89B3C" d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38" /></svg>
            </span>
            <span className="font-inter text-base sm:text-[19px] text-gray-800 font-normal">
              Built for Generational Wealth
            </span>
          </div>
        </div>



        {/* CTA Buttons */}
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 
    max-[768px]:flex-col max-[768px]:items-center max-[768px]:w-full">

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



        {/* Book Display Section */}
        <div className="book-row" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '500px',
          position: 'relative',
        }}>
          <div className="book-viewer lg:mb-12 " style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>


            <img loading="lazy" 
              src={bookimage}
              alt="Dubai Rental Wealth Simplified Book"
              style={{
                objectFit: 'cover',
                borderRadius: '18px',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'none',
                maxWidth: '700px',
                width: '100%',
                display: 'block',
                margin: '0 auto',
              }}
            />



          </div>
        </div>





      </div>
    </div>
  );
}