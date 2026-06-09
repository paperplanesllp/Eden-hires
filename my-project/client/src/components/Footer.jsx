const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FFF7F0",
        borderTop: "4px solid #00285C",
        fontFamily: "Inter, sans-serif",
      }}
      className="py-8 md:py-10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Logo */}
            <img
              src="/edenlogo.PNG"
              alt="EdenHire AI"
              style={{
                height: "120px",
                width: "auto",
                maxWidth: "300px",
                objectFit: "contain",
                display: "block",
                marginBottom: "25px",
              }}
            />

            {/* Description */}
            <p
              style={{
                color: "#667085",
                fontWeight: 400,
                lineHeight: "1.8",
              }}
              className="text-[14px] md:text-[15px] mb-5 max-w-lg"
            >
              A next-generation, AI-powered human resources consulting
              firm built for high-growth startups.
            </p>

            {/* Address */}
            <p
              style={{
                color: "#667085",
                fontWeight: 400,
                lineHeight: "1.8",
              }}
              className="text-[13px] md:text-[15px]"
            >
              Door No. 38/2008, Seashore Arcade,
              <br className="hidden sm:block" />
              Ernakulam, Kerala, India
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-14">
            {/* Contact */}
            <div>
              <h4
                style={{
                  color: "#00285C",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                }}
                className="text-[12px] md:text-[13px] mb-4"
              >
                CONTACT
              </h4>

              <a
                href="mailto:contact@edenhire.ai"
                style={{
                  color: "#667085",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                className="block text-[14px] md:text-[15px] mb-2 transition-all duration-300 hover:opacity-70"
              >
                contact@edenhire.ai
              </a>

              <a
                href="https://edenhire.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#667085",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                className="block text-[14px] md:text-[15px] transition-all duration-300 hover:opacity-70"
              >
                edenhire.ai
              </a>
            </div>

            {/* Regions */}
            <div>
              <h4
                style={{
                  color: "#00285C",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                }}
                className="text-[12px] md:text-[13px] mb-4"
              >
                REGIONS
              </h4>

              <p
                style={{
                  color: "#667085",
                  fontWeight: 400,
                }}
                className="text-[14px] md:text-[15px] mb-2"
              >
                India · Middle East
              </p>

              <p
                style={{
                  color: "#667085",
                  fontWeight: 400,
                }}
                className="text-[14px] md:text-[15px] mb-2"
              >
                United States · Europe
              </p>

              <p
                style={{
                  color: "#667085",
                  fontWeight: 400,
                }}
                className="text-[14px] md:text-[15px]"
              >
                Global Remote
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            backgroundColor: "#E7DED5",
          }}
          className="h-px my-6 md:my-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-3 text-center md:text-left">
          <p
            style={{
              color: "#98A2B3",
              fontWeight: 400,
            }}
            className="text-[12px] md:text-[13px]"
          >
            © 2024 EdenHire. All rights reserved.
          </p>

          <p
            style={{
              color: "#98A2B3",
              fontWeight: 300,
            }}
            className="text-[12px] md:text-[13px] md:text-right max-w-2xl"
          >
            HREC & Intelligent Sourcing · Proprietary 90-Day
            Scale-Safe Startup People Architecture System™
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;