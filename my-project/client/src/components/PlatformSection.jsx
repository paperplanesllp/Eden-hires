import { motion } from "framer-motion";
import {
  Brain,
  Target,
  TrendingUp,
  Shield,
  BarChart3,
  FileText,
} from "lucide-react";

const platformCards = [
  {
    icon: Brain,
    label: "63% REDUCTION IN TIME-TO-SHORTLIST",
    title: "Intelligent Talent Mapping",
    description:
      "Builds comprehensive candidate profiles before a search begins.",
  },
  {
    icon: Target,
    label: "30/60/90-DAY SUCCESS DEFINITIONS",
    title: "AI-Powered Role Architecture",
    description:
      "Generates complete role specs with competency frameworks and compensation benchmarking.",
  },
  {
    icon: TrendingUp,
    label: "SCENARIO-BASED PLANNING",
    title: "Predictive Workforce Analytics",
    description:
      "Integrates business strategy, revenue models, and market data into dynamic workforce plans.",
  },
  {
    icon: Shield,
    label: "REAL-TIME REGULATORY MONITORING",
    title: "Compliance Intelligence Engine",
    description:
      "Tracks legislation, court decisions, and enforcement trends across all jurisdictions.",
  },
  {
    icon: BarChart3,
    label: "90 DAYS EARLY WARNING",
    title: "Attrition Prediction & Retention",
    description:
      "Identifies attrition signals before resignation and delivers corrective recommendations.",
  },
  {
    icon: FileText,
    label: "FULLY TAILORED DOCUMENTS",
    title: "AI-Assisted Policy Generation",
    description:
      "Generates complete, customised policy suites reviewed by HR and legal experts.",
  },
];



const sectionStyle = {
  backgroundColor: "#FFFFFF",
  padding: "120px 0",
};

const containerStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "0 32px",
};

/* Header */

const headerWrapperStyle = {
  maxWidth: "1200px",
  margin: "0 auto 90px",
  textAlign: "center",
};

const platformLabelStyle = {
  maxWidth: "300px",
  margin: "0 auto 24px",
  color: "#B57984",
  fontSize: "18px",
  letterSpacing: "5px",
  textTransform: "uppercase",
  fontWeight: 500,
};

const headingStyle = {
  maxWidth: "1000px",
  margin: "0 auto 32px",
  color: "#00285C",
  fontSize: "60px",
  fontWeight: 500,
  lineHeight: 1.1,
};

const descriptionStyle = {
  maxWidth: "950px",
  margin: "0 auto",
  color: "#7C8796",
  fontSize: "18px",
  lineHeight: 1.8,
};

/* Grid */

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "28px",
};

/* Card */

const cardStyle = {
  background: "#FFF7F0",
  border: "1px solid #E9DFD6",
  borderRadius: "28px",
  padding: "30px",
  minHeight: "280px",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
};

const iconWrapperStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "14px",
  background: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "26px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const cardLabelStyle = {
  color: "#8AA06B",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: "10px",
};

const cardTitleStyle = {
  color: "#00285C",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: 1.4,
  marginBottom: "14px",
};

const cardDescriptionStyle = {
  color: "#7C8796",
  fontSize: "16px",
  lineHeight: 1.8,
  margin: 0,
};

/* ===================================
   COMPONENT
=================================== */

const PlatformSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={headerWrapperStyle}
        >
          <p style={platformLabelStyle}>
            THE PLATFORM
          </p>

          <h2 style={headingStyle}>
            edenhire.ai — Eight Intelligences.
          </h2>

          <p style={descriptionStyle}>
            Not a software product that sits alongside our consulting work —
            it is the technological spine of our entire operation.
            <br />
            Built at the intersection of HR domain expertise and frontier AI
            engineering.
          </p>
        </motion.div>

        {/* Cards */}

        <div style={gridStyle}>
          {platformCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                style={cardStyle}
              >
                <div style={iconWrapperStyle}>
                  <Icon size={24} color="#B57984" />
                </div>

                <p style={cardLabelStyle}>
                  {item.label}
                </p>

                <h3 style={cardTitleStyle}>
                  {item.title}
                </h3>

                <p style={cardDescriptionStyle}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;