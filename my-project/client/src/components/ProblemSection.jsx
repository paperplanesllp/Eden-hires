import { motion } from "framer-motion";

const cards = [
  {
    title: "Top 3",
    text: "Cause of startup failure — people problems",
  },
  {
    title: "0%",
    text: "Of early-stage startups have any formal HR function",
  },
  {
    title: "63%",
    text: "Reduction in time-to-shortlist via AI Talent Mapping",
  },
  {
    title: "90 Days",
    text: "Early attrition signals identified before exit",
  },
];

const ProblemSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#FFF7F0",
        paddingTop: "100px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                color: "#B57984",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "22px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              The Problem
            </p>

            <motion.h2
              style={{
                color: "#00285C",
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: "0.95",
                letterSpacing: "-2px",
                marginBottom: "35px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <motion.span
                style={{ display: "block" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Built for enterprise.
              </motion.span>

              <motion.span
                style={{ display: "block" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
              >
                Broken for startups.
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                color: "#7C8796",
                fontSize: "17px",
                lineHeight: "1.9",
                marginBottom: "26px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              People-related problems — poor hiring, cultural dysfunction,
              compliance failures, and the departure of key talent —
              consistently rank among the{" "}
              <span
                style={{
                  color: "#00285C",
                  fontWeight: 700,
                }}
              >
                top three causes of startup failure.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
              style={{
                color: "#7C8796",
                fontSize: "17px",
                lineHeight: "1.9",
                marginBottom: "26px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Traditional HR consulting firms were built for enterprise
              clients. Their methodologies are too slow, their frameworks
              too rigid, and their pricing entirely incompatible with
              startup economics.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                color: "#7C8796",
                fontSize: "17px",
                lineHeight: "1.9",
                fontFamily: "Inter, sans-serif",
              }}
            >
              EdenHire occupies the space neither can fill — a full-spectrum
              HR partner combining enterprise-grade rigour with startup-native
              speed, backed by an AI platform that multiplies effectiveness.
            </motion.p>
          </motion.div>

          {/* Right Side */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.08)",
                }}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E0D9",
                  borderRadius: "24px",
                  minHeight: "190px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "28px",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    color: "#B57984",
                    fontSize:
                      card.title === "Top 3"
                        ? "48px"
                        : card.title === "90 Days"
                        ? "44px"
                        : "46px",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "14px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    color: "#7C8796",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    textAlign: "center",
                    maxWidth: "220px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;