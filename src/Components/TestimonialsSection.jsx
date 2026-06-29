import React from 'react';
import img1 from '../assets/test1.jpg';
import img2 from '../assets/test2.jpg';
import img3 from '../assets/test3.jpg';
import img4 from '../assets/test1.jpg';
import img5 from '../assets/test2.jpg';
import img6 from '../assets/test2.jpg';
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: 'rgb(85, 134, 176)',
  goldDark: 'rgba(70, 110, 150, 1)',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  goldBorder: 'rgba(85, 134, 176, 0.15)',
  white: '#fff',
  textDark: '#191919',
  textBody: '#111',
  textMuted: '#444',
  textSubtitle: 'rgba(45,48,50,1)',
  background: '#fff',
  cardShadow: '0 4px 20px rgba(0,0,0,0.05)',
  cardShadowHover: '0 8px 24px rgba(0,0,0,0.08)',
  quoteShadow: '0 2px 6px rgba(85, 134, 176, 0.3)'
};


const testimonials = [
  {
    image: img1,
    name: 'Rohit Mehra',
    position: 'CEO, India',
    stars: 5,
    text: "A must-read for anyone looking to understand how real estate can create predictable income while preserving family wealth across generations. The book is practical, insightful, and filled with actionable strategies.",
    badge: '11% yields achieved'
  },
  {
    image: img2,
    name: 'Ayesha Al Mazrouei',
    position: 'Head of Investments, UAE',
    stars: 5,
    text: "Family Office Real Estate Simplified bridges the gap between theory and practice. It helped us rethink our property strategy and align it with our family values and long-term goals.",
    badge: 'Transformed investment approach'
  },
  {
    image: img3,
    name: 'Jonathan Clark',
    position: 'Global Wealth Advisors, UK',
    stars: 5,
    text: "This book is a comprehensive guide for family offices and ultra-high-net-worth individuals. The case studies and checklists are invaluable for structuring real estate investments effectively.",
    badge: 'First-time investor success'
  },
  {
    image: img4,
    name: 'Omar Al Farsi',
    position: 'Real Estate Director, UAE',
    stars: 5,
    text: "The practical approach of this book is unmatched. It has helped our family office formalise governance and investment processes while keeping legacy at the centre.",
    badge: 'Recommended to all clients'
  },
  {
    image: img5,
    name: 'Priya Sharma',
    position: 'Portfolio Manager, India',
    stars: 5,
    text: "Mamata Dhiraj Jain has simplified complex concepts without losing depth. I now have a clear framework for evaluating property investments for multi-generational wealth preservation.",
    badge: 'Recommended to all clients'
  },
  {
    image: img6,
    name: 'Anil Kapoor',
    position: 'Real Estate Advisor, India',
    stars: 5,
    text: "I recommend this book to both family members and executives. It provides clear insights on creating predictable income streams while respecting family values and long-term objectives.",
    badge: 'Top rated investment'
  },
  {
    image: img5,
    name: 'Leila Haddad',
    position: 'Senior Portfolio Manager, UAE',
    stars: 5,
    text: "Practical, detailed, and well-structured, this book helped our team understand how to integrate real estate into a comprehensive family office strategy that spans generations.",
    badge: 'Recommended to all clients'
  },
  {
    image: img3,
    name: 'Sophia Martinez',
    position: 'Chief Investment Officer, USA',
    stars: 5,
    text: "An essential resource for anyone managing family wealth. The book covers everything from investment strategy to succession planning, all in a structured and accessible manner.",
    badge: 'Top rated investment'
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Inter:wght@400;700&display=swap');
.six-section {
  padding: 60px 20px 0 20px;
  background: ${COLORS.background};
  display: flex;
  flex-direction: column;
  align-items: center;
}
.six-heading {
  font-family: 'Tinos', serif;
  font-weight: 700;
  font-size: 53px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 0px;
}
.six-highlight {
  color: ${COLORS.gold};
  display: block;
  margin-top: 0px;
}
.six-subheading {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.44px;
  color: ${COLORS.textSubtitle};
  text-align: center;
  max-width: 900px;
  margin-top: 30px;
  margin-bottom: 70px;
}
.six-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 10px;
  justify-items: center;
  width: 100%;
  max-width: 1400px;
}
.six-card {
  background: ${COLORS.white};
  border-radius: 16px;
  border-top: 1px solid ${COLORS.goldBorder};
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  padding: 36px 32px 70px 32px;
  width: 100%;
  max-width: 630px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.six-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}
.six-card-quote {
  position: absolute;
  top: -16px;
  left: -16px;
}
.six-card-quote-icon {
  width: 32px;
  height: 32px;
  background: #C89B3C;
  color: ${COLORS.white};
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${COLORS.quoteShadow};
}
/* Mobile quote circle size 30px only */
@media (max-width: 768px) {
  .six-card-quote-icon {
    width: 30px !important;
    height: 30px !important;
    font-size: 14px !important;
  }
}
.six-card-figure {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 14px;
}
.six-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.six-card-name {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${COLORS.textDark};
}
.six-card-position {
  font-size: 16px;
  color: ${COLORS.textMuted};
  margin-top: 2px;
}
  /* Desktop visible */
.six-desktop {
  display: grid;
}

/* Hide desktop on mobile */
@media (max-width: 768px) {
  .six-desktop {
    display: none;
  }
}

/* Mobile slider wrapper */
.six-mobile {
  display: none;
  overflow: hidden;
  width: 100%;
  margin-top: 24px;
}

@media (max-width: 768px) {
  .six-mobile {
    display: block;
  }
}

/* Slider row */
.six-marquee {
  display: flex;
  width: max-content;
  gap: 16px;
  animation: sixMarquee 28s linear infinite;
  align-items: stretch;
}

/* Each slide */
.six-slide {
  min-width: 85vw;
  max-width: 85vw;
  display: flex;
}

/* Make all cards equal height */
.six-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Auto scroll */
@keyframes sixMarquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

/* Pause on touch / hover */
.pause-on-hover:hover,
.pause-on-hover:active {
  animation-play-state: paused;
}

.pause-on-hover {
  touch-action: pan-x;
}

.six-stars {
  display: flex;
  gap: 3px;
  margin-top: 4px;
}
.six-star {
  width: 18px;
  height: 18px;
  color: ${COLORS.gold};
}
.six-card-text {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${COLORS.textBody};
  line-height: 30px;
  margin-top: 10px;
  font-weight: 500;
}
.six-badge {
  position: absolute;
  bottom: 20px;
  left: 32px;
  background: ${COLORS.goldLight};
  color: ${COLORS.gold};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  padding: 6px 18px;
  border-radius: 999px;
}
.six-btn {
  margin: 65px 0 40px 0;
  width: 340px;
  height: 55px;
  border-radius: 8px;
  background-color: ${COLORS.gold};
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;
}
.six-btn:hover {
  background-color: ${COLORS.goldDark};
}

/* Other responsive styles unchanged */
@media (max-width: 768px) {
  .six-section {
    padding: 40px 15px 0 15px !important;
  }
  .six-heading {
    font-size: 2rem !important;
    line-height: 1.2 !important;
    margin-bottom: 0px !important;
    padding: 0 10px !important;
  }
  .six-subheading {
    font-size: 16px !important;
    line-height: 1.4 !important;
    margin-top: 20px !important;
    margin-bottom: 40px !important;
    padding: 0 10px !important;
    max-width: 95vw !important;
  }
  .six-list {
    grid-template-columns: 1fr !important;
    gap: 15px !important;
    width: 100% !important;
  }
  .six-card {
    max-width: 95vw !important;
    padding: 25px 20px 60px 20px !important;
    margin: 0 auto !important;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
  }
  .six-card-figure {
    gap: 15px !important;
    margin-bottom: 12px !important;
  }
  .six-avatar {
    width: 50px !important;
    height: 50px !important;
  }
  .six-card-name {
    font-size: 18px !important;
  }
  .six-card-position {
    font-size: 16px !important;
  }
  .six-star {
    width: 16px !important;
    height: 16px !important;
  }
  .six-card-text {
    font-size: 16px !important;
    line-height: 1.5 !important;
    margin-top: 8px !important;
  }
  .six-badge {
    bottom: 15px !important;
    left: 20px !important;
    font-size: 14px !important;
    padding: 5px 15px !important;
  }
  .six-btn {
    margin: 40px 0 30px 0 !important;
    width: 90vw !important;
    max-width: 300px !important;
    height: 48px !important;
    font-size: 16px !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .six-heading {
    font-size: 1.6rem !important;
  }
  .six-subheading {
    font-size: 15px !important;
  }
  .six-card {
    padding: 20px 15px 55px 15px !important;
  }
  .six-card-figure {
    gap: 12px !important;
  }
  .six-avatar {
    width: 45px !important;
    height: 45px !important;
  }
  .six-card-name {
    font-size: 17px !important;
  }
  .six-card-text {
    font-size: 15px !important;
  }
  .six-btn {
    height: 44px !important;
    font-size: 15px !important;
  }
}

/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  .six-section {
    padding: 60px 20px 0 20px !important;
  }
  .six-heading {
    font-size: 53px !important;
    line-height: 60px !important;
    margin-bottom: 0px !important;
  }
  .six-subheading {
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: 30px !important;
    margin-bottom: 70px !important;
    max-width: 900px !important;
  }
  .six-list {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px 0px !important;
    max-width: 1317px !important;
  }
  .six-card {
    padding: 36px 32px 70px 32px !important;
    max-width: 630px !important;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
  }
  .six-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 40px rgba(0,0,0,0.15) !important;
  }
  .six-card-figure {
    gap: 18px !important;
    margin-bottom: 14px !important;
  }
  .six-avatar {
    width: 60px !important;
    height: 60px !important;
  }
  .six-card-name {
    font-size: 22px !important;
  }
  .six-card-position {
    font-size: 16px !important;
  }
  .six-star {
    width: 18px !important;
    height: 18px !important;
  }
  .six-card-text {
    font-size: 18px !important;
    line-height: 30px !important;
    margin-top: 10px !important;
    font-weight: 500 !important;
  }
  .six-badge {
    bottom: 20px !important;
    left: 32px !important;
    font-size: 16px !important;
    padding: 6px 18px !important;
  }
  .six-btn {
    margin: 65px 0 40px 0 !important;
    width: 340px !important;
    height: 55px !important;
    font-size: 18px !important;
  }
  .six-btn:hover {
    background-color: ${COLORS.goldDark} !important;
  }
}

@media (max-width: 992px) {
  .six-list {
    grid-template-columns: 1fr !important;
    gap: 15px !important;
  }
  .six-card {
    max-width: 90vw !important;
  }
}


`;

const TestimonialsSection = () => {
        const ref = sessionStorage.getItem("reference") || "direct";
return (
  <div id='reader-reviews' className="six-section">
    <style>{styles}</style>
    <div className="six-heading">
      What Readers Are Saying About <br />
      <span className="text-[#C89B3C]">Family Office Real Estate Simplified Book?</span>
    </div>
    <div className="six-subheading">
      Hear from readers who are redefining how family offices invest, grow, and preserve wealth.
    </div>
   <div className="six-list six-desktop">
  {testimonials.map((t, idx) => (
    <div className="six-card" key={idx}>
          <div className="six-card-quote">
            <div className="six-card-quote-icon">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6654 2C10.3117 2 9.9726 2.14048 9.72256 2.39052C9.47251 2.64057 9.33203 2.97971 9.33203 3.33333V7.33333C9.33203 7.68696 9.47251 8.02609 9.72256 8.27614C9.9726 8.52619 10.3117 8.66667 10.6654 8.66667C10.8422 8.66667 11.0117 8.7369 11.1368 8.86193C11.2618 8.98695 11.332 9.15652 11.332 9.33333V10C11.332 10.3536 11.1916 10.6928 10.9415 10.9428C10.6915 11.1929 10.3523 11.3333 9.9987 11.3333C9.82189 11.3333 9.65232 11.4036 9.52729 11.5286C9.40227 11.6536 9.33203 11.8232 9.33203 12V13.3333C9.33203 13.5101 9.40227 13.6797 9.52729 13.8047C9.65232 13.9298 9.82189 14 9.9987 14C11.0596 14 12.077 13.5786 12.8271 12.8284C13.5773 12.0783 13.9987 11.0609 13.9987 10V3.33333C13.9987 2.97971 13.8582 2.64057 13.6082 2.39052C13.3581 2.14048 13.019 2 12.6654 2H10.6654Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V7.33333C2 7.68696 2.14048 8.02609 2.39052 8.27614C2.64057 8.52619 2.97971 8.66667 3.33333 8.66667C3.51014 8.66667 3.67971 8.7369 3.80474 8.86193C3.92976 8.98695 4 9.15652 4 9.33333V10C4 10.3536 3.85952 10.6928 3.60948 10.9428C3.35943 11.1929 3.02029 11.3333 2.66667 11.3333C2.48986 11.3333 2.32029 11.4036 2.19526 11.5286C2.07024 11.6536 2 11.8232 2 12V13.3333C2 13.5101 2.07024 13.6797 2.19526 13.8047C2.32029 13.9298 2.48986 14 2.66667 14C3.72753 14 4.74495 13.5786 5.49509 12.8284C6.24524 12.0783 6.66667 11.0609 6.66667 10V3.33333C6.66667 2.97971 6.52619 2.64057 6.27614 2.39052C6.02609 2.14048 5.68696 2 5.33333 2H3.33333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
          </div>
          <div className="six-card-figure">
          
            <div>
              <div className="six-card-name">{t.name}</div>
              <div className="six-card-position text-black">{t.position}</div>
              <div className="six-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="six-star" viewBox="0 0 24 24" fill="#C89B3C">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="six-card-text text-justify">"{t.text}"</div>

        </div>
      ))}
    </div>
    {/* Mobile Auto Sliding Testimonials */}
<div className="six-mobile">
  <div className="six-marquee pause-on-hover">

    {[...testimonials, ...testimonials].map((t, idx) => (
      <div className="six-slide" key={idx}>
        <div className="six-card">

          {/* SAME CARD CONTENT */}
          <div className="six-card-quote">
            {/* <div className="six-card-quote-icon">
             
            </div> */}
          </div>

          <div className="six-card-figure">
            <div>
              <div className="six-card-name">{t.name}</div>
              <div className="six-card-position text-black">{t.position}</div>
              <div className="six-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="six-star" viewBox="0 0 24 24" fill="#C89B3C">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="six-card-text text-justify">"{t.text}"</div>

        </div>
      </div>
    ))}

  </div>
</div>
    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-2 mt-16">
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
);
}
export default TestimonialsSection;
