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

const PlatformSection = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#B57984] text-[11px] sm:text-xs md:text-sm tracking-[4px] uppercase font-semibold mb-4">
            The Platform
          </p>

 <h2 className="leading-tight mb-5 flex flex-wrap items-end justify-center gap-x-1 gap-y-2 text-center">
  <span
    style={{
      color: "#B57984", // keep existing color
      fontSize: "clamp(48px, 13vw, 104px)",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1,
    }}
  >
    eden
  </span>

  <span
    style={{
      color: "#00285C", // keep existing color
      fontSize: "clamp(48px, 13vw, 104px)",
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1,
    }}
  >
    hire
  </span>

  <span
    style={{
      color: "#00285C", // keep existing color
      fontSize: "clamp(24px, 6vw, 46px)",
      fontWeight: 500,
      marginBottom: "0.12em",
      lineHeight: 1,
    }}
  >
    .ai
  </span>

  <span
    style={{
      color: "#00285C",
      display: "block",
      flexBasis: "100%",
      color: "#00285C",
      fontSize: "clamp(20px, 5vw, 32px)",
      fontWeight: 400,
      marginLeft: 0,
    }}
  >
    — Eight Intelligences.
  </span>
</h2>

          <p className="text-[#7C8796] text-sm sm:text-base md:text-sm leading-7 max-w-5xl mx-auto">
            Not a software product that sits alongside our consulting work —
            it is the technological spine of our entire operation.
            <br className="hidden md:block" />
            Built at the intersection of HR domain expertise and frontier AI
            engineering.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {platformCards.map((item, index) => {
            const Icon = item.icon;

            return (
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
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  bg-[#FFF7F0]
                  border border-[#E9DFD6]
                  rounded-2xl
                  p-5 sm:p-6
                  min-h-[220px]
                  shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_18px_40px_rgba(0,43,91,0.10)]
                  hover:border-[#D8C0B6]
                  transition-all
                  duration-300
                "
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm mb-5">
                  <Icon size={20} color="#B57984" />
                </div>

                <p className="text-[#86B368] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-2 leading-relaxed">
                  {item.label}
                </p>

                <h3 className="text-[#00285C] text-base sm:text-lg font-bold leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-[#7C8796] text-sm sm:text-[15px] leading-7">
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
