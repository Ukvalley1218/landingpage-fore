import React from 'react'
import img1 from '../assets/group1786/1.webp'
import img2 from '../assets/group1786/2.webp'
import img3 from '../assets/group1786/3.png'
import img4 from '../assets/group1786/4.webp'
import img5 from '../assets/imgone.webp'
import img6 from '../assets/group1786/6.jpg'
import img7 from '../assets/group1786/7.jpg'
import img8 from '../assets/group1786/8.webp'
import imgA from '../assets/group1786/a.webp'
import imgB from '../assets/img (14).webp'
import imgC from '../assets/group1786/e.webp'
import imgD from '../assets/imgtwo.webp'
import imgE from '../assets/group1786/e.webp'
import imgF from '../assets/group1786/e.webp'
import imgG from '../assets/group1786/g.webp'
import imgH from '../assets/group1786/g.webp'
// import { redirectWithRef } from '../utils/redirectWithRef'



const ImageGallerySection = () => {
      const ref = sessionStorage.getItem("reference") || "direct";

  const normalImages = [img1, img2, img3, img4, img5, img6];
  const demoImages = [imgA, imgB, imgC, imgD];

  // Inline styles for animations
  const marqueeStyles = `
    @keyframes marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.33%); }
    }
    
    @keyframes marquee-ltr {
      0% { transform: translateX(-33.33%); }
      100% { transform: translateX(0); }
    }
    
    .animate-marquee-rtl {
      animation: marquee-rtl 5s linear infinite;
    }
    
    .animate-marquee-ltr {
      animation: marquee-ltr 8s linear infinite;
    }

    /* Optional: Pause on hover */
    .marquee-container:hover .animate-marquee-rtl,
    .marquee-container:hover .animate-marquee-ltr {
      animation-play-state: paused;
    }
  `;
  
  return (
    <>
      <style>{marqueeStyles}</style>
      <section className="py-10 overflow-hidden">
        {/* Normal Images Marquee - Right to Left */}
        <div className="relative mb-8 overflow-hidden marquee-container">
          <div className="flex animate-marquee-rtl">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0">
                {normalImages.map((img, imgIndex) => (
                  <img loading="lazy" 
                    key={`${setIndex}-${imgIndex}`}
                    src={img}
                    alt={`Gallery ${imgIndex + 1}`}
                    className="h-[140px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-auto px-2 object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Demo Images Marquee - Left to Right */}
        <div className="relative overflow-hidden marquee-container">
          <div className="flex animate-marquee-ltr">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0">
                {demoImages.map((img, imgIndex) => (
                  <img loading="lazy" 
                    key={`${setIndex}-${imgIndex}`}
                    src={img}
                    alt={`Demo ${imgIndex + 1}`}
                    className="h-[140px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-auto px-2 object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </section>
        {/* CTA Buttons */}
<div className="flex flex-wrap justify-center gap-4 mt-8">
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
    </>
  )
}

export default ImageGallerySection