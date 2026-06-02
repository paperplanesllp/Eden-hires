import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const regions = [
  {
    title: "India",
    description:
      "Headquarters in Ernakulam, Kerala. Deep expertise in Indian labour codes and extensive startup networks across Bengaluru, Mumbai, Delhi-NCR, Hyderabad.",
  },
  {
    title: "Middle East",
    description:
      "Coverage across UAE, Saudi Arabia and Egypt. Expertise in labour-card, visa-sponsorship, end-of-service gratuity, and Emiratisation.",
  },
  {
    title: "United States",
    description:
      "Federal and state-level compliance across California, New York, Massachusetts, Texas and Florida.",
  },
  {
    title: "Europe",
    description:
      "UK, Germany, France, the Netherlands and Sweden. Particular depth in UK and Germany, with full GDPR compliance awareness.",
  },
];

const GlobalReachSection = () => {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "140px 0",
        overflow: "hidden",
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
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: "inline-flex",
              marginBottom: "28px",
            }}
          >
            <Globe size={42} color="#B57984" />
          </motion.div>

          <h2
            style={{
              color: "#00285C",
              fontSize: "50px",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            Four Regions. One Operating Reality.
          </h2>

          <p
            style={{
              color: "#7C8796",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            India · Middle East · United States · Europe
          </p>
        </motion.div>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px",
          }}
        >
          {regions.map((region, index) => (
            <motion.div
              key={region.title}
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
                scale: 1.02,
              }}
              style={{
                background: "#FFF7F0",
                border: "1px solid #E9DFD6",
                borderRadius: "28px",
                padding: "34px",
                minHeight: "240px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
              }}
            >
              <h3
                style={{
                  color: "#00285C",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "16px",
                  lineHeight: 1.4,
                }}
              >
                {region.title}
              </h3>

              <p
                style={{
                  color: "#7C8796",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {region.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;