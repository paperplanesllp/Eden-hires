const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FFF7F0",
        paddingTop: "70px",
        paddingBottom: "50px",
        borderTop: "4px solid #00285C",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div style={{ maxWidth: "550px" }}>
            <h2
              style={{
                fontSize: "52px",
                fontWeight: 700,
                marginBottom: "18px",
                lineHeight: 1,
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span style={{ color: "#B57984" }}>eden</span>
              <span style={{ color: "#344054" }}>hire</span>
              <span
                style={{
                  color: "#667085",
                  fontSize: "24px",
                  verticalAlign: "top",
                }}
              >
                .ai
              </span>
            </h2>

            <p
              style={{
                color: "#7C8796",
                fontSize: "18px",
                lineHeight: "1.7",
                marginBottom: "18px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              A next-generation, AI-powered human resources
              consulting firm — built for high-growth startups.
            </p>

            <p
              style={{
                color: "#7C8796",
                fontSize: "18px",
                lineHeight: "1.7",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Door No. 38/2008, Seashore Arcade,
              Ernakulam, Kerala, India
            </p>
          </div>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              gap: "120px",
              flexWrap: "wrap",
            }}
          >
            {/* Contact */}
            <div>
              <h4
                style={{
                  color: "#00285C",
                  fontSize: "22px",
                  fontWeight: 600,
                  marginBottom: "22px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                CONTACT
              </h4>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "18px",
                  marginBottom: "12px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                contact@edenhire.ai
              </p>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                edenhire.ai
              </p>
            </div>

            {/* Regions */}
            <div>
              <h4
                style={{
                  color: "#00285C",
                  fontSize: "22px",
                  fontWeight: 600,
                  marginBottom: "22px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                REGIONS
              </h4>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "18px",
                  marginBottom: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                India · Middle East
              </p>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "18px",
                  marginBottom: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                United States · Europe
              </p>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Global Remote
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "#E5DDD5",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        />

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "#7C8796",
              fontSize: "17px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            © 2024 EdenHire. All rights reserved.
          </p>

          <p
            style={{
              color: "#7C8796",
              fontSize: "17px",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
            }}
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