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
      className="px-5 md:px-8 lg:px-10"
      style={{
        background:
          "radial-gradient(circle at left center, #0B3658 0%, #002B57 35%, #00234A 100%)",
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#D18C95",
              letterSpacing: "3px",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            About EdenHire
          </p>

         <h2 className="text-center text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-medium text-white leading-tight"
        style={{
         fontFamily: "Inter, sans-serif",
           }}
          >
         Founded to end a broken pattern.
       </h2>

          <p
            style={{
              color: "#AEB7C4",
              fontSize: "clamp(1rem,2vw,1.15rem)",
              lineHeight: "1.8",
              maxWidth: "760px",
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

        {/* Mission & Vision */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 md:mt-16">
          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "22px",
              padding: "30px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(209,140,149,0.15)",
                border: "1px solid rgba(209,140,149,0.2)",
                color: "#D18C95",
                fontSize: "12px",
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
                fontSize: "22px",
                fontWeight: 700,
                marginTop: "22px",
                marginBottom: "18px",
              }}
            >
              Our Mission
            </h3>

            <p
              style={{
                color: "#C7D0DB",
                fontSize: "16px",
                lineHeight: "1.85",
              }}
            >
              To empower startup founders to build exceptional
              organisations by delivering intelligent, end-to-end
              human resources solutions — enabling them to focus
              entirely on innovation, growth, and impact, knowing
              that the people infrastructure of their company is
              in expert hands.
            </p>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "22px",
              padding: "30px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(134,179,104,0.15)",
                border: "1px solid rgba(134,179,104,0.2)",
                color: "#86B368",
                fontSize: "12px",
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
                fontSize: "22px",
                fontWeight: 700,
                marginTop: "22px",
                marginBottom: "18px",
              }}
            >
              Our Vision
            </h3>

            <p
              style={{
                color: "#C7D0DB",
                fontSize: "16px",
                lineHeight: "1.85",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-14">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                borderColor: "#D18C95",
                scale: 1.02,
              }}
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "18px",
                padding: "24px 18px",
                textAlign: "center",
                cursor: "pointer",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  color: "#D18C95",
                  fontSize: "32px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {item.number}
              </div>

              <p
                style={{
                  color: "#D5DEE8",
                  fontSize: "15px",
                  lineHeight: "1.7",
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