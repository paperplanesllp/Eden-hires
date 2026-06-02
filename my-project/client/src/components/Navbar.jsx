import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99999,
        backgroundColor: "#FFF7F0",
      }}
    >
      <nav
        className="w-full"
        style={{
          fontFamily:
            "Inter, Manrope, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div className="max-w-[1420px] mx-auto h-[80px] px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "8px 12px",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1,
                }}
              >
                {/* EDEN */}
                <span
                  style={{
                    color: "#B57984",
                    fontSize: "36px",
                    fontWeight: 800,
                    letterSpacing: "-1px",
                  }}
                >
                  eden
                </span>
                

                {/* HIRE */}
                <span
                  style={{
                    color: "#344054",
                    fontSize: "30px",
                    fontWeight: 500,
                    marginTop: "8px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  hire.ai
                </span>

               
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-12">
            <Link
              to="/about"
              style={{
                color: "#6B7280",
                fontSize: "17px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              About
            </Link>

            <Link
              to="/services"
              style={{
                color: "#6B7280",
                fontSize: "17px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Services
            </Link>

            <Link
              to="/platform"
              style={{
                color: "#6B7280",
                fontSize: "17px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Platform
            </Link>

            <Link
              to="/faq"
              style={{
                color: "#6B7280",
                fontSize: "17px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              FAQ
            </Link>

            <Link
              to="/get-started"
              className="flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#B57984",
                color: "#FFFFFF",
                width: "138px",
                height: "44px",
                borderRadius: "999px",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(181,121,132,0.25)",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Divider */}
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