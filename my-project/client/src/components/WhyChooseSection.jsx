import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Discovery & Immersion",
    description:
      "Structured conversations with founders and leaders — surfacing not just formal HR requirements but the lived experience of working within the organisation.",
  },
  {
    number: "02",
    title: "HR Audit & Diagnostic",
    description:
      "A systematic, structured assessment against a comprehensive framework of best practices and legal requirements. Frank, specific, and actionable.",
  },
  {
    number: "03",
    title: "Custom Roadmap",
    description:
      "Audit findings translated into a prioritised programme of work across three horizons: immediate (0–90 days), medium-term, and strategic.",
  },
  {
    number: "04",
    title: "Execution & Partnership",
    description:
      "We execute the work ourselves. Rigorous project management ensures clients always know exactly where the work stands.",
  },
];

const WhyChooseSection = () => {
  return (
    <section
      style={{
        background: "#FFF7F0",
        padding: "140px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: "90px",
          }}
        >
          <p
            style={{
              color: "#B57984",
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 500,
            }}
          >
            HOW WE WORK
          </p>

          <h2
            style={{
              color: "#00285C",
              fontSize: "56px",
              fontWeight: 500,
              lineHeight: 1.1,
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Four Steps. One Long Partnership.
          </h2>
        </motion.div>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px",
          }}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
              }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E9DFD6",
                borderRadius: "28px",
                padding: "36px",
                minHeight: "430px",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "56px",
                    fontWeight: 700,
                    color: "#F0E3DB",
                    lineHeight: 1,
                    marginBottom: "28px",
                  }}
                >
                  {item.number}
                </span>
              </motion.div>

              <h3
                style={{
                  color: "#00285C",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: 1.45,
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;