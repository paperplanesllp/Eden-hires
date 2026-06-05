import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
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
        <div className="max-w-[1420px] mx-auto h-[78px] lg:h-[88px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "6px 12px",
                borderRadius: "4px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  lineHeight: 1,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  style={{
                    color: "#B57984",
                    fontSize: "clamp(26px,4vw,36px)",
                    fontWeight: 800,
                    letterSpacing: "-2px",
                  }}
                >
                  eden
                </span>

                <span
                  style={{
                    color: "#344054",
                    fontSize: "clamp(24px,4vw,34px)",
                    fontWeight: 400,
                    letterSpacing: "-1px",
                    marginTop: "3px",
                  }}
                >
                  hire.ai
                </span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
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
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
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
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("platform");
              }}
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
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("faq");
              }}
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
              className="flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#B57984",
                color: "#FFFFFF",
                width: "145px",
                height: "44px",
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
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
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
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
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
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("platform");
                }}
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
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("faq");
                }}
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