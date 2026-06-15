import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/edenlogo.PNG";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const sectionId = location.hash.slice(1);

    window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  }, [location.pathname, location.hash, scrollToSection]);

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
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
           <img
  src={logo}
  alt="Eden Hire AI logo"
  className="w-auto object-contain"
  style={{
    height: window.innerWidth < 640 ? "60px" : "220px",
  }}
/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/#about"
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#6B7280",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              About
            </Link>

            <Link
              to="/#services"
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#6B7280",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Services
            </Link>

            <Link
              to="/#platform"
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#6B7280",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Platform
            </Link>

            <Link
              to="/#faq"
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#6B7280",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              FAQ
            </Link>

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
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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
              <Link
                to="/#about"
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#6B7280",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                About
              </Link>

              <Link
                to="/#services"
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#6B7280",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Services
              </Link>

              <Link
                to="/#platform"
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#6B7280",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Platform
              </Link>

              <Link
                to="/#faq"
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#6B7280",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                FAQ
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
