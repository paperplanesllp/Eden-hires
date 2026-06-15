import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/edenlogo.PNG";

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "platform", label: "Platform" },
  { id: "faq", label: "FAQ" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const pendingScrollRef = useRef(null);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return true;
    }

    return false;
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && pendingScrollRef.current) {
      window.requestAnimationFrame(() => {
        scrollToSection(pendingScrollRef.current);
        pendingScrollRef.current = null;
      });
    }
  }, [location.pathname, scrollToSection]);

  useEffect(() => {
    if (location.pathname === "/") {
      const sectionId = location.hash ? location.hash.slice(1) : "home";
      setActiveNav(sectionId || "home");
    } else {
      setActiveNav("home");
    }
  }, [location.pathname, location.hash]);

  const handleLogoClick = () => {
    setActiveNav("home");
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    setMobileOpen(false);

    if (location.pathname !== "/") {
      pendingScrollRef.current = sectionId;
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
        pendingScrollRef.current = null;
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 99999,
        backgroundColor: "#FFF7F0",
        backdropFilter: "blur(10px)",
      }}
    >
      <nav
        className="w-full"
        style={{
          fontFamily:
            "Inter, Manrope, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div className="w-full max-w-7xl mx-auto h-[78px] lg:h-[88px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center"
            style={{
              textDecoration: "none",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={logo}
              alt="Eden Hire AI logo"
              className="w-auto object-contain"
              style={{
                height: window.innerWidth < 640 ? "60px" : "220px",
              }}
            />
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="text-[16px] font-medium transition-colors duration-200"
                style={{
                  color: activeNav === item.id ? "#002B5B" : "#6B7280",
                  textDecoration: "none",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/hiring"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#B57984",
                color: "#FFFFFF",
                width: "100%",
                maxWidth: "145px",
                height: "44px",
                padding: "0 20px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(181,121,132,0.25)",
                cursor: "pointer",
              }}
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#00285C",
            }}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              background: "#FFF7F0",
              borderTop: "1px solid #EEE3DA",
              padding: "20px",
            }}
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    color: activeNav === item.id ? "#002B5B" : "#6B7280",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    background: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              ))}

              <Link
                to="/hiring"
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#6B7280",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#EEE3DA",
        }}
      />
    </header>
  );
};

export default Navbar;
