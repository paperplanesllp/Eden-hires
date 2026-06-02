import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Talent Acquisition & Recruitment Architecture",
    description:
      "Strategic talent thesis to offer management. Multi-channel proactive sourcing, structured interview frameworks, competency-based evaluation, and onboarding programmes designed to accelerate time-to-productivity.",
  },
  {
    number: "02",
    title: "Payroll Architecture & Compensation Management",
    description:
      "End-to-end payroll design, multi-jurisdiction compliance, compensation benchmarking, review cycle management, and equity plan design — options to RSUs to performance shares.",
  },
  {
    number: "03",
    title: "HR Compliance & Regulatory Risk Management",
    description:
      "Comprehensive HR Compliance Audit across all relevant jurisdictions, prioritised remediation roadmaps, continuous regulatory monitoring, and employment classification risk analysis.",
  },
  {
    number: "04",
    title: "Performance Management & Organisational Development",
    description:
      "OKR framework design, continuous feedback infrastructure, manager development programmes, and rigorous organisational design for startups scaling through each stage of growth.",
  },
  {
    number: "05",
    title: "Culture Design & Employee Engagement",
    description:
      "Honest culture diagnostics, values-to-behaviour translation, engagement monitoring, and evidence-based DEI strategies that address underlying systems — not just representation metrics.",
  },
  {
    number: "06",
    title: "Policy Development & HR Documentation",
    description:
      "Complete HR policy suites built from scratch — employment contracts, handbooks, disciplinary procedures, remote work frameworks, data privacy policies, equity documentation, and more.",
  },
  {
    number: "07",
    title: "Training, Development & Leadership Acceleration",
    description:
      "Evidence-based development programmes with special emphasis on first-time managers in startup environments — the most critical and most underserved leadership layer.",
  },
  {
    number: "08",
    title: "HR Strategy & Workforce Planning",
    description:
      "Strategic HR perspective historically reserved for large corporations. Workforce plans genuinely integrated with business strategy — unified frameworks where talent and business decisions are made together.",
  },
];

const ServicesSection = () => {
  return (
    <section
      style={{
        background: "#FFF7F0",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 90px",
          }}
        >
          <p
            style={{
              color: "#B57984",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Full Spectrum HR
          </p>

          <h2
            style={{
              color: "#00285C",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Eight pillars. One partner.
          </h2>

          <p
            style={{
              color: "#7C8796",
              fontSize: "32px",
              lineHeight: 1.6,
            }}
          >
            Comprehensive HR for startups — from foundational
            infrastructure to the most sophisticated strategic
            interventions.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
          }}
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              style={{
                background: "#F9F2EC",
                border: "1px solid #E7DCD2",
                borderRadius: "28px",
                padding: "34px",
                display: "flex",
                gap: "22px",
                minHeight: "210px",
                cursor: "pointer",
                transition: "all .3s ease",
              }}
            >
              <div
                style={{
                  color: "#E2CBC7",
                  fontSize: "48px",
                  fontWeight: 700,
                  minWidth: "60px",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>

              <div>
                <h3
                  style={{
                    color: "#00285C",
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#7C8796",
                    fontSize: "16px",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;