import { motion } from "framer-motion";

const principles = [
  {
    number: "I",
    text: "People are the only truly irreplaceable asset.",
  },
  {
    number: "II",
    text: "World-class HR should not be a privilege of size.",
  },
  {
    number: "III",
    text: "Speed and rigour are not opposites.",
  },
  {
    number: "IV",
    text: "Every organisation is singular — no templates.",
  },
  {
    number: "V",
    text: "The relationship matters as much as the work.",
  },
];

const AboutSection = () => {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at left center, #0B3658 0%, #002B57 35%, #00234A 100%)",
        paddingTop: "110px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#D18C95",
              letterSpacing: "3px",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            About EdenHire
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "1.1",
              marginBottom: "24px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Founded to end a broken pattern.
          </h2>

          <p
            style={{
              color: "#AEB7C4",
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
              fontFamily: "Inter, sans-serif",
            }}
          >
            EdenHire was founded in 2024 in Ernakulam, India —
            built from the ground up for startups, for their pace,
            their ambiguity, their culture, their constraints,
            and their ambition.
          </p>
        </motion.div>

        {/* Mission Vision */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "35px",
            marginTop: "80px",
          }}
        >
          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              padding: "38px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(209,140,149,0.15)",
                border: "1px solid rgba(209,140,149,0.2)",
                color: "#D18C95",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Operational Mission
            </div>

            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "30px",
                marginBottom: "24px",
              }}
            >
              Our Mission
            </h3>

            <p
              style={{
                color: "#C7D0DB",
                fontSize: "18px",
                lineHeight: "1.9",
              }}
            >
              To empower startup founders to build exceptional
              organisations by delivering intelligent, end-to-end
              human resources solutions — enabling them to focus
              entirely on innovation, growth, and impact,
              knowing that the people infrastructure of their
              company is in expert hands.
            </p>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              padding: "38px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(134,179,104,0.15)",
                border: "1px solid rgba(134,179,104,0.2)",
                color: "#86B368",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Strategic Vision
            </div>

            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "30px",
                marginBottom: "24px",
              }}
            >
              Our Vision
            </h3>

            <p
              style={{
                color: "#C7D0DB",
                fontSize: "18px",
                lineHeight: "1.9",
              }}
            >
              To become the definitive global HR partner for the
              startup ecosystem — the firm that the world's most
              ambitious founders instinctively turn to when they
              are ready to build the team that will make their
              vision real.
            </p>
          </motion.div>
        </div>

        {/* Principles */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "20px",
            marginTop: "70px",
          }}
        >
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                borderColor: "#D18C95",
              }}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "20px",
                padding: "32px 22px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  color: "#D18C95",
                  fontSize: "40px",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                {item.number}
              </div>

              <p
                style={{
                  color: "#D5DEE8",
                  fontSize: "17px",
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;