import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, X } from "lucide-react";
import logo from "../../assets/logo.png";

const serviceLinks = [
  { label: "Social Media Marketing", path: "/services/social-media-marketing" },
  { label: "Performance Marketing", path: "/services/performance-marketing" },
  { label: "Website Development", path: "/services/website-development" },
  { label: "Influencer Marketing", path: "/services/influencer-marketing" },
  { label: "SEO Services", path: "/services/seo-services" },
  { label: "Video Production", path: "/services/video-production" },
  { label: "Branding Solutions", path: "/services/branding-solutions" },
  { label: "Digital Consulting", path: "/services/digital-consulting" },
  { label: "Content Writing", path: "/services/content-writing" },
  { label: "Instagram Marketing", path: "/services/instagram-marketing" },
];

const Navbar = () => {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "BLOG", "FAQ", "CONTACT"];

  const location = useLocation();

  // Map menu label -> route path
  const routeMap = {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    PROJECTS: "/projects",
    BLOG: "/blog",
    FAQ: "/faq",
    CONTACT: "/contact",
  };

  // Returns true if the current path matches this menu item
  const isActive = (item) => {
    const path = routeMap[item];
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    // Match exact path or any sub-route
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const [darkReady, setDarkReady] = useState(false);
  const [barReady, setBarReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolledServicesOpen, setScrolledServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const scrolledServicesRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const scrolledLeaveTimerRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setDarkReady(true), 100);
    const t2 = setTimeout(() => setBarReady(true), 500);
    const t3 = setTimeout(() => setContentReady(true), 950);
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleServicesEnter = () => {
    clearTimeout(leaveTimerRef.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    leaveTimerRef.current = setTimeout(() => setServicesOpen(false), 180);
  };
  const handleScrolledServicesEnter = () => {
    clearTimeout(scrolledLeaveTimerRef.current);
    setScrolledServicesOpen(true);
  };
  const handleScrolledServicesLeave = () => {
    scrolledLeaveTimerRef.current = setTimeout(() => setScrolledServicesOpen(false), 180);
  };

  const renderMegaMenu = () => {
    const isOpen = servicesOpen || scrolledServicesOpen;
    return (
      <div
        onMouseEnter={() => {
          clearTimeout(leaveTimerRef.current);
          clearTimeout(scrolledLeaveTimerRef.current);
        }}
        onMouseLeave={() => {
          leaveTimerRef.current = setTimeout(() => setServicesOpen(false), 180);
          scrolledLeaveTimerRef.current = setTimeout(() => setScrolledServicesOpen(false), 180);
        }}
        style={{
          position: "fixed",
          top: "90px",
          left: 0,
          width: "100vw",
          background: "#ffffff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          padding: "40px 0 50px 0",
          zIndex: 99998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          borderTop: "1px solid #f1f0f7",
          boxSizing: "border-box"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", marginBottom: "18px" }}>
            Our Services
          </h3>
          <div style={{ width: "100%", height: "1px", background: "#f1f0f7", marginBottom: "32px" }}></div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", rowGap: "28px", columnGap: "30px" }}>
            {serviceLinks.map((s, i) => (
              <Link
                key={i}
                to={s.path}
                onClick={() => { setServicesOpen(false); setScrolledServicesOpen(false); window.scrollTo(0, 0); }}
                style={{ textDecoration: "none" }}
                className="flex items-center gap-3 group"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: 'var(--accent-orange)' }}></span>
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-[15px] font-medium transition-colors duration-300 group-hover:text-[var(--accent-orange)]" style={{ color: '#374151' }}>
                    {s.label}
                  </span>
                  <span style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    height: "1.5px",
                    width: "0%",
                    background: "var(--accent-orange)",
                    borderRadius: "2px",
                    transition: "width 0.3s ease",
                  }} className="group-hover:!w-full" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes darkSlideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes barSlideIn {
          from { transform: translateX(-60px); opacity: 0; width: 0%; }
          to   { transform: translateX(0);     opacity: 1; width: calc(100% - 262px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-menu-item { opacity: 0; }
        .nav-menu-item.visible { animation: fadeUp 0.4s ease forwards; }
        .nav-icons { opacity: 0; }
        .nav-icons.visible { animation: fadeUp 0.4s ease 0.3s forwards; }
        .nav-logo-text { opacity: 0; }
        .nav-logo-text.visible { animation: fadeUp 0.4s ease 0.2s forwards; }
        .nav-logo-img { opacity: 0; }
        .nav-logo-img.visible { animation: fadeUp 0.4s ease 0.1s forwards; }
        .search-input-field::placeholder { color: #4b5563; font-weight: 400; }
        .mega-menu-link {
          position: relative; color: #374151; font-weight: 600; font-size: 16px;
          transition: color 0.3s; display: inline-block; padding: 8px 0;
        }
        .mega-menu-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0%;
          height: 2px; background-color: #ff6b35; transition: width 0.3s ease;
        }
        .mega-menu-link:hover { color: #ff6b35; }
        .mega-menu-link:hover::after { width: 100%; }
      `}</style>

      {/* ── Search Popup Overlay ── */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
          background: "rgba(0,0,0,0.6)", zIndex: 100000,
          opacity: isSearchOpen ? 1 : 0,
          pointerEvents: isSearchOpen ? "auto" : "none",
          transition: "opacity 0.6s ease",
        }}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%", height: "45vh", minHeight: "350px", background: "#ffffff",
            transform: isSearchOpen ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
            display: "flex", flexDirection: "column", alignItems: "center",
            position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ width: "100%", padding: "30px 50px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "45px", height: "45px", background: "#ff6b35", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px" }}>
                <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
              <span style={{ fontSize: "24px", fontWeight: "800", color: "#111827", fontFamily: "'Segoe UI', sans-serif" }}>ADS SERV</span>
            </div>
            <X size={36} color="#374151" style={{ cursor: "pointer", transition: "transform 0.3s ease, color 0.3s ease" }}
              onClick={() => setIsSearchOpen(false)}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(90deg) scale(1.1)"; e.currentTarget.style.color = "#ff6b35"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1)"; e.currentTarget.style.color = "#374151"; }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "0 20px", marginTop: "-40px" }}>
            <div style={{ width: "100%", maxWidth: "900px", position: "relative" }}>
              <input type="text" className="search-input-field" placeholder="Type Words Then Enter"
                style={{ width: "100%", border: "none", borderBottom: "1px solid #d1d5db", fontSize: "40px", color: "#111827", padding: "15px 60px 15px 0", outline: "none", background: "transparent", fontFamily: "'Segoe UI', sans-serif", transition: "border-color 0.3s" }}
                onFocus={(e) => e.target.style.borderBottom = "1px solid #ff6b35"}
                onBlur={(e) => e.target.style.borderBottom = "1px solid #d1d5db"}
              />
              <Search size={32} color="#ff6b35" style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scrolled Full-Width Navbar ── */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "90px",
          background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 40px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transform: isScrolled ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)", boxSizing: "border-box"
        }}
      >
        {/* Scrolled Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
          <img src={logo} alt="Logo" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
          <span style={{ fontSize: "24px", fontWeight: "900", letterSpacing: "1px", background: "linear-gradient(90deg, #7c3aed, #ff6b35)", WebkitBackgroundClip: "text", color: "transparent", fontFamily: "'Segoe UI', sans-serif" }}>
            ADS SERV
          </span>
        </div>

        {/* Scrolled Menu Items */}
        <ul style={{ display: "flex", alignItems: "center", gap: "38px", listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map((item, index) => {
            const active = isActive(item);
            return (
              <li key={index}
                ref={item === "SERVICES" ? scrolledServicesRef : null}
                onMouseEnter={item === "SERVICES" ? handleScrolledServicesEnter : undefined}
                onMouseLeave={item === "SERVICES" ? handleScrolledServicesLeave : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  fontSize: "15px", fontWeight: active ? "700" : "600",
                  color: active ? "#7c3aed" : "#374151",
                  cursor: "pointer", position: "relative", paddingBottom: "6px",
                  transition: "color 0.3s ease"
                }}
              >
                {item === "HOME" ? (
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "ABOUT" ? (
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "SERVICES" ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", userSelect: "none" }}>
                    {item}
                    <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: scrolledServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </span>
                ) : item === "PROJECTS" ? (
                  <Link to="/projects" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "BLOG" ? (
                  <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "FAQ" ? (
                  <Link to="/faq" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "CONTACT" ? (
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : (
                  <>{item}</>
                )}
                {active && (
                  <span style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "#7c3aed", borderRadius: "10px" }} />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Area: CTA */}
        <div style={{ display: "flex", alignItems: "center", borderLeft: "1px solid #d1d5db", paddingLeft: "24px" }}>
          <Link to="/contact" style={{ background: "#111827", color: "#ffffff", padding: "10px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none", transition: "background 0.3s ease" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#ff6b35"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#111827"}
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* ── Fixed Header (top of page) ── */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "90px",
          background: "transparent", zIndex: 9999, display: "flex", alignItems: "center",
        }}
      >
        {/* ── Dark Logo Section ── */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, height: "100%", width: "320px",
            background: "#070716", clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)",
            display: "flex", alignItems: "center", paddingLeft: "28px", zIndex: 10001,
            boxSizing: "border-box",
            animation: darkReady ? "darkSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards" : "none",
            opacity: darkReady ? undefined : 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", cursor: "pointer" }}>
            <div className={`nav-logo-img${darkReady ? " visible" : ""}`}
              style={{ width: "62px", height: "62px", borderRadius: "10px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "4px", boxSizing: "border-box" }}>
              <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <span className={`nav-logo-text${darkReady ? " visible" : ""}`}
              style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", letterSpacing: "1px", whiteSpace: "nowrap", fontFamily: "'Segoe UI', sans-serif" }}>
              ADS SERV
            </span>
          </div>
        </div>

        {/* ── White Navbar Bar ── */}
        <div
          style={{
            position: "absolute", top: "12px", left: "250px", right: "12px", height: "66px",
            background: "#ffffff", borderRadius: "50px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 32px 0 70px", boxSizing: "border-box", zIndex: 10000,
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            animation: barReady ? "barSlideIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards" : "none",
            opacity: barReady ? undefined : 0,
            overflow: "visible",
          }}
        >
          {/* Menu Items */}
          <ul style={{ display: "flex", alignItems: "center", gap: "38px", listStyle: "none", margin: 0, padding: 0 }}>
            {menuItems.map((item, index) => {
              const active = isActive(item);
              return (
                <li
                  key={index}
                  ref={item === "SERVICES" ? servicesRef : null}
                  className={`nav-menu-item${contentReady ? " visible" : ""}`}
                  onMouseEnter={item === "SERVICES" ? handleServicesEnter : undefined}
                  onMouseLeave={item === "SERVICES" ? handleServicesLeave : undefined}
                  style={{
                    animationDelay: contentReady ? `${index * 0.07}s` : "0s",
                    display: "flex", alignItems: "center", gap: "4px",
                    fontSize: "15px", fontWeight: active ? "700" : "500",
                    color: active ? "#7c3aed" : "#374151",
                    cursor: "pointer", position: "relative", paddingBottom: "6px",
                  }}
                >
                  {item === "HOME" ? (
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "ABOUT" ? (
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "SERVICES" ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", userSelect: "none" }}>
                      {item}
                      <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </span>
                  ) : item === "PROJECTS" ? (
                    <Link to="/projects" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "BLOG" ? (
                    <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "FAQ" ? (
                    <Link to="/faq" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "CONTACT" ? (
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : (
                    <>{item}</>
                  )}
                  {active && (
                    <span style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "#7c3aed", borderRadius: "10px" }} />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Area: CTA */}
          <div className={`nav-icons${contentReady ? " visible" : ""}`}
            style={{ display: "flex", alignItems: "center", borderLeft: "1px solid #d1d5db", paddingLeft: "24px" }}>
            <Link to="/contact"
              style={{ background: "#111827", color: "#ffffff", padding: "10px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#ff6b35"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#111827"}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </header>

      {/* ── True Full-Width Mega Menu ── */}
      {renderMegaMenu()}
    </>
  );
};

export default Navbar;