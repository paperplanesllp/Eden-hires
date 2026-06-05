import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Talent Acquisition & Recruitment Architecture",
    description:
      "Strategic talent thesis to offer management. Multi-channel sourcing, structured interviews, competency-based evaluation, and onboarding programs.",
  },
  {
    number: "02",
    title: "Payroll Architecture & Compensation Management",
    description:
      "End-to-end payroll design, compliance management, compensation benchmarking, review cycles, and equity plan structuring.",
  },
  {
    number: "03",
    title: "HR Compliance & Regulatory Risk Management",
    description:
      "HR audits, remediation planning, regulatory monitoring, and employment classification risk analysis.",
  },
  {
    number: "04",
    title: "Performance Management & Organisational Development",
    description:
      "OKR systems, feedback frameworks, manager development, and organisational design for scaling startups.",
  },
  {
    number: "05",
    title: "Culture Design & Employee Engagement",
    description:
      "Culture diagnostics, values implementation, engagement measurement, and sustainable DEI frameworks.",
  },
  {
    number: "06",
    title: "Policy Development & HR Documentation",
    description:
      "Employment contracts, handbooks, disciplinary procedures, remote work policies, and compliance documentation.",
  },
  {
    number: "07",
    title: "Training, Development & Leadership Acceleration",
    description:
      "Leadership programs focused on startup teams, first-time managers, and high-growth environments.",
  },
  {
    number: "08",
    title: "HR Strategy & Workforce Planning",
    description:
      "Strategic workforce planning aligned with business goals, growth stages, and long-term organisational success.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#FFF7F0] py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-20"
        >
          <p className="uppercase tracking-[4px] text-[#B57984] text-xs md:text-sm font-semibold mb-4">
            Full Spectrum HR
          </p>

          <h2 className="text-[#00285C] font-semibold leading-tight text-3xl md:text-5xl lg:text-6xl mb-5">
            Eight pillars. One partner.
          </h2>

          <p className="text-[#7C8796] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Comprehensive HR for startups — from foundational
            infrastructure to sophisticated strategic interventions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((item, index) => (
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
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group"
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(0,40,92,0.08)",
                  borderRadius: "22px",
                  padding: "24px",
                  height: "100%",
                  minHeight: "240px",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 10px 30px rgba(0,40,92,0.05)",
                  transition: "all .35s ease",
                }}
                className="group-hover:border-[#B57984]/30 group-hover:shadow-xl"
              >
                {/* Number */}
                <div
                  style={{
                    color: "#D9C2BD",
                    fontSize: "32px",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "18px",
                  }}
                >
                  {item.number}
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#00285C",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "#7C8796",
                    fontSize: "14px",
                    lineHeight: "1.8",
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