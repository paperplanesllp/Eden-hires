import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const regions = [
  {
    title: "India",
    description:
      "Headquarters in Ernakulam, Kerala. Deep expertise in Indian labour codes and extensive startup networks across Bengaluru, Mumbai, Delhi-NCR, and Hyderabad.",
  },
  {
    title: "Middle East",
    description:
      "Coverage across UAE, Saudi Arabia and Egypt. Expertise in labour-card, visa-sponsorship, end-of-service gratuity and Emiratisation.",
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
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-flex mb-5"
          >
            <div className="w-12 h-12 rounded-full bg-[#FFF7F0] border border-[#E9DFD6] flex items-center justify-center">
              <Globe size={22} color="#B57984" />
            </div>
          </motion.div>

          <h2 className="text-[#00285C] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] font-semibold leading-tight mb-3">
            Four Regions. One Operating Reality.
          </h2>

          <p className="text-[#7C8796] text-sm sm:text-base md:text-lg leading-7">
            India ✦ Middle East ✦ United States ✦ Europe 
          </p>
        </motion.div>

        {/* Region Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                bg-[#FFF7F0]
                border
                border-[#E9DFD6]
                rounded-2xl
                p-5
                sm:p-6
                min-h-[220px]
                shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_40px_rgba(0,43,91,0.08)]
                hover:border-[#D8C0B6]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <h3 className="text-[#00285C] text-lg sm:text-xl font-bold mb-3">
                {region.title}
              </h3>

              <p className="text-[#7C8796] text-sm sm:text-[15px] leading-7">
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