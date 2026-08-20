import React, { useEffect, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import personImg from "../../../assets/Hero_image-removebg-preview.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "../../../Components/ui/FlowButton";
import "../common.css";

gsap.registerPlugin(ScrollTrigger);



const Hero_section = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const reviewRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero image - scales in from below with fade
      tl.fromTo(imageRef.current,
        { opacity: 0, x: 100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, delay: 0.2 }
      );

      // Title - slide up
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 40, rotateX: -30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8 },
        "-=0.8"
      );

      // Subtitle - fade in
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

      // Button - scale in with bounce
      tl.fromTo(buttonRef.current,
        { opacity: 0, scale: 0, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );

      // Floating animation for image (continuous)
    

      // Subtle floating for title elements
      gsap.to(".doodle-burst", {
        rotation: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Sparkle rotation
      gsap.to(".doodle-sparkle", {
        scale: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtle parallax effect for image on scroll (only when hero is in view)
      gsap.to(imageRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <style>{`
        .hero-section {
          font-family: var(--font-primary);
          color: var(--text-dark);
          background: var(--bg-light-purple);
          min-height: 640px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 110px 20px 0px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .background-doodle-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.2;
          pointer-events: none;
        }

        .hero-content {
          text-align: left;
          z-index: 10;
          max-width: 1-00px;
          margin-left: 80px;
          margin-right: auto;
          position: relative;
        }

        .headline-container {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
          text-align: left;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .eyebrow-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          flex-shrink: 0;
        }

        .eyebrow-text {
          font-size: 16px;
          font-style: italic;
          font-weight: 500;
          color: #1a233a;
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: 0;
        }

        .headline-highlight {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: 28px;
          margin-bottom: -50px;
          line-height: 1.3;
          text-align: left;
        }

        .doodle-burst {
          position: absolute;
          left: -40px;
          top: -25px;
          width: 35px;
          height: 35px;
        }

        .doodle-sparkle {
          position: absolute;
          right: -45px;
          top: 30%;
          width: 28px;
          height: 28px;
          animation: spinSlow 6s linear infinite;
        }

        .main-title {
          font-size: 44px;
          font-weight: 800;
          margin: 0;
          line-height: 1.15;
        }

        .title-word {
          display: inline-block;
        }

        .title-word-center {
          display: block;
          text-align: center;
          margin-top: 4px;
        }

        .yellow-pill {
          background-color: var(--accent-yellow);
          color: var(--text-dark);
          padding: 8px 30px;
          border-radius: 50px;
          display: inline-block;
          margin-right: 15px;
        }

        .subtitle {
          font-size: 17px;
          color: var(--text-secondary);
          margin-top: 16px;
          margin-bottom: 16px;
          text-align: left;
          max-width: 600px;
          line-height: 1.55;
        }

        .button-container {
          position: relative;
          display: inline-block;
        }

        .dashed-line {
          position: absolute;
          left: -50px;
          bottom: -40px;
          width: 60px;
          height: 50px;
          color: #888888;
        }

        .get-started-button {
          background-color: var(--text-dark);
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          padding: 15px 35px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .get-started-button:hover {
          background-color: var(--text-secondary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .get-started-button:active {
          transform: translateY(0px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .hero-image {
          position: absolute;
          right: 0;
          bottom: -20px;
          height: 90%;
          z-index: 5;
          object-fit: contain;
          pointer-events: none;
        }

       

       

        
       

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .main-title { font-size: 45px; }
          .hero-content { margin-left: 40px; margin-right: 0; }
          .hero-image { height: 65%; opacity: 0.9; }
        }

        @media (max-width: 600px) {
          .hero-section {
            margin: 15px;
            border-radius: 30px;
            min-height: 850px;
            padding: 100px 20px 0px;
          }
          .hero-content { margin-left: 0; margin-right: 0; margin-top: 20px; padding: 0 16px; }
          .main-title { font-size: 38px; }
          .yellow-pill { padding: 6px 18px; margin-right: 0; margin-bottom: 10px; }
          .subtitle { font-size: 16px; }
          .doodle-burst, .doodle-sparkle, .dashed-line { display: none; }
          .hero-image { height: 45%; right: -20px; bottom: -10px; }
        }
      `}</style>

      <Navbar />

      <section className="hero-section" ref={heroRef}>
        <svg
          className="background-doodle-svg"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 150,150 Q 300,100 450,250 T 750,150 T 950,300"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100,200 Q 280,350 480,150 T 800,250"
            stroke="#059669"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <img src={personImg} alt="person" className="hero-image" ref={imageRef} />

        <div className="hero-content">
          <div className="headline-container" ref={titleRef}>
            <svg className="doodle-burst" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28L6 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M15 16L9 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M26 13L24 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <svg className="doodle-sparkle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
            </svg>

            <div className="eyebrow">
              <span className="eyebrow-icon">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="eyebrow-text">GEN Z DIGITAL MARKETING &amp; GROWTH AGENCY</span>
            </div>
            <h1 className="main-title" style={{ maxWidth: '800px', lineHeight: '1.2' }}>
              Marketing That Moves at the Speed of Culture
            </h1>
          </div>

          <p className="subtitle" ref={subtitleRef}>ADSSERV is a Gen Z digital marketing agency helping brands get noticed, understood, and chosen through social media, SEO, paid advertising, websites, branding, content, creators, and digital strategy.</p>
          <p className="subtitle" ref={subtitleRef}>We combine creative thinking with digital performance to build brands that don't just show up online—they have something worth paying attention to.</p>

          <div className="button-container" ref={buttonRef} style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <svg className="dashed-line" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="80" y1="10" x2="10" y2="70" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
            </svg>
            <FlowButton text="Start a Project" />
            <button style={{
              background: "transparent",
              color: "var(--text-dark)",
              fontSize: "16px",
              fontWeight: "600",
              padding: "16px 35px",
              border: "2px solid var(--text-dark)",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--text-dark)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dark)'; }}
            >
              See What We Do
            </button>
          </div>
        </div>





      </section>
    </>
  );
};

export default Hero_section;